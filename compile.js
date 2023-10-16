const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

const contract = solc.compile(source,1).contracts[':Inbox']
const byteCode = contract.bytecode;
const interfaceContract = contract.interface;
//console.log({byteCode, interfaceContract});
module.exports = {byteCode, interfaceContract}
//console.log(solc.compile(source,1));
//module.exports = solc.compile(source,1).contracts[':Inbox'];