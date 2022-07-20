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
