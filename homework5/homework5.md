**Homework 5**

Badger coin contract 1.  
Create an BEP20 contract with the following details :  
Name : "BadgerCoin"   
Symbol : "BC"   
Decimals : 18   
Initial supply : 1000000 tokens 

Deploy this to a test network and exchange some with your colleagues.   
You may inherit from Open Zeppelin contracts.

```plaintext

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC20/ERC20.sol";

contract BadgerCoin is ERC20 {
    constructor() ERC20("BadgerCoin", "BC") {
         _mint(msg.sender, 1000000 * 10 ** decimals());
    }
    function decimals() override public pure returns (uint8) {
        return 18; // explicit decimal definition
    }
}
```

**Deployed contract**: 0x8dA3de6C22AbF6e626ba8F33a085393880Bd739d

**Verification:**

**Explorer:**

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework5/explorer.PNG?raw=true)  

**Read Operation:**  
![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework5/Reading.PNG?raw=true)

**Write operation:**  
![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework5/Write1.PNG?raw=true)  
![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework5/Write2.PNG?raw=true)
