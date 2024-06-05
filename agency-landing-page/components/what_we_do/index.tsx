"use client";

import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
  HStack,
  Center,
  Grid,
  Stack,
  VStack,
  Link,
} from "@chakra-ui/react";
import link from "next/link";
import React, { useEffect, useState } from "react";

export default function What_We_Do() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    const options = {
      method: "GET",
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => {
        console.error(err, "error");
      });
  }, []);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const categories = Array.from(
    new Set(data.map((product) => product.category))
  );

  const filteredProducts = data.filter(
    (product) =>
      product.category === selectedCategory || selectedCategory === ""
  );

  return (
    <>
      <Flex
        direction="column"
        align="left"
        alignContent={"center"}
        p={90}
        w="full"
        mt={"auto"}
      >
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          p={4}
        >
          <Heading
            as="h2"
            size={{ base: "md", md: "lg", lg: "xl" }}
            noOfLines={1}
            ml={{ base: 2, md: 4, lg: 7 }}
            mb={{ base: 2, md: 0 }}
          >
            Available Product
          </Heading>

          <Menu>
            <MenuButton
              as={Button}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "white", color: "black" }}
              mt={{ base: 2, md: 4 }}
              w={{ base: "100%", md: "211px" }}
              h={{ base: "40px", md: "60px" }}
              mr={{ base: 0, md: 20 }}
            >
              {selectedCategory ? selectedCategory : "Select Category"}
              <ChevronDownIcon ml={2} />
            </MenuButton>
            <MenuList color={"black"}>
              {categories.map((category) => (
                <MenuItem
                  color={"black"}
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  _hover={{ bgColor: "blue.200" }}
                >
                  {category}
                </MenuItem>
              ))}

              <MenuItem
                as="a"
                href="./Products"
                _hover={{ bgColor: "blue.200" }}
              >
                Show All
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
        <Grid
          templateRows={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
          gap={{ base: 2, lg: 4 }}
          p={2}
          mt="10"
          w="full"
        >
          {/* Example of repeating GridItem */}
          {filteredProducts.map((product) => (
            <GridItem key={product.id} colSpan={1} bg="white" borderRadius={15}>
              <VStack>
                <Heading
                  as="h2"
                  fontSize={{ base: "10px", md: "15px", lg: "25px" }}
                  ml={3}
                  mt={3}
                >
                  {product.title}
                </Heading>
                <Image
                  src={product.image}
                  alt={product.title}
                  w={{ base: "100px", md: "150px" }}
                  h={{ base: "150px", md: "200px" }}
                />
              </VStack>
              <Box
                className="description"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                <Text
                  maxW={{ base: "150px", md: "300px" }}
                  ml={3}
                  mt={3}
                  mb={4}
                  fontSize={{ base: "10px", md: "15px", lg: "20px" }}
                >
                  {product.description}
                </Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Flex>
    </>
  );
}
