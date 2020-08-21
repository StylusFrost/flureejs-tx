[flureejs-tx](../README.md) > [Transaction](../classes/transaction.md)

# Class: Transaction

## Hierarchy

**Transaction**

## Index

### Constructors

- [constructor](transaction.md#constructor)

### Properties

- [\_from](transaction.md#_from)
- [\_senderPubKey](transaction.md#_senderpubkey)
- [auth](transaction.md#auth)
- [db](transaction.md#db)
- [expire](transaction.md#expire)
- [fuel](transaction.md#fuel)
- [nonce](transaction.md#nonce)
- [r](transaction.md#r)
- [raw](transaction.md#raw)
- [s](transaction.md#s)
- [tx](transaction.md#tx)
- [type](transaction.md#type)
- [v](transaction.md#v)

### Methods

- [\_overrideVSetterWithValidation](transaction.md#_overridevsetterwithvalidation)
- [\_validateV](transaction.md#_validatev)
- [getSenderAuthID](transaction.md#getsenderauthid)
- [getSenderPublicKey](transaction.md#getsenderpublickey)
- [sign](transaction.md#sign)
- [validate](transaction.md#validate)
- [verifySignature](transaction.md#verifysignature)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new Transaction**(data?: _[TxData](../interfaces/txdata.md)_): [Transaction](transaction.md)

_Defined in index.ts:31_

**Parameters:**

| Name                 | Type                              | Default value | Description                                                  |
| -------------------- | --------------------------------- | ------------- | ------------------------------------------------------------ |
| `Default value` data | [TxData](../interfaces/txdata.md) | {}            | A tx can be initialized with object containing them by name. |

**Returns:** [Transaction](transaction.md)

---

## Properties

<a id="_from"></a>

### ` <Protected>``<Optional> ` \_from

**● \_from**: _`Buffer`_

_Defined in index.ts:30_

---

<a id="_senderpubkey"></a>

### ` <Private>``<Optional> ` \_senderPubKey

**● \_senderPubKey**: _`Buffer`_

_Defined in index.ts:31_

---

<a id="auth"></a>

### auth

**● auth**: _`Buffer`_

_Defined in index.ts:21_

---

<a id="db"></a>

### db

**● db**: _`Buffer`_

_Defined in index.ts:19_

---

<a id="expire"></a>

### expire

**● expire**: _`Buffer`_

_Defined in index.ts:24_

---

<a id="fuel"></a>

### fuel

**● fuel**: _`Buffer`_

_Defined in index.ts:22_

---

<a id="nonce"></a>

### nonce

**● nonce**: _`Buffer`_

_Defined in index.ts:23_

---

<a id="r"></a>

### r

**● r**: _`Buffer`_

_Defined in index.ts:26_

---

<a id="raw"></a>

### raw

**● raw**: _`Buffer`[]_

_Defined in index.ts:17_

---

<a id="s"></a>

### s

**● s**: _`Buffer`_

_Defined in index.ts:27_

---

<a id="tx"></a>

### tx

**● tx**: _`Buffer`_

_Defined in index.ts:20_

---

<a id="type"></a>

### type

**● type**: _`Buffer`_

_Defined in index.ts:18_

---

<a id="v"></a>

### v

**● v**: _`Buffer`_

_Defined in index.ts:25_

---

## Methods

<a id="_overridevsetterwithvalidation"></a>

### `<Private>` \_overrideVSetterWithValidation

▸ **\_overrideVSetterWithValidation**(): `void`

_Defined in index.ts:151_

**Returns:** `void`

---

<a id="_validatev"></a>

### `<Private>` \_validateV

▸ **\_validateV**(v: _`Buffer`_): `void`

_Defined in index.ts:139_

**Parameters:**

| Name         | Type     |
| ------------ | -------- |
| `Optional` v | `Buffer` |

**Returns:** `void`

---

<a id="getsenderauthid"></a>

### getSenderAuthID

▸ **getSenderAuthID**(): `Buffer`

_Defined in index.ts:168_

**Returns:** `Buffer`

---

<a id="getsenderpublickey"></a>

### getSenderPublicKey

▸ **getSenderPublicKey**(): `Buffer`

_Defined in index.ts:180_

**Returns:** `Buffer`

---

<a id="sign"></a>

### sign

▸ **sign**(privateKey: _`Buffer`_): `void`

_Defined in index.ts:237_

**Parameters:**

| Name       | Type     | Description |
| ---------- | -------- | ----------- |
| privateKey | `Buffer` |             |

**Returns:** `void`

---

<a id="validate"></a>

### validate

▸ **validate**(): `boolean`

▸ **validate**(stringError: _`false`_): `boolean`

▸ **validate**(stringError: _`true`_): `string`

_Defined in index.ts:216_

**Returns:** `boolean`

_Defined in index.ts:217_

**Parameters:**

| Name        | Type    |
| ----------- | ------- |
| stringError | `false` |

**Returns:** `boolean`

_Defined in index.ts:218_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| stringError | `true` |

**Returns:** `string`

---

<a id="verifysignature"></a>

### verifySignature

▸ **verifySignature**(): `boolean`

_Defined in index.ts:192_

**Returns:** `boolean`

---
