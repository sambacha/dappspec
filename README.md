---
title: DAppSpec
version: v2022.06.26, v2022.07.13, v2022.07.19, v2022.08.23, 2022.12.17
authors: <TBD>
license: CC-SA-2.5
---

# dappspec

## tl:dr

>
> - use clear names to answer 'what'
> - use clear statements to answer 'how'
> - use comments to answer 'why'
>
> - Nikolai Mushegian

## Overview

`dappspec` provides a CSS library for generating documentation from solidity natspec, you can find the preliminary library over at [https://github.com/sambacha/dappspec-css](https://github.com/sambacha/dappspec-css)

> This repo is a working repo for ideation and documentation.

> NEW: OCI for Contracts
> OLD: NatSpec for frontend usage + Admonitions as @custom:tags

## Style Guide: Flight Rules

> informative style guide

What are "flight rules"?

A guide for astronauts about what to do when things go wrong.

> Flight Rules are the hard-earned body of knowledge recorded in manuals that list, step-by-step, what to do if X occurs, and why. Essentially, they are extremely detailed, scenario-specific standard operating procedures. [...]

> NASA has been capturing our missteps, disasters and solutions since the early 1960s, when Mercury-era ground teams first started gathering "lessons learned" into a compendium that now lists thousands of problematic situations, from engine failure to busted hatch handles to computer glitches, and their solutions.

> — Chris Hadfield, An Astronaut's Guide to Life on Earth.


## Example of @custom:natspec

```jsdoc
/**
 * @custom:org.label-schema.security='ops@manifoldfinance.com'
 * @custom:org.label-schema.support='github.com/manifoldfinance/support'
 * @custom:org.label-schema.vcs-url='github.com/manifoldfinance'
 * @custom:org.label-schema.vendor='CommodityStream, Inc'
 * @custom:org.label-schema.schema-version="1.0"
 */
```
## Motivation

Dappspec takes the `@custom:...` natspec tag and provides a list of admonitions for generating documentation for Solidity contracts.

- The Specifics Admonitions include identifiers for codeblocks that reference `gas` optimizations, `assembly` blocks, and `emit` events.

- The `@custom:security` tag as used by OpenZeppelin for identifiying the point of contact. Similar to `security.txt`, [see an example here](https://www.manifoldfinance.com/.well-known/security.txt)

- The General Admonitions are meant to render the docstring content as a code block that you would find in generators like `mkdocs`. [see squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types)




### `natspec-documentation-default`.

 The following `SHOULD` trigger an error:
 
 * A `public` or `external` function which does not have a NatSpec comment
   
   * NatSpec comment does not have a `@notice` set
   * NatSpec comment does not have a `@param` for every parameter
   * NatSpec comment does not have a `@return` for every return
 * A `public` storage variable which does not have a NatSpec comment
   
   * NatSpec comment does not have a `@notice` set
   * NatSpec comment does not have a `@param` for every parameter
   * NatSpec comment does not have a `@return` for every return
 * An `Error` type which does not have a NatSpec comment
   
   * NatSpec commend does not have a `@notice` set
 
 The Solidity project recommends the above. It is extremely useful. And few people do it. So it will be very helpful to add rules for it.
 
  It is recommended that Solidity contracts are fully annotated using NatSpec for all public interfaces (everything in the ABI).
  [docs.soliditylang.org/en/v0.8.6/style-guide.html?highlight=style%20guide#natspec](https://docs.soliditylang.org/en/v0.8.6/style-guide.html?highlight=style%20guide#natspec)
 
### `natspec-documentation-admonition`.
 Admonitions `(`Warning`/`Tip`/`Important`)`
Using specific syntax inside block quote to indicate the following content is Note.

<pre>
> [!NOTE]
> <note content>
> [!WARNING]
> <warning content>
</pre>

The above content will be transformed to the following html:

```html
<div class="NOTE">
  <h5>NOTE</h5>
  <p>note content</p>
</div>
<div class="WARNING">
  <h5>WARNING</h5>
  <p>WARNING content</p>
</div>
```

Here are all the supported note types with the styling of the default theme applied:

```
[!NOTE] This is a note which needs your attention, but it's not super important.

[!TIP] This is a note which needs your attention, but it's not super important.

[!WARNING] This is a warning containing some important message.

[!IMPORTANT] This is a warning containing some important message.

[!CAUTION] This is a warning containing some important message.
```

<br>
 
### `natspec-documentation-internal`.
 
 * An `internal` function which does not have a NatSpec comment
   
   * NatSpec comment does not have a `@param` for every parameter
   * NatSpec comment does not have a `@return` for every return
 
 Note that `@notice` is not required in this circumstance because that tag applies to "end users" whereas an `internal` function is useful only to contract developers.
 
 Note that `private` functions are not included in this rule. This is because documentation for implementation details is always less important that documentation for an objects' surface area. If you like, this could be another rule `natspec-documentation-private` and should be default OFF.
 
>**Note**      
> Credit to fulldecent, [see this comment](https://github.com/protofire/solhint/issues/298)
 
## Admonitions

- French

<pre>
:::note{label="Il ne faut rien laisser au hasard."}
Battre le fer pendant qu’il est chaud.
:::
</pre>

> **Warning** <br />
> GitHub Warning

> **Note** <br />
> GitHub Note

### General
- check
- important
- warning, caution, attention

### Specifics
-    gas
-    assembly
-    emit 
-    security


### Colouring Tokens

> md-code-hl

<pre>
number-color
special-color
function-color
constant-color
keyword-color
string-color
name-color
operator-color
punctuation-color
comment-color
generic-color
variable-color
</pre>

## Examples

## protected variable id for detector

```solidity
contract Internal {
    /// @custom:security write-protection="onlyOwner()"
    address owner;
```


### `@custom:emit` 

```solidity
// try / catch flashloan arb. In case arb reverts, user swap will still succeed.
try bento.flashLoan(IFlashBorrower(address(this)), address(this), output, amountIn, params) {
    /// @custom:emit MEV success
    emit MEV(msg.sender, output, optimalReturns - ((amountIn * 5) / 10000));
} catch {
    /// @custom:emit MEV fail flashloan
    emit LoanError(output, amountIn);
```

### `@custom:gas` 

```solidity
    /// @custom:gas Uint256 zero check gas saver
    /// @notice Uint256 zero check gas saver
    /// @param value Number to check
    function _isZero(uint256 value) internal pure returns (bool boolValue) {
        assembly {
            boolValue := iszero(value)
        }
    }

    /// @custom:gas Uint256 not zero check gas saver
    /// @notice Uint256 not zero check gas saver
    /// @param value Number to check
    function _isNonZero(uint256 value) internal pure returns (bool boolValue) {
        assembly {
            boolValue := iszero(iszero(value))
        }
    }
```

#### OpenZeppelin Style

```solidity
    
    abstract contract ERC2771Context is Context {
    /// @custom:oz-upgrades-unsafe-allow state-variable-immutable
    address private immutable _trustedForwarder;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(address trustedForwarder) {
        _trustedForwarder = trustedForwarder;
    }
```


## Previous Artwork

- https://github.com/sambacha/audit-format

>**Note**    
> This is a non-exhaustive list
