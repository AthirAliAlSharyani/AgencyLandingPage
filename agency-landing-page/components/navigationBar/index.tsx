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
  FormControl,
  Switch,
  FormLabel,
  VStack,
  ChakraProvider,
  useColorModeValue,
  theme,
} from "@chakra-ui/react";
import { link } from "fs";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import SignUp from "../../pages/SignUp";
import { Router } from "next/router";
import DarkModeSwitch from "../darkModeSwitcher";
import GlobalStyle from "../GlobalStyle_Dark";
import { text } from "stream/consumers";
export default function NavigationBar() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("black", "white");

  return (
    <>
      <ChakraProvider>
        <Flex
          as="header"
          align="center"
          justifyContent="space-between"
          w="full"
          p={5}
          mt={-2}
          position={"fixed"}
          bg={bgColor}
          color={textColor}
          zIndex={10}
        >
          {!isMobile ? (
            <>
              <HStack ml={"10"} gap={3}>
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src="https://helder.design/wp-content/uploads/2023/09/Logo.svg"
                  alt="Dan Abramov"
                  w={{ base: "20px", md: "40px" }}
                  h={{ base: "20px", md: "40px" }}
                />
                <Link href="/">
                  <Text fontSize={20} fontFamily={"sans-serif"}>
                    Agency Landing Page
                  </Text>
                </Link>
              </HStack>
              <HStack
                justifyContent="center"
                width={400}
                opacity={"60%"}
                border-2
                borderRadius={20}
                color={textColor}
                gap={30}
                mx={2}
                fontSize={15}
                fontWeight={600}
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
                <Link href="#contact">
                  <Text>Contact</Text>
                </Link>
                <Link href="#services">
                  {" "}
                  <Text>Services</Text>
                </Link>
                <Link href="#products">
                  <Text>Products</Text>
                </Link>
              </HStack>
              <Box mr={"10%"}>
                <HStack>
                  <DarkModeSwitch />{" "}
                  <Link href="/SignUp">
                    <a style={{ textDecoration: "none" }}>
                      {" "}
                      {/* Add styles directly or via CSS class */}
                      <Text
                        _hover={{
                          cursor: "pointer",
                          color: "blue.500",
                        }}
                        fontSize="15px"
                        fontWeight="500"
                        color="gray.400"
                      >
                        Sign Up
                      </Text>
                    </a>
                  </Link>
                  <Link href="/SignIn">
                    <Button colorScheme="blue" h={10}>
                      Sign In
                    </Button>
                  </Link>
                </HStack>
              </Box>
            </>
          ) : (
            // Hamburger Menu for mobile
            <Box>
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
                  <MenuItem as={Link} href="#products">
                    Products
                  </MenuItem>
                  <MenuItem as={Link} href="#services">
                    Services
                  </MenuItem>
                  <MenuItem as={Link} href="#contact">
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
      </ChakraProvider>
    </>
  );
}
