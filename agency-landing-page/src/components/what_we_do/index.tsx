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
    <Flex
      direction="column"
      align="left"
      alignContent={"center"}
      p={90}
      w="full"
      mt={"auto"}
    >
      <Heading as="h2" size="xl" noOfLines={1} ml={[2, 4, 7]}>
        What We Do?
      </Heading>
      <Center>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns={["repeat(4, 1fr)"]}
          gap={4}
          p={2}
          mt={"auto"}
          w="full"
        >
          {/* Top Row */}
          <GridItem colSpan={1} bg="white" borderRadius={15}>
            <Box
              bgColor={"gray.100"}
              mt={4}
              w={["44px"]}
              h={["44px"]}
              ml={5}
              borderRadius={10}
              mb={5}
            >
              <Icon as={StarIcon} mx={3.5} mt={4} />
            </Box>
            <Heading as="h2" fontSize={["10", "15", "25"]} ml={3}>
              UI/UX Design
            </Heading>
            <Text maxW={300} ml={3} mt={3} mb={4} fontSize={["10", "10", "20"]}>
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
            <Heading as="h2" fontSize={["10", "15", "25"]} ml={3}>
              Web Design
            </Heading>
            <Text maxW={300} ml={3} mt={3} mb={4} fontSize={["10", "10", "20"]}>
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </Text>
          </GridItem>
          <GridItem colSpan={1} bg="white" borderRadius={15}>
            <Box
              bgColor={"gray.100"}
              mt={4}
              w={["50px", "44px", "44px", "44px"]}
              h={["20px", "46px", "44px", "44px"]}
              ml={5}
              borderRadius={10}
              mb={5}
            >
              <Icon as={HamburgerIcon} mx={3.5} mt={4} />
            </Box>
            <Heading as="h2" fontSize={["10", "15", "25"]} ml={3}>
              Responsive Web
            </Heading>
            <Text maxW={300} ml={3} mt={3} mb={4} fontSize={["10", "10", "20"]}>
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </Text>
          </GridItem>
          <GridItem
            rowSpan={2}
            colSpan={1}
            bg="white"
            borderRadius={15}
            mr={20}
          >
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
            <Heading as="h2" fontSize={["10", "15", "25"]} ml={3}>
              E-commerce Solutions
            </Heading>
            <Text maxW={300} ml={3} mt={3} mb={4} fontSize={["10", "10", "20"]}>
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </Text>
            <Center>
              <Image mb={3} mt={2} src="../Rectangle 44.png" />
            </Center>
          </GridItem>
          <GridItem colSpan={2} bg="white" borderRadius="20" p={2}>
            <Flex justify="space-between">
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
                <Heading as="h2" fontSize={["10", "15", "25"]} mb={3}>
                  Webflow
                </Heading>
                <Text maxWidth="300px" mb={4} fontSize={["10", "10", "20"]}>
                  From concept to launch, we create stunning, user-centric
                  websites that elevate your brand and engage your audience.
                </Text>
              </Box>

              {/* Image Box */}
              <Box flexShrink={0} bg={"blue.600"} borderRadius={25} mt={3}>
                <Center>
                  <SunIcon color={"white"} blockSize={"200px"} />
                </Center>
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
            <Heading as="h2" fontSize={["10", "15", "25"]} ml={3}>
              Custom Development
            </Heading>
            <Text maxW={300} ml={3} mt={3} mb={4} fontSize={["10", "10", "20"]}>
              From concept to launch, we create stunning, user-centric websites
              that elevate your brand and engage your audience.
            </Text>
          </GridItem>
        </Grid>
      </Center>
    </Flex>
  );
}
