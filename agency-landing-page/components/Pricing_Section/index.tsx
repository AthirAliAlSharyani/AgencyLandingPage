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
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

export default function Pricing_Section() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <section id="services">
      <ChakraProvider>
        {!isMobile ? (
          <Flex
            direction="column"
            align="center"
            alignContent={"center"}
            p={90}
            w="full"
            mt={"auto"}
          >
            <HStack h={"780px"} w={["900", "600", "600", "1200px"]} gap={"190"}>
              <Stack>
                <Heading fontSize={"60"} color={"blue"}>
                  {" "}
                  Pricing
                </Heading>
                <Text w={"330px"} color={"grey"} fontSize={"15"} mt={5} mb={20}>
                  Take a look at some of our recent projects to see how we've
                  helped businesses like yours succeed online.
                </Text>
                <VStack
                  bg={"white"}
                  w={"387px"}
                  h={"238"}
                  borderRadius={"27"}
                  justifyContent={"left"}
                >
                  <Heading
                    color={"blue.400"}
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
                  color={"blue"}
                >
                  Unlimited Services
                </Heading>
                <Text
                  w={"330px"}
                  color={"grey"}
                  fontSize={"15"}
                  ml={-100}
                  mt={-10}
                >
                  Take a look at some of our recent projects to see how we've
                  helped businesses like yours succeed online.
                </Text>
                <Box mt={4} color={"grey"}>
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
                  color={"white"}
                  bgColor={"#4E47FF"}
                  _hover={{ bg: "blue.700", color: "white" }}
                >
                  <Text fontSize={"50"}> $3,250</Text>{" "}
                  <Text fontSize={"20"} ml={-230}>
                    /mo
                  </Text>
                  <Image src="../arrowRight.png" />
                </Button>
              </VStack>
            </HStack>
          </Flex>
        ) : (
          <Center>
            <Stack spacing={10} alignContent="center" mt={8}>
              <Stack>
                <VStack
                  w="687px"
                  h="238"
                  borderRadius="27"
                  justifyContent="center"
                >
                  <Heading fontSize="60">Pricing</Heading>
                  <Text w="330px" color="grey" fontSize="15" mt={5} mb={20}>
                    Take a look at some of our recent projects to see how we've
                    helped businesses like yours succeed online.
                  </Text>
                </VStack>
                <VStack h="338" borderRadius="27" justifyContent="center">
                  <Heading
                    h="130"
                    mt={5}
                    justifyContent="center"
                    textAlign="center"
                  >
                    Let’s Schedule a Meeting
                  </Heading>
                  <Button
                    w="335px"
                    h="60px"
                    color="white"
                    bgColor="#4E47FF"
                    _hover={{ bg: "blue.400", color: "white" }}
                  >
                    Schedule Meeting
                  </Button>
                </VStack>
              </Stack>
              <VStack bg="white" w="687px" h="320px" borderRadius="27">
                <Heading mt={5} justifyContent="center" textAlign="left">
                  Unlimited Services
                </Heading>
                <Text
                  mt={5}
                  w="330px"
                  color="grey"
                  fontSize="15"
                  textAlign="left"
                >
                  Take a look at some of our recent projects to see how we've
                  helped businesses like yours succeed online.
                </Text>

                <Button justifyContent="space-between" h="90px" mt={10}>
                  <Text fontSize="50">$3,250</Text>
                  <Text fontSize="20" color="grey">
                    /mo
                  </Text>
                  <Image src="../arrowRight.png" />
                </Button>
              </VStack>
            </Stack>
          </Center>
        )}
      </ChakraProvider>
    </section>
  );
}
