**Homework 7**  
**Security**

1.  Look at the following contract, there are a number of vulnerabilities  
    and flaws. In your teams try to find all of the problems.  
    You do not need to fix any of the problems.
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BadLotteryGame {
    uint256 public prizeAmount;         // payout amount
    address payable[] public players;    
    uint256 public num_players;        
    address payable[] public prize_winners; 
    event winnersPaid(uint256);

    constructor() {}

    function addNewPlayer(address payable _playerAddress) public payable {
        if (msg.value == 500000) {
            players.push(_playerAddress);
        }
        num_players++;
        if (num_players > 50) {
            emit winnersPaid(prizeAmount);
        }
    }

    function pickWinner(address payable _winner) public {
        if ( block.timestamp % 15 == 0){    // use timestamp for random number
            prize_winners.push(_winner);
        }          
    }

    function payout() public {
        if (address(this).balance == 500000 * 100) {
            uint256 amountToPay = prize_winners.length / 100;
            distributePrize(amountToPay);
        }
    }

    function distributePrize(uint256 _amount) public {
        for (uint256 i = 0; i <= prize_winners.length; i++) {
            prize_winners[i].transfer(_amount);
        }
    }
}
```
**Observations**
1. 0.8.4  version is out dated.
2. import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; without any sense
3. Constructor wihout implementation.
4. addNewPlayer function without access control or roles.
5. pickWinner function is extremely posible to hack!, there is not a real random number.
6. payout function is very sensitive without access control or roles.
7. distributePrize function is very sensitive without access control or roles.
