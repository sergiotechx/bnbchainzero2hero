const {
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("BAD", function () {

  async function BadgetSetup() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const Bad = await ethers.getContractFactory("Bad");
    const bad = await Bad.deploy();
    return { bad, owner, otherAccount };
  }

  describe("Pausable", function () {
    it("Pause on", async function () {
      const { bad } = await loadFixture(BadgetSetup);
      await bad.pause();
      expect(await bad.paused()).to.equal(true);
    });

    it("Unpause", async function () {
      const { bad } = await loadFixture(BadgetSetup);
      await bad.pause();
      await bad.unpause();
      expect(await bad.paused()).to.equal(false);
    });
  });

  describe("Approve test", function () {
    it("Approve", async function () {
      const { bad, owner, otherAccount } = await loadFixture(BadgetSetup);
      await bad.approve(otherAccount.address, 10);
      let value = await bad.allowance(owner.address, otherAccount.address);
      expect(value.toString()).to.equal("10");
    });

    it("TransferFrom", async function () {
      const { bad, owner, otherAccount } = await loadFixture(BadgetSetup);
      await bad.approve(otherAccount.address, 10);
      let value = await bad.allowance(owner.address, otherAccount.address);
      expect(value.toString()).to.equal("10");

      let transaction = await bad
        .connect(otherAccount).transferFrom(owner.address, owner.address, 10);

      expect(transaction.hash).to.not.equal("0x0");
    });

  });
});