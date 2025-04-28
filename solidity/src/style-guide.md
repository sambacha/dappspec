---
title: Solidity Style Guide DAppSpec
author: Et. Al.
version: 2025.04, 2022.07.14
---


# Solidity Style Guide() {

## Table of Contents

  1. [Types](#types)
  2. [Megalitic comments](#Megalithic-comments)


## General Comments

```
<!-- Based on the CSRG's KNF (Kernel Normal Form). -->

 /*
  * VERY important single-line comments look like	this.
  */

  /* Most single-line comments look like this. */

  /*
   * Multi-line comments look like	this.  Make them real sentences.  Fill
   * them so they look like real paragraphs.
   */
```

## Explicit Types

  <a name="types--primitives"></a><a name="1.1"></a>
  - [1.1](#types--primitives) **Alias**: When you access a primitive type you should work directly on its value.

    - `uint`
    - `int`

- Always perfer the *explicit* type

  <a name="types--complex"></a><a name="1.2"></a>
  - [1.2](#types--complex)  **Explicit**: When you access a primitive type you should work on its explicit value.

    - `uint256`
    - `int256`

### prettier-config-solidity

```javascript

   /**
    *  @param  explicitTypes
    *  @summary enforces `explicitTypes` to be `true`,
    *  @example Example: unit = unit256
    */
   explicitTypes: 'always',
```

**[⬆ back to top](#table-of-contents)**


## Megalithic comments

In some codebases, you’ll also see attempts to produce large, visually salient geometries as separators, like:


`/*--------------------------------------------------------------------------*/`
<br />

Please don’t do this in new code. 

### 
Normal conventions should be legible. Use more deeply qualified positions if your code is hard to navigate.

### Example[^1]

```solidity
    /*//////////////////////////////////////////////////////////////
                                 EVENTS
    //////////////////////////////////////////////////////////////*/
```

[^1]:https://github.com/Rari-Capital/solmate/blob/main/src/tokens/ERC20.sol#L9-#L11

**[⬆ back to top](#table-of-contents)**

## Order of Layout
Layout contract elements in the following order [^2]

> Contracts

0. Pragma statements

1. Import statements

2. Interfaces

3. Libraries

4. Contracts

Inside each contract, library or interface, use the following order:

> **Note**     
> constructor SHOULD be specified to be above modifiers

> contract, library or interface

0. Type declarations

1. State variables

2. Events

3. Modifiers

4. Functions

[^2]:[Order Layout](https://docs.soliditylang.org/en/latest/style-guide.html?highlight=style%20guide#order-of-layout)


**[⬆ back to top](#table-of-contents)**

## Constructor functions on inherited contracts

For constructor functions on inherited contracts whose bases require arguments, 
it is recommended to drop the base constructors onto new lines in the
same manner as modifiers if the function declaration is long or hard to read.

[Solidity Documentation source](https://docs.soliditylang.org/en/latest/style-guide.html?highlight=style%20guide#order-of-layout:~:text=For%20constructor%20functions%20on%20inherited%20contracts%20whose%20bases%20require%20arguments%2C%20it%20is%20recommended%20to%20drop%20the%20base%20constructors%20onto%20new%20lines%20in%20the%20same%20manner%20as%20modifiers%20if%20the%20function%20declaration%20is%20long%20or%20hard%20to%20read.)

 
### Incorrect
 
 
```solidity
contract A is B, C, D {
    uint x;

    constructor(uint param1, uint param2, uint param3, uint param4, uint param5)
    B(param1)
    C(param2, param3)
    D(param4) {
        x = param5;
    }
}
```


### Correct 

 ```solidity
contract A is B, C, D {
    uint x;

    constructor(uint param1, uint param2, uint param3, uint param4, uint param5)
        B(param1)
        C(param2, param3)
        D(param4)
    {
        // do something with param5
        x = param5;
    }
}
```

### Semantic Diff

```diff
------ fail-constructor.sol
++++++ pass-constructor.sol
@@ -1,10 +1,12 @@
 contract A is B, C, D {
     uint x;
 
     constructor(uint param1, uint param2, uint param3, uint param4, uint param5)
         B(param1)
         C(param2, param3)
!        D(param4)
!    {
!        // do something with param5
         x = param5;
     }
 }
 ```

**[⬆ back to top](#table-of-contents)**


## Ordering: Function Modifiers
The modifier order for a function should be:

1. Visibility

2. Mutability

3. Virtual

4. Override

5. Custom modifiers
 
 ### Incorrect
 ```solidity
 // fail-function-order.sol
 function balance(uint256 from) public override view returns (uint256)  {
    return balanceOf[from];
}

function shutdown() onlyOwner public {
    selfdestruct(owner);
}
```
 ```solidity
 // pass-function-order.sol
 function balance(uint256 from) public view override returns (uint256)  {
    return balanceOf[from];
}

function shutdown() public onlyOwner {
    selfdestruct(owner);
}
```

### Semantic Diff
 
 ```diff
 ------ fail-function-order.sol
++++++ pass-function-order.sol
@@ -1,7 +1,7 @@ 
-function balance(uint256 from) public override view returns (uint256)  {
+function balance(uint256 from) public view override returns (uint256)  {
     return balanceOf[from];
 }
 
-function shutdown() onlyOwner public {
+function shutdown() public onlyOwner {
     selfdestruct(owner);
 }
 ````
 
**[⬆ back to top](#table-of-contents)**


## Whitespace

Don’t include a whitespace in the receive[^4] and fallback functions:

[^4]: noun 'reception' (= the act of receiving)


<table width="700"><thead><tr><th
>Source</th><th
>Output</th>
</tr></thead><tbody><tr><td valign="middle" width="350">

~~~diff

// Correct
+ receive() external payable {
//
}

// Incorrect
- fallback () external {
// 
}


~~~

 
</td><td valign="top" width="620">

<img width="620" src="https://d.pr/i/jas5mU.jpeg" alt="Figure 1: Rendered output" />

</td></tr></tbody></table>



**[⬆ back to top](#table-of-contents)**


## Large Integers

Any integer value that is over 10,000 MUST be represented using underscore syntax:


<table width="700"><thead><tr><th
>Source</th><th
>Output</th>
</tr></thead><tbody><tr><td valign="middle" width="350">

~~~diff

// Correct
+ (Babylonian.sqrt(reserveIn * 
+  (userIn * 3_988_000 + reserveIn * 3_988_009))


// Incorrect
- (Babylonian.sqrt(reserveIn * 
-  (userIn * 3988000 + reserveIn * 3988009)) 
//

~~~

 
</td><td valign="top" width="700">

<img width="700" src="https://d.pr/i/hYlz6u.jpeg" alt="Figure 2: Rendered output" />

</td></tr></tbody></table>



**[⬆ back to top](#table-of-contents)**


# };
