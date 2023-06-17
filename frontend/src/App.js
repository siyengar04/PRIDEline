import React from 'react';
import { ChakraProvider, Heading } from '@chakra-ui/react';
import CardWrapper from './components/Cardwrapper.js';
import Navbar from './components/Navbar.js';
import DropdownMenu from './components/DropdownMenu.js'; 

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <CardWrapper />

      <DropdownMenu /> 
    </ChakraProvider>
  );
}

export default App;
