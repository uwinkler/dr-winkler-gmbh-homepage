import React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Image from 'next/image';

const Partners = () => {
  // const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        {/* <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          We work for the best
        </Typography>
      </Box>
      <Box display="flex" gap={2} justifyContent={'center'}>
        {[
          '/assets/logos/db.svg',
          '/assets/logos/benz.svg',
          '/assets/logos/postfinance.svg',
          '/assets/logos/lexoffice.svg',
          '/assets/logos/sick.svg',
        ].map((logo) => (
          <Box
            key={logo}
            component={'span'}
            sx={{
              filter:
                theme.palette.mode === 'dark'
                  ? 'brightness(0) invert(0.7)'
                  : 'none',
            }}
          >
            <Image src={logo} alt="log" width={90} height={40} />
          </Box>
        ))} */}
      </Box>
    </Box>
  );
};

export default Partners;
