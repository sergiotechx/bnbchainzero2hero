const {
    time,
    loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");


async function deploy() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const BadgerNFT = await ethers.getContractFactory("BadgerNFT");
    const badgerNFT = await BadgerNFT.deploy("BadgerNFT", "BAD");
    return { badgerNFT, owner, otherAccount };
}

describe("Deployment", function () {
    
    it("Testing deployment", async function () {
        const { badgerNFT, owner } = await loadFixture(deploy);
        const address = await badgerNFT.address;
        expect(badgerNFT.address).to.not.equal(0x0);
        expect(badgerNFT.address).to.not.equal("");
    });

    it("Testing minting", async function () {
        const { badgerNFT, owner } = await loadFixture(deploy);
        const ipfs = "ipfs://bafkreie75mrxthzcvw7qhugaoqqrmfrnhdccdmucgi5fitlu5idvqszxie"
        const hash = await badgerNFT.mint(owner.address, 1, ipfs);
        expect(hash.hash).to.not.equal(0x0);
        expect(hash.hash).to.not.equal("");
    });

    it("Testing minting and transfer", async function () {
        const { badgerNFT, owner, otherAccount } = await loadFixture(deploy);
        const ipfs = "ipfs://bafkreie75mrxthzcvw7qhugaoqqrmfrnhdccdmucgi5fitlu5idvqszxie"
        const hash = await badgerNFT.mint(owner.address, 1, ipfs);

        if (!(hash.hash.includes("0x0") || hash.hash.length == 0)) {

            const hash2 = await badgerNFT.transferFrom(owner.address, otherAccount.address, 1);
            expect(hash2.hash).to.not.equal(0x0);
            expect(hash2.hash).to.not.equal("");
        }
        else {
            expect(1).to.equal(2);
        }


    });

});




