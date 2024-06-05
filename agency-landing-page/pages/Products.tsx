"use client";
import React, { useEffect, useState } from "react";

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
  Image,
  ChakraProvider,
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
    <ChakraProvider>
      <Flex direction="column" align="left" p={6} w="full" mt={"auto"}>
        <Center>
          <Heading mb={10} size={{ base: "md", md: "lg", lg: "xl" }}>
            Here where you can find all available products!
          </Heading>{" "}
        </Center>
        <HStack
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          p={4}
          mb={10}
        >
          <Menu>
            <MenuButton
              as={Button}
              bg={"blue.500"}
              color={"white"}
              _hover={{ bg: "white", color: "black" }}
              mt={4}
              w={{ base: "100%", md: "211px" }}
              h={{ base: "40px", md: "60px" }}
              mr={{ base: 0, md: 10 }}
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
          <InputGroup maxW={{ base: "100%", md: "500px", lg: "700px" }}>
            <InputLeftElement
              mt={4}
              h={{ base: "40px", md: "60px" }}
              pointerEvents="none"
              children={<Icon as={SearchIcon} color="gray.300" />}
            />
            <Input
              variant="filled"
              placeholder="Search..."
              w="full"
              h={{ base: "40px", md: "60px" }}
              mt={4}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </HStack>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 2fr)",
          }}
          gap={{ base: 3, lg: 2 }}
          p={4}
          mt="10"
          w="full"
        >
          {filteredProducts.map((product) => (
            <Card maxW="sm" key={product.id}>
              <CardBody>
                <Stack mt="2" spacing="1" content="center">
                  <Box
                    minWidth={100}
                    maxWidth={100}
                    minHeight={200}
                    maxHeight={200}
                    pos="relative"
                  >
                    <Image
                      layout="fill"
                      objectFit="contain"
                      src={product.image}
                      alt={product.title}
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
    </ChakraProvider>
  );
}
