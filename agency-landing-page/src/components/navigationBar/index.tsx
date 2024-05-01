"use client";
import {
  Box,
  Flex,
  Button,
  Image,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useBreakpointValue,
  HStack,
  Text,
} from "@chakra-ui/react";
import { link } from "fs";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
export default function NavigationBar() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex
        as="header"
        px={{ base: 2, md: 6 }}
        py="4"
        align="center"
        justifyContent="space-between"
        w="full"
      >
        {!isMobile ? (
          <>
            <HStack mt={10} ml={"10"} gap={3}>
              <Image
                borderRadius="full"
                boxSize="150px"
                src="https://helder.design/wp-content/uploads/2023/09/Logo.svg"
                alt="Dan Abramov"
                w={{ base: "20px", md: "40px" }}
                h={{ base: "20px", md: "40px" }}
              />
              <Text fontSize={20} fontFamily={"sans-serif"}>
                Agency Landing Page
              </Text>
            </HStack>
            <HStack
              justifyContent="center"
              background={"white"}
              width={400}
              h={52.2}
              opacity={"60%"}
              border-2
              borderRadius={20}
              color={"black"}
              gap={30}
              mx={2}
              fontSize={15}
              fontWeight={600}
              mt={10}
              ml={"10"}
            >
              <Link href="#">
                {" "}
                <Text
                  _hover={{
                    textDecoration: "none",
                    color: "blue.500",
                    textUnderlineOffset: "none",
                  }}
                >
                  Home
                </Text>
              </Link>
              <Link href="#">
                <Text>About</Text>
              </Link>
              <Link href="#">
                {" "}
                <Text>How it Works</Text>
              </Link>
              <Link href="#">
                <Text>Services</Text>
              </Link>
            </HStack>
            <Box mt={10} mr={"10%"}>
              <HStack>
                <Text
                  _hover={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "blue.500",
                  }}
                  fontSize="15px"
                  fontWeight="500"
                  color={"gray.400"}
                >
                  Sign in
                </Text>
                <Button colorScheme="blue" h={10}>
                  Sign Up
                </Button>
              </HStack>
            </Box>
          </>
        ) : (
          // Hamburger Menu for mobile
          <Box justifyContent={"left"}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={Link} href="/">
                  Home
                </MenuItem>
                <MenuItem as={Link} href="/about">
                  About
                </MenuItem>
                <MenuItem as={Link} href="/services">
                  Services
                </MenuItem>
                <MenuItem as={Link} href="/contact">
                  Contact
                </MenuItem>
                <MenuItem as={Link} href="/contact">
                  Sign in / Sign up
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        )}
      </Flex>
    </>
  );
}
