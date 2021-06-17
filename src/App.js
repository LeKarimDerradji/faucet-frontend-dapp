import Dapp from "./components/Dapp";
import React from 'react'
import {useContract} from "web3-hooks"
import { 
  faucetAddress, 
  faucetAbi } from "./contracts/Faucet";
import { FaucetContext } from "./contexts/FaucetContext";


function App() {

  const faucet = useContract(faucetAddress, faucetAbi)

  return (
   <FaucetContext.Provider value={faucet}> 
    <Dapp />
   </FaucetContext.Provider>
  );
};

export default App;
