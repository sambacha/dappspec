---
title: Accretive Versioning
description: |
 Accretive Versioning: an Automated compatibility scheme for providing an Immutable Compatibility in Theory
author: Sam Bacha
---

# Accretive Versioning: an Automated compatibility scheme

>**Note**    
> Much of this inital ideas come from [Rich Hickey's talk, 'Spec-Ulation'](https://www.youtube.com/watch?v=oyLBGkS5ICk)     
> The slides are taken from his presentation 

---

slide title: "Semantic" Versioning
                  "Semantics"

+ 1.2.changed

  + "you don't care"

+ 1.changed.0

  + "you don't care"

+ changed.0.0

  + "you're screwed"

---

Precisely because SemVer is a sociological and not only a technical contract, the problem is tractable: We define a breaking change as above, and accept the reality that some changes are not preventable (but may in many cases be mitigated or fixed automatically). This is admittedly unsatisfying, but we believe it satisfies our constraints.

We see two orthogonal problems when importing an external module:

- Availability: Will A be available at the host site?
- Compatibility: Will the version of A available at the host be compatible with P?


```
slide title: Recognizing Collections

+ You only 'change' a collection by adding/
  removing members

+ Adding = growth, removing = breakage

+ Namespaces - collections of vars/fns

+ Artifacts - collections of namespaces/packages

+ Don't conflate levels!

  + My family doesn't change when I put on a hat
```

```
slide title: Breaking Changes are
                  _Broken_

+ Full stop

+ Don't do it

+ Don't try to figure out the best way to do it

+ Avoid _breakage_ by turning it into _accretion_

  + old and new can co-exist
```


## Motivation

This specification aims to provide a versioning format such that in this context it is a `providing` format/context vs. a r`equiring` format/context.

This specification solves the problem that you do not know you have.  And that problem is the intense anxiety and pressure you feel when dealing with mutability on an ongoing basis.[^1]

[^1]:https://github.com/jafingerhut/jafingerhut.github.com/blob/bac71ac5a1356334bd11b9d17866731310e1ccf6/transcripts/2016-dec-rich-hickey-spec-ulation.txt#L1221-#L1224

## ABI

> a generated contract ABI interface; as described in the ABI generated artifact; is called an ABI definition. Each ABI definition has an associated ABI identifier; e.g. constant, inputs, outputs, stateMutability, payable, type, name (which may be implicit in the case of Contract).

| Specification Key 	| Key Description 	|
|---	|---	|
| Revision 	| Let x be a module definition and X be its associated module identifier. We call x a revision of X. 	|
| Module 	| The module named X is defined as the set of all revisions of X. More formally; let x be a revision of X; y be a revision of Y; and call x and y related iff X=Y. We then call the equivalence classes of this relation module and their associated identifiers - unique within the class - the modules' names. 	|
| Interface 	| The set of entities (functions; classes; instances; etc.) exported from a module is called its interface. 	|
| Compatibility 	| Two revisions are called (mutually) compatible; if their interfaces are equal and all exported entities have the same semantics. 	|
| Version 	| The equivalence classes of the compatibility relation; restricted to a single module X; are called versions of X. 	|


### ABI Interface

Now, say you are implementing ABI interface A. To fully conform to the protocol concerning A, simply ensure the following invariants.

<pre>
Let all versions of A be numbered from 1 to n.

For each i=1,...,n there exists a module A_i whose only version is equal to version i of A.
Version n contains the latest revision of A.
Module A is deprecated using a DEPRECATED natspec, with a message that A_n should be imported instead.
</pre>

Example:
```solidity
/// @custom:deprecated
```
</pre>

## Accreting collection of Immutable Things

> Use Lamport-like logic to know what they could not have seen


Accretive versioning is based on matching type signatures against a generated ABI V2. 


> Imagine a package manager that ran the test suite of the version you're currently using against the code of the version you'd like to upgrade to, and told you exactly what wasn't going to work.


### Specification

Contract Interface names MUST NOT use the following [Unicode] characters:

<pre>
SOLIDUS: / (U+002F)

QUOTATION MARK: " (U+0022)

ASTERISK: * (U+002A)

FULL STOP as the last character: . (U+002E)

COLON: : (U+003A)

LESS-THAN SIGN: < (U+003C)

GREATER-THAN SIGN: > (U+003E)

QUESTION MARK: ? (U+003F)

REVERSE SOLIDUS: \ (U+005C)

VERTICAL LINE: \ (U+007C)

DEL (U+007F)

C0 range (U+0000 … U+001F)

C1 range (U+0080 … U+009F)

Private Use Area (U+E000 … U+F8FF)

Non characters in Arabic Presentation Forms-A (U+FDD0 … U+FDEF)

Specials (U+FFF0 … U+FFFF)

Tags and Variation Selectors Supplement (U+E0000 … U+E0FFF)

Supplementary Private Use Area-A (U+F0000 … U+FFFFF)

Supplementary Private Use Area-B (U+100000 … U+10FFFF)
</pre>


```protobuf

syntax = "proto2";

// bool
message BoolType {}

// uint8...256, int8...256
message IntegerType {
    required bool is_signed = 1;
    required uint32 width = 2;
}

// bytes1, bytes2,..., bytes32
message FixedByteType {
    required uint32 width = 1;
}

// address
message AddressType {}

message ValueType {
    oneof value_type_oneof {
        IntegerType inty = 1;
        FixedByteType byty = 2;
        AddressType adty = 3;
        BoolType boolty = 4;
    }
}

// bytes
message DynamicByteArrayType {}

message ArrayType {
    required Type t = 1;
    required uint32 length = 2;
    required bool is_static = 3;
}

message StructType {
    repeated Type t = 1;
}

message NonValueType {
    oneof nonvalue_type_oneof {
        DynamicByteArrayType dynbytearray = 1;
        ArrayType arrtype = 2;
        StructType stype = 3;
    }
}

// TODO: Add more types
// See https://github.com/ethereum/solidity/issues/6749
message Type {
    oneof type_oneof {
        ValueType vtype = 1;
        NonValueType nvtype = 2;
    }
}

message VarDecl {
    required Type type = 1;
}

message TestFunction {
    required VarDecl local_vars = 1;
    // Length of invalid encoding
    required uint64 invalid_encoding_length = 2;
}

message Contract {
    enum Test {
        CALLDATA_CODER = 1;
        RETURNDATA_CODER = 2;
    }
    required VarDecl state_vars = 1;
    required TestFunction testfunction = 2;
    required Test test = 3;
}

package ethereum.versioning.schema.abiV2;
```


## Summary

### The Only Truth is Runtime

```
slide title: What If We Never
               Broke Anything?

+ names become enduringly meaningful

+ orthogonal compatibility checking becomes
  possible

+ fine-grained deps can be explored

+ use the latest with impunity

+ compose with impunity
```
You should value exchange over change.

Writing libraries for other people to use is about exchanging.  If you
need to change it, you need to be considerate, because the primary
thing is exchange, not change.

there are two really good ways to do this.  One is to grow your
software.  Just grow it.  The other is to turn what would have been
breaking into accretion.  In other words, if you are going to have a
variant, give birth to a variant.  Do not muck with a thing.

---

### References 
-   [PVP Versioning, Haskell](https://pvp.haskell.org/) Accessed 2022 July 
-   Sven Moritz Hallberg, “[Eternal compatibility in theory](https://wiki.haskell.org/The_Monad.Reader/Issue2/EternalCompatibilityInTheory),” [The Monad.Reader](https://wiki.haskell.org/The_Monad.Reader), [Issue 2](https://wiki.haskell.org/The_Monad.Reader/Issue2)
-   [Semantic Versioning (SemVer)](http://semver.org/) specifies a versioning scheme sharing similiarities with the PVP; but it also differs significantly in some aspects. For more details, consult the [**PVP↔SemVer FAQ section**](https://pvp.haskell.org/faq/#semver).
[^1](https://github.com/jafingerhut/jafingerhut.github.com/blob/bac71ac5a1356334bd11b9d17866731310e1ccf6/transcripts/2016-dec-rich-hickey-spec-ulation.txt)
