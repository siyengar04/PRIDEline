import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import CardWrapper from "./components/Cardwrapper.js";
import Navbar from "./components/Navbar.js";
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <CardWrapper />
    </ChakraProvider>
  );
}

export default App;
