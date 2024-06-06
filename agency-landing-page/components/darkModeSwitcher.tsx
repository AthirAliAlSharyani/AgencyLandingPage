import React from "react";
import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="dark-mode-switch" mb="0">
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </FormLabel>
      <Switch
        size="lg"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </FormControl>
  );
};

export default DarkModeSwitch;
