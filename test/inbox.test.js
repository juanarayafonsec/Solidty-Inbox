//import {assert} from 'assert';   
import { Web3 } from 'web3';
import  ganache  from 'ganache';
const web3 = new Web3(ganache.provider());

let accounts;

beforeEach( async()  => {
    //  Get a list oof all accounts
    accounts = await web3.eth.getAccounts();
    // Use one of those accounts to deploy 
    // the contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    });
});