---
title: Accretive Versioning
description: |
 Accretive Versioning: an Automated compatibility scheme for providing an Immutable Compatibility in Theory
author: Sam Bacha
---

# Accretive Versioning: an Automated compatibility scheme


## Motivation

Currently, ABI doesn’t implement introspection. Additionally there are language issues (re: Solidity) that complicate things.

1. EIP 165
i.e. 'does this contract implement ERC20?'. *see General Issues for more context*

### Solidity Issues

- Solidity should have this in-built.
- Should be built into the API spec and compiler.
- 
+ Inheritance:
Interface or abstract contract – e.g. Solidity automatically creates getters for state functions
this collides with contracts which implements an interface – public or external for abstract functions: they collide

### General Issues

+ ERCs – there is not a formal way to describe the interface for contracts.
Have a standard repo –– this will lead to a canonical ABI definition –– can have semantic rules around this. Can run some specific unit tests against


This specification aims to provide a versioning format such that in this context it is a `providing` format/context vs. a `requiring` format/context.

> This specification solves the problem that you do not know you have.  And that problem is the intense anxiety and pressure you feel when dealing with mutability on an ongoing basis.[^1]

[^1]:https://github.com/jafingerhut/jafingerhut.github.com/blob/bac71ac5a1356334bd11b9d17866731310e1ccf6/transcripts/2016-dec-rich-hickey-spec-ulation.txt#L1221-#L1224

## Background: Semantics of Semantic Versioning

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


### Dependency categorization 

> see the section `Theory of dependency categorization ` below for more details

Take these three values 

- build: `metadata: IPFS` 
- host: `block.chainid == deploymentChainId ? _DOMAIN_SEPARATOR : _calculateDomainSeparator(block.chainid),`
- target: EVM Version min. version. 


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


## Solidity Versions and Feature Sets

> Narrowing down compiler versions 

| **Features**             	| **Supported**    	| **Not Available **                               	|
|---------------------------|------------------	|-----------------------------------------------|
| receive-keyword          	| =0.6.0: true    	| <0.6.0: false                                  	|
| fallback-keyword         	| =0.6.0: true    	| <0.6.0: false                                  	|
| array-parameter-location 	| =0.7.0: memory  	| ^0.5.0 \|\| ^0.6.0: calldata<0.5.0: undefined 	|
| abiencoder-v2            	| =0.8.0: default 	| <0.8.0: experimental                             	|
| global-structs           	| =0.6.0: true    	| <0.6.0: false                                   	|
| structs-in-interfaces    	| =0.5.0: true    	| <0.5.0: false                                  	|
| custom-errors            	| =0.8.4: true    	| <0.8.4: false                                  	|
| user-defined-value-types 	| =0.8.8: true     	| <0.8.8: false                                  	|


## URN Generation

>**Warning**.   
> Work in Progress

0. Accreative Versioning Spec [namespace].    
1. Language [Solidity, Vyper, Fe, LLL].    
2. Compiler Version.    
3. Compiler Flags [default, custom, undefined].    
4. ABI pragma [v1, v2, (...), undefined].    
>> [0,1,2,3,4].    
+= 5. Generated ABI.    


### Protobuf IDL

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

### Theory of dependency categorization 

> sourced from the nix pkgs documentation, nix/nixpkgs/doc/stdenv/cross-compilation.chapter.md

::: note
This is a rather philosophical description that isn't very Nixpkgs-specific.
:::

In this section we explore the relationship between both runtime and build-time dependencies and the 3 Autoconf platforms.

A run time dependency between two packages requires that their host platforms match. This is directly implied by the meaning of "host platform" and "runtime dependency": The package dependency exists while both packages are running on a single host platform.

A build time dependency, however, has a shift in platforms between the depending package and the depended-on package. "build time dependency" means that to build the depending package we need to be able to run the depended-on's package. The depending package's build platform is therefore equal to the depended-on package's host platform.

