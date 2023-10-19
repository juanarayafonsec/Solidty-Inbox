const assert = require('assert'); 
const  {Web3} = require('web3');
const  ganache = require('ganache');
const web3 = new Web3(ganache.provider());
const contract = require('../compile');

let accounts;
let inbox;

beforeEach( async()  => {
    //  Get a list oof all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy 
    // the contract
   inbox = await new web3.eth.Contract(JSON.parse(contract.interface))
        .deploy({data: contract.bytecode, arguments: ['Hi there!']})
        .send({from: accounts[0], gas: '1000000'})
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();// call can call method but cannot modify the contract
        assert.equal(message,'Hi there!');
    });

    it('can change the message', async () => {
        await inbox.methods.setMessage('bye').send({from: accounts[0]});//can modify the contract
        const message = await inbox.methods.message().call();
        assert.equal(message, 'bye');
    })
});