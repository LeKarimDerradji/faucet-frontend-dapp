import React from "react";
import { useContext, useEffect, useState } from "react";
import { Web3Context } from "web3-hooks";
import secretSoundFile from '../res/sounds/secret.wav'


import {
  Alert,
  AlertIcon,
  Input,
  Button,
  Link,
  Flex,
  Spacer,
  Heading,
  Text,
  HStack,
  VStack,
  Spinner,
  useToast,
  Box,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

/*
import { FaucetContext } from './App'
import { FaucetAddress } from './contracts/Faucet'
*/

const Faucet = () => {
  const [web3State, login] = useContext(Web3Context);
  /*const faucet = useContext(FaucetContext)*/
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(0);

  const handleOnClick = async () => {
    const audio = new Audio(secretSoundFile)
              await audio.play()
  }

  return (
    <>
  

        <Box m={100} alignSelf="center" >
        <>
          {web3State.chainId === 4 ? (
           
            <>
             <VStack>
              <Text color="pink.100" as="b" fontSize="20" textAlign='center'>
                Time Remaining before next Allowance: {value}
              </Text>
              
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src="https://i.pinimg.com/originals/63/aa/5f/63aa5ff9ac06d003d90dff41f6d798be.gif"
                  alt="Khristal Token"
                />
                <Button
                  isLoading={isLoading}
                  loadingText="setting storage"
                  colorScheme="purple"
                  onClick={handleOnClick}>
                  GET 10 KHRISTAL
                </Button>
              </VStack>
            </>
          ) : (
            <Alert status="error">
              <AlertIcon />
              You are on the wrong network please switch to Rinkeby
            </Alert>
          )}
        </>
        </Box>
    </>
  );
};

export default Faucet;
