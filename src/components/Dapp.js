import ERC20 from "./ERC20Token";
import Faucet from "./Faucet";
import { Box } from "@chakra-ui/react";

const Dapp = () => {
  return (
    <>
      <Box minH="100vh" m={0}>
        <ERC20 />
        <Faucet />
      </Box>
    </>
  );
};

export default Dapp;
