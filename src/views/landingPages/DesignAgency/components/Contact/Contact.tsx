import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEmail } from 'src/common/useEmail';
import Designer from 'src/svg/illustrations/Designer';

const Contact = () => {
  // eslint-disable-next-line no-useless-concat
  const email = useEmail('hello' + '@dr' + '.winkler.gmbh');

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h2"
        align="left"
        gutterBottom
        sx={{
          fontWeight: 900,
        }}
      >
        Get in touch!
      </Typography>

      <Box>
        <Typography variant="h6" color={'textSecondary'}>
          We'd love to talk about how we can help you.
        </Typography>
      </Box>
      <Box marginBottom={4} marginTop={15}>
        <Designer width="500px" height="100%" />
        {/* <Cycling width="500px" height="auto" /> */}
        {/* <VideoCall width="700px" height="auto" /> */}
      </Box>
    </Box>
  );

  const GridItemFormBlock = () => (
    <Button
      variant="contained"
      component="a"
      sx={{ padding: 2 }}
      href={`mailto:${email}`}
    >
      <Typography variant="h4">{email}</Typography>
    </Button>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            width={1}
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent={'center'}
          >
            <GridItemFormBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
