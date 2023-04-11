**Homework 17**  
**Upgradability Homework**  
Using this [contract](https://gist.github.com/extropyCoder/11df000e4b0d7c94510fbd84e19f9650)  
Make the necessary changes to the contract so that it can be upgraded  
using the OZ UUPS standard.  

**Remix version**
``` solidity
// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.19;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract UpgradeMeV1 is Initializable,  OwnableUpgradeable, UUPSUpgradeable {
      enum PaymentOptions{ Pay, Borrow, Defer, Extra }
      PaymentOptions constant defaultChoice = PaymentOptions.Pay;
      mapping(address=>uint256) balance;
      uint256 initialBlock;
      uint256 nextPayout = 0;
      string constant name = "Payout Tool";

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize() initializer public {
        __Ownable_init();
        __UUPSUpgradeable_init();
       initialBlock = block.number;
       nextPayout = initialBlock;
    }

    function _authorizeUpgrade(address newImplementation)   internal override     onlyOwner  {}
    
    function processPayment(PaymentOptions  _option, address _to, uint256 _amount) public {
        uint256 surcharge = 10;

        if(_option == PaymentOptions.Extra){
            surcharge = 20;
        }
        if(_to ==  owner() ) {
             surcharge = 0;
        }
        uint256 transferAmount = _amount + surcharge; 
        require(balance[msg.sender] > transferAmount, "Low Balance"); 
        balance[msg.sender] = balance[msg.sender] - transferAmount;
        balance[_to] = balance[_to] + transferAmount; 
    }
}
```
Use the hardhat plugin to deploy the contract  
For the next version, change the processPayment function to update the  
payout block to be the current block.  
Use the hardhat plugin to deploy the upgraded contract.

After upgrade the contract via hardhat

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework15/1.PNG?raw=true)
