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
} from "@chakra-ui/react";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
export default function Home() {
  return (
    <ChakraProvider>
      <Heading as="h2" size="2xl" mt={5} mb={5}>
        Welcome to Agency Landingpage
      </Heading>
    </ChakraProvider>
  );
}
