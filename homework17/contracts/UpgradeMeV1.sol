// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract UpgradeMeV1 is Initializable,  OwnableUpgradeable, UUPSUpgradeable {
    
   enum PaymentOptions {
        Pay,
        Borrow,
        Defer,
        Extra
    }
    
    PaymentOptions constant defaultChoice = PaymentOptions.Pay;
    mapping(address => uint256) balance;
    uint256 initialBlock;
    uint256 nextPayout ;
    string constant name = "Payout Tool";

    // @custom:oz-upgrades-unsafe-allow constructor
    function initialize() initializer public  {
        __Ownable_init();
        __UUPSUpgradeable_init();
        initialBlock = block.number;
        nextPayout = initialBlock;
    }

    function processPayment( PaymentOptions _option, address _to,  uint256 _amount) public {
        uint256 surcharge = 10;
        if (_option == PaymentOptions.Extra) {
            surcharge = 20;
        }
        if (_to == owner()) {
            surcharge = 0;
        }
        uint256 transferAmount = _amount + surcharge;
        require(balance[msg.sender] > transferAmount, "Low Balance");
        balance[msg.sender] = balance[msg.sender] - transferAmount;
        balance[_to] = balance[_to] + transferAmount;
    }

      function _authorizeUpgrade(address newImplementation)   internal override     onlyOwner  {}
}
