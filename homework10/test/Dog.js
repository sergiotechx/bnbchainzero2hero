const {
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");


async function deploy() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const Dog = await ethers.getContractFactory("Dog");
    const dog = await Dog.deploy();
    return { dog, owner, otherAccount };
}

describe("Dog tests", function () {

    it("TotalSupply testing", async function () {
        const { dog, owner } = await loadFixture(deploy);
        const totalSupply = parseInt(ethers.utils.formatUnits(await dog.totalSupply(), 18));
        const expectedTotalSupply = 2000000.0;
        expect(totalSupply).to.equal(expectedTotalSupply);

    });

    it("Mint testing", async function () {
        const { dog, owner } = await loadFixture(deploy);
        const totalSupply = parseInt(ethers.utils.formatUnits(await dog.totalSupply(), 18));
        const tx = await dog.mint1000();
        const newtotalSupply = parseInt(ethers.utils.formatUnits(await dog.totalSupply(), 18));
        const deltaSupply = newtotalSupply - totalSupply;
        expect(deltaSupply).to.equal(1000);
    });

    it("only owner can mint", async function () {
        const { dog, owner, otherAccount } = await loadFixture(deploy);
        try {
            const tx = await dog.connect(otherAccount).mint1000();
        } catch (error) {
            console.log(`Message error: ${error.message}`);
            expect(error.message).to.include('Ownable: caller is not the owner');
        }
    });

    it("transfer event test", async function () {
        const { dog, owner, otherAccount } = await loadFixture(deploy);
        const tx = await dog.transfer(otherAccount.address, 10_000);
        const resolvedTx = await tx.wait();
        expect(resolvedTx.events[0].event).to.equal("Transfer");
    });
});




