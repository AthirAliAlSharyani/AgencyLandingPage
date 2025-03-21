import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../src/globals.css";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
