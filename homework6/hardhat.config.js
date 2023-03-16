require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {

  solidity: "0.8.18",
  networks: {
    hardhat: {},
    bnbTestnet: {
      url: "https://rpc.ankr.com/bsc_testnet_chapel",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
}


