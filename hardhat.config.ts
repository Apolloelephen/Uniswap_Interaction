// import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config({ path: ".env" });

const ALCHEMY_MAINNET_RPC_U = process.env.ALCHEMY_MAINNET_RPC_U;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {
      forking: {
        url: ALCHEMY_MAINNET_RPC_U,
      },
    },
    
  },
  lockGasLimit: 200000000000,
  gasPrice: 10000000000,
};