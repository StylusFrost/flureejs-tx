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

_Defined in [index.ts:30](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L30)_

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

_Defined in [index.ts:29](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L29)_

---

<a id="_senderpubkey"></a>

### ` <Private>``<Optional> ` \_senderPubKey

**● \_senderPubKey**: _`Buffer`_

_Defined in [index.ts:30](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L30)_

---

<a id="auth"></a>

### auth

**● auth**: _`Buffer`_

_Defined in [index.ts:21](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L21)_

---

<a id="db"></a>

### db

**● db**: _`Buffer`_

_Defined in [index.ts:19](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L19)_

---

<a id="expire"></a>

### expire

**● expire**: _`Buffer`_

_Defined in [index.ts:24](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L24)_

---

<a id="fuel"></a>

### fuel

**● fuel**: _`Buffer`_

_Defined in [index.ts:22](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L22)_

---

<a id="nonce"></a>

### nonce

**● nonce**: _`Buffer`_

_Defined in [index.ts:23](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L23)_

---

<a id="r"></a>

### r

**● r**: _`Buffer`_

_Defined in [index.ts:26](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L26)_

---

<a id="raw"></a>

### raw

**● raw**: _`Buffer`[]_

_Defined in [index.ts:17](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L17)_

---

<a id="s"></a>

### s

**● s**: _`Buffer`_

_Defined in [index.ts:27](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L27)_

---

<a id="tx"></a>

### tx

**● tx**: _`Buffer`_

_Defined in [index.ts:20](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L20)_

---

<a id="type"></a>

### type

**● type**: _`Buffer`_

_Defined in [index.ts:18](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L18)_

---

<a id="v"></a>

### v

**● v**: _`Buffer`_

_Defined in [index.ts:25](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L25)_

---

## Methods

<a id="_overridevsetterwithvalidation"></a>

### `<Private>` \_overrideVSetterWithValidation

▸ **\_overrideVSetterWithValidation**(): `void`

_Defined in [index.ts:150](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L150)_

**Returns:** `void`

---

<a id="_validatev"></a>

### `<Private>` \_validateV

▸ **\_validateV**(v: _`Buffer`_): `void`

_Defined in [index.ts:138](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L138)_

**Parameters:**

| Name         | Type     |
| ------------ | -------- |
| `Optional` v | `Buffer` |

**Returns:** `void`

---

<a id="getsenderauthid"></a>

### getSenderAuthID

▸ **getSenderAuthID**(): `Buffer`

_Defined in [index.ts:167](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L167)_

**Returns:** `Buffer`

---

<a id="getsenderpublickey"></a>

### getSenderPublicKey

▸ **getSenderPublicKey**(): `Buffer`

_Defined in [index.ts:179](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L179)_

**Returns:** `Buffer`

---

<a id="sign"></a>

### sign

▸ **sign**(privateKey: _`Buffer`_): `void`

_Defined in [index.ts:235](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L235)_

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

_Defined in [index.ts:214](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L214)_

**Returns:** `boolean`

_Defined in [index.ts:215](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L215)_

**Parameters:**

| Name        | Type    |
| ----------- | ------- |
| stringError | `false` |

**Returns:** `boolean`

_Defined in [index.ts:216](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L216)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| stringError | `true` |

**Returns:** `string`

---

<a id="verifysignature"></a>

### verifySignature

▸ **verifySignature**(): `boolean`

_Defined in [index.ts:191](https://github.com/StylusFrost/flureejs-tx/blob/a5da95f/src/index.ts#L191)_

**Returns:** `boolean`

---
