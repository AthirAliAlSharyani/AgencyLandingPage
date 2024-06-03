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
        <HStack justifyContent={"space-between"}>
          <Heading as="h2" size="xl" noOfLines={1} ml={[2, 4, 7]}>
            Available Product
          </Heading>

          <Menu>
            <MenuButton
              as={Button}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "white", color: "black" }}
              mt={4}
              w={"211px"}
              h={"60px"}
              mr={20}
            >
              {selectedCategory ? selectedCategory : "Select Category"}
              <ChevronDownIcon mr={4} ml={3} />
            </MenuButton>
            <MenuList>
              {categories.map((category) => (
                <MenuItem
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </MenuItem>
              ))}
              <Link href="/Products" passHref>
                <MenuItem as="a">Show All</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns={["repeat(4, 1fr)"]}
          gap={4}
          p={2}
          mt="10"
          w="full"
        >
          {/* Example of repeating GridItem */}
          {filteredProducts.map((product) => (
            <GridItem key={product.id} colSpan={1} bg="white" borderRadius={15}>
              <VStack>
                <Heading as="h2" fontSize={["10", "15", "25"]} ml={3} mt={3}>
                  {product.title}
                </Heading>
                <Image
                  src={product.image}
                  alt={product.title}
                  w={"150px"}
                  h={"200px"}
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
                  maxW={300}
                  ml={3}
                  mt={3}
                  mb={4}
                  fontSize={["10", "10", "20"]}
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
