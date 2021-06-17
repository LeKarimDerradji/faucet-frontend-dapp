export const faucetAddress = '0x7a72f657723C8d2725f2b9C7Eb8a5Bd5ADD35458';


export const faucetAbi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress_",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "currentTimestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestampLastAccess",
          "type": "uint256"
        }
      ],
      "name": "TimeRemaining",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "TokenSent",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "address_",
          "type": "address"
        }
      ],
      "name": "allowedToWithdraw",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "requestTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]