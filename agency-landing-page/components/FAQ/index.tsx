"use client";
import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  IconButton,
  Collapse,
  useDisclosure,
  ChakraProvider,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

function FAQ() {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const faqs = [
    {
      question: " How can I contact Inkyy Team?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
    {
      question: "What services do you offer?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
    {
      question: " How long does it take to design and develop a website?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
    {
      question: "Do you require a deposit for projects?",
      answer:
        "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
    },
  ];
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Flex
      direction="row"
      align="left"
      alignContent={"center"}
      p={{ base: 10, md: 20, lg: 90 }}
      w="full"
      mt={"auto"}
    >
      {!isMobile ? (
        <HStack
          align="start"
          spacing={10} // More manageable spacing
          p={5}
          alignItems="flex-start"
          w="full"
          maxW="1200px" // Suitable max width for responsiveness
          mx="auto"
        >
          <VStack align="stretch" spacing={4} w="30%">
            <Heading
              fontSize={["20", "25", "40", "67"]}
              w={["200", "290", "300", "380px"]}
              mt={"120"}
            >
              Frequently Asked Questions
            </Heading>
          </VStack>
          <VStack align="stretch" spacing={4} w="70%">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </VStack>
        </HStack>
      ) : (
        <VStack
          align="center"
          spacing={10} // More manageable spacing
          p={5}
          alignItems="flex-start"
          w="full"
          maxW="1200px" // Suitable max width for responsiveness
          mx="auto"
        >
          <Heading
            fontSize={["20", "25", "40", "67"]}
            w={["200", "290", "300", "380px"]}
            mt={"10"}
            ml={"10%"}
          >
            Frequently Asked Questions
          </Heading>

          <VStack align="stretch" spacing={4} w="100%">
            {faqs.map((faq, index) => (
              <FAQItem key={index} {...faq} />
            ))}
          </VStack>
        </VStack>
      )}
    </Flex>
  );
}
export default FAQ;

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box mb={4}>
      <Box p={5} boxShadow="md" borderRadius="md" width="100%" bg="white">
        <HStack justifyContent="space-between" width="100%">
          <Text
            fontWeight="bold"
            flexShrink={1}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {question}
          </Text>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <MinusIcon /> : <AddIcon />}
            aria-label="Toggle FAQ"
          />
        </HStack>
        <Collapse in={isOpen}>
          <Text mt={4}>{answer}</Text>
        </Collapse>
      </Box>
    </Box>
  );
}
