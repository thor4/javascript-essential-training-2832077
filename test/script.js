/**
 * Do tests.
 */

var Web3 = require("web3");
// #var provider = "https://mainnet.infura.io/v3/157614abaa59405d92f9be5d7dba81b1";
var provider =
  "https://polygon-mumbai.infura.io/v3/157614abaa59405d92f9be5d7dba81b1";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ", result);
});
