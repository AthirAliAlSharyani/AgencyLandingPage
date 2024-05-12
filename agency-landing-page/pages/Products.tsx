"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Flex,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Divider,
  Button,
  HStack,
  MenuButton,
  MenuItem,
  MenuList,
  Menu,
  VStack,
  Grid,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
export default function Products() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const categories = Array.from(
    new Set(data.map((product) => product.category))
  );

  const filteredProducts = data.filter(
    (product) =>
      (product.category === selectedCategory || selectedCategory === "") &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex
      direction="column"
      align="left"
      alignContent={"center"}
      p={90}
      w="full"
      mt={"auto"}
    >
      <Center>
        <Heading mb={20}>
          Here where you can find all available products!
        </Heading>{" "}
      </Center>
      <HStack>
        <Menu>
          <MenuButton
            as={Button}
            bg={"blue.500"}
            color={"white"}
            _hover={{ bg: "white", color: "black" }}
            mt={4}
            w={"211px"}
            h={"60px"}
            mr={10}
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
            <MenuItem onClick={() => handleCategorySelect("")}>
              Show All
            </MenuItem>
          </MenuList>
        </Menu>
        <InputGroup>
          <InputLeftElement
            mt={4}
            h={"60px"}
            pointerEvents="none"
            children={<Icon as={SearchIcon} color="gray.300" />}
          />
          <Input
            variant="filled"
            placeholder="Search..."
            w={"611px"}
            h={"60px"}
            mt={4}
            onChange={handleSearchChange}
          />
        </InputGroup>
      </HStack>
      <Grid
        templateRows="repeat(2, 5fr)"
        templateColumns={["repeat(6, 5fr)"]}
        mt="10"
        w="full"
        gap={8}
      >
        {filteredProducts.map((product) => (
          <Card maxW="sm" key={product.id}>
            <CardBody>
              <Stack mt="2" spacing="1" content="center">
                <Box width={100} height={200}>
                  <img
                    src={product.image}
                    alt={product.title}
                    width={"full"}
                    height={"full"}
                  />
                </Box>
                <Heading size="md"> {product.title}</Heading>
                <Text>{product.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {product.price}$
                </Text>
              </Stack>
            </CardBody>

            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Grid>
    </Flex>
  );
}
