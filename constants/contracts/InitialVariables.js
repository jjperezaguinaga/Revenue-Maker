
module.exports ={
   ADDRESS:'0x9e6606DEdCF9D4960f8652ABE2D624a048231841',
   ABI:[
{
"constant": false,
"inputs": [
{
"name": "_myBitFoundation",
"type": "address"
},
{
"name": "_installerEscrow",
"type": "address"
}
],
"name": "startDapp",
"outputs": [],
"payable": false,
"stateMutability": "nonpayable",
"type": "function"
},
{
"constant": false,
"inputs": [
{
"name": "_signer",
"type": "address"
},
{
"name": "_functionName",
"type": "string"
},
{
"name": "_newAddress",
"type": "address"
}
],
"name": "changeInstallerEscrowAddress",
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
"name": "_signer",
"type": "address"
},
{
"name": "_functionName",
"type": "string"
},
{
"name": "_accessLevel",
"type": "uint256"
},
{
"name": "_newPrice",
"type": "uint256"
}
],
"name": "changeAccessTokenFee",
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
"name": "_signer",
"type": "address"
},
{
"name": "_functionName",
"type": "string"
},
{
"name": "_newAddress",
"type": "address"
}
],
"name": "changeFoundationAddress",
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
"name": "_ethPrice",
"type": "uint256"
},
{
"name": "_mybPrice",
"type": "uint256"
}
],
"name": "setDailyPrices",
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
"name": "_newPriceExpiration",
"type": "uint256"
}
],
"name": "changePriceUpdateTimeline",
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
"anonymous": false,
"inputs": [
{
"indexed": false,
"name": "_sender",
"type": "address"
},
{
"indexed": false,
"name": "_database",
"type": "address"
}
],
"name": "LogInitialized",
"type": "event"
},
{
"anonymous": false,
"inputs": [
{
"indexed": false,
"name": "_oldETHPrice",
"type": "uint256"
},
{
"indexed": false,
"name": "_oldMYBPrice",
"type": "uint256"
}
],
"name": "LogPriceUpdate",
"type": "event"
}
]
}
