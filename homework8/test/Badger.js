const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");


async function deploy() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const Badger = await ethers.getContractFactory("Badger");
    const badger = await Badger.deploy();
    return { badger, owner, otherAccount };
}

describe("Badger tests", function () {

    it("Deployment testing", async function () {
        const { badger, owner } = await loadFixture(deploy);
        const address = await badger.address;
        expect(badger.address).to.not.equal(0x0);
        expect(badger.address).to.not.equal("");
    });

    it("TotalSupply testing", async function () {
        const { badger, owner } = await loadFixture(deploy);
        const totalSupply = (BigInt(await badger.totalSupply())).toString();
        const expectedTotalSupply = '1000000000000000000000000';
        expect(totalSupply).to.equal(expectedTotalSupply.toString());

    });

    it("Decimals testing", async function () {
        const { badger, owner } = await loadFixture(deploy);
        const decimals = await badger.decimals();
        const expectedDecimals = 18;
        expect(decimals).to.equal(expectedDecimals);
    });
    
    it("BalanceOf testing", async function () {
        const { badger, owner } = await loadFixture(deploy);
        const balance = (BigInt(await badger.balanceOf(owner.address)));
        const expectedBalance = '1000000000000000000000000';
        expect( balance).to.equal(expectedBalance);
    });
    
    it("Transfer testing", async function () {
        const { badger, owner,otherAccount } = await loadFixture(deploy);
        const operation = await badger.transfer(otherAccount.address,500000000000000000000000n);
        expect( operation.hash).to.include("0x");
    });
    it("Insufficient balance testing", async function () {
        const { badger, owner,otherAccount } = await loadFixture(deploy);
        const operation = await badger.transfer(otherAccount.address,5000000000000000000000000n);
        expect(operation).to.include("Error");
    });
 });




