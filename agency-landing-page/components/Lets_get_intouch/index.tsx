"use client";
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FormControl, FormLabel, Text, Image } from "@chakra-ui/react";
import { BellIcon, ChatIcon, EditIcon, SunIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";
export default function Lets_Get_InTouch() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const toast = useToast();
  const sendEmail = (formData: Record<string, unknown> | undefined) => {
    emailjs
      .send(
        "service_tboam4j", // Your EmailJS service ID
        "template_8r2akgf", // Your EmailJS template ID
        formData,
        "public_XXXXXXXXXXXX" // Your actual EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  // Example form submission handler
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = {
      email: event.target.email.value,
      name: event.target.name.value,
      message: event.target.message.value,
    };

    sendEmail(formData);
  };

  return (
    <section id="contact">
      <ChakraProvider>
        <Flex
          direction="column"
          align="center"
          alignContent={"center"}
          p={90}
          w="full"
          mt={"auto"}
        >
          {/* Foreground Content */}
          <Box
            mt={10}
            pb={14}
            px={4}
            w={{ sm: "400px", md: "750px", lg: "500", xl: "900" }}
            maxW="auto"
            zIndex="1"
            mr={8}
          >
            <Heading
              size="lg"
              fontSize={["2xl", "3xl", "4xl"]}
              textAlign="center"
            >
              Let’s Get in Touch
            </Heading>
            <form onSubmit={handleSubmit}>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  borderColor={"black"}
                  mb={8}
                  h={"50px"}
                />
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  borderColor={"black"}
                  mb={8}
                  h={"50px"}
                />
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  borderColor={"black"}
                  placeholder="Write your message here..."
                  mb={5}
                ></Textarea>

                <Button
                  bg="blue.600"
                  color="white"
                  _hover={{
                    bg: "white",
                    color: "black",
                    border: "1px solid black",
                  }}
                  w="full"
                  mt={5}
                  h={"60px"}
                  type="submit"
                >
                  Send Message
                </Button>
              </FormControl>
            </form>
          </Box>

          <Flex
            bg="white"
            borderRadius="26"
            mt={10}
            pb={14}
            px={4}
            w={{ sm: "400px", md: "950px", lg: "500", xl: "900" }}
          >
            <Stack>
              <HStack
                fontSize={["5", "10", "12px"]}
                mb={7}
                w={{ sm: "100px", md: "900px", lg: "1200" }}
              >
                <Heading mb={4} mt={8} fontSize={["sm", "md", "xl"]} mr={"50%"}>
                  Agency page
                </Heading>
                <HStack color={"gray.400"} w={["100px", "280px"]}>
                  <Text> Home</Text>
                  <Text> About</Text>
                  <Text w={["70px", "80px"]}>How it Works</Text>
                  <Text> Services</Text>
                </HStack>
              </HStack>
              <Text
                fontSize={["10", "10", "lg"]}
                mx={[2, 1, 8]}
                textAlign="left"
                color={"gray.400"}
                m={"auto"}
                w={{ sm: "200px", md: "500px", lg: "200" }}
              >
                Ready to elevate your online presence? Contact us today to
                discuss your project and discover how we can bring your vision
                to life.
              </Text>
              <HStack mt={7} gap={{ sm: "20", md: "60", lg: "480" }}>
                <HStack>
                  <ChatIcon />
                  <Text
                    color={"gray.400"}
                    fontSize={["11", "10", "15"]}
                    w={["30px", "60px", "120px"]}
                  >
                    {" "}
                    Made with love
                  </Text>
                </HStack>
                <HStack>
                  <SunIcon mr={6} /> <BellIcon mr={6} /> <ChatIcon mr={6} />{" "}
                  <EditIcon mr={10} />
                </HStack>
              </HStack>
            </Stack>
          </Flex>
        </Flex>
      </ChakraProvider>
    </section>
  );
}
