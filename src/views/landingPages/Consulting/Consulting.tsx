import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import {
  Hero,
  Reviews,
  Services,
  Features,
  Process,
  Team,
  Teaser,
} from './components';
import Container from 'src/common/Container';

const Consulting = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        minHeight={'calc(100vh - 64px)'}
        height={'auto'}
        position={'relative'}
        sx={{
          backgroundColor: (theme.palette as any).alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.dark} 100%)`,
        }}
      >
        <Box
          position={{ xs: 'relative', md: 'absolute' }}
          top={{ xs: 0, md: '50%' }}
          width={'100%'}
          height={'auto'}
          sx={{
            transform: { md: 'translateY(-50%)' },
          }}
        >
          <Container>
            <Hero />
          </Container>
        </Box>
      </Box>
      <Container>
        <Services />
      </Container>
      <Container>
        <Features />
      </Container>
      <Container>
        <Process />
      </Container>
      <Divider />
      <Container>
        <Reviews />
      </Container>
      <Divider />
      <Container>
        <Teaser />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Team />
        </Container>
      </Box>
    </Box>
  );
};

export default Consulting;
