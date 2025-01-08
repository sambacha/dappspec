# Error Handling Conventions

v.2025.01

## Custom Error Naming

Custom error identifiers must follow this pattern:

- Prefix: Contract name
- Suffix: `Error`
- Example: `ContractNameInvalidInputError`

## Error Implementation Requirements

### Use of `revert`
All errors must be implemented using `revert` statements rather than `require`. This convention serves two purposes:
1. Visual consistency across codebase
2. Gas optimization, particularly for errors with arguments

### Deprecation of `require`
While Solidity 0.8.24 introduced custom error support for `require`, this feature has significant limitations:
- No short-circuit evaluation: Arguments to custom errors in `require` statements are evaluated regardless of whether the error is thrown
- This behavior leads to unnecessary gas consumption
- In certain scenarios, this can create security vulnerabilities

## Implementation Guidelines

### Solidity

- Use `revert` with custom errors
- Follow the prescribed error naming convention
- Avoid `require` statements entirely

### Testing and Scripts
For test files and scripts:
- Replace existing `require` statements with appropriate `assert*` functions (e.g., `assertEq`)
- Include descriptive revert messages with assertions
- This practice enables automated enforcement through semgrep rules

## Code Examples

### ❌ Incorrect Implementation (using `require`)

```solidity
contract TokenVault {
    uint256 public constant MIN_DEPOSIT = 100;
    
    function deposit(uint256 amount) external {
        require(
            amount >= MIN_DEPOSIT,
            "TokenVault: Deposit amount below minimum"
        );
        // ... deposit logic
    }
}
```

### ✅ Correct Implementation (using `revert`)

```solidity
contract TokenVault {
    uint256 public constant MIN_DEPOSIT = 100;
    
    error TokenVaultInsufficientDepositError(uint256 provided, uint256 minimum);
    
    function deposit(uint256 amount) external {
        if (amount < MIN_DEPOSIT) {
            revert TokenVaultInsufficientDepositError({
                provided: amount,
                minimum: MIN_DEPOSIT
            });
        }
        // ... deposit logic
    }
}
```
