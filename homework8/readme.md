**Part 2**

**Hardhat**

 Using your choice of hardhat, foundry or truffle 

1.Create a project for your Badger coin 

2.Write unit tests for your Badger coin contract 

  The tests should show that 

*   The total supply is initially 1000000 
*   That the number of decimals is 18 
*   The balanceOf function returns the correct result 
*   The transfer function works correctly 
*   Test that an error is produced if a transfer is created with an insufficient balance

For help with the syntax for unit tests see

**Hardhat:** [https://hardhat.org/guides/waffle-testing.html](https://hardhat.org/guides/waffle-testing.html)  
**Foundry :** [https://book.getfoundry.sh/forge/tests](https://book.getfoundry.sh/forge/tests)  
**Truffle :** [https://trufflesuite.com/docs/truffle/testing/writing-tests-injavascript.html](https://trufflesuite.com/docs/truffle/testing/writing-tests-injavascript.htm
```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Badger is ERC20 {
    constructor() ERC20("Badger", "BAD") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
    function decimals() override public pure returns (uint8) {
        return 18; // explicit decimal definition
    }
}

```
**Test command**

npx hardhat test
![image](https://user-images.githubusercontent.com/64911708/225494762-5ecc021c-cf93-4d96-80b3-0b4285d51e9f.png)
