import Dapp from './Dapp'
import { useContract } from 'web3-hooks'
import React from 'react'
/*
import {
  FaucetAddress,
  FaucetAbi,
} from './contracts/Faucet' */

/*export const FaucetContext = React.createContext(null)*/


function App() {
  /*const faucet = useContract(FaucetAddress, FaucetAbi)*/
  return (
  /*<FaucetContext.Provider value={faucet}>*/
    <Dapp />
  /*</FaucetContext.Provider>*/
  );
}

export default App;
