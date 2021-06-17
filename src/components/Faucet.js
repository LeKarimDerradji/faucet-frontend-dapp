import React from "react";
import { useContext, useEffect, useState } from "react";
import { Web3Context } from "web3-hooks";
import { ethers } from "ethers";
import secretSoundFile from '../res/sounds/secret.wav'
import chestSoundFile from '../res/sounds/item_get_1.wav'
import { FaucetContext } from "../contexts/FaucetContext";


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





const Faucet = () => {
  const faucet = useContext(FaucetContext)
  const [web3State, login] = useContext(Web3Context);
  /*const faucet = useContext(FaucetContext)*/
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(0);

  

  console.log(faucet)

  const handleClickRequestTokens = async () => {
    try {
      setIsLoading(true)
      let tx = await faucet.requestTokens()
      await tx.wait()
      toast({
        title: 'You recieved 10 Khristal!',
        description: `Use it wisely! `,
        status: 'success',
        duration: 10000,
        isClosable: true,
      })
    } catch (e) {
      console.log(e)
      if (e.code === 3) {
        toast({
          title: 'You already claimed 10 Khristal, wait for 3 days!',
          description: e.message,
          status: 'error',
          duration: 10000,
          isClosable: true,
        })
      }
    } finally {
      setIsLoading(false)
    }
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
                  loadingText="Requesting Khristals..."
                  colorScheme="purple"
                  onClick={handleClickRequestTokens}>
                  GET 10 KHRISTAL
                </Button>

              </VStack>
            </>
          ) : (
            <Alert fontWeight='bold' fontSize='20px' status="error" backgroundColor='purple.400' color='pink.700'>
              <AlertIcon  color='purple' />
              You are on the wrong network, please switch to Rinkeby
            </Alert>
          )}
        </>
        </Box>
    </>
  );
};

export default Faucet;
