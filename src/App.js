import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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
    <Tabs isFitted variant="enclosed">
      <TabList>
        <Tab>Faucet</Tab>
        <Tab>RemixLike</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <FaucetContext.Provider value={faucet}>
          <Dapp />
           </FaucetContext.Provider>
        </TabPanel>
        <TabPanel>
          {/* <RemixLikeContext.Provider value={ERC20}> */}
          {/* <RemixLike /> */}
          RemixLike
          {/* </RemixLikeContext.Provider> */}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default App;
