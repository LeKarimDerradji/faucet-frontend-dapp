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
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"

const KhristalDapp = () => {


  return (
    <>
     <Flex justifyContent='center' flexDirection='column' textAlign="center">
     <Heading>I have no mouth and i must scream</Heading>
     <Spacer />

     <VStack  mt={10} maxW={200} alignSelf="center" spacing={10}>

      <FormControl maxW={150} id="first-name" isRequired>
      <FormLabel>Send Token</FormLabel>
      <Input placeholder="Address To Send" />
      <Button
      mt={4}
      colorScheme='purple'>
        Send Token
      </Button>
     </FormControl>
     
     <FormControl maxW={150} flexDirection='row' id="first-name" isRequired>
      <FormLabel>Approve</FormLabel>
      <Input placeholder="Address" />
      <Input mt={2} placeholder="Amount" />
      <Button
      mt={4}
      colorScheme='purple'>
        Approve
      </Button>
     </FormControl>

     <FormControl maxW={150} flexDirection='row' id="first-name" isRequired>
      <FormLabel>Send Token</FormLabel>
      <Input placeholder="Address To Send" />
      <Button
      mt={4}
      colorScheme='purple'>
        Send Token
      </Button>
     </FormControl>

     <FormControl maxW={150} flexDirection='row' id="first-name" isRequired>
      <FormLabel>Send Token</FormLabel>
      <Input placeholder="Address To Send" />
      <Button
      mt={4}
      colorScheme='purple'>
        
      </Button>
     </FormControl>

     <FormControl maxW={150} flexDirection='row' id="first-name" isRequired>
      <FormLabel>Send Token</FormLabel>
      <Input placeholder="Address To Send" />
      <Button
      mt={4}
      colorScheme='purple'>
        Send Token
      </Button>
     </FormControl>
     </VStack>
    </Flex>
    
    </>
  )
  
};

export default KhristalDapp;
