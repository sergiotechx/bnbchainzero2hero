**Homework 9**  
Ethers  
Using the code in this repo as a guide

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

 contract Badger is ERC20 {

    constructor() ERC20("Badger", "BAD") {
        _mint(msg.sender, 1000000 \* 10 \*\* decimals());
    }

    function decimals() override public pure returns (uint8) {

        return 18; // explicit decimal definition
    }
}
```
  
1\. Write code to create a contract object for your deployed Badger coin  
contract  
2\. Write code to call the methods on your Badger coin contract

**Solution:**

Deployed address on BSC testnet: 0x5188Ae3eeDA24B42897721F4E7323bf76A8966AB
```javascript

//library en enviroment import_
import { ethers } from "ethers";
import \* as dotenv from 'dotenv';
dotenv.config();

//Connection setup_
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/bsc_testnet_chapel");
const signer = new ethers.Wallet(process.env.PRIVATE\_KEY, provider);
//test functions_

const badgerAbi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount)",
];

//Badger contract address on BSC testnet_
const badgerAddress = "0x5188Ae3eeDA24B42897721F4E7323bf76A8966AB";
const badgerContract = new ethers.Contract(badgerAddress, badgerAbi, provider);
const ownerAddress = '0xe3559E8547d2CA11d7f6F834185b50F4F8312a6C';
const secundaryAddress = '0xb221EFcCa3D26084d7068abAF0ECa85E028e2454';

//Badger playground
async function ethersPlayGround() {

   //Reading operations
   console.log('Token name:', await badgerContract.name());
   console.log('Token symbol:', await badgerContract.symbol());
   console.log(\`Owner address: ${ownerAddress}\`);
   console.log('Owner balance:', ethers.utils.formatUnits(await badgerContract.balanceOf(ownerAddress), 18));
   
   //Write operations
    const badgerqty = ethers.utils.parseUnits("1.0", 18);
    console.log(\`making a transfer to ${secundaryAddress}\`);
    const badgerWithSigner = badgerContract.connect(signer);
    const tx = await badgerWithSigner.transfer(secundaryAddress, badgerqty);
    console.log(tx);
}

ethersPlayGround();
```

**How to run:**
node index
