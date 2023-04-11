const { ethers, upgrades } = require("hardhat");
const proxy = "0xA50E27cbdA67997F0F62B1BA8b3B61b453D2608c";
async function main(){
    const UpgradeMeV2 = await ethers.getContractFactory("UpgradeMeV2");
    await upgrades.upgradeProxy(proxy, UpgradeMeV2);
    console.log("Upgraded! XD");
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
