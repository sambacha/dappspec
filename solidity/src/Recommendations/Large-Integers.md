---
title: Large Integers
section: Large Integers
category: recommendations
source: https://gist.github.com/lucas-manuel/a43da80cdd4c3f37a2f3151d3774b8e0#large-integers
id: 00003
---

# Large Integers
Any integer value that is over 10,000 MUST be represented using underscore syntax:

<pre>
10k => 10_000
10m => 10_000_000
10b => 10_000_000_000
</pre>

## Example

> Original

```solidity
    function _getSwapAmount(uint256 userIn, uint256 reserveIn) internal pure returns (uint256) {
        return
            (Babylonian.sqrt(reserveIn * (userIn * 3988000 + reserveIn * 3988009)) -
                reserveIn *
                1997) / 1994;
    }
```


```diff
-            (Babylonian.sqrt(reserveIn * (userIn * 3988000 + reserveIn * 3988009)) -
                reserveIn *
-                1997) / 1994;
+            (Babylonian.sqrt(reserveIn * (userIn * 3_988_000 + reserveIn * 3_988_009)) -
                reserveIn *
+                1_997) / 1_994;
    }
```

### Example

#### Semantic Diff

```diff
-  1┊    │    function _getSwapAmount(uint256 userIn, uint256 reserveIn) internal pure returns (uint256) {
+   ┊   1│function _getSwapAmount(uint256 userIn, uint256 reserveIn) internal pure returns (uint256) {
   2┊   2│        return
-  3┊    │            (Babylonian.sqrt(reserveIn * (userIn * 3988000 + reserveIn * 3988009)) -
!  3┊    │            (Babylonian.sqrt(reserveIn * (userIn * 3_988_000 + reserveIn * 3_988_009)) -
   4┊   4│                reserveIn *
-  5┊    │                1997) / 1994;
-  6┊    │}
+   ┊   5│                1_997) / 1_994;
+   ┊   6│    }
```

![](https://d.pr/i/hYlz6u.jpeg)

ERC-20 values that contain decimals can use underscore syntax to represent decimals:

```javascript
10k USDC (6 decimals) => 10_000_000000
10m USDC (6 decimals) => 10_000_000_000000
10b USDC (6 decimals) => 10_000_000_000_000000
```


### forge fmt

![](https://d.pr/i/fFTgLl.jpeg)
