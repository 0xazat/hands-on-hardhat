const hre = require("hardhat");

async function main() {
  const MyOwnToken = await hre.ethers.getContractFactory("MyOwnToken");

  // MyOwnToken constructor take initialSupply parameter. 10000 * 1e18
  const myOwnToken = await MyOwnToken.deploy("10000000000000000000000");

  await myOwnToken.deployed();

  console.log("MyOwnToken deployed to: ", myOwnToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
