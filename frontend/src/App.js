import { React } from "react";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import CardWrapper from "./components/Cardwrapper.js";

function App() {
  return (
    <ChakraProvider>
      <CardWrapper />
    </ChakraProvider>
  );
}

export default App;
