**Homework 10**  
**Hardhat 2**  
For the Dog coin contract you created  

1\. Add an internal function called \_mint  to increase the total supply,  
any increase in supply should be given to the contract owner.  

2\. Add some unit tests to test the following.  

*   The total supply can be increased in steps of 1000
*    Only the owner can increase the total supply  
*    The correct events are produced when transfers occur.

**Doge.sol source code**
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Dog is ERC20, Ownable {

   struct Payment  {
        uint256 transferAmount;
        address recipientAddress;
    }
 
    mapping(address => Payment[])  Payments;
    
    constructor() ERC20("DogCoin", "DOG") {
        _mint(msg.sender, 2000000 * 10 ** decimals());
        
    }

    function mint1000( ) public onlyOwner {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
    
    function getPayments(address  origin) public  view returns( Payment[] memory) {
       return(Payments[origin]);
    }
    
    function _afterTokenTransfer(address from, address to, uint256 amount)  internal virtual override
    {
        super._afterTokenTransfer(from, to, amount);
        Payments[from].push(Payment(amount, to));
        emit Transfer(from, to, amount);
    }
}
````

![image](https://raw.githubusercontent.com/sergiotechx/bnbchainzero2hero/main/homework10/test.PNG)

