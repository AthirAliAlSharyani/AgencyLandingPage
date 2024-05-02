"use client";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, Text, Image } from "@chakra-ui/react";
import { BellIcon, ChatIcon, EditIcon, SunIcon } from "@chakra-ui/icons";

export default function Lets_Get_InTouch() {
  return (
    <ChakraProvider>
      <Flex
        direction="column"
        align="center"
        mx="auto"
        w="full"
        overflow="hidden"
        zIndex={1}
      >
        {/* Foreground Content */}
        <Box
          mt={10}
          pb={14}
          px={4}
          w={["400px", "900px", "800"]}
          maxW="auto"
          zIndex="1"
        >
          <Heading
            size="lg"
            fontSize={["2xl", "3xl", "4xl"]}
            textAlign="center"
          >
            Let’s Get in Touch
          </Heading>

          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input borderColor={"black"} type="email" mb={8} />
            <FormLabel>Name</FormLabel>
            <Input borderColor={"black"} type="text" mb={8} />
            <FormLabel>Message</FormLabel>
            <Textarea
              borderColor={"black"}
              placeholder="Write your message here..."
              mb={5}
            ></Textarea>
          </FormControl>
          <Button
            bg="blue.600"
            color="white"
            _hover={{ color: "black" }}
            w="full"
            mt={5}
          >
            Get in Touch
          </Button>
        </Box>

        <Box
          bg="white"
          borderRadius="lg"
          mb={2}
          // w={["200px", "900px", "800"]}
          px={10}
          py={10}
          textAlign="center"
          zIndex="1"
          w={["400px", "900px", "800"]}
          maxW="auto"
        >
          <Heading mb={4} fontSize={["md", "lg", "xl"]} mr={"70%"}>
            Agency landing page
          </Heading>
          <HStack>
            <Text
              fontSize={["sm", "md", "lg"]}
              mx={[2, 1, 8]}
              textAlign="left"
              color={"gray.400"}
              mr={"auto"}
              noOfLines={3}
              w={350}
            >
              Ready to elevate your online presence? Contact us today to discuss
              your project and discover how we can bring your vision to life.
            </Text>
            <HStack
              fontSize={["xs", "md", "md"]}
              color={"gray.400"}
              gap={6}
              mb={20}
              ml={"15%"}
            >
              <Text> Home</Text>
              <Text> About</Text>
              <Text noOfLines={1} w={"20"}>
                How it Works
              </Text>
              <Text> Services</Text>
            </HStack>
          </HStack>
          <HStack justifyContent={"space-between"} mt={5}>
            <HStack ml={"7"}>
              <ChatIcon />
              <Text color={"gray.400"} fontSize={["xs", "sm", "md"]}>
                {" "}
                Made with love
              </Text>
            </HStack>
            <Box mx={"3%"} ml={"15%"} gap={6}>
              <SunIcon mr={10} /> <BellIcon mr={10} /> <ChatIcon mr={10} />{" "}
              <EditIcon mr={10} />
            </Box>
          </HStack>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
