import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Navbar.js";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Nav></Nav>
      </div>
    </ChakraProvider>
  );
}

export default App;
