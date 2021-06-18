<<<<<<< HEAD
import { useState, useContext, useReducer } from "react";
import { ERC20GetterReducer, tokenGetterState } from "../reducer/ERC20GetterReducer";
=======
import { useState, useContext } from "react";
import { ethers } from "ethers";
import { Web3Context } from "web3-hooks";
>>>>>>> 7bf277c1410db50c782accec6077eb1b9e1850e2
import { KhristalContext } from "../contexts/KhristalContext";
import { ethers } from "ethers";
import {
  Stack,
  HStack,
  VStack,
  StackDivider,
  Center,
  Container,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Box,
  useToast,
  ButtonGroup,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const ERC20Token = () => {
  const [web3state, login] = useContext(Web3Context);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const khristal = useContext(KhristalContext);
  const [tokenBalance, setTokenBalance] = useState(0)
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("0x0");
  const [account, setAccount] = useState('0x0');
  const [spender, setSpender] = useState("0x0");

<
  const [state, dispatch] = useReducer(ERC20GetterReducer, tokenGetterState)
  const { name, symbol, decimals, total} = state;
  

  const [isBalanceOfLoading, setIsBalanceOfLoading] = useState(false);
  const [balance, setBalance] = useState(0);

  // Utiliser un reducer pour ce token
  // parce-que ça fait masse, de masse de fonctions quand meme

  const handleGetName = async () => {
    try {
      let name = await khristal.name()
      dispatch({type: 'GET_NAME', payload: name})
      toast({
        title: "Name of the Token",
        description: ` is ${name}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (error) { 
      console.log(error)
    }
  }

  const handleGetSymbol = async () => {
    try {
      let symbol = await khristal.symbol()
      dispatch({type: 'GET_SYMBOL', payload: symbol})
      toast({
        title: "Symbol of the Token",
        description: ` is ${symbol}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (error) { 
      console.log(error)
    }
  }

  const handleGetTotal = async () => {
    try {
      let totalSupply = await khristal.totalSupply()
      dispatch({type: 'GET_TOTAL', payload: totalSupply})
      toast({
        title: "Total Supply",
        description: `is ${totalSupply}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (error) { 
      console.log(error)
    }
  }

  const handleGetDecimals = async () => {
    try {
      let decimals = await khristal.decimals()
      dispatch({type: 'GET_DECIMALS', payload: decimals})
      toast({
        title: "Number Of Decimals",
        description: `are ${decimals}`,
        status: "success",
        duration: 100000,
        isClosable: true,
      });
    } catch (error) { 
      console.log(error)
    }
  }
  const handleOnClickTransfer = async () => {
    try {
      setIsLoading(true);
      let tx = await khristal.transfer(address, Number(amount));
      await tx.wait();
      toast({
        title: "Transfer effectuée !!",
        description: `Use it wisely! `,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
      if (e.code === "UNPREDICTABLE_GAS_LIMIT") {
        toast({
          title:
            "You already claimed 10 Khristal! Wait until you can withdraw anymore!",
          description: e.message,
          status: "error",
          duration: 10000,
          isClosable: true,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };


  const handleClickGetBalance = async () => {
    try {
    const balance = await khristal.balanceOf(account)
    setTokenBalance(ethers.utils.formatEther(balance))
    console.log(balance)
    toast({
      title: `Balance of ${account}`,
      description: `${balance.toString()}`,
      status: "success",
      duration: 10000,
      isClosable: true,
    });
    } catch (e) {
      console.log(e)
    }
  }

  const handleClickGetAllowance = async () => {
    try {
    const allowance = await khristal.allowance(account, spender)
    setTokenBalance(ethers.utils.formatEther(allowance))
    console.log(allowance)
    toast({
      title: `Allowance of ${account} for ${spender}`,
      description: `${allowance.toString()}`,
      status: "success",
      duration: 10000,
      isClosable: true,
    });
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <>
      <Container maxW="100vh">
        <HStack display="flex" justifyContent="space-around" mb={3}>
          <StackDivider />
          <Button colorScheme="pink" onClick={handleGetDecimals}>decimals</Button>
          <Button colorScheme="pink" onClick={handleGetName}>name</Button>
          <Button colorScheme="pink" onClick={handleGetSymbol}>symbol</Button>
          <Button colorScheme="pink" onClick={handleGetTotal}>totalSupply</Button>
        </HStack>

        <VStack spacing={4} align="stretch">
          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>
              <AccordionButton backgroundColor="purple.900">
                <Box colorScheme="purple" flex="1" textAlign="left">
                  Approve
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <FormControl id="fn1" spacing={1}>
                  <HStack>
                    <Input
                      placeholder="spender"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <FormLabel>
                      <Button colorScheme="purple">Approve</Button>
                    </FormLabel>
                    <Input
                      placeholder="amount"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <FormHelperText>Approve a given spender</FormHelperText>
                  </HStack>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>
              <AccordionButton backgroundColor="purple.900">
                <Box colorScheme="purple" flex="1" textAlign="left">
                  Decrease Allowance
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <FormControl id="fn2" spacing={3}>
                  <HStack mb={2}>
                    <Input placeholder="spender" size="md" />
                    <FormLabel>
                      <Button colorScheme="purple">decreaseAllowance</Button>
                    </FormLabel>
                    <Input placeholder="substracted value" size="md" />
                    <FormHelperText>Decrease the allowance of a given spender</FormHelperText>
                  </HStack>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>
              <AccordionButton backgroundColor="purple.900">
                <Box colorScheme="purple" flex="1" textAlign="left">
                  Increase Allowance
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <FormControl id="fn3" spacing={3}>
                  <HStack mb={2}>
                    <Input
                      colorScheme="purple"
                      placeholder="spender"
                      size="md" />
                    <FormLabel>
                      <Button colorScheme="purple">increaseAllowance</Button>
                    </FormLabel>
                    <Input placeholder="added value" size="md" />
                    <FormHelperText>Increase the allowance of a given spender</FormHelperText>
                  </HStack>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>
              <AccordionButton backgroundColor="purple.900">
                <Box colorScheme="purple" flex="1" textAlign="left">
                  Transfer
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <FormControl id="fn4" spacing={3}>
                  <HStack mb={2}>
                    <Input placeholder="recipient" size="md" />
                    <FormLabel>
                      <Button
                        colorScheme="purple"
                        onClick={handleOnClickTransfer}
                      >
                        Transfer
                      </Button>
                    </FormLabel>
                    <Input placeholder="amount" size="md" />
                    <FormHelperText>Transfer token to a given address</FormHelperText>
                  </HStack>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>
              <AccordionButton backgroundColor="purple.900">
                <Box colorScheme="purple" flex="1" textAlign="left">
                  Transfer From
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <FormControl id="fn5" spacing={3}>
                  <HStack mb={2}>
                    <Input 
                    placeholder="sender" 
                    type="text" 
                    onChange={(event) => setAccount(event.target.value)} 
                    size="md" />
                    <Input 
                    placeholder="recipient" 
                    type="text" 
                    onChange={(event) => setAddress(event.target.value)} 
                    size="md" />
                    <Input 
                    placeholder="amount" 
                    type='text'
                    size="md" />
                  </HStack>
                  <Center>
                    <FormLabel>
                      <Button colorScheme="purple">TransferFrom</Button>
                    </FormLabel>
                  </Center>
                  <FormHelperText>Transfer token from a given holder to a given address</FormHelperText>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>
              <AccordionButton backgroundColor="purple.900">
                <Box colorScheme="purple" flex="1" textAlign="left">
                  Spy on others
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <StackDivider borderColor="gray.200" />
                <HStack spacing={3}>
                  <FormLabel>
                    <Button 
                    colorScheme="pink"
                    onClick={handleClickGetAllowance}>allowance</Button>
                  </FormLabel>

                  <Input 
                  placeholder="owner" 
                  size="md" 
                  type="text" 
                  placeholder={"owner"}
                  onChange={(event) => setAccount(event.target.value)} 
                  size="md" />

                  <Input 
                  placeholder="spender" 
                  size="md" 
                  type="text" 
                  placeholder={"ethereum address"}
                  onChange={(event) => setSpender(event.target.value)} 
                  size="md" />
                  <FormHelperText>See the amount allowed to a given spender</FormHelperText>
                </HStack>
                <HStack>
                  <FormLabel>

                    <Button colorScheme="pink" onClick={handleClickGetBalance}>balanceOf</Button>
                  </FormLabel>
                  <Input
                  type="text" 
                  placeholder={"ethereum address"}
                  onChange={(event) => setAccount(event.target.value)} 
                  size="md" />    

                </HStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Container>
    </>
  );
};

export default ERC20Token;
