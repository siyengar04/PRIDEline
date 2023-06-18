import {
  Box,
  Button,
  ButtonGroup,
  Image,
  Divider,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Center,
  Link,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

//Get response from backend
let books = [
  {
    title: "LGBTQ Cultures",
    author: "Michele J. Eliason, Peggy L. Chinn",
    description:
      "Drawn from real-world experience and current research, the fully updated LGBTQ Cultures, 3rd Edition paves the way for healthcare professionals to provide well-informed, culturally sensitive healthcare to lesbian, gay, bisexual, transgender, and queer (LGBTQ) patients. This vital guide fills the LGBTQ awareness gaps, including replacing myths and stereotypes with facts, and measuring the effects of social stigma on health. Vital for all nursing specialties, this is the seminal guide to actively providing appropriate, culturally sensitive care to persons of all sexual orientations and gender identities.",
    thumbnail:
      "http://books.google.com/books/content?id=6SQ6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  },
];
const Book = ({ title, author, description, thumbnail, infoLink }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Center>
          <Image src={thumbnail} borderRadius="md" />
        </Center>
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text width={"25vh"}>{description.substring(0, 150) + "..."}</Text>
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
          <Button variant="ghost" colorScheme="blue">
            Preview
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default function gridListWith() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          PrideLine
        </Heading>
        <Text fontSize={{ base: "sm", sm: "lg" }}>
          View our LGBTQ-themed books! Select a genre in the top right to get
          started!
        </Text>
      </Stack>

      <Container maxW={"9xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={10} justify="center">
          {books.map(({ title, author, description, thumbnail }) => {
            return (
              <Book
                title={title}
                author={author}
                description={description}
                thumbnail={thumbnail}
                key={title}
              ></Book>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}
