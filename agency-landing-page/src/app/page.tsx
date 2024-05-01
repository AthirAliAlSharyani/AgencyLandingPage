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
export default function Home() {
  return (
    <>
      {" "}
      <ChakraProvider>
        <Box bg="blue.100" width="100vw">
          <NavigationBar />

          <Flex
            direction="column"
            align="center"
            justify="center"
            height="100vh" // This makes the Flex container fill the viewport height
          >
            <Box maxW="35rem" alignContent={"center"} mt={"-60"}>
              <Heading
                fontFamily={"fantasy"}
                mb={4}
                mt={"30%"}
                textAlign={"center"}
                fontWeight={"100"}
                maxW={"450"}
                w={"200"}
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
        </Box>

          <Box maxW="35rem" ml={"37%"}>
            <Heading
              fontFamily={"fantasy"}
              mb={4}
              mt={"20"}
              ml={"10%"}
              textAlign={"center"}
              fontWeight={"100"}
              fontSize={73.34}
            >
              Awesome UI Dark Template for Webflow Agency
            </Heading>
            <Button
              bg={"black"}
              color={"white"}
              _hover={{ bg: "white", color: "black" }}
              ml={"36%"}
              mt={4}
              w={"211px"}
              h={"60px"}
              mb={10}
            >
              Get in Touch
            </Button>
          </Box>
          <Box>
            <What_We_Do />
          </Box>
          <Box>
            <Lets_Get_InTouch />
          </Box>
        </Box>{" "}

      </ChakraProvider>
    </>
  );
}
