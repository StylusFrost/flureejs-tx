/* tslint:disable no-invalid-this */
import * as assert from 'assert'
import Transaction from '../src'
import { TxsJsonEntry } from './types'
import { zeros, privateToPublic, toBuffer } from 'flureejs-utils'
const txFixtures: TxsJsonEntry[] = require('./txs.json')
describe('[Transaction]: Basic functions', function() {
  const txs: Transaction[] = []
  it('should decode txs', function() {
    txFixtures.slice(0, 1).forEach(function(tx: any) {
      const pt = new Transaction(tx.raw)
      assert.equal('0x' + pt.type.toString('hex'), tx.raw[0])
      assert.equal('0x' + pt.db.toString('hex'), tx.raw[1])
      assert.equal('0x' + pt.tx.toString('hex'), tx.raw[2])
      assert.equal('0x' + pt.auth.toString('hex'), tx.raw[3])
      assert.equal('0x' + pt.fuel.toString('hex'), tx.raw[4])
      assert.equal('0x' + pt.nonce.toString('hex'), tx.raw[5])
      assert.equal('0x' + pt.expire.toString('hex'), tx.raw[6])
      assert.equal('0x' + pt.v.toString('hex'), tx.raw[7])
      assert.equal('0x' + pt.r.toString('hex'), tx.raw[8])
      assert.equal('0x' + pt.s.toString('hex'), tx.raw[9])
      txs.push(pt)
    })
  })

  it('should verify Signatures', function() {
    txs.forEach(function(tx) {
      assert.equal(tx.verifySignature(), true)
    })
  })

  it('should not verify Signatures', function() {
    txs.forEach(function(tx) {
      tx.s = zeros(32)
      assert.equal(tx.verifySignature(), false)
    })
  })

  it('should give a string about not verifing Signatures', function() {
    txs.forEach(function(tx) {
      assert.equal(tx.validate(true).slice(0, 17), 'Invalid Signature')
    })
  })

  it('should validate', function() {
    txs.forEach(function(tx) {
      assert.equal(tx.validate(), false)
    })
  })

  it('should sign tx', function() {
    txs.forEach(function(tx, i) {
      if (txFixtures[i].privateKey) {
        const privKey = new Buffer(txFixtures[i].privateKey, 'hex')
        tx.sign(privKey)
      }
    })
  })
  it("should get sender's AuthID after signing it", function() {
    txs.forEach(function(tx, i) {
      if (txFixtures[i].privateKey) {
        assert.equal(tx.getSenderAuthID(), txFixtures[i].sendersAuthID)
      }
    })
  })

  it("should get sender's public key after signing it", function() {
    txs.forEach(function(tx, i) {
      if (txFixtures[i].privateKey) {
        assert.equal(
          tx.getSenderPublicKey().toString('hex'),
          privateToPublic(new Buffer(txFixtures[i].privateKey, 'hex')).toString('hex'),
        )
      }
    })
  })

  it("should get sender's authID after signing it (second call should be cached)", function() {
    txs.forEach(function(tx, i) {
      if (txFixtures[i].privateKey) {
        assert.equal(tx.getSenderAuthID(), txFixtures[i].sendersAuthID)
        assert.equal(tx.getSenderAuthID(), txFixtures[i].sendersAuthID)
      }
    })
  })

  it('should verify signing it', function() {
    txs.forEach(function(tx, i) {
      if (txFixtures[i].privateKey) {
        assert.equal(tx.verifySignature(), true)
      }
    })
  })

  it('should accept lesser r values', function() {
    const tx = new Transaction()
    tx.r = toBuffer('0x0005')
    assert.equal(tx.r.toString('hex'), '05')
  })
})
