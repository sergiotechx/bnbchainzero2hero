const { ethers } = require("hardhat");
const contractAbi = require('../utils/PancakeRouter.json');

async function main() {
  const contractAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
  const contract = await ethers.getContractAt(contractAbi, contractAddress);
  const result = await contract.factory();
  console.log("The factory contract is: ",result);
}

main();