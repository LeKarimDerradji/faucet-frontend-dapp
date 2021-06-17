import React from "react";
import { useContext, useEffect, useState } from "react";
import { Web3Context } from "web3-hooks";

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

const Dapp = () => {
  const [web3State, login] = useContext(Web3Context);
  /*const faucet = useContext(FaucetContext)*/
  const toast = useToast();
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, SetInputValue] = useState("");

  const {
    isOpen: isOpenLogoutModal,
    onOpen: onOpenLogoutModal,
    onClose: onCloseLogoutModal,
  } = useDisclosure();

  const handleOnClickLogin = () => {
    if (!web3State.isLogged) {
      login();
    } else {
    }
  };

  return (
    <>
      <Modal isOpen={isOpenLogoutModal} onClose={onCloseLogoutModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Logout from a Dapp</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>You can not logout from a Dapp.</Text>
            <Text>
              Disconnect your MetaMask from this website if you want to logout.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onCloseLogoutModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <Box mt={0}
    backgroundImage="url('https://cdn.dribbble.com/users/454765/screenshots/6070873/tumblr_pmvl2uwmln1qjlqyvo1_1280.png')"
    backgroundPosition="center"
    backgroundRepeat="no-repeat"
    backgroundSize='cover'>
      
      <Flex flexDirection="column" alignItems="center" mt={0} ml={5} mr={5} h="300px" >
        
        <Flex
          justifyContent="space-between"
          width="100%"
          m={6}
          alignItems="center"
        >

          <Heading fontSize='50px' color="purple.200" alignSelf="flex-start" size="xl">KHRISTAL Faucet</Heading>

          <Button
            ml={3}
            alignSelf="flex-end"
            colorScheme="purple"
            onClick={() =>
              !web3State.isLogged ? handleOnClickLogin() : onOpenLogoutModal()
            }
          >
            {!web3State.isLogged ? "Log in" : "Log out"}
          </Button>

        </Flex>






        <Heading color="pink.300" m={5} size="m" as="i" alignSelf="flex-start">
          Deployed on Rinkeby at <Link color="blue.400">Etherscan-Link</Link>
        </Heading>

        <Spacer />


        <Box m={200} >
        <>
          {web3State.chainId === 4 ? (
            <>
              <Text color="pink.100" as="b" fontSize="20">
                Time Remaining before next Allowance: {value}
              </Text>
              <VStack>
                <Image
                  borderRadius="full"
                  boxSize="100px"
                  src="https://i.pinimg.com/originals/63/aa/5f/63aa5ff9ac06d003d90dff41f6d798be.gif"
                  alt="Khristal Token"
                />
                <Button
                  isLoading={isLoading}
                  loadingText="setting storage"
                  color="purple.300"
                >
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
      </Flex>
    </Box>
    </>
  );
};

export default Dapp;
