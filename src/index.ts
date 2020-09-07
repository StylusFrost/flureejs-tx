import {
  ecsign,
  publicToAuthID,
  ecrecover,
  toBuffer,
  defineProperties,
  bufferToInt,
  BN,
} from 'flureejs-utils'
import { TxData } from './types'

export const enum TxType {
  TX = 'tx',
}

export default class Transaction {
  public raw!: Buffer[]
  public type!: Buffer
  public db!: Buffer
  public tx!: Buffer
  public auth!: Buffer
  public fuel!: Buffer
  public nonce!: Buffer
  public expire!: Buffer
  public v!: Buffer
  public r!: Buffer
  public s!: Buffer

  protected _from?: Buffer
  private _senderPubKey?: Buffer

  /**
   * Creates a new transaction from an object with its fields' values.
   *
   * @param data - A tx can be initialized with object containing them by name.
   *
   * @example
   * ```js
   * const txData = {
   *   type: '0x7478',
   *   db: '0x61756469747a6f6e652d746573746e65742f7365616c6462',
   *   tx: '0x5b7b225f6964223a225f636f6c6c656374696f6e247365616c222c226e616d65223a227365616c222c22646f63223a224120636f6c6c656374696f6e20746f20686f6c642074686520696e666f726d6174696f6e206f6620746865207365616c73227d5d',
   *   auth: '0x5466386f764864676e445a58724d7a71454c706131787331636664684a696533507761',
   *   fuel: '0x31303030303030',
   *   nonce: '0x36',
   *   expire: '0x31353937393236363939373339',
   *   v: '0x1c',
   *   r: '0x5e1d3a76fbf824220eafc8c79ad578ad2b67d01b0c2425eb1f1347e8f50882ab',
   *   s: '0x5bd428537f05f9830e93792f90ea6a3e2d1ee84952dd96edbae9f658f831ab13'
   * };
   * const q = new Transaction(txData);
   * ```
   */

  constructor(data: TxData = {}) {
    // Define Properties
    const fields = [
      {
        name: 'type',
        allowZero: false,
        default: new Buffer([]),
      },
      {
        name: 'db',
        allowZero: false,
        default: new Buffer([]),
      },
      {
        name: 'tx',
        allowZero: false,
        default: new Buffer([]),
      },
      {
        name: 'auth',
        allowZero: false,
        default: new Buffer([]),
      },
      {
        name: 'fuel',
        length: 32,
        allowZero: false,
        allowLess: true,
        default: new Buffer([]),
      },
      {
        name: 'nonce',
        length: 32,
        allowZero: false,
        allowLess: true,
        default: new Buffer([]),
      },
      {
        name: 'expire',
        length: 32,
        allowZero: false,
        allowLess: true,
        default: new Buffer([]),
      },
      {
        name: 'v',
        allowZero: true,
        default: new Buffer([]),
      },
      {
        name: 'r',
        length: 32,
        allowZero: true,
        allowLess: true,
        default: new Buffer([]),
      },
      {
        name: 's',
        length: 32,
        allowZero: true,
        allowLess: true,
        default: new Buffer([]),
      },
    ]

    // attached serialize
    defineProperties(this, fields, data)

    /**
     * @property {Buffer} from (read only) sender address of this transaction, mathematically derived from other parameters.
     * @name from
     * @memberof Transaction
     */
    Object.defineProperty(this, 'from', {
      enumerable: true,
      configurable: true,
      get: this.getSenderAuthID.bind(this),
    })

    this._validateV(this.v)
    this._overrideVSetterWithValidation()
  }

  private _validateV(v?: Buffer): void {
    if (v === undefined || v.length === 0) {
      return
    }

    const vInt = bufferToInt(v)

    if (vInt === 27 || vInt === 28) {
      return
    }
  }

  private _overrideVSetterWithValidation() {
    const vDescriptor = Object.getOwnPropertyDescriptor(this, 'v')!

    Object.defineProperty(this, 'v', {
      ...vDescriptor,
      set: v => {
        if (v !== undefined) {
          this._validateV(toBuffer(v))
        }
        vDescriptor.set!(v)
      },
    })
  }

  /**
   * returns the sender's authID
   */
  getSenderAuthID(): Buffer {
    if (this._from) {
      return this._from
    }
    const pubkey = this.getSenderPublicKey()
    this._from = publicToAuthID(pubkey)
    return this._from
  }

  /**
   * returns the public key of the sender
   */
  getSenderPublicKey(): Buffer {
    if (!this.verifySignature()) {
      throw new Error('Invalid Signature')
    }

    // If the signature was verified successfully the _senderPubKey field is defined
    return this._senderPubKey!
  }

  /**
   * Determines if the signature is valid
   */
  verifySignature(): boolean {
    try {
      const v = bufferToInt(this.v)
      this._senderPubKey = ecrecover(this.cmd(), v, this.r, this.s)
    } catch (e) {
      return false
    }
    return !!this._senderPubKey
  }

  /**
   * Validates the signature and checks to see if it has enough gas.
   */
  validate(): boolean
  validate(stringError: false): boolean
  validate(stringError: true): string
  validate(stringError: boolean = false): boolean | string {
    const errors = []
    if (!this.verifySignature()) {
      errors.push('Invalid Signature')
    }

    if (stringError === false) {
      return errors.length === 0
    } else {
      return errors.join(' ')
    }
  }

  /**
   * sign a transaction with a given private key
   * @param privateKey
   */

  sign(privateKey: Buffer) {
    const sig = ecsign(this.cmd(), privateKey)
    Object.assign(this, sig)
  }
  public cmd(): Buffer {
    return Buffer.from(
      JSON.stringify({
        type: this.type.toString(),
        db: this.db.toString(),
        tx: JSON.parse(this.tx.toString()),
        auth: this.auth.toString(),
        fuel: new BN(this.fuel, 'hex').toNumber(),
        nonce: new BN(this.nonce, 'hex').toNumber(),
        expire: new BN(this.expire, 'hex').toNumber(),
      }),
    )
  }

  public signature(): Buffer {
    const newR = this.r[0] & 0x80 ? Buffer.concat([hexToUnit8Array('00'), this.r]) : this.r
    const newS = this.s[0] & 0x80 ? Buffer.concat([hexToUnit8Array('00'), this.s]) : this.s
    const result =
      '02' +
      newR.length.toString(16) +
      newR.toString('hex') +
      '02' +
      newS.length.toString(16) +
      newS.toString('hex')

    return Buffer.from(
      this.v.toString('hex') + '30' + Buffer.from(result, 'hex').length.toString(16) + result,
      'hex',
    )

    function hexToUnit8Array(str: string) {
      return new Uint8Array(Buffer.from(str, 'hex'))
    }
  }
}
