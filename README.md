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
