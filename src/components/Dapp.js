import ERC20 from "./ERC20Token";
import Faucet from "./Faucet";
import Header from "./Header";
import { Box } from "@chakra-ui/react";

const Dapp = () => {
  return (
    <>
      <Box minH="100vh" bgGradient="linear(-45deg,#FFFFFF,#DDEEAA)">
        <Header />
        <ERC20 />
        <Faucet />
      </Box>
    </>
  );
};

export default Dapp;
