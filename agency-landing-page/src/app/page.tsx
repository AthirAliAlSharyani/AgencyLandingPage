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
import What_We_Do from "@/components/what_we_do";
export default function Home() {
  return (
    <>
      {" "}
      <ChakraProvider>
        <Box bg="blue.50" h={"100%vh"} width="100vw">
          <NavigationBar />
          <Box maxW="35rem" ml={"37%"}>
            <Box position={"absolute"} zIndex={0}>
              <Image
                src="../Mask group.svg"
                alt={""}
                width={640.69}
                height={1004.23}
              />
            </Box>
            <Heading
              fontFamily={"fantasy"}
              mb={4}
              mt={"20"}
              ml={"10%"}
              textAlign={"center"}
              fontWeight={"100"}
              fontSize={73.34}
              zIndex={1}
              position={"relative"}
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
          <What_We_Do />
        </Box>{" "}
      </ChakraProvider>
    </>
  );
}
