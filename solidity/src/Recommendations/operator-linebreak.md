---
title: operator-linebreak
layout: doc
rule_type: layout
related_rules:
- comma-style
---

# Operator Linebreak

## Rationale

When a statement is too long to fit on a single line, line breaks are generally inserted next to the operators separating expressions. The first style coming to mind would be to place the operator at the end of the line, following the English punctuation rules.

### ❌ Incorrect


```js
var fullHeight = borderTop +
                 innerHeight +
                 borderBottom;
```

### ✅ Correct

Some developers find that placing operators at the beginning of the line makes the code more readable.

```js
var fullHeight = borderTop
               + innerHeight
               + borderBottom;
```
