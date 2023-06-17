import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

function DropdownMenu() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Genre
      </MenuButton>
      <MenuList>
        <MenuItem>Action</MenuItem>
        <MenuItem>Romance</MenuItem>
        <MenuItem>Drama</MenuItem>
        <MenuItem>Fiction</MenuItem>
        <MenuItem>Non-Fiction</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default DropdownMenu;
