# Writing Guide

[TOC]

## Metaphors

### Example: Lists and Queues

If your queue is a list, then you will append at the tail and extract from the head. But if your queue is a beast, then you feed the head and excrete from the tail.


So this is where it settles out for me: I want to disambiguate, making it obvious which end is which. The terms head and tail are provably ambiguous and confusing, so they should not be used regardless of the metaphor.

> If your metaphor is list, then use front and back. You read from the front and you write to the back.

> If your metaphor is beast, then use mouth and anus. It just makes sense.



## Change the quantifier

The quantifier  `amount` does not fit with the *countable* noun `tokens` . 

> Consider changing the quantifier or the noun.


… value: amount → number

### Example: Value of Tokens to be spent

```diff
-   * @param _value The amount of tokens to be spent.
+   * @param _value The number of tokens to be spent.
```


### Plurals	

> Unit symbols are unaltered in the plural.

proper:
l = 75 gwei

improper:
l = 75 gweis

### Punctuation	

> Unit symbols are not followed by a period unless at the end of a sentence.

proper:
The length of the bar is 75 cm.
The bar is 75 cm long.

improper:
The bar is 75 cm. long.


### Digit spacing	

The digits of numerical values having more than four digits on either side of the decimal marker are separated into groups of three using the underscore character `_` from both the left and right of the decimal marker. Commas are not used to separate digits into groups of three.

> [see Large Intergers for Solidity Examples](https://github.com/sambacha/dappspec/blob/master/solidity/src/style-guide.md#large-integers)

<table width="700"><thead><tr><th
>Proper</th><th
>Improper</th>
</tr></thead><tbody><tr><td valign="middle" width="500">

~~~diff
// Correct
+ 15_739.012_53
~~~

 
</td><td valign="top" width="500">


~~~diff
// Incorrect
- 15739.01253
- 15,739.012 53
~~~

</td></tr></tbody></table>


**[⬆ back to top](#table-of-contents)**

### Unit spacing

There is a space between the numerical value and unit symbol, even when the value is used in an adjectival sense

