import { ethers } from "hardhat";
import { helpers } from "@nomicfoundation/hardhat-toolbox/network-helpers";

const main = async () =>{
    const UniswapAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";

    const uniswap = await ethers.getContractAt("IUniswap", UniswapAddress);

    const factoryAddress = await uniswap.factory();
    // await factoryAddress.wait();

    console.log(`uniswap factory contract address ${factoryAddress}`);


    const wethAddress = await uniswap.WETH();

    console.log(`cornical weth address is ${wethAddress}`);
}

main().catch((error)=>{
    
    console.log(error);
    process.exitCode = 2;
});