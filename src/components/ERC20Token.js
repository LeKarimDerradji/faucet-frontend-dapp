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
  ButtonGroup,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

const ERC20Token = () => {
  return (
    <> 
    
      <Container maxW="100vh">
      <HStack display='flex' justifyContent='space-around' mb={3}>
            <StackDivider />
            <Button w={100} colorScheme="purple">decimals</Button>
            <Button colorScheme="purple">name</Button>
            <Button colorScheme="purple">symbol</Button>
            <Button colorScheme="purple">totalSupply</Button>
          </HStack>
    
        <VStack
          spacing={4}
          align="stretch"
        >

          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>

              <AccordionButton backgroundColor='purple.900'>
                <Box colorScheme='purple' flex="1" textAlign="left">
                  Approve
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>
                <FormControl id="fn1" spacing={1}>
                  <HStack>
                    <Input placeholder="spender" />
                    <Button colorScheme="purple">Approve</Button>
                    <Input placeholder="amount" />
                  </HStack>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>

              <AccordionButton backgroundColor='purple.900'>
                <Box colorScheme='purple' flex="1" textAlign="left">
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
                    <Input
                      placeholder="substracted value"
                      size="md"
                    />
                  </HStack>
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>

              <AccordionButton backgroundColor='purple.900'>
                <Box colorScheme='purple' flex="1" textAlign="left">
                  Increase Allowance
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>

                <FormControl id="fn3" spacing={3}>
                  <HStack mb={2}>
                    <Input colorScheme='purple' placeholder="spender" size="md" />
                    <FormLabel>
                      <Button colorScheme="purple">increaseAllowance</Button>
                    </FormLabel>
                    <Input placeholder="added value" size="md" />
                  </HStack>
                </FormControl>

              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>

              <AccordionButton backgroundColor='purple.900'>
                <Box colorScheme='purple' flex="1" textAlign="left">
                  Transfer
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>

                <FormControl id="fn4" spacing={3}>
                  <HStack mb={2}>
                    <Input placeholder="recipient" size="md" />
                    <FormLabel>
                      <Button colorScheme="purple">Transfer</Button>
                    </FormLabel>
                    <Input placeholder="amount" size="md" />
                  </HStack>
                </FormControl>

              </AccordionPanel>
            </AccordionItem>
          </Accordion>



          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>

              <AccordionButton backgroundColor='purple.900'>
                <Box colorScheme='purple' flex="1" textAlign="left">
                  Transfer From
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>

                <FormControl id="fn5" spacing={3}>
                  <HStack mb={2}>
                    <Input placeholder="sender" size="md" />
                    <Input placeholder="recipient" size="md" />
                    <Input placeholder="amount" size="md" />
                  </HStack>
                  <Center>
                    <FormLabel>
                      <Button colorScheme="purple">TransferFrom</Button>
                    </FormLabel>
                  </Center>
                </FormControl>

              </AccordionPanel>
            </AccordionItem>
          </Accordion>



          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>

              <AccordionButton backgroundColor='purple.900'>
                <Box colorScheme='purple' flex="1" textAlign="left">
                  Transfer From
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>

                <FormControl id="fn5" spacing={3}>
                  <HStack mb={2}>
                    <Input placeholder="sender" size="md" />
                    <Input placeholder="recipient" size="md" />
                    <Input placeholder="amount" size="md" />
                  </HStack>
                  <Center>
                    <FormLabel>
                      <Button colorScheme="purple">TransferFrom</Button>
                    </FormLabel>
                  </Center>
                </FormControl>

              </AccordionPanel>
            </AccordionItem>
          </Accordion>


          <Accordion defaultIndex={[0]} allowMultiple allowToggle>
            <AccordionItem>

              <AccordionButton backgroundColor='purple.900'>
                <Box colorScheme='purple' flex="1" textAlign="left">
                  Spy on others
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel pb={4}>

                <StackDivider />
                <HStack>
                  <Button colorScheme="purple">allowance</Button>
                  <Input placeholder="owner" size="md" />
                  <Input placeholder="spender" size="md" />
                </HStack>
                <HStack >
                  <Button colorScheme="purple">balanceOf</Button>
                  <Input placeholder="account" size="md" />
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
