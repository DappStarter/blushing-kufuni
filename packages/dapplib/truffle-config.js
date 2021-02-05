require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember huge grid problem olympic general'; 
let testAccounts = [
"0xae7e127731880a0a2078903f5fa7f0ccba2726aae6abd1185d7e40b01b42e147",
"0x6b0aa8eea2ae05e5a9ffde4cb4f112d87b981c137f08aee4ffb62ba00d693dd3",
"0x3c1cf6072d19f8c15389ac6dd1c595fd3cb5ee62c9b4bf4eb5e9ff03de536c88",
"0x9890bbbb24df9ca1f17fc74c0728b389b37b17ac0312bebb434bec1ccc7b709e",
"0x93d5ae52409c66e06c72f1544b4ec7e6cae3a599492162fd97cc57e6846f8c1c",
"0x9392ae337b629d6db3cd8d8e7fd193e2df26490bf7a008649f7bdf16d7ac84ad",
"0x094ce6e7f36d4e55e8b63d118bac165a15d44de14e500ea050e7a5560fedaa7e",
"0x8cc14030f6c7a929f2287db0f248fb8c91e0973325b3f6577cfba14f8776f9c2",
"0x97faaa62287950b29015d77b8e93a0bd85cd2da4f62c5a97550408272b67e38c",
"0x6ee447eb15a29c7a55261bd50691316417c79d805172f5ba2079a3621922bc81"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
