**Homework 6**  
**Badger NFT**  
We now want to create an NFT.    
You can use the Open Zeppelin libraries to help with this.

1\.  Create a new project in the IDE of your choice  
2\.  Create a BadgerNFT contract this should inherit from any ERC721    
   implementation from the Open Zeppelin standard libraries  
3\.  Give your NFT a name and a symbol.  
4\.  Write unit tests to check that you can  
     \*        Mint new NFTs   
     \*        Transfer an NFT  
5\.  Deploy your contract to the test network and send some NFTs to your    
   colleagues.    
   For now we won't associate a digital asset with our token.
**NFT Contract:**
```solidity

// SPDX-License-Identifier: MIT_
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BadgerNFT is ERC721, ERC721URIStorage, Ownable {

         constructor(string memory name, string memory symbol) ERC721(name, symbol) {}

         // The following functions are overrides required by Solidity._
         function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
            super._burn(tokenId);
          }
          
          function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
                   return super.tokenURI(tokenId);
          }
  
          function mint(address \_to,uint256 \_tokenId,string calldata \_uri) public onlyOwner {
                  _mint(\_to, _tokenId);
                  _setTokenURI(_tokenId, _uri);
           }

}
```
**commands:** 

npx hardhat compile

npx hardhat test

npx hardhat run --network bnbTestnet .\\scripts\\deploy.js 

**Deployed contract at:** 0x64502B1ABad91ceafb99280E1e973489C1aF1aCc

**NFT Metadata**  
![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework6/metadata.PNG?raw=true)

**The result!**

![](https://github.com/sergiotechx/bnbchainzero2hero/blob/main/homework6/BunnyRules.PNG?raw=true)
