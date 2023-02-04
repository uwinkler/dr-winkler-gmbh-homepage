import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/material/styles';
import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import palettes from 'src/common/paletteTypes';
import getTheme from 'src/theme';

export const useAppTheme = () => {
  let initialThemeMode = 'light';
  if (typeof window !== 'undefined') {
    initialThemeMode = window.localStorage.getItem('themeMode') || 'light';
  }
  const [themeMode, setTheme] = useState(initialThemeMode);
  const [paletteType, setPalette] = useState(palettes[0]);
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('themeMode', mode);
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

  useEffect(() => {
    const localTheme = window.localStorage.getItem('themeMode');
    localTheme ? setTheme(localTheme) : setMode('light');
    const localPalette = window.localStorage.getItem('themePalette');
    localPalette ? setPalette(localPalette) : setThemePalette('orange');
    setMountedComponent(true);
  }, []);

  return [
    themeMode,
    themeToggler,
    paletteType,
    setThemePalette,
    mountedComponent,
  ];
};

export default function WithLayout({
  component: Component,
  layout: Layout,
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
  ] = useAppTheme();

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
