
# Author Comments

Good Example

> [source, https://github.com/mds1/multicall/blob/master/src/Multicall3.sol#L138-#L141](https://github.com/mds1/multicall/blob/master/src/Multicall3.sol#L138-#L141)

```solidity
    // Humanity will be a Type V Kardashev Civilization before this overflows - andreas
    // ~ 10^25 Wei in existence << ~ 10^76 size uint fits in a uint256
    unchecked { valAccumulator += val; }
    (result.success, result.returnData) = calli.target.call{value: val}(calli.callData);
```
