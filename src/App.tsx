import React, { useState } from 'react';
import { Header } from './components/Header';

import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';


function App() {

  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
