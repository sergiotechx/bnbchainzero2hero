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