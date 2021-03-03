require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth situate unlock hidden globe forget square'; 
let testAccounts = [
"0xc71d333ad0f65454108936db58045877d04dc821554be35d79064458548da7bf",
"0xf7dee85f6ae0d1b8c9e9be9260fbe0c40a2c6e135d91ea0d585de3399b6273fb",
"0x6bd48e08e60dee7078bbbab3b208c45774f8a6c84f47e42972de96dab5fbb58a",
"0xb412c0705c7e61c1a6f45724e00750d46ce3d7a380b6ccbee12c471909d98f47",
"0x85e9bf261558a69816c797f67170850d108bae2e6a0d5df2540394bf970234ad",
"0xbc01a3ba9434352a39545952ffae04f9ba623c2041472bf2159f949cc3d55a32",
"0x50f975ed56b19562f172fe64604810ffc47ea87f2955bf099b8dafcf48b9fe20",
"0xa11b8af914dea5a17b3122b6e9e24a17924cc994a25ed448a20628bce4171c58",
"0xf2a1b9a39db322c6889a8fba64a1aaea61c91d46acc78edc5c2d328d8ae1c5d2",
"0x2604120c21d7547b2c7daa0d648235522c8e17b203882d19808dc8647445ca9e"
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