If both the dependency and depending packages aren't compilers or other machine-code-producing tools, we're done. And indeed `buildInputs` and `nativeBuildInputs` have covered these simpler cases for many years. But if the dependency does produce machine code, we might need to worry about its target platform too. In principle, that target platform might be any of the depending package's build, host, or target platforms, but we prohibit dependencies from a "later" platform to an earlier platform to limit confusion because we've never seen a legitimate use for them.

Finally, if the depending package is a compiler or other machine-code-producing tool, it might need dependencies that run at "emit time". This is for compilers that (regrettably) insist on being built together with their source languages' standard libraries. Assuming build != host != target, a run-time dependency of the standard library cannot be run at the compiler's build time or run time, but only at the run time of code emitted by the compiler.

Putting this all together, that means we have dependencies in the form "host → target", in at most the following six combinations:


#### Possible dependency types
| Dependency's host platform | Dependency's target platform |
| --                         | --                           |
| build                      | build                        |
| build                      | host                         |
| build                      | target                       |
| host                       | host                         |
| host                       | target                       |
| target                     | target                       |


Some examples will make this table clearer. Suppose there's some package that is being built with a `(build, host, target)` platform triple of `(foo, bar, baz)`. If it has a build-time library dependency, that would be a "host → build" dependency with a triple of `(foo, foo, *)` (the target platform is irrelevant). If it needs a compiler to be built, that would be a "build → host" dependency with a triple of `(foo, foo, *)` (the target platform is irrelevant). That compiler, would be built with another compiler, also "build → host" dependency, with a triple of `(foo, foo, foo)`.

### Cross packaging cookbook {#ssec-cross-cookbook}

Some frequently encountered problems when packaging for cross-compilation should be answered here. Ideally, the information above is exhaustive, so this section cannot provide any new information, but it is ludicrous and cruel to expect everyone to spend effort working through the interaction of many features just to figure out the same answer to the same common problem. Feel free to add to this list!

#### What if my package's build system needs to build a C program to be run under the build environment? {#cross-qa-build-c-program-in-build-environment}
Add the following to your `mkDerivation` invocation.
```nix
depsBuildBuild = [ buildPackages.stdenv.cc ];
```

#### My package fails to find `ar`. {#cross-qa-fails-to-find-ar}
Many packages assume that an unprefixed `ar` is available, but Nix doesn't provide one. It only provides a prefixed one, just as it only does for all the other binutils programs. It may be necessary to patch the package to fix the build system to use a prefixed `ar`.

####  My package's testsuite needs to run host platform code. {#cross-testsuite-runs-host-code}

Add the following to your `mkDerivation` invocation.
```nix
doCheck = stdenv.hostPlatform == stdenv.buildPlatfrom;
```

## Cross-building packages {#sec-cross-usage}

Nixpkgs can be instantiated with `localSystem` alone, in which case there is no cross-compiling and everything is built by and for that system, or also with `crossSystem`, in which case packages run on the latter, but all building happens on the former. Both parameters take the same schema as the 3 (build, host, and target) platforms defined in the previous section. As mentioned above, `lib.systems.examples` has some platforms which are used as arguments for these parameters in practice. You can use them programmatically, or on the command line:

```ShellSession
$ nix-build '<nixpkgs>' --arg crossSystem '(import <nixpkgs/lib>).systems.examples.fooBarBaz' -A whatever
```

::: note
Eventually we would like to make these platform examples an unnecessary convenience so that

```ShellSession
$ nix-build '<nixpkgs>' --arg crossSystem '{ config = "<arch>-<os>-<vendor>-<abi>"; }' -A whatever
```

works in the vast majority of cases. The problem today is dependencies on other sorts of configuration which aren't given proper defaults. We rely on the examples to crudely to set those configuration parameters in some vaguely sane manner on the users behalf. Issue [\#34274](https://github.com/NixOS/nixpkgs/issues/34274) tracks this inconvenience along with its root cause in crufty configuration options.
:::

