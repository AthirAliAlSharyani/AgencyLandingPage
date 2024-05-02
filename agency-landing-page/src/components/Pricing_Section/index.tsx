"use client";
import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";

export default function Pricing_Section() {
  return (
    <ChakraProvider>
      <Center>
        <HStack h={"780px"} w={"1200px"} gap={"190"}>
          <Stack>
            <Heading fontSize={"60"}> Pricing</Heading>
            <Text w={"330px"} color={"grey"} fontSize={"15"} mt={5} mb={20}>
              Take a look at some of our recent projects to see how we've helped
              businesses like yours succeed online.
            </Text>
            <VStack
              bg={"white"}
              w={"387px"}
              h={"238"}
              borderRadius={"27"}
              justifyContent={"left"}
            >
              <Heading
                h={"130"}
                mt={5}
                justifyContent={"center"}
                textAlign={"left"}
                ml={5}
              >
                Let’s Schedule a Meeting
              </Heading>

              <Button
                w={"335px"}
                h={"60px"}
                color={"white"}
                bgColor={"#4E47FF"}
                _hover={{ bg: "blue.400", color: "white" }}
              >
                Schedule Meeting
              </Button>
            </VStack>
          </Stack>
          <VStack bg={"white"} w={"587px"} h={"500"} borderRadius={"27"}>
            <Heading
              h={"130"}
              mt={5}
              justifyContent={"center"}
              textAlign={"left"}
              ml={-130}
            >
              Unlimited Services
            </Heading>
            <Text w={"330px"} color={"grey"} fontSize={"15"} ml={-100} mt={-10}>
              Take a look at some of our recent projects to see how we've helped
              businesses like yours succeed online.
            </Text>
            <Box mt={4}>
              <HStack justifyContent={"space-between"} gap={"95"} mt={3}>
                <HStack>
                  <Image src="../tick.png" alt="tick" />
                  <Text>Unlimited requests</Text>
                </HStack>
                <HStack>
                  <Image src="../tick.png" alt="tick" />
                  <Text>Unlimited requests</Text>
                </HStack>
              </HStack>
              <HStack justifyContent={"space-between"} gap={"95"} mt={5}>
                <HStack>
                  <Image src="../tick.png" alt="tick" />
                  <Text>Unlimited requests</Text>
                </HStack>
                <HStack>
                  <Image src="../tick.png" alt="tick" />
                  <Text>Unlimited requests</Text>
                </HStack>
              </HStack>
              <HStack justifyContent={"space-between"} gap={"95"} mt={5}>
                <HStack>
                  <Image src="../tick.png" alt="tick" />
                  <Text>Unlimited requests</Text>
                </HStack>
                <HStack>
                  <Image src="../tick.png" alt="tick" />
                  <Text>Unlimited requests</Text>
                </HStack>
              </HStack>
            </Box>
            <Button
              width={"500px"}
              h={"90"}
              ml={3}
              mr={3}
              mt={10}
              mb={3}
              justifyContent={"space-between"}
            >
              <Text fontSize={"50"}> $3,250</Text>{" "}
              <Text fontSize={"20"} color={"grey"} ml={-230}>
                /mo
              </Text>
              <Image src="../arrowRight.png" />
            </Button>
          </VStack>
        </HStack>
      </Center>
    </ChakraProvider>
  );
}
