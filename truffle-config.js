


let HDWalletProvider = require('truffle-hdwallet-provider');
let mnemonic = "seminar melt phrase clerk stage usage jazz series payment bitter large mercy"; // Paste in your mnemonics here for testnet






module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '*',
    },
  rinkby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/d26c3db0b4324ec39b9befbdcd827c6b");
      },
      network_id: '4',
    },
  }
}
