import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react";

function DropdownMenu() {
  return (
    <Select placeholder="Genre">
      <option value="Action">Action</option>
      <option as={Button} onClick={console.log("hi")}>
        Romance
      </option>
      <option>Drama</option>
      <option>Fiction</option>
      <option>Non-Fiction</option>
    </Select>
  );
}

export default DropdownMenu;
