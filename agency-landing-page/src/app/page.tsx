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
} from "@chakra-ui/react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import NavigationBar from "@/components/navigationBar";
export default function Home() {
  return (
    <>
      {" "}
      <ChakraProvider>
        <Box bg="blue.100" height="100vh" width="100vw">
          <NavigationBar />
          <Box maxW="35rem" ml={"37%"}>
            <Heading
              fontFamily={"fantasy"}
              mb={4}
              mt={"30%"}
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
            >
              Get in Touch
            </Button>
          </Box>
        </Box>{" "}
      </ChakraProvider>
    </>
  );
}
