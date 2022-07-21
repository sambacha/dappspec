> [source](https://gist.githubusercontent.com/lucas-manuel/a43da80cdd4c3f37a2f3151d3774b8e0/raw/61ae819f6644ffa24054fd0d4df2ee57c1969bd2/style-guide.md)

# Top of File
All files should have a license and pragma defined in the top two lines of the file:
```js
// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity 0.6.11;
```

# Contract Imports

1. All imports must be explicit, importing only what is necessary from each file.
2. All imports must be in order from most external to most internal in terms of file structure.
3. For multiple import statements that import from the same relative directory, the `from` statements must be aligned, and the statements must be grouped.
4. Grouped import statements must be ordered alphabetically according to file path.
5. Leave one line spacing between import groups.

See a full example below:

```solidity
import { InvariantTest, TestUtils } from "../../modules/contract-test-utils/contracts/test.sol";
import { MockERC20 }                from "../../modules/erc20/contracts/test/mocks/MockERC20.sol";

import { InvariantERC20User }     from "./accounts/ERC20User.sol";
import { InvariantOwner }         from "./accounts/Owner.sol";
import { InvariantStakerManager } from "./accounts/Staker.sol";
import { Warper }                 from "./accounts/Warper.sol";

import { MutableRDT } from "./utils/MutableRDT.sol";
```

# Interfaces
- All contracts must have a corresponding Interface will all functions and events defined with named parameters and full NatSpec documentation.
- All functions and public variables must use the `overrides` keyword.

# Declarations
Declarations must be ordered in the following way:
```solidity
using _ for _

---

address
bool
uint256
mapping

Enum
Struct

Event

---

constant
immutable

private
internal
public

```
All declarations with alike types must be grouped and aligned.
All declarations must be alphabetically ordered based on type then variable name.

# Function Ordering

Functions in larger contracts can be typically grouped based on general purpose, for example:
```
Admin Functions
LP Functions
View Functions
Helper Functions
```

If this is the case, a set of functions must be labelled with a large comment with the following format:
```solidity
/***********************/
/*** Admin Functions ***/
/***********************/
```

Functions within a group should be ordered as follows:
```
external
public
internal
private
view
pure
```

Internal/External function sections should be labelled

```js
/*******************************/
/*** Internal Pure Functions ***/
/*******************************/
```

Multiple functions with the same modifiers must be ordered alphabetically.

# Contract and Function Spacing

A new line must exist between each of the brackets in a contract. Code within functions must start on the first line and end on the last line, with logical spacing in between lines of code. Example:

```solidity

contract ExampleContract is IExampleContract {

    address public override immutable variable1;

    bool public override immutable variable2;

    uint256 public override immutable variable3;
    uint256 public override immutable variable4;

    address public override variable5;
    address public override variable6;

    uint256 public override variable6;
    uint256 public override variable7;
    uint256 public override variable8;
    uint256 public override variable9;

    constructor() public {
        code;
        code;
    }

    /**************************/
    /*** External Functions ***/
    /**************************/

    function functionName() external override {
        code;
        code;
        code;

        code;
        code;
    }

    /**************************/
    /*** Internal Functions ***/
    /**************************/

    function functionName() internal view returns (uint256 variable1) {
        code;
        code;
        code;

        code;
        code;
    }

}

```

A single space must be used between top level declarations:
```solidity
interface interfaceName {

    code;
    code;
    code;

}

contract contractName1 {

    code;
    code;

}

contract contractName2 {

    code;
    code;
    code;
    code;

}
```

# Function Declarations
When declaring a new function, the following approach should be used for styling:
1. If short enough, keep to one line:
```solidity
function functionName(uint256 variable1, uint256 variable2) external view returns (uint256 variable4) {
    code;
}
```

2. If one line is not possible because the line becomes too long, use multline with the following syntax, keeping the modifiers and return on the same line if possible:
```solidity
function functionName(
    uint256 variable1,
    uint256 variable2,
    uint256 variable3,
    uint256 variable4,
    uint256 variable5
)
    external view returns (uint256 variable4)
{
    code;
}
```

3. If the line with modifiers and return is too long, it can be broken into two lines, one for modifiers and one for return:
```solidity
function functionName(
    uint256 variable1,
    uint256 variable2,
    uint256 variable3,
    uint256 variable4,
    uint256 variable5
)
    external view customModifier1(variable1, variable2) customModifier2
    returns (uint256 variable4)
{
    code;
}
```

4. If the return statetment is too long, it can be broken out to be multiline:
```solidity
function functionName(
    uint256 variable1,
    uint256 variable2,
    uint256 variable3,
    uint256 variable4,
    uint256 variable5
)
    external view customModifier1(variable1, variable2) customModifier2
    returns (
        uint256 variable5,
        uint256 variable6,
        uint256 variable7,
        uint256 variable8,
        uint256 variable9
    )
{
    code;
}
```

# Large Integers
Any integer value that is over 10,000 must be represented using underscore syntax:
```
10k => 10_000
10m => 10_000_000
10b => 10_000_000_000
etc
```

ERC-20 values that contain decimals can use underscore syntax to represent decimals:
```
10k USDC (6 decimals) => 10_000_000000
10m USDC (6 decimals) => 10_000_000_000000
10b USDC (6 decimals) => 10_000_000_000_000000
```

# Import Alignment

Align using the `from` keyword, as is shown in the following example:
```solidity
import { BasicFundsTokenFDT }        from  "../modules/funds-distribution-token/contracts/BasicFundsTokenFDT.sol";
import { Context  as  ERC20Context } from  "../modules/funds-distribution-token/modules/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import { SafeMath }                  from  "../modules/openzeppelin-contracts/contracts/math/SafeMath.sol";
import { SignedSafeMath }            from  "../modules/openzeppelin-contracts/contracts/math/SignedSafeMath.sol";
```

# Declarations
All declarations are to be grouped so that they are naturally aligned, and alphabetically ordered within their respective groups as shown in the following example:
```solidity
using SafeMath for uint256;

address public override immutable mpl;

address public override globalAdmin;
address public override governor;
address public override mapleTreasury;
address public override pendingGovernor;

uint256 public override defaultGracePeriod;
uint256 public override fundingPeriod;
uint256 public override investorFee;
uint256 public override lpCooldownPeriod;
uint256 public override lpWithdrawWindow;
uint256 public override maxSwapSlippage;
uint256 public override minLoanEquity;
uint256 public override stakerCooldownPeriod;
uint256 public override stakerUnstakeWindow;
uint256 public override swapOutRequired;
uint256 public override treasuryFee;

bool public override protocolPaused;

mapping(address => address) public override oracleFor;

mapping(address => bool) public override isValidBalancerPool;
mapping(address => bool) public override isValidCollateralAsset;
mapping(address => bool) public override isValidLiquidityAsset;
mapping(address => bool) public override isValidLoanFactory;
mapping(address => bool) public override isValidPoolDelegate;
mapping(address => bool) public override isValidPoolFactory;
mapping(address => bool) public override validCalcs;

mapping(address => mapping(address => address)) public override defaultUniswapPath;

mapping(address => mapping(address => bool)) public override validSubFactories;
```

If declaring Contract types in a test, variable alignment should be left-justified and ordered alphabetically (first by contract type then by name):
```solidity
GlobalsMock   globals;
Governor      fakeGov;
Governor      realGov;
MapleTreasury treasury;
TokenMock     mockToken;
TokenMock     mpl;
```

# Equals Signs
Equals signs should always have a single space on either side, unless for alignment.
Equals signs should always be aligned for assignments on groups of lines of code. Example:
```solidity
function increaseCustodyAllowance(address custodian, uint256 amount) external override {
    uint256 oldAllowance      = custodyAllowance[msg.sender][custodian];
    uint256 newAllowance      = oldAllowance.add(amount);
    uint256 newTotalAllowance = totalCustodyAllowance[msg.sender].add(amount);

    PoolLib.increaseCustodyAllowanceChecks(custodian, amount, newTotalAllowance, balanceOf(msg.sender));

    custodyAllowance[msg.sender][custodian] = newAllowance;
    totalCustodyAllowance[msg.sender]       = newTotalAllowance;

    emit CustodyAllowanceChanged(msg.sender, custodian, oldAllowance, newAllowance);
    emit TotalCustodyAllowanceUpdated(msg.sender, newTotalAllowance);
}
```

Initializations of variables in constructors should be aligned and ordered alphabetically:
```solidity
constructor(address _governor, address _mpl, address _globalAdmin) public {
    defaultGracePeriod   = 5 days;
    fundingPeriod        = 10 days;
    globalAdmin          = _globalAdmin;
    governor             = _governor;
    investorFee          = 50;
    lpCooldownPeriod     = 10 days;
    lpWithdrawWindow     = 2 days;
    maxSwapSlippage      = 1000;
    minLoanEquity        = 2000;
    mpl                  = _mpl;
    swapOutRequired      = 10_000;
    treasuryFee          = 50;
    stakerCooldownPeriod = 10 days;
    stakerUnstakeWindow  = 2 days;

    emit Initialized();
}
```

Same approach should be taked for `setUp` functions in tests:
```solidity
function setUp() public {
    account1      = new Account();
    account2      = new Account();
    fundsToken    = new MockToken("Token", "TKN");
    fundsTokenFdt = new CompleteBasicFundsTokenFDT("BasicFDT", "FDT", address(fundsToken));
}
```

If the result of a line is needed for a lower line that would break alphabetical order, simply add a line break.

## Natspec
Natspec must only exist in interface files and must be aligned according to the following example:
```solidity
    /**
     *  @dev    Repay all principal and fees and close a loan.
     *  @param  amount_    An amount to pull from the caller, if any.
     *  @return principal_ The portion of the amount paid paying back principal.
     *  @return interest_  The portion of the amount paid paying interest fees.
     */
    function closeLoan(uint256 amount_) external returns (uint256 principal_, uint256 interest_);
```

## Test Assertions
For assertions of the same type, the parameters must be aligned so that the second set of parameters is left justified, and the inline comments (if any exist) are aligned to be two spaces from the longest line. Example shown below:
```solidity
assertEq(mockToken.balanceOf(address(treasury)), 0);    // Withdraws all funds
assertEq(mockToken.balanceOf(address(mpl)),      100);  // Withdrawn to MPL address, where accounts can claim funds
assertEq(mockToken.balanceOf(address(holder1)),  0);    // Token holder hasn't claimed
assertEq(mockToken.balanceOf(address(holder2)),  0);    // Token holder hasn't claimed
```

Another example of this:
```solidity
assertEq(token.fundsBalance(),   60_000);
assertEq(token.pointsPerShare(), expectedPointsPerShare);
```

When asserting a failure condition, align the `assertTrue` functions so that the function names are aligned. Example shown below:
```solidity
assertTrue(!notGov.try_treasury_distributeToHolders(address(treasury)));  // Non-governor can't distribute
assertTrue(    gov.try_treasury_distributeToHolders(address(treasury)));  // Governor can distribute
```

# Function Modifiers
Function modifiers should be ordered in the following manner:
```
Visibility
Mutability
Virtual
Override
Custom modifiers
```

# Tuples
When destructuring a tuple returned from a function, use spaces between all commas and brackets. Example:
```solidity
( , , uint256 foo, uint256 bar, , uint256 baz, , , ) = functionName();
( success, ) = functionName();
```

# Inline Comments
When making comments, make comment above line of code, with a line break above.
If its a small comment, it can me made inline with two spaces after the semicolon.

# Conditional Statements
If an if statement must be used, use the following ordering in terms of preference:
- Ternary operator syntax
- If statement exit condition (write the if statement that exits first, to minimize indentation)
- If/else statement

# Underscore Syntax for Variables
- Prepend undersore for internal variable: `_variableName`
- Append underscore for function parameters and return variables: `variableName_`
- No underscore for variables assigned in memory: `variableName`

# Memory variable Caching
If a storage variable is needed more than once, cache it to memory.

# Return Types
Only use primitive types in return statements.
