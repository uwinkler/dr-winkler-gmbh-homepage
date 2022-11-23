import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const Hero = () => {
  const theme = useTheme();

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        variant="h2"
        align="left"
        gutterBottom
        sx={{
          color: theme.palette.common.white,
          fontWeight: 900,
        }}
      >
        Get in touch!
      </Typography>
      <Box marginBottom={4}>
        <Typography
          variant="h6"
          component="p"
          sx={{
            color: theme.palette.common.white,
            fontWeight: 400,
          }}
        >
          Get in touch with us by sending a e-mail and we will get back to you
          soon to schedule a discovery call.
        </Typography>
      </Box>
    </Box>
  );

  const GridItemFormBlock = () => (
    <Box
      padding={{ xs: 3, sm: 6 }}
      width={'100%'}
      component={Card}
      borderRadius={2}
      boxShadow={4}
    >
      <Box display="flex" flexDirection={'column'}>
        <Box
          textTransform={'uppercase'}
          color={theme.palette.grey[600]}
          fontSize={14}
        >
          Dresden
        </Box>
        <Box fontSize={20}>Troppauer Str. 19</Box>
        <Box fontSize={20}>01279 Dresden</Box>
        <Box></Box>
        <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
          <Divider />
        </Box>

        <Box
          textTransform={'uppercase'}
          color={theme.palette.grey[600]}
          fontSize={14}
        >
          Senftenberg
        </Box>
        <Box fontSize={20}>Nordstr. 10</Box>
        <Box fontSize={20}>01996 Senftenberg/Hosena</Box>
        <Box marginY={4} marginX={{ xs: -3, sm: -6 }}>
          <Divider />
        </Box>

        <Button
          variant="contained"
          sx={{ fontSize: 22 }}
          component="a"
          href="mailto:hello@dr.winkler.gmbh"
        >
          hello@dr.winkler.gmbh
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemHeadlineBlock />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box width={1} height="100%" display="flex" alignItems="center">
            <GridItemFormBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
