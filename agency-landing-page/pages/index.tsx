"use client";
import Image from "next/image";
import styles from "./page.module.css";
import * as React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Box,
  border,
  Button,
  Center,
  Flex,
  Divider,
  useColorModeValue,
  ChakraProvider,
} from "@chakra-ui/react";
// 1. import `ChakraProvider` component
import What_We_Do from "../components/what_we_do";
import Lets_Get_InTouch from "../components/Lets_get_intouch";
import Check_our_work from "../components/check_our_work";
import Reviews from "../components/reviews_Sextion";
import Pricing_Section from "../components/Pricing_Section";
import FQA from "../components/FAQ";

export default function Home() {
  const bgColor = useColorModeValue("blue.100", "gray.900");
  const textColor = useColorModeValue("black", "white");
  return (
    <>
      <ChakraProvider>
        <Box width="100vw" bg={bgColor} color={textColor}>
          <Flex
            width={["100%", "100%", "100%", "100%"]}
            mt={"2"}
            direction="column"
            align="center"
            justify="center"
            h={"80vh"}
            bg={bgColor}
            color={textColor}
            // This makes the Flex container fill the viewport height
          >
            <Box alignContent={"center"}>
              <Center>
                <Heading
                  fontFamily={"fantasy"}
                  textAlign={"center"}
                  fontWeight={"100"}
                  maxW={"450"}
                  w={"200vw"}
                  fontSize={73}
                >
                  Awesome UI Dark Template for Webflow Agency
                </Heading>
              </Center>
              <Center>
                <Button
                  bg={"black"}
                  color={"white"}
                  _hover={{ bg: "white", color: "black" }}
                  mt={4}
                  w={"211px"}
                  h={"60px"}
                >
                  Get in Touch
                </Button>
              </Center>
            </Box>
          </Flex>

          <What_We_Do />

          <Check_our_work />
          <Reviews />
          <Pricing_Section />
          <FQA />
          <Divider mt={20} mb={20} borderColor="grey" borderWidth={"0.5"} />
          <Box>
            <Lets_Get_InTouch />
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}
