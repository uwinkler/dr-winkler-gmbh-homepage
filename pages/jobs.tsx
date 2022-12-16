import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Container from 'src/common/Container';
import Main from 'src/layouts/Main';
import InnovationIllustration from 'src/svg/illustrations/Innovation';
import WithLayout from 'src/WithLayout';

export default function App() {
  return <WithLayout component={Jobs} layout={Main} />;
}

function Jobs() {
  const theme = useTheme();

  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Headline />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
    </Box>
  );
}

function Hero() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
          >
            Dr. Winkler GmbH
          </Typography>
          <Box marginBottom={2}>
            <Typography
              variant="h2"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              Extend your team with our experienced developers
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
              ></Typography>
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="textSecondary">
              We are a team of highly experienced IT professionals, specialising
              in{' '}
              <Typography
                variant="h6"
                color="primary"
                component="span"
                fontWeight={600}
              >
                web
              </Typography>
              ,{' '}
              <Typography
                variant="h6"
                color="primary"
                component="span"
                fontWeight={600}
              >
                mobile
              </Typography>{' '}
              and{' '}
              <Typography
                variant="h6"
                color="primary"
                component="span"
                fontWeight={600}
              >
                cloud
              </Typography>{' '}
              applications.
              <br />
              An experienced and caring team is the basement for any success. We
              serve as extended developers embedded in your development team.
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Box height={'100%'} width={'100%'} maxHeight={500}>
            <InnovationIllustration height="100%" width="100%" />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          left: 0,
          height: '100%',
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${theme.palette.primary.dark} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Work with us!
        </Typography>
        <Box marginBottom={2}>
          <Typography
            variant="h2"
            align={'center'}
            sx={{
              fontWeight: 700,
            }}
          >
            And we are looking for you!
          </Typography>
        </Box>
        <Box marginBottom={4}>
          <Typography variant="h6" color={'textSecondary'}>
            If you are looking for an exciting and challenging career in the IT
            industry, then working for our company could be a great opportunity
            for you.
          </Typography>

          <Typography variant="h6" color={'textSecondary'}>
            Our company does IT development as an IT consultancy, which means
            you will have the chance to work on a variety of projects and gain
            experience in different industries and technologies.
          </Typography>
          <Typography variant="h6" color={'textSecondary'}>
            Since we are using a ton of open source, we also want to give back
            to the community. We develop open source software, which allows you
            to grow as a developer.
          </Typography>
        </Box>
        <Box display="flex" justifyContent={'center'}>
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Contact us
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
