import { useState, useContext, useReducer, useEffect } from "react";
import {
  ERC20GetterReducer,
  tokenGetterState,
} from "../reducer/ERC20GetterReducer";
import { ethers } from "ethers";
import { Web3Context } from "web3-hooks";
import { KhristalContext } from "../contexts/KhristalContext";
import {
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
  const [web3State] = useContext(Web3Context);
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const khristal = useContext(KhristalContext);
  const [tokenBalance, setTokenBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("0x0");
  const [account, setAccount] = useState("0x0");
  const [spender, setSpender] = useState("0x0");

  const [state, dispatch] = useReducer(ERC20GetterReducer, tokenGetterState);
  const { name, symbol, decimals, total } = state;

  const [isBalanceOfLoading, setIsBalanceOfLoading] = useState(false);
  const [balance, setBalance] = useState(0);

  const [transferFromSender, setTransferFromSender] = useState("0x0");
  const [transferFromRecipient, setTransferfromRecipient] = useState("0x0");
  const [transferFromAmount, setTransferfromAmount] = useState(0);

  const [allowance, setAllowance] = useState(0);

  const [approveSpender, setApproveSpender] = useState("0x0");
  const [approveAmount, setApproveAmount] = useState(0);

  const [decreaseAllowanceSpender, setDecreaseAllowanceSpender] =
    useState("0x0");
  const [decreaseAllowanceSubVal, setDecreaseAllowanceSubVal] = useState(0);

  const [increaseAllowanceSpender, setIncreaseAllowanceSpender] =
    useState("0x0");
  const [increaseAllowanceAddVal, setIncreaseAllowanceAddVal] = useState(0);
  // Utiliser un reducer pour ce token
  // parce-que ça fait masse, de masse de fonctions quand meme

  useEffect(() => {
    // si khristal est pas null alors
    if (khristal) {
      const callBack = (account, spender, str) => {
        if (account.toLowerCase() === web3State.account.toLowerCase()) {
          toast({
            title: "Event Approval",
            description: `You: ${account} approved ${spender} with value: ${str}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        }
      };
      // ecouter sur l'event DataSet
      khristal.on("Approval", callBack);
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
        khristal.off("Approval", callBack);
      };
    }
  }, [khristal, web3State.account, toast]);

  useEffect(() => {
    // si khristal est pas null alors
    if (khristal) {
      const callBack = (account, recipient, amount) => {
        if (account.toLowerCase() === web3State.account.toLowerCase()) {
          toast({
            title: "Event Transfer",
            description: `${account} sent ${recipient} with value: ${amount}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        }
      };
      // ecouter sur l'event DataSet
      khristal.on("Transfer", callBack);
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
        khristal.off("Transfer", callBack);
      };
    }
  }, [khristal, web3State.account, toast]);

  useEffect(() => {
    // si khristal est pas null alors
    if (khristal) {
      const callBack = (account, str) => {
        setAmount(str);
        if (account.toLowerCase() === web3State.account.toLowerCase()) {
          toast({
            title: "Event Transfer",
            description: `${account} set storage with value: ${str}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        }
      };
      // ecouter sur l'event DataSet
      khristal.on("Transfer", callBack);
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
        khristal.off("Transfer", callBack);
      };
    }
  }, [khristal, web3State.account, toast]);

  useEffect(() => {
    // si khristal est pas null alors
    if (khristal) {
      const callBack = (account, str) => {
        setAmount(str);
        if (account.toLowerCase() === web3State.account.toLowerCase()) {
          toast({
            title: "Event Transfer",
            description: `${account} set storage with value: ${str}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        }
      };
      // ecouter sur l'event DataSet
      khristal.on("Transfer", callBack);
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
        khristal.off("Transfer", callBack);
      };
    }
  }, [khristal, web3State.account, toast]);

  const handleGetName = async () => {
    try {
      let name = await khristal.name();
      dispatch({ type: "GET_NAME", payload: name });
      toast({
        title: "Name of the Token",
        description: ` is ${name}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetSymbol = async () => {
    try {
      let symbol = await khristal.symbol();
      dispatch({ type: "GET_SYMBOL", payload: symbol });
      toast({
        title: "Symbol of the Token",
        description: ` is ${symbol}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetTotal = async () => {
    try {
      let totalSupply = await khristal.totalSupply();
      dispatch({ type: "GET_TOTAL", payload: totalSupply });
      toast({
        title: "Total Supply",
        description: `is ${totalSupply}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetDecimals = async () => {
    try {
      let decimals = await khristal.decimals();
      dispatch({ type: "GET_DECIMALS", payload: decimals });
      toast({
        title: "Number Of Decimals",
        description: `are ${decimals}`,
        status: "success",
        duration: 100000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClickTransfer = async () => {
    try {
      setIsLoading(true);
      const amount = await ethers.utils.parseEther(amount);
      let tx = await khristal.transfer(address, amount.toString());
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
      const balance = await khristal.balanceOf(account);
      setTokenBalance(ethers.utils.formatEther(balance));
      console.log(balance);
      toast({
        title: `Balance of ${account}`,
        description: `${balance.toString()}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickGetAllowance = async () => {
    try {
      const allowanceTx = await khristal.allowance(account, spender);
      setAllowance(allowanceTx);
      console.log(allowanceTx);
      toast({
        title: `Allowance of ${account} for ${spender}`,
        description: `${allowance.toString()}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickApprove = async () => {
    try {
      const approve = await khristal.approve(approveSpender, approveAmount);
      console.log(approve);
      toast({
        title: `Allowance of ${account} for ${spender}`,
        description: `approved ${approveAmount.toString()} by ${approveSpender}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickDecreaseAllowance = async () => {
    try {
      const decreaseAllowance = await khristal.decreaseAllowance(
        decreaseAllowanceSpender,
        decreaseAllowanceSubVal
      );
      const allowanceTx = await khristal.allowance(account, spender);
      console.log(decreaseAllowance);
      toast({
        title: `Allowance decreased`,
        description: `Allowance decreased of ${decreaseAllowanceSubVal.toString()} for ${decreaseAllowanceSpender}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickIncreaseAllowance = async () => {
    try {
      const increaseAllowance = await khristal.increaseAllowance(
        increaseAllowanceSpender,
        increaseAllowanceAddVal
      );
      console.log(increaseAllowance);
      toast({
        title: `Allowance increased`,
        description: `Allowance increased of ${increaseAllowanceSpender.toString()} for ${increaseAllowanceAddVal}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleClickTransferFrom = async () => {
    try {
      const transferFrom = await khristal.transferFrom(
        transferFromSender,
        transferFromRecipient,
        transferFromAmount
      );
      setTokenBalance(ethers.utils.formatEther(transferFrom));
      console.log(transferFrom);
      toast({
        title: `Allowance of ${account} for ${spender}`,
        description: `${transferFrom.toString()}`,
        status: "success",
        duration: 10000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Container maxW="100vh">
        <HStack display="flex" justifyContent="space-around" mb={3}>
          <StackDivider />
          <Button colorScheme="pink" onClick={handleGetDecimals}>
            decimals
          </Button>
          <Button colorScheme="pink" onClick={handleGetName}>
            name
          </Button>
          <Button colorScheme="pink" onClick={handleGetSymbol}>
            symbol
          </Button>
          <Button colorScheme="pink" onClick={handleGetTotal}>
            totalSupply
          </Button>
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
                      onChange={(e) => setApproveSpender(e.target.value)}
                    />
                    <FormLabel>
                      <Button onClick={handleClickApprove} colorScheme="purple">
                        Approve
                      </Button>
                    </FormLabel>
                    <Input
                      placeholder="amount"
                      onChange={(e) => setApproveAmount(e.target.value)}
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
                    <Input
                      placeholder="spender"
                      onChange={(event) =>
                        setDecreaseAllowanceSpender(event.target.value)
                      }
                      size="md"
                    />
                    <FormLabel>
                      <Button
                        onClick={handleClickDecreaseAllowance}
                        colorScheme="purple"
                      >
                        decreaseAllowance
                      </Button>
                    </FormLabel>
                    <Input
                      placeholder="substracted value"
                      onChange={(event) =>
                        setDecreaseAllowanceSubVal(event.target.value)
                      }
                      size="md"
                    />
                    <FormHelperText>
                      Decrease the allowance of a given spender
                    </FormHelperText>
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
                      onChange={(event) =>
                        setIncreaseAllowanceSpender(event.target.value)
                      }
                      size="md"
                    />
                    <FormLabel>
                      <Button
                        onClick={handleClickIncreaseAllowance}
                        colorScheme="purple"
                      >
                        increaseAllowance
                      </Button>
                    </FormLabel>
                    <Input
                      placeholder="added value"
                      onChange={(event) =>
                        setIncreaseAllowanceAddVal(event.target.value)
                      }
                      size="md"
                    />
                    <FormHelperText>
                      Increase the allowance of a given spender
                    </FormHelperText>
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
                    <Input
                      placeholder="recipient"
                      onChange={(event) => setAddress(event.target.value)}
                      size="md"
                    />

                    <FormLabel>
                      <Button
                        colorScheme="purple"
                        onClick={handleOnClickTransfer}
                      >
                        Transfer
                      </Button>
                    </FormLabel>

                    <Input
                      placeholder="amount"
                      onChange={(event) => setAmount(event.target.value)}
                      size="md"
                    />

                    <FormHelperText>
                      Transfer token to a given address
                    </FormHelperText>
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
                      onChange={(event) =>
                        setTransferFromSender(event.target.value)
                      }
                      size="md"
                    />
                    <Input
                      placeholder="recipient"
                      type="text"
                      onChange={(event) =>
                        setTransferfromRecipient(event.target.value)
                      }
                      size="md"
                    />
                    <Input
                      placeholder="amount"
                      type="text"
                      onChange={(event) =>
                        setTransferfromAmount(event.target.value)
                      }
                      size="md"
                    />
                  </HStack>
                  <Center>
                    <FormLabel>
                      <Button
                        onClick={handleClickTransferFrom}
                        colorScheme="purple"
                      >
                        TransferFrom
                      </Button>
                    </FormLabel>
                  </Center>
                  <FormHelperText>
                    Transfer token from a given holder to a given address
                  </FormHelperText>
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
                      onClick={handleClickGetAllowance}
                    >
                      allowance
                    </Button>
                  </FormLabel>

                  <Input
                    placeholder="owner"
                    size="md"
                    type="text"
                    placeholder={"owner"}
                    onChange={(event) => setAccount(event.target.value)}
                    size="md"
                  />

                  <Input
                    placeholder="spender"
                    size="md"
                    type="text"
                    placeholder={"ethereum address"}
                    onChange={(event) => setSpender(event.target.value)}
                    size="md"
                  />
                  <FormHelperText>
                    See the amount allowed to a given spender
                  </FormHelperText>
                </HStack>
                <HStack>
                  <FormLabel>
                    <Button colorScheme="pink" onClick={handleClickGetBalance}>
                      balanceOf
                    </Button>
                  </FormLabel>
                  <Input
                    type="text"
                    placeholder={"ethereum address"}
                    onChange={(event) => setAccount(event.target.value)}
                    size="md"
                  />
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
