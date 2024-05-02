import React from "react";
import {
  Box,
  Stack,
  Image,
  Text,
  Icon,
  ChakraProvider,
  HStack,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function Reviews() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Center>
      <Box
        p={4}
        boxShadow="md"
        borderWidth="1px"
        borderRadius="20"
        overflow="hidden"
        w={["900", "30%", "438px"]} // Adjust width for responsiveness
        bg="white"
        h={["300px", "90%", "20%"]}
      >
        {isMobile ? (
          <>
            <Stack spacing={4} align="center">
              <Image
                borderRadius="full"
                boxSize="40px"
                src="https://bit.ly/dan-abramov"
                alt="Profile image 1"
              />
              <Image
                borderRadius="full"
                boxSize="40px"
                src="https://bit.ly/kent-c-dodds"
                alt="Profile image 2"
                mt={-8}
              />
              <Image
                borderRadius="full"
                boxSize="40px"
                src="https://bit.ly/prosper-baba"
                alt="Profile image 3"
                mt={-8}
              />
              <Image
                borderRadius="full"
                boxSize="40px"
                src="https://bit.ly/code-beast"
                alt="Profile image 4"
                mt={-8}
              />
              <Image
                borderRadius="full"
                boxSize="40px"
                src="https://bit.ly/ryan-florence"
                alt="Profile image 5"
                mt={-8}
              />
            </Stack>
            <Center mt={4}>
              <Text color="gray.600">
                <b color="black.900">5.0</b> Based on <b>205</b> reviews
              </Text>
            </Center>
            <Box mt={2} ml={"20"} textAlign="center">
              <Box display="flex" alignItems="center" justifyContent="center">
                <Icon as={StarIcon} color="yellow.400" />
                <Icon as={StarIcon} color="yellow.400" />
                <Icon as={StarIcon} color="yellow.400" />
                <Icon as={StarIcon} color="yellow.400" />
                <Icon as={StarIcon} color="yellow.400" />
              </Box>
            </Box>
          </>
        ) : (
          <>
            <HStack>
              <Stack
                direction={["column", "column", "row"]} // Adjust direction for responsiveness
                spacing={4}
                alignItems={["center", "center", "flex-start"]} // Adjust alignment for responsiveness
                justify="center"
                mt={4}
              >
                <Image
                  borderRadius="full"
                  boxSize="40px"
                  src="https://bit.ly/dan-abramov"
                  alt="Profile image 1"
                  mr={[-3, -3, -6]} // Adjust margin for responsiveness
                />
                <Image
                  borderRadius="full"
                  boxSize="40px"
                  src="https://bit.ly/kent-c-dodds"
                  alt="Profile image 2"
                  mr={[-3, -3, -6]} // Adjust margin for responsiveness
                />
                <Image
                  borderRadius="full"
                  boxSize="40px"
                  src="https://bit.ly/prosper-baba"
                  alt="Profile image 3"
                  mr={[-3, -3, -6]} // Adjust margin for responsiveness
                />
                <Image
                  borderRadius="full"
                  boxSize="40px"
                  src="https://bit.ly/code-beast"
                  alt="Profile image 4"
                  mr={[-3, -3, -6]} // Adjust margin for responsiveness
                />
                <Image
                  borderRadius="full"
                  boxSize="40px"
                  src="https://bit.ly/ryan-florence"
                  alt="Profile image 5"
                />
              </Stack>
              <Center mt={4}>
                <Text color="gray.600">
                  <b color="black.900">5.0</b> Based on <b>205</b> reviews
                </Text>
              </Center>
            </HStack>
            <Box mt={2} ml={"20"} textAlign="center">
              <Box display="flex" alignItems="center" justifyContent="center">
                <Icon as={StarIcon} color="yellow.400" />
                <Icon as={StarIcon} color="yellow.400" />
                <Icon as={StarIcon} color="yellow.400" />
                <Icon as={StarIcon} color="yellow.400" />
                <Icon as={StarIcon} color="yellow.400" />
              </Box>
            </Box>
          </>
        )}
      </Box>
    </Center>
  );
}
