import React from 'react';
import { Box, Switch, useColorMode } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; 
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Router>
      <Box as="main">
        <Header />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        <Switch size='lg' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      </Box>
    </Router>
  );
}

export default App;