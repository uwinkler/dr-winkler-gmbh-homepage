import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from 'src/common/Container';
import { Footer, Topbar } from './components';

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Main = ({ children, themeToggler, themeMode, paletteType }) => {
  const theme = useTheme();

  return (
    <div>
      <HideOnScroll>
        <AppBar
          position={'fixed'}
          sx={{
            backgroundColor: theme.palette.alternate.main,
          }}
          elevation={0}
        >
          <Container paddingY={{ xs: 2 }}>
            <Topbar themeMode={themeMode} themeToggler={themeToggler} />
          </Container>
        </AppBar>
      </HideOnScroll>

      <main>
        <Box height={{ xs: 56, sm: 64 }} />
        {children}
        <Divider />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
