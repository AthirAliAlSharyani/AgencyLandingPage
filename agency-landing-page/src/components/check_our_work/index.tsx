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
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import swiper from "swiper";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function Check_our_work() {
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
            alignItems="center" // Ensure vertical alignment inside this Flex
            mb={3}
            w="90vw" // Width of 50% of the viewport width
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
              Check Our Work
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
          style={{
            width: isMobile ? "100%" : "1960px",
            height: isMobile ? "auto" : "700px",
          }}
          onSlideChange={(swiper) => {
            // Reset styles for all slides
            swiper.slides.forEach((slide) => {
              slide.style.transform = "scale(0.7)";
              slide.style.zIndex = "0"; // Lower z-index for non-active slides
            });
            // Enhance the active slide
            const activeSlide = swiper.slides[swiper.activeIndex];
            activeSlide.style.transform = "scale(1)";
            activeSlide.style.zIndex = "1"; // Higher z-index for the active slide
          }}
          onInit={(swiper) => {
            // Set initial styles for the active slide
            const activeSlide = swiper.slides[swiper.activeIndex];
            activeSlide.style.transform = "scale(1.2)";
            activeSlide.style.zIndex = "1"; // Ensure it's above others
          }}
        >
          <SwiperSlide style={{ width: "60%" }}>
            <img
              src="../check3.png"
              alt="Image 1"
              style={{
                width: "100%",
                height: "100%",
                border: "10px solid rgba(255, 255, 255, 0.5) ",
                borderRadius: "27px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: "60%" }}>
            <img
              src="../Rectangle 30.png"
              alt="Image 2"
              style={{
                width: "100%",
                height: "100%",
                border: "10px solid rgba(255, 255, 255, 0.5) ",
                borderRadius: "27px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide style={{ width: "60%" }}>
            <img
              src="../Rectangle 35.png"
              alt="Image 3"
              style={{
                width: "100%",
                height: "100%",
                border: "10px solid rgba(255, 255, 255, 0.5) ",
                borderRadius: "27px",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </ChakraProvider>
    </>
  );
}
