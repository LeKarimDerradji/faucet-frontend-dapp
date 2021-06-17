import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Header from "./components/Header";
import Dapp from "./components/Dapp";
import React from 'react'
import {useContract} from "web3-hooks"
import { 
  faucetAddress, 
  faucetAbi } from "./contracts/Faucet";
import { FaucetContext } from "./contexts/FaucetContext";
import chestAppearsOneSound from './res/sounds/chest_appears_1.wav'
import chestAppearsTwoSound from './res/sounds/chest_appears_2.wav'



function App() {

  const faucet = useContract(faucetAddress, faucetAbi)

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
      <TabList backgroundColor='purple.400' colorScheme='purple'>
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
