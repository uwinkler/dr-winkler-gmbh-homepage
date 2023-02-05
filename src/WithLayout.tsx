import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import palettes from 'src/common/paletteTypes';
import getTheme from 'src/theme';
import { setCookie } from 'cookies-next';

export const useAppTheme = (initialThemeMode = 'light') => {
  const [themeMode, setTheme] = useState(initialThemeMode);
  const [paletteType, setPalette] = useState(palettes[0]);

  const setMode = (mode) => {
    setCookie('initialThemeMode', mode, { path: '/' });
    setTheme(mode);
  };

  const setThemePalette = (type = 'orange') => {
    const palette = palettes.indexOf(type) === -1 ? 'orange' : type;
    window.localStorage.setItem('themePalette', 'orange');
    setPalette(palette);
  };

  const themeToggler = () => {
    themeMode === 'light' ? setMode('dark') : setMode('light');
  };

  return [themeMode, themeToggler, paletteType, setThemePalette];
};

export default function WithLayout({
  component: Component,
  layout: Layout,
  initialThemeMode,
  ...rest
}) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: 'ease-in-out',
    });
  }, []);

  const [
    themeMode,
    themeToggler,
    paletteType,
    setThemePalette,
    mountedComponent,
  ] = useAppTheme(initialThemeMode);

  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode, paletteType]);

  return (
    <ThemeProvider theme={getTheme(themeMode, paletteType)}>
      <CssBaseline />
      <Paper elevation={0}>
        <Layout
          themeMode={themeMode}
          themeToggler={themeToggler}
          paletteType={paletteType}
          setThemePalette={setThemePalette}
        >
          <Component
            themeMode={themeMode}
            paletteType={paletteType}
            {...rest}
          />
        </Layout>
      </Paper>
    </ThemeProvider>
  );
}
