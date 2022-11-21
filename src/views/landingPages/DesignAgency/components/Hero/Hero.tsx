import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import InnovationIllustration from 'src/svg/illustrations/Innovation';

const Hero = () => {
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
              Experience you can trust on
              <br />
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
};

export default Hero;
