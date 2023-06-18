import { ReactNode, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  Input,
  Image,
  Divider,
  Heading,
  Text,
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Container,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import axios from "axios";
import logo from "./Untitled-1.png";
import logo2 from "./Untitled-3.png";
const imageUrl = "img/Untitled-1.png";

const Book = ({
  title,
  author,
  description,
  thumbnail,
  infoLink,
  previewLink,
}) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Center>
          <Image src={thumbnail} borderRadius="md" />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md" width={"25vh"}>
            {title}
          </Heading>
          <Text width={"25vh"}>
            {typeof description !== "undefined"
              ? description.substring(0, 150) + "..."
              : ""}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link href={infoLink} isExternal={true}>
            <Button variant="solid" colorScheme="blue">
              Learn More
            </Button>
          </Link>
          <Link href={previewLink} isExternal={true}>
            <Button variant="ghost" colorScheme="blue">
              Preview
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

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

export default function Cardwrapper() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [genre, setGenre] = useState("");
  const [books, setBooks] = useState([]);
  const handleClick = () => {
    axios
      .post("/books", {
        genre: genre,
      })
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Image boxSize="75px" src={logo2}></Image>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <HStack>
                {/* This is the input field that the genre is entered in*/}
                <Input
                  placeholder="Enter query here!"
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

      <Box p={4}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
            <Box>
              <Image src={logo}></Image>
            </Box>
          </Heading>
          <Text fontSize={{ base: "sm", sm: "lg" }}>
            View our LGBTQ-themed books! Enter a query in the top right to get
            started. :)
          </Text>
        </Stack>

        <Container maxW={"9xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={10} justify="center">
            {books.map(
              ({
                title,
                author,
                description,
                thumbnail,
                infoLink,
                previewLink,
              }) => {
                return (
                  <Book
                    title={title}
                    author={author}
                    description={description}
                    thumbnail={thumbnail}
                    infoLink={infoLink}
                    previewLink={previewLink}
                    key={title}
                  ></Book>
                );
              }
            )}
          </Flex>
        </Container>
      </Box>
    </>
  );
}
