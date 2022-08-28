require("@nomiclabs/hardhat-waffle");
const privateKey = "134bf9fdb889707a9e79608dbec664e873fce93b029b5a0b6c443b8226d1a931";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  networks : {
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey]
    },
  },
  solidity: "0.8.4"
};
