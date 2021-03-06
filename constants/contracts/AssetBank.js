module.exports = {
  ADDRESS: '0xF9f6A20b1917c7338EA3AcE19e6C14adcf18122c',
  ABI: [
{
"constant": false,
"inputs": [
{
"name": "_assetIDs",
"type": "bytes32[]"
}
],
"name": "batchWithdraw",
"outputs": [
{
"name": "",
"type": "bool"
}
],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "_functionInitiator",
"type": "address"
},
{
"name": "_holdingAddress",
"type": "address"
}
],
"name": "destroy",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": true,
"inputs": [],
"name": "database",
"outputs": [
{
"name": "",
"type": "address"
}
],
"payable": false,
"stateMutability": "view",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "_assetID",
"type": "bytes32"
}
],
"name": "withdraw",
"outputs": [
{
"name": "",
"type": "bool"
}
],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "_assetID",
"type": "bytes32"
}
],
"name": "withdrawManagerIncome",
"outputs": [
{
"name": "",
"type": "bool"
}
],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "_assetID",
"type": "bytes32"
},
{
"name": "_note",
"type": "bytes32"
}
],
"name": "receiveIncome",
"outputs": [
{
"name": "",
"type": "bool"
}
],
"payable": true,
"stateMutability": "payable",
"type": "function"
},
{
"inputs": [
{
"name": "_database",
"type": "address"
}
],
"payable": false,
"stateMutability": "nonpayable",
"type": "constructor"
},
{
"payable": false,
"stateMutability": "nonpayable",
"type": "fallback"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"name": "_locationSent",
"type": "address"
},
{
"indexed": true,
"name": "_amountSent",
"type": "uint256"
},
{
"indexed": true,
"name": "_caller",
"type": "address"
}
],
"name": "LogDestruction",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": true,
"name": "_assetID",
"type": "bytes32"
},
{
"indexed": false,
"name": "_sender",
"type": "address"
},
{
"indexed": false,
"name": "_amount",
"type": "uint256"
},
{
"indexed": false,
"name": "_note",
"type": "bytes32"
}
],
"name": "LogIncomeReceived",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"name": "_funder",
"type": "address"
},
{
"indexed": false,
"name": "_amount",
"type": "uint256"
}
],
"name": "LogIncomeWithdrawl",
"type": "event"
}
]
}
