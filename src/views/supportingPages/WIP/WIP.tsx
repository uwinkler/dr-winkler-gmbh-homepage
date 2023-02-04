import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from 'src/common/Container';
import CloudHostingIllustration from 'src/svg/illustrations/CloudHosting';

const WIP = () => {
  return (
    <Box
      minHeight={'calc(100vh - 64px - 183px)'}
      height={'100%'}
      display={'flex'}
      alignItems={'center'}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item container justifyContent={'center'} xs={12}>
            <Box height={'100%'} width={'100%'} maxWidth={500}>
              <CloudHostingIllustration width={'100%'} height={'100%'} />
            </Box>
          </Grid>
          <Grid
            item
            container
            alignItems={'center'}
            justifyContent={'center'}
            xs={12}
          >
            <Box>
              <Typography
                variant="h4"
                component={'h4'}
                align={'center'}
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Work in progress
              </Typography>
              <Typography component="p" color="textSecondary" align={'center'}>
                This page is under construction.
                <br />
                Stay tuned!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WIP;
