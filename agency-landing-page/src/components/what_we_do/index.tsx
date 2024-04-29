import {
  Box,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function What_We_Do() {
  return (
    <ChakraProvider>
      <Heading as="h2" size="3xl" noOfLines={1} textAlign={"left"} ml={"7%"}>
        What We Do?
      </Heading>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
        p={4}
        ml={"40"}
        w={"2120px"}
        h={602}
      >
        {/* Top Row */}
        <GridItem colSpan={1} bg="white" borderRadius={15}>
          <Box p={4}>
            <Text>Item 1</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={15}>
          <Box p={4}>
            <Text>Item 2</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={15}>
          <Box p={4}>
            <Text>Item 3</Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} bg="white" borderRadius={15}>
          <Box p={4}>
            <Text>Item 4 (spans 2 rows)</Text>
          </Box>
        </GridItem>

        {/* Bottom Row */}
        <GridItem colSpan={2} bg="white" borderRadius={20}>
          <Box p={4}>
            <Text>Item 5 (spans 2 cols)</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={20}>
          <Box p={4}>
            <Text>Item 6</Text>
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
