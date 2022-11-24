import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Container from 'src/common/Container';
import Main from 'src/layouts/Main';
import WithLayout from 'src/WithLayout';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import ContactCard from 'src/views/supportingPages/Privacy/components/ContactCard';
import Content from 'src/views/supportingPages/Privacy/components/Content';

const App = () => {
  return <WithLayout component={Privacy} layout={Main} />;
};

function Privacy() {
  const theme = useTheme();

  return (
    <Box>
      <Container>
        <Box boxShadow={4} borderRadius={2}>
          <Box bgcolor={theme.palette.primary.main} borderRadius={2}>
            <Container paddingX={{ xs: 2, sm: 4 }}>
              <Typography
                variant={'h3'}
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: theme.palette.common.white,
                }}
              >
                Datenschutz
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  color: theme.palette.common.white,
                }}
              >
                <strong>20 Nov 20221</strong>
              </Typography>
            </Container>
            <Box
              component={'svg'}
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1920 100.1"
              width={'100%'}
              marginBottom={-1}
            >
              <path
                fill={theme.palette.background.paper}
                d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
              ></path>
            </Box>
          </Box>
          <Container
            paddingTop={'0 !important'}
            paddingX={{ xs: 2, sm: 4 }}
            position={'relative'}
            top={0}
          >
            <Box
              component={Grid}
              container
              spacing={4}
              flexDirection={{ xs: 'column-reverse', md: 'row' }}
            >
              <Grid item xs={12} md={9}>
                <Content />
              </Grid>
              <Grid item xs={12} md={3}>
                <Box
                  position={'sticky'}
                  top={theme.spacing(10)}
                  className={'sticky'}
                >
                  <ContactCard />
                </Box>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
