**Homework 4**  
**Solidity**  
[To this contract](https://gist.github.com/extropyCoder/77487267da199320fb9c852cfde70fb1)  
1\. Add a variable to hold the address of the deployer of the contract  
2\. Update that variable with the deployer's address when the contract is  
deployed.  
3\. Write an external function to return  
1\. Address 0x000000000000000000000000000000000000dEaD if called by  
the deployer  
2\. The deployer's address otherwise
```solidity
// SPDX-License-Identifier: None

pragma solidity 0.8.17;


contract BootcampContract {

    uint256 number;
    address  private deployer;
    constructor(){
       deployer = msg.sender; 
    }


    function store(uint256 num) public {
        number = num;
    }


    function retrieve() external view returns (uint256){
        
        return number;
    }
    
    function getdeployer() public view returns (address){
       if(msg.sender == deployer){
        return 0x000000000000000000000000000000000000dEaD;
       }
       else{
           return deployer;
       }
     }
}
```

---

**DogCoin contract**  
1\. In Remix, create a new file called DogCoin.sol .  
2\. Define the pragma compiler version to 0.8.18 .  
3\. Before the pragma version, add a license identifier  
// SPDX-License-Identifier: UNLICENSED .  
4\. Create a contract called DogCoin.  
5\. Create a variable to hold the total supply, with an initial amount of 2 million.  
6\. Make a public function that returns the total supply.7. Make a public function that can increase the total supply in steps of 1000.  
8\. Declare an address variable called owner . this address will be allowed to  
change the total supply  
9\. Next, create a modifier which only allows an owner to execute certain  
functions.  
10\. Make your change total supply function public , but add your modifier so  
that only the owner can execute it.  
11\. Create a constructor to initialise the state of the contract and within the  
constructor, store the owner's address.  
12\. Create an event that emits the new value whenever the total supply changes.  
When the supply changes, emit this event.  
13\. In order to keep track of user balances, we need to associate a user's  
address with the balance that they have.  
a) What is the best data structure to hold this association ?  
b) Using your choice of data structure, set up a variable called balances to  
keep track of the number of tokens that a user has.  
14\. We want to allow the balances variable to be read from the contract, there  
are 2 ways to do this.  
What are those ways ?  
Use one of the ways to make your balances variable visible to users of the  
contract.  
15\. Now change the constructor, to give all of the total supply to the owner of  
the contract.  
16\. Now add a public function called transfer to allow a user to transfer their  
tokens to another address. This function should have 2 parameters :  
the amount to transfer and  
the recipient address.  
Why do we not need the sender's address here ?  
What would be the implication of having the sender's address as a parameter ?  
17\. Add an event to the transfer function to indicate that a transfer has taken  
place, it should log the amount and the recipient address.  
18\. We want to keep a record for each user's transfers. Create a struct called  
Payment that stores the transfer amount and the recipient's address.  
19\. We want to have a payments array for each user sending the payment.  
Create a mapping which returns an array of Payment structs when given this  
user's address.
```solidity
// SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.18;
contract DogCoin{
    address owner;
    uint256 decimals = 1000000000000000000;
    uint256 totalSupply ;
    string name;
    string symbol;
    mapping (address=>uint256) balances;
    mapping (address=>Payment[]) transferHistory;
    
    struct Payment{
        uint256 amount;
        address recipient;
    }
    
    constructor (){
        name ="DogCoin";
        symbol="DG";
        _mint(2000000);
        owner = msg.sender;
        balances[owner] = getTotalSupply();
    }

    event TotalSupplyModification(uint256);
    event TransferDone(Payment);

    modifier onlyOwner {
      require(msg.sender == owner,"not owner attempt operation");
      _;
    }
    
    modifier enoughBalance(uint256 qty){
        uint256 tempQty = qty  * decimals;
        require( balances[msg.sender] >= tempQty,"insufficient balance");
         _;
    }
    
    function getTotalSupply() public view returns( uint256){
        return totalSupply;
    }
    
    function _mint(uint256 qty) internal{
         totalSupply += qty * decimals ;
        emit TotalSupplyModification(totalSupply);
    }
    function add1000ToTotalSupply() public onlyOwner{ 
        
        _mint(1000);
    }
    
    function changeTotalSupply(uint256 newTotalSupply) public onlyOwner{
        totalSupply = newTotalSupply * decimals ;
         emit TotalSupplyModification(totalSupply);
    }
    
    function getBalance(address wallet) public view returns(uint256){
        return (balances[wallet]);
    }
   
    function transfer(uint256 amount, address to) public enoughBalance(amount){
        balances[msg.sender]-= amount *decimals;
        balances[to]+= amount  *decimals;
        transferHistory[msg.sender].push(Payment(amount *decimals,to));
        emit TransferDone(Payment(amount  *decimals,to));
    }
    
    function getTransferHistory(address  recipient) public view  returns (Payment[] memory){
         return transferHistory[recipient];
    }
}
```
---

**Same but different, time to real FUN!**
ERC20 token, using openzeppelin :), if you want you can create your pet coin with this code.
No pets were damaged during smart contract creation or testing process!
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealDogCoin is ERC20, Ownable {

   struct Payment  {
        uint256 transferAmount;
        address recipientAddress;
    }
 
    mapping(address => Payment[])  Payments;
    
    constructor() ERC20("RealDogCoin", "DOG") {
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

```
