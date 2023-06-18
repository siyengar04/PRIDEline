import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Textarea,
  Container,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
const NavLink = (children) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Nav({ books }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Change this function to send a post request to the backend with the genre

  const [genre, setGenre] = useState("");
  const handleClick = () => {
    axios
      .post("http://localhost:3001/books", {
        genre: genre,
      })
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
        // books = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>Logo</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <HStack>
                {/* This is the input field that the genre is entered in*/}
                <Input
                  placeholder="Enter Genre here!"
                  onChange={(event) => setGenre(event.target.value)}
                />
                <Button onClick={handleClick}>Search!</Button>
              </HStack>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
