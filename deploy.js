const HDWalletProvider = require('@truffle/hdwallet-provider');
const { Web3 } = require('web3');
const contract = require('./compile');

const provider = new HDWalletProvider(
   'frown play injury gospel wasp economy circle estate execute invite nice erase',
   'https://sepolia.infura.io/v3/f7665eddc0f543cfb5b9401bd6d70941'
);

const web3 = new Web3(provider);

const deploy = async () => {
   const accounts = await web3.eth.getAccounts();

   console.log('Attempting to deploy from account', accounts[0]);

   const result = await new web3.eth.Contract(JSON.parse(contract.interface))
      .deploy({ data: '0x' + contract.bytecode, arguments: ['Hi there!'] })
      .send({ gas: '4000000', from: accounts[0], gasPrice: web3.utils.toWei('2', 'gwei') })
      .catch(err => console.log('Contract NOT deployed ', err));;

   console.log('Contract deploy to ', result.options.address);

   provider.engine.stop();

};

deploy();