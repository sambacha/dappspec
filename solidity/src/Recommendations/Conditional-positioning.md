### Conditional `?` and `:` positioning

The condition, the ? question mark, and the : colon always begins a line, indented 4 spaces.


```solidity

  function swap(
    uint256 amount,
    address sourceToken,
    address destinationToken
  ) internal returns (uint256 output) {
    (address token0, address token1) = sourceToken < destinationToken
      ? (sourceToken, destinationToken)
      : (destinationToken, sourceToken);
      
```
