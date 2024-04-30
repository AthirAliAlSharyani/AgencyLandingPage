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
  Flex,
  Center,
} from "@chakra-ui/react";
import React from "react";

export default function What_We_Do() {
  return (
    <Flex direction="column" align="left" p={5} w="full">
      <Heading as="h2" size="xl" noOfLines={1} ml={[2, 4, 7]}>
        What We Do?
      </Heading>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns={["repeat(4, 1fr)"]}
        gap={4}
        p={2}
        mt={5}
        w="full"
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
          <Heading as="h2" fontSize={"25"} ml={10}>
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
          <Heading
            as="h2"
            fontSize={25}
            ml={{ sm: "2", md: "2", lg: "20" }}
            w={{ sm: "60" }}
          >
            E-commerce Solutions
          </Heading>
          <Text maxW={300} ml={20} mt={3}>
            From concept to launch, we create stunning, user-centric websites
            that elevate your brand and engage your audience.
          </Text>
          <Center>
            <Image mb={3} mt={2} src="../Rectangle 44.png" />
          </Center>
        </GridItem>
        <GridItem colSpan={2} bg="white" borderRadius="20" p={2}>
          <Flex align="start" justify="space-between">
            {/* Text Content Box */}

            <Box pr={5}>
              <Box
                bgColor={"gray.100"}
                w={"44px"}
                h={"44px"}
                ml={3}
                borderRadius={10}
                mb={2}
                mt={3}
              >
                <Image src="../Group 27170.png" />
              </Box>{" "}
              {/* Adding padding to separate from the image */}
              <Heading as="h2" fontSize="25" mb={3}>
                Webflow
              </Heading>
              <Text maxWidth="300px">
                From concept to launch, we create stunning, user-centric
                websites that elevate your brand and engage your audience.
              </Text>
            </Box>

            {/* Image Box */}
            <Box flexShrink={0}>
              {" "}
              {/* Prevent the image from shrinking */}
              <Image
                width={218}
                height={214}
                src="../Rectangle 43.png"
                alt="Webflow Image"
              />
            </Box>
          </Flex>
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
        </GridItem>
      </Grid>
    </Flex>
  );
}
