import { useState } from "react";
import { Hero } from "./components/Hero";
import {
  AppShell,
  Text,
  ColorScheme,
  ColorSchemeProvider,
  Header,
  MantineProvider,
  ActionIcon,
  Group,
} from "@mantine/core";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { FooterSocial } from "./components/FooterSocial";
import { IconSun, IconMoonStars } from "@tabler/icons";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const dark = colorScheme === "dark";
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding="md"
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          header={
            <Header height={50} p="xs">
              <Group position="apart">
                <ActionIcon
                  variant="outline"
                  color={dark ? "green.5" : "green.9"}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                >
                  {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                </ActionIcon>
                <Text pr="xs" color={dark ? "green.5" : "green.9"}>
                  HOME
                </Text>
              </Group>
            </Header>
          }
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <FooterSocial />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
