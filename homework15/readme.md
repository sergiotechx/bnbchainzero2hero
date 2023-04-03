**Homework 15**  
Badger Coin improvements  
Using the Badger coin you created in previous homeworks  

**1** Make sure that the approve and transferFrom functions are  
implemented.
**2** Add pausable functionality, you can use the Open Zeppelin pausable  
contract. Any functions that update state should be pausable.  
**3** Write unit tests to test the above functionality.  
**4** Deploy your new contract onto the test network.
**Solidity code**

```Solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Bad is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("BAD", "BAD") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}

```
