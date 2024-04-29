"use client";
import {
  CheckIcon,
  HamburgerIcon,
  InfoOutlineIcon,
  PhoneIcon,
  StarIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  AlertIcon,
  Box,
  ChakraProvider,
  Grid,
  GridItem,
  Heading,
  Icon,
  StepIcon,
  TagRightIcon,
  Text,
  Image,
  HStack,
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
        gap={8}
        p={2}
        ml={"180"}
        w={"2100px"}
        h={602}
      >
        {/* Top Row */}
        <GridItem colSpan={1} bg="white" borderRadius={15}>
          <Box
            bgColor={"gray.100"}
            mt={4}
            w={"44px"}
            h={"44px"}
            ml={5}
            borderRadius={10}
            mb={5}
          >
            <Icon as={StarIcon} mx={3.5} mt={4} />
          </Box>
          <Heading as="h2" fontSize={25} ml={10}>
            UI/UX Design
          </Heading>
          <Text maxW={300} ml={10} mt={3}>
            From concept to launch, we create stunning, user-centric websites
            that elevate your brand and engage your audience.
          </Text>
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={15}>
          <Box
            bgColor={"gray.100"}
            mt={4}
            w={"44px"}
            h={"44px"}
            ml={5}
            borderRadius={10}
            mb={6}
          >
            <Icon as={CheckIcon} mx={3.5} mt={4} />
          </Box>
          <Heading as="h2" fontSize={25} ml={10}>
            Web Design
          </Heading>
          <Text maxW={300} ml={10} mt={3}>
            From concept to launch, we create stunning, user-centric websites
            that elevate your brand and engage your audience.
          </Text>
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={15}>
          <Box
            bgColor={"gray.100"}
            mt={4}
            w={"44px"}
            h={"44px"}
            ml={5}
            borderRadius={10}
            mb={5}
          >
            <Icon as={HamburgerIcon} mx={3.5} mt={4} />
          </Box>
          <Heading as="h2" fontSize={25} ml={10}>
            Responsive Web
          </Heading>
          <Text maxW={300} ml={10} mt={3}>
            From concept to launch, we create stunning, user-centric websites
            that elevate your brand and engage your audience.
          </Text>
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} bg="white" borderRadius={15} mr={20}>
          <Box
            bgColor={"gray.100"}
            mt={4}
            w={"44px"}
            h={"44px"}
            ml={5}
            borderRadius={10}
            mb={5}
          >
            <Icon as={InfoOutlineIcon} mx={3.5} mt={4} />
          </Box>
          <Heading as="h2" fontSize={25} ml={20}>
            E-commerce Solutions
          </Heading>
          <Text maxW={300} ml={20} mt={3}>
            From concept to launch, we create stunning, user-centric websites
            that elevate your brand and engage your audience.
          </Text>
          <Box>
            <Image
              blockSize={"320px"}
              ml={20}
              mt={4}
              mb={2}
              src="../Rectangle 44.png"
            />
          </Box>
        </GridItem>

        {/* Bottom Row */}
        <GridItem colSpan={2} bg="white" borderRadius={20}>
          <Box
            bgColor={"gray.100"}
            mt={4}
            w={"44px"}
            h={"44px"}
            ml={5}
            borderRadius={10}
            mb={5}
          >
            <Image src="../Group 27170.png" />
          </Box>
          <Heading as="h2" fontSize={25} ml={10}>
            Webflow
          </Heading>
          <Box>
            <Text maxW={300} ml={10} mt={3}>
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </Text>
            <Box ml={"70%"} mr={0} mt={"-17%"}>
              <Image w={218} h={214} src="../Rectangle 43.png" />
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1} bg="white" borderRadius={20}>
          <Box
            bgColor={"gray.100"}
            mt={4}
            w={"44px"}
            h={"44px"}
            ml={5}
            borderRadius={10}
            mb={5}
          >
            <Icon as={PhoneIcon} mx={3.5} mt={4} />
          </Box>
          <Heading as="h2" fontSize={25} ml={10}>
            Custom Development
          </Heading>
          <Text maxW={300} ml={10} mt={3}>
            From concept to launch, we create stunning, user-centric websites
            that elevate your brand and engage your audience.
          </Text>
          <Box></Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
