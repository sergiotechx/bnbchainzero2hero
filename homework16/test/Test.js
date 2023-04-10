const {
  loadFixture
} = require("@nomicfoundation/hardhat-network-helpers");
const helpers = require("@nomicfoundation/hardhat-network-helpers");

const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Defi interact and impersonation", function () {

  let routerContract;
  let legoContract;
  let usdtContract;
  let pairContract;

  const routerAbi = require('../utils/PancakeRouter.json');
  const pairAbi = require('../utils/PancakePair.json');
  const legoAbi = require('../utils/LEGOToken.json');
  const usdtAbi = require('../utils/BEP20USDT.json');


  const routerAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
  const usdtAddress = "0x55d398326f99059fF775485246999027B3197955";
  const legoAddress = "0x520EbCcc63E4d0804b35Cda25978BEb7159bF0CC";
  const pairAddress = "0xb95817627a289EDB10C4fe6a126f41665Eb6B8B9";

  const luckyAccount = ethers.Wallet.createRandom();

  before(async function () {
    routerContract = await ethers.getContractAt(routerAbi, routerAddress);
    legoContract = await ethers.getContractAt(legoAbi, legoAddress);
    usdtContract = await ethers.getContractAt(usdtAbi, usdtAddress);
    pairContract = await ethers.getContractAt(pairAbi, pairAddress);
  });

  it("Get  reserves of LEGO-USDT pair", async function () {
    const reserves = await pairContract.getReserves();
    expect(reserves._reserve0).to.be.gt(0);
    expect(reserves._reserve1).to.be.gt(0);
  });


  it("Impersonate an address and obtain some LEGO", async function () {
    const impersonateAddress = "0xffefE959d8bAEA028b1697ABfc4285028d6CEB10";
    await helpers.impersonateAccount(impersonateAddress);
    const impersonatedSigner = await ethers.getSigner(impersonateAddress);
    await legoContract.connect(impersonatedSigner).transfer(luckyAccount.address, 2000);
    const legoBalance = await legoContract.balanceOf(luckyAccount.address);
    expect(legoBalance).to.be.gt(0);
  });
  /*it("Swap some LEGO for USDT", async function () {
  

    await legoContract.approve(routerAddress, 250);
  
   
    await routerContract.swapExactTokensForTokens(
      250,
      0,
      [legoAddress, usdtAddress],
      luckyAccount.address,
      Math.floor(Date.now() / 1000) + 60 * 20
    );
    const usdtBalance = await usdtContract.balanceOf(luckyAccount.address);
    console.log(usdtBalance);
    const legoBalance = await legoContract.balanceOf(luckyAccount.address);
    console.log(legoBalance);
    //expect(usdtBalance).to.be.equal(250);
  });*/

});