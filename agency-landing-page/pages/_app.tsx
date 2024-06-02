import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../src/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
