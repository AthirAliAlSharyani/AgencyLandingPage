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
} from "@chakra-ui/react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "@/components/navigationBar";
import What_We_Do from "@/components/what_we_do";
import Lets_Get_InTouch from "@/components/Lets_get_intouch";
import Check_our_work from "@/components/check_our_work";
export default function Home() {
  return (
    <>
      <ChakraProvider>
        <Box bg="blue.100" width="100vw">
          <NavigationBar />

          <Flex
            mt={"2"}
            direction="column"
            align="center"
            justify="center"
            h={"60vh"}
            // This makes the Flex container fill the viewport height
          >
            <Box alignContent={"center"}>
              <Heading
                fontFamily={"fantasy"}
                mb={4}
                textAlign={"center"}
                fontWeight={"100"}
                maxW={"450"}
                w={"200vw"}
                fontSize={73}
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
          <Box>
            <Lets_Get_InTouch />
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
}
