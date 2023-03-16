// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {


  const BadgerNFT = await hre.ethers.getContractFactory("BadgerNFT");
  const badgerNFT = await BadgerNFT.deploy("BadgerNFT", "BAD");
  console.log(`Successfuly deployed contract address ${badgerNFT.address}`)
  await badgerNFT.deployed();
  console.log("*********minting and sending**************");
  const [owner, otherAccount] = await ethers.getSigners();
  const ipfsdata = "ipfs://bafkreie75mrxthzcvw7qhugaoqqrmfrnhdccdmucgi5fitlu5idvqszxie"
  const hash = await badgerNFT.mint(owner.address, 0, ipfsdata);
  if (hash.hash.length > 0) {
    console.log(`Sucessfuly minted to address ${owner.address}`)
    console.log(`hash transaction ${hash.hash}`)
    const url = " https://testnets.element.market/assets/bsctest/" + badgerNFT.address + "/0"
    console.log(`Wait 60 seconds and check your wonderful NFT 🥳`)
    console.log(`lets's see your NFT!!! 🙂 ${url}`)
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
