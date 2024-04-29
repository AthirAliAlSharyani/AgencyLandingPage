import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import React from "react";

export default function Check_Our_Work() {
  return (
    <ChakraProvider>
      <Box>
        <Heading as="h2" size="2xl">
          Check our Work
        </Heading>
      </Box>
    </ChakraProvider>
  );
}