While one is free to pass both parameters in full, there's a lot of logic to fill in missing fields. As discussed in the previous section, only one of `system`, `config`, and `parsed` is needed to infer the other two. Additionally, `libc` will be inferred from `parse`. Finally, `localSystem.system` is also _impurely_ inferred based on the platform evaluation occurs. This means it is often not necessary to pass `localSystem` at all, as in the command-line example in the previous paragraph.

::: note
Many sources (manual, wiki, etc) probably mention passing `system`, `platform`, along with the optional `crossSystem` to Nixpkgs: `import <nixpkgs> { system = ..; platform = ..; crossSystem = ..; }`. Passing those two instead of `localSystem` is still supported for compatibility, but is discouraged. Indeed, much of the inference we do for these parameters is motivated by compatibility as much as convenience.
:::

One would think that `localSystem` and `crossSystem` overlap horribly with the three `*Platforms` (`buildPlatform`, `hostPlatform,` and `targetPlatform`; see `stage.nix` or the manual). Actually, those identifiers are purposefully not used here to draw a subtle but important distinction: While the granularity of having 3 platforms is necessary to properly *build* packages, it is overkill for specifying the user's *intent* when making a build plan or package set. A simple "build vs deploy" dichotomy is adequate: the sliding window principle described in the previous section shows how to interpolate between the these two "end points" to get the 3 platform triple for each bootstrapping stage. That means for any package a given package set, even those not bound on the top level but only reachable via dependencies or `buildPackages`, the three platforms will be defined as one of `localSystem` or `crossSystem`, with the former replacing the latter as one traverses build-time dependencies. A last simple difference is that `crossSystem` should be null when one doesn't want to cross-compile, while the `*Platform`s are always non-null. `localSystem` is always non-null.

## Discussion and Summary

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

### Locked Versioning in the wild 

> These are more recent examples

#### qoi2-bikeshed

https://github.com/nigeltao/qoi2-bikeshed

> QOI (the "Quite OK Image" format for fast, lossless image compression) was announced in November 2021:

> https://phoboslab.org/log/2021/11/qoi-fast-lossless-image-compression
> https://github.com/phoboslab/qoi

It attracted a lot of interest and suggested changes. The performance / compression numbers were impressive! Shortly afterwards, the author declared "the data format is now fixed" (fixed meaning unchanging, not unbroken), as they were absolutely entitled to do.[^4]

They then created a *placeholder repository (and in particular, its GitHub issue tracker)* as an unofficial place to continue those bike-shedding discussions - a possible "QOI version 2".[^5]
[^4]: [see https://github.com/phoboslab/qoi/issues/37#issuecomment-980789466](https://github.com/phoboslab/qoi/issues/37#issuecomment-980789466)
[^5]: [https://github.com/nigeltao/qoi2-bikeshed#:~:text=README.md-,qoi2-bikeshed,actually%0Aresult%20in%20anything.,-Please%20file%20separate](https://github.com/nigeltao/qoi2-bikeshed#:~:text=README.md-,qoi2-bikeshed,actually%0Aresult%20in%20anything.,-Please%20file%20separate)

---

### References 
-   [PVP Versioning, Haskell](https://pvp.haskell.org/) Accessed 2022 July 
-   Sven Moritz Hallberg, “[Eternal compatibility in theory](https://wiki.haskell.org/The_Monad.Reader/Issue2/EternalCompatibilityInTheory),” [The Monad.Reader](https://wiki.haskell.org/The_Monad.Reader), [Issue 2](https://wiki.haskell.org/The_Monad.Reader/Issue2)
-   [Semantic Versioning (SemVer)](http://semver.org/) specifies a versioning scheme sharing similiarities with the PVP; but it also differs significantly in some aspects. For more details, consult the [**PVP↔SemVer FAQ section**](https://pvp.haskell.org/faq/#semver).
[^1](https://github.com/jafingerhut/jafingerhut.github.com/blob/bac71ac5a1356334bd11b9d17866731310e1ccf6/transcripts/2016-dec-rich-hickey-spec-ulation.txt)
