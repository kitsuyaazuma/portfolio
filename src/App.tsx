import { useRef, useState } from 'react';
import { Hero } from './components/Hero';
import { AppShell, Text, ColorScheme, ColorSchemeProvider, Header, MantineProvider, Navbar, ActionIcon, Group, Code, createStyles, Burger } from '@mantine/core';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { FooterSocial } from './components/FooterSocial';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useMediaQuery } from '@mantine/hooks';

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background,
        color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
      },
    },
  };
});


const data = [
  { link: '', label: 'Notifications', icon: IconSun },
  { link: '', label: 'Billing', icon: IconSun },
  { link: '', label: 'Security', icon: IconSun },
  { link: '', label: 'SSH Keys', icon: IconSun },
  { link: '', label: 'Databases', icon: IconSun },
  { link: '', label: 'Authentication', icon: IconSun },
  { link: '', label: 'Other Settings', icon: IconSun },
];

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const dark = colorScheme === 'dark';  
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const sm = useMediaQuery('(min-width: 768px)');

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="md"
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        header={
          <Header height={50} p="xs">
            <Group position="apart">
              <ActionIcon
                  variant="outline"
                  color={dark ? 'green.5' : 'green.9'}
                  onClick={() => toggleColorScheme()}
                  title="Toggle color scheme"
                  >
                  {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
              </ActionIcon>
              <Text pr="xs" color={dark ? 'green.5' : 'green.9'}>HOME</Text>
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