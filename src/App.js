import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Dapp from "./components/Dapp";
//import ContractsContextProvider from "./contexts/ContractsContext";

function App() {
  /*const faucet = useContract(FaucetAddress, FaucetAbi)*/
  return (
    <Tabs isFitted variant="enclosed">
      <TabList>
        <Tab>Faucet</Tab>
        <Tab>RemixLike</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {/* <FaucetContext.Provider value={faucet}> */}
          <Dapp />
          {/* </FaucetContext.Provider> */}
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
