import React from 'react';
import { Box, Switch, useColorMode } from '@chakra-ui/react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';

function Portfolio() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Header />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Switch size='lg' isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
    </Box>
  );
}

export default Portfolio;