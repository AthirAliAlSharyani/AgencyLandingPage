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
} from "@chakra-ui/react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "@/components/navigationBar";
import What_We_Do from "@/components/what_we_do";
import Lets_Get_InTouch from "@/components/Lets_get_intouch";
import Check_our_work from "@/components/check_our_work";
import Reviews from "@/components/reviews_Sextion";
import Pricing_Section from "@/components/Pricing_Section";
import FQA from "@/components/FAQ";
export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Box
          bg="blue.50"
          width="100vw"
          position="relative" // Relative positioning for the container
        >
          <NavigationBar />

          <Flex
            mt={"2"}
            direction="column"
            align="center"
            justify="center"
            h={"60vh"}
            // This makes the Flex container fill the viewport height
          >
            <Box>
              <Box position={"absolute"} zIndex={0}>
                <Image
                  src="../Mask group.svg"
                  alt=""
                  width={"900"}
                  height={"900"}
                />
              </Box>
              <Heading
                fontFamily={"fantasy"}
                mb={4}
                textAlign={"center"}
                fontWeight={"100"}
                maxW={"450"}
                w={"200vw"}
                fontSize={73}
                position={"relative"}
                zIndex={1}
              >
                Awesome UI Dark Template for Webflow Agency
              </Heading>
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
            <Box position="absolute" zIndex={-1} w="full" bottom={0}>
              <Image
                src="../Group 27169.svg"
                alt="Decorative background"
                width="3004"
                height="128"
              />
            </Box>

            <Lets_Get_InTouch />
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}
