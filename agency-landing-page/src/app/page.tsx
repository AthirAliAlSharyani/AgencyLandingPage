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
          <Heading as="h2" size="2xl" mt={5} mb={5}>
            Welcome to Agency Landingpage
          </Heading>{" "}
        </Box>{" "}
      </ChakraProvider>
    </>
  );
}
