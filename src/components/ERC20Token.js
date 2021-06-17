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
  ButtonGroup,
} from "@chakra-ui/react";

const ERC20Token = () => {
  return (
    <>
      <Container maxW="container.lg">
        <VStack
          spacing={4}
          align="stretch"
          divider={<StackDivider borderColor="gray.200" />}
        >
          <FormControl id="fn1" spacing={3}>
            <HStack mb={2}>
              <Input variant="filled" placeholder="spender" size="md" />
              <FormLabel>
                <Button colorScheme="orange">Approve</Button>
              </FormLabel>
              <Input variant="filled" placeholder="amount" size="md" />
            </HStack>
          </FormControl>
          <FormControl id="fn2" spacing={3}>
            <HStack mb={2}>
              <Input variant="filled" placeholder="spender" size="md" />
              <FormLabel>
                <Button colorScheme="orange">decreaseAllowance</Button>
              </FormLabel>
              <Input
                variant="filled"
                placeholder="substracted value"
                size="md"
              />
            </HStack>
          </FormControl>
          <FormControl id="fn3" spacing={3}>
            <HStack mb={2}>
              <Input variant="filled" placeholder="spender" size="md" />
              <FormLabel>
                <Button colorScheme="orange">increaseAllowance</Button>
              </FormLabel>
              <Input variant="filled" placeholder="added value" size="md" />
            </HStack>
          </FormControl>
          <FormControl id="fn4" spacing={3}>
            <HStack mb={2}>
              <Input variant="filled" placeholder="recipient" size="md" />
              <FormLabel>
                <Button colorScheme="orange">Transfer</Button>
              </FormLabel>
              <Input variant="filled" placeholder="amount" size="md" />
            </HStack>
          </FormControl>
          <FormControl id="fn5" spacing={3}>
            <HStack mb={2}>
              <Input variant="filled" placeholder="sender" size="md" />
              <Input variant="filled" placeholder="recipient" size="md" />
              <Input variant="filled" placeholder="amount" size="md" />
            </HStack>
            <Center>
              <FormLabel>
                <Button colorScheme="orange">TransferFrom</Button>
              </FormLabel>
            </Center>
          </FormControl>
          <StackDivider borderColor="gray.200" />
          <HStack spacing={8}>
            <Button colorScheme="blue">allowance</Button>
            <Input variant="filled" placeholder="owner" size="md" />
            <Input variant="filled" placeholder="spender" size="md" />
          </HStack>
          <HStack spacing={8}>
            <Button colorScheme="blue">balanceOf</Button>
            <Input variant="filled" placeholder="account" size="md" />
          </HStack>
          <HStack spacing={8}>
            <StackDivider borderColor="gray.200" />
            <Button colorScheme="blue">decimals</Button>
            <Button colorScheme="blue">name</Button>
            <Button colorScheme="blue">symbol</Button>
            <Button colorScheme="blue">totalSupply</Button>
          </HStack>
        </VStack>
      </Container>
    </>
  );
};

export default ERC20Token;
