import { Tabs, TabList, TabPanels, Tab, TabPanel, useToast} from "@chakra-ui/react";
import Header from "./components/Header";
import Dapp from "./components/Dapp";
import React from 'react'
import {useContract} from "web3-hooks"
import { 
  faucetAddress, 
  faucetAbi } from "./contracts/Faucet";
import { FaucetContext } from "./contexts/FaucetContext";
import {
  tokenAddress,
  tokenAbi } from './contracts/Token'
import { KhristalContext } from "./contexts/KhristalContext";

import chestAppearsOneSound from './res/sounds/chest_appears_1.wav'
import chestAppearsTwoSound from './res/sounds/chest_appears_2.wav'
import KhristalDapp from "./components/KhristalDapp";



function App() {
  const toast = useToast();
  const faucet = useContract(faucetAddress, faucetAbi)
  const khristal = useContract(tokenAddress, tokenAbi)
  const tabsOnChange = async (e) => {
    if (e === 1) {
      const audio = new Audio(chestAppearsOneSound)
          await audio.play()
    } else if (e === 0) {
      const audio = new Audio(chestAppearsTwoSound)
          await audio.play()
    }
  }

  return (
    
    <Tabs onChange={(e) => tabsOnChange(e)}  align="end" variant="enclosed"  m={0} colorScheme='purple'>
      <TabList backgroundColor='purple.900' colorScheme='purple'>
        <Tab backgroundColor='pink.100'>Faucet</Tab>
        <Tab backgroundColor='pink.100'>RemixLike</Tab>
      </TabList>
      <Header />
      <TabPanels>
        <TabPanel >
          <FaucetContext.Provider value={faucet}>
          <Dapp />
           </FaucetContext.Provider>
        </TabPanel>
        <TabPanel>
          <KhristalContext.Provider value={khristal}>
           <KhristalDapp />
          </KhristalContext.Provider> 
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default App;
