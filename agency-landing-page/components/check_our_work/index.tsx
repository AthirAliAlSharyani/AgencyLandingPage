"use client";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  border,
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Icon,
  Text,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import swiper from "swiper";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function Check_our_work() {
  const [data, setData] = useState([]); // Set initial state to an empty array

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
        // Optionally update the state to reflect the error in the UI
        // setData('Error fetching data'); // You can set state to an error message or similar approach
      });
  }, []);

  const swiperRef = useRef<SwiperClass | null>(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: true,
    xl: false,
  });
  return (
    <>
      <ChakraProvider>
        <Flex align="center" justify="center">
          <Flex
            justifyContent="space-evenly"
            alignItems="center"
            mb={3}
            w="90vw"
            h={"20vh"}
          >
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={goPrev}
              borderRadius="full"
              boxSize="70px" // Box size as 60px
              aria-label="Previous slide"
              bg={"white"}
            />
            <Heading mx="4" fontSize={60}>
              Check Our Products!
            </Heading>
            <IconButton
              icon={<ChevronRightIcon />}
              onClick={goNext}
              borderRadius="full"
              boxSize="70px"
              aria-label="Next slide"
              bg={"white"}
            />
          </Flex>
        </Flex>

        <Swiper
          initialSlide={1}
          slidesPerView={2} // Shows 1 centered and 2 halves
          spaceBetween={120} // Space between slides
          centeredSlides={true} // Ensures the active slide is centered
          className="mySwiper"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }} // Proper assignment inside the callback
          onSlideChange={(swiper) => {
            // Reset styles for all slides
            swiper.slides.forEach((slide) => {
              if (slide) {
                // Ensure slide is not undefined
                slide.style.transform = "scale(0.7)";
                slide.style.zIndex = "0"; // Lower z-index for non-active slides
              }
            });
            // Enhance the active slide
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (activeSlide) {
              // Ensure active slide is not undefined
              activeSlide.style.transform = "scale(1)";
              activeSlide.style.zIndex = "1"; // Higher z-index for the active slide
            }
          }}
          onInit={(swiper) => {
            // Set initial styles for the active slide
            const activeSlide = swiper.slides[swiper.activeIndex];
            if (activeSlide) {
              // Ensure active slide is not undefined
              activeSlide.style.transform = "scale(1.2)";
              activeSlide.style.zIndex = "1"; // Ensure it's above others
            }
          }}
          style={{
            width: isMobile ? "auto" : "1260px",
            height: isMobile ? "auto" : "700px",
          }}
        >
          {data && data.length > 0 ? (
            data.map((product) => (
              <SwiperSlide key={product.id} style={{ width: "60%" }}>
                <Text
                  alignContent={"center"}
                  fontWeight={"700px"}
                  fontSize={"30"}
                >
                  {product.price}$
                </Text>

                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "960px",
                    height: "600px",
                    border: "10px solid rgba(255, 255, 255, 0.5)",
                    borderRadius: "27px",
                  }}
                />
              </SwiperSlide>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Swiper>
      </ChakraProvider>
    </>
  );
}
