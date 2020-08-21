/**
 * Any object that can be transformed into a `Buffer`
 */
export interface TransformableToBuffer {
  toBuffer(): Buffer
}

/**
 * A hex string prefixed with `0x`.
 */
export type PrefixedHexString = string

/**
 * A Buffer, hex string prefixed with `0x`, Number, or an object with a toBuffer method such as BN.
 */
export type BufferLike = Buffer | TransformableToBuffer | PrefixedHexString | number

export interface TxData {
  /**
   * The transaction's type.
   */
  type?: BufferLike

  /**
   * The transaction's db to.
   */
  db?: BufferLike

  /**
   * The body of the transaction
   */
  tx?: BufferLike

  /**
   * Authid is signing
   */

  auth?: BufferLike

  /**
   * 	Max integer for the amount of fuel to use for this transaction
   */

  fuel?: BufferLike

  /**
   * 	Nonce, to ensure that the command map is unique.
   */
  nonce?: BufferLike

  /**
   * 	Epoch milliseconds after which point this transaction can no longer be submitted.
   */
  expire?: BufferLike

  /**
   * EC recovery ID.
   */
  v?: BufferLike

  /**
   * EC signature parameter.
   */
  r?: BufferLike

  /**
   * EC signature parameter.
   */
  s?: BufferLike
}
