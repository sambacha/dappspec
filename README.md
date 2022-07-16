---
title: DAppSpec
version: v2022.06.26, v2022.07.13
authors: <TBD>
license: CC-SA-2.5
---

# dappspec

> NEW: OCI for Contracts
> OLD: NatSpec for frontend usage + Admonitions as @custom:tags

## TLDR:

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

`

#### other formats

```javascript
     /**
     * NOTE:xref:learn::upgrading-smart-contracts.adoc[smart contract upgrade].
     */
     
```
    
```solidity
    /**
    * @custom:oz-upgrades-unsafe-allow state-variable-immutable
    */
```
    
#### modline
    
```shell
# -*- nginx -*-
```
<br />
    
```shell
# .gitattributes
conf.d linguist-language=Nginx
```

> ```nginx
> # -*- nginx -*-
> server {
> 	listen 8002;
> 	server_name homepage;
> 	root /home/ollien.com/www/;
> 	charset utf-8;
> 
> 	location / {}
> 
> 	location /index.html {}
> 
> 	location /static {
> 		autoindex off;
> 	}
> }
> ``



### Sidenotes

```
<link rel="stylesheet" href="https://unpkg.com/latex.css/style.min.css" />
```

Sidenotes can be used as an alternative to footnotes, where the user does not have to jump to the bottom of the page to read it. On mobile, click the superscript to reveal the noteYay, sidenotes!. If you are on mobile, I will appear inline. If you are using a larger screen, the sidenote will appear to the right of the text..

Sidenotes do need a little bit of setup, they are made up of a label, an invisible checkbox on top of the number and a span with the text inside. The superscript is set automatically and incremented using CSS when the checkbox has a class of sidenote-number.

```html
<label for="sn-1" class="sidenote-toggle sidenote-number"></label>
<input type="checkbox" id="sn-1" class="sidenote-toggle" />
<span class="sidenote"><!-- sidenote content --></span>
```
If you do not need superscripted numbers, you can opt out of the sidenote-number class and the sidenote will not have a number assigned. On a smaller screen, you will need to add a symbol inside the label for the user to click on.This is a sidenote without a number.

The snippet for a sidenote without a number is very similar:
```html
<label for="sn-anything" class="sidenote-toggle">⊕</label>
<input type="checkbox" id="sn-anything" class="sidenote-toggle" />
<span class="sidenote"><!-- sidenote content --></span>
```

Add a class of left to the span with the sidenote class to make the note appear on the left side of the page on instead of right.

The symbol you could use to indicate a sidenote is up to you. What about this notebook.A notebook indicating a note. Aha.
(if on a large screen, resize to mobile to see the emoji)



## Anchors

Support for modline anchors:

`#:~:text=`

```
#:~:text=A%20NatSpec%20Comment.
```

[see web.dev/text-fragments/](https://web.dev/text-fragments/)
[see github.com/GoogleChromeLabs/link-to-text-fragment](https://github.com/GoogleChromeLabs/link-to-text-fragment)


