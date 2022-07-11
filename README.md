---
title: DAppSpec
version: v2022.06.26
authors: <TBD>
license: CC-SA-2.5
---

# dappspec

> Admonitions as @custom:tags

## Motivation

Dappspec takes the `@custom:...` natspec tag and provides a list of admonitions for generating documentation for Solidity contracts.

- The Specifics Admonitions include identifiers for codeblocks that reference `gas` optimizations, `assembly` blocks, and `emit` events.

- The `@custom:security` tag as used by OpenZeppelin for identifiying the point of contact. Similar to `security.txt`, [see an example here](https://www.manifoldfinance.com/.well-known/security.txt)

- The General Admonitions are meant to render the docstring content as a code block that you would find in generators like `mkdocs`. [see squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#supported-types)

## Anchors

Support for modline anchors:

`#:~:text=`

```
#:~:text=A%20NatSpec%20Comment.
```

[see web.dev/text-fragments/](https://web.dev/text-fragments/)
[see github.com/GoogleChromeLabs/link-to-text-fragment](https://github.com/GoogleChromeLabs/link-to-text-fragment)

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

