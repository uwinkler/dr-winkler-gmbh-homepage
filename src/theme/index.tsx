import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import shadows from './shadows';
import palette from './palette';

const getTheme = (mode, paletteType) =>
  responsiveFontSizes(
    createTheme({
      palette: palette(mode, paletteType),
      layout: {
        contentWidth: 1236,
      },
      // shadows: shadows(mode),
      typography: {
        // fontFamily:
        // '"SignikaNegative-Regular", "Signika Negative", "Inter", sans-serif',
        button: {
          textTransform: 'none',
          fontWeight: 'medium',
        },
        h1: {
          fontFamily:
            '"SignikaNegative-Regular", "Signika Negative", "Inter", sans-serif',
        },
        h2: {
          fontFamily:
            '"SignikaNegative-Regular", "Signika Negative", "Inter", sans-serif',
        },
        h3: {
          fontFamily:
            '"SignikaNegative-Regular", "Signika Negative", "Inter", sans-serif',
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            containedSecondary: mode === 'light' ? { color: 'white' } : {},
          },
        },
      },
    }),
  );

export default getTheme;
