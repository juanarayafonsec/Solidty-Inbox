//import {assert} from 'assert';   
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
    });
});