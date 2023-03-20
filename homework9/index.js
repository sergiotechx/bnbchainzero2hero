//library en enviroment import
import { ethers } from "ethers";
import * as dotenv from 'dotenv';
dotenv.config();

//Connection setup
const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/bsc_testnet_chapel");
const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

//test functions
const badgerAbi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount)",
];

//Badger contract address on BSC testnet
const badgerAddress = "0x5188Ae3eeDA24B42897721F4E7323bf76A8966AB";
const badgerContract = new ethers.Contract(badgerAddress, badgerAbi, provider);
const ownerAddress = '0xe3559E8547d2CA11d7f6F834185b50F4F8312a6C';
const secundaryAddress = '0xb221EFcCa3D26084d7068abAF0ECa85E028e2454';

//Badger playground
async function ethersPlayGround() {
    //Reading operations
    console.log('Token name:', await badgerContract.name());
    console.log('Token symbol:', await badgerContract.symbol());
    console.log(`Owner address: ${ownerAddress}`);
    console.log('Owner balance:', ethers.utils.formatUnits(await badgerContract.balanceOf(ownerAddress), 18));
    //Write operations 
    const badgerqty = ethers.utils.parseUnits("1.0", 18);
    console.log(`making a transfer to ${secundaryAddress}`);
    const badgerWithSigner = badgerContract.connect(signer);
    const tx = await badgerWithSigner.transfer(secundaryAddress, badgerqty);
    console.log(tx);
}

ethersPlayGround();

