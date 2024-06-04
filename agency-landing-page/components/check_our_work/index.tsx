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
  Image,
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
      <section id="products">
        <ChakraProvider>
          <Flex align="center" justify="center" flexDirection="column" w="100%">
            <Flex
              justifyContent="space-evenly"
              alignItems="center"
              mb={3}
              w="100%"
              h="auto"
              p={4}
              flexWrap="wrap"
            >
              <IconButton
                icon={<ChevronLeftIcon />}
                onClick={goPrev}
                borderRadius="full"
                boxSize={{ base: "50px", md: "60px", lg: "70px" }}
                aria-label="Previous slide"
                bg={"white"}
                color={"black"}
              />
              <Heading
                mx={4}
                fontSize={{ base: "23px", md: "36px", lg: "60px" }}
                textAlign="center"
              >
                Check Our Products!
              </Heading>
              <IconButton
                icon={<ChevronRightIcon />}
                onClick={goNext}
                borderRadius="full"
                boxSize={{ base: "50px", md: "60px", lg: "70px" }}
                aria-label="Next slide"
                bg="white"
                color={"black"}
              />
            </Flex>

            <Swiper
              initialSlide={1}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              centeredSlides={true}
              className="mySwiper"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                swiper.slides.forEach((slide) => {
                  if (slide) {
                    slide.style.transform = "scale(0.7)";
                    slide.style.zIndex = "0";
                  }
                });
                const activeSlide = swiper.slides[swiper.activeIndex];
                if (activeSlide) {
                  activeSlide.style.transform = "scale(1)";
                  activeSlide.style.zIndex = "1";
                }
              }}
              onInit={(swiper) => {
                const activeSlide = swiper.slides[swiper.activeIndex];
                if (activeSlide) {
                  activeSlide.style.transform = "scale(1.2)";
                  activeSlide.style.zIndex = "1";
                }
              }}
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              {data && data.length > 0 ? (
                data.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Center>
                      <Text
                        fontWeight="700"
                        fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                      >
                        {product.price}$
                      </Text>
                    </Center>
                    <Image
                      src={product.image}
                      alt={product.title}
                      maxWidth={{ base: "300px", lg: "560px" }}
                      minWidth={{ base: "300px", lg: "560px" }}
                      maxHeight={{ base: "400px", lg: "600px" }}
                      minHeight={{ base: "400px", lg: "600px" }}
                      border="10px solid rgba(255, 255, 255, 0.5)"
                      borderRadius="27px"
                    />
                  </SwiperSlide>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </Swiper>
          </Flex>
        </ChakraProvider>
      </section>
    </>
  );
}
