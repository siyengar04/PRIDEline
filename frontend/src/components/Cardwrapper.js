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
} from "@chakra-ui/react";
import { ReactElement } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
const Book = ({ title, author, description, thumbnail, infoLink }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={thumbnail} borderRadius="lg" align={"center"} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text width={"20vh"}>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
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
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          View our LGBTQ friendly books!
        </Text>
      </Stack>

      <Container maxW={"9xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Book
            title={"LGBTQ Cultures"}
            author={"Michele J. Eliason, Peggy L. Chinn"}
            description={
              "Drawn from real-world experience and current research, the fully updated LGBTQ Cultures..."
            }
            thumbnail={
              "http://books.google.com/books/content?id=6SQ6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
            infoLink={"infoLink"}
          ></Book>
          <Book
            title={"LGBTQ Cultures"}
            author={"Michele J. Eliason, Peggy L. Chinn"}
            description={
              "Drawn from real-world experience and current research, the fully updated LGBTQ Cultures..."
            }
            thumbnail={
              "http://books.google.com/books/content?id=6SQ6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
            infoLink={"infoLink"}
          ></Book>
          <Book
            title={"LGBTQ Cultures"}
            author={"Michele J. Eliason, Peggy L. Chinn"}
            description={
              "Drawn from real-world experience and current research, the fully updated LGBTQ Cultures..."
            }
            thumbnail={
              "http://books.google.com/books/content?id=6SQ6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
            infoLink={"infoLink"}
          ></Book>
          <Book
            title={"LGBTQ Cultures"}
            author={"Michele J. Eliason, Peggy L. Chinn"}
            description={
              "Drawn from real-world experience and current research, the fully updated LGBTQ Cultures..."
            }
            thumbnail={
              "http://books.google.com/books/content?id=6SQ6DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            }
            infoLink={"infoLink"}
          ></Book>
        </Flex>
      </Container>
    </Box>
  );
}
