import React from "react";
import { Global } from "@emotion/react";
import { useColorMode } from "@chakra-ui/react";

const GlobalStyle = () => {
  const { colorMode } = useColorMode();

  return (
    <Global
      styles={{
        body: {
          backgroundColor: colorMode === "dark" ? "#1A202C" : "blue",
          color: colorMode === "dark" ? "blue" : "#1A202C",
        },
      }}
    />
  );
};

export default GlobalStyle;
