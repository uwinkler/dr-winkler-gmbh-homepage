import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ApartmentIcon from '@mui/icons-material/Apartment';
import CallIcon from '@mui/icons-material/Call';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import Container from 'src/common/Container';
import Logo from 'src/svg/logos/Logo';
import NextLink from 'next/link';
import Link from '@mui/material/Link';
import Badge from '@mui/material/Badge';
import { useEmail } from '../../../../common/useEmail';

function useCurrentYear() {
  return new Date().getFullYear();
}

function useTelephone() {
  const [telephone, setTelephone] = React.useState('....');
  React.useEffect(() => {
    setTimeout(() => setTelephone('+49 351-41 89 09 68'), 100);
  }, []);
  return telephone;
}

const Footer = () => {
  const theme = useTheme();
  const year = useCurrentYear();
  const email = useEmail();
  const telephone = useTelephone();
  const light = theme.palette.mode === 'light';
  const { grey, alternate } = theme.palette;

  const GroupHeadline = styled(Box)(({ theme }) => ({
    textTransform: 'uppercase',
    color: theme.palette.text.disabled,
    fontSize: theme.typography.pxToRem(12),
    marginTop: theme.spacing(1),
  }));

  return (
    <>
      <Box bgcolor={light ? alternate.light : alternate.dark}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="grid"
                gridTemplateColumns={'20px 1fr'}
                rowGap={1}
                columnGap={2}
              >
                <Box
                  color={theme.palette.secondary.main}
                  sx={{ paddingTop: '3px', paddingBottom: '12px' }}
                >
                  <Logo height={'15px'} />
                </Box>
                <Box component="h4" sx={{ margin: 0 }}>
                  Dr. Winkler GmbH
                </Box>

                <Box sx={{ paddingTop: '2px' }}>
                  <AlternateEmailIcon sx={{ fontSize: '15px' }} />
                </Box>
                <Box
                  component="a"
                  sx={{
                    textDecoration: 'none',
                    color: theme.palette.text.primary,
                  }}
                  href={`mailto:${email}`}
                >
                  {email}
                </Box>

                <Box sx={{ paddingTop: '5px' }}>
                  <CallIcon sx={{ fontSize: '15px' }} />
                </Box>
                <Box
                  component="a"
                  sx={{
                    textDecoration: 'none',
                    color: theme.palette.text.primary,
                  }}
                  href={`tel:${telephone}`}
                >
                  {telephone}
                </Box>

                <Box sx={{ paddingTop: '4px' }}>
                  <ApartmentIcon sx={{ fontSize: '15px' }} />
                </Box>
                <Box>
                  <Box>Nordstr. 10</Box>
                  <Box>01996 Senfteberg/Hosena</Box>
                </Box>

                <Box sx={{ paddingTop: '4px' }}>
                  <LocalShippingIcon sx={{ fontSize: '15px' }} />
                </Box>
                <Box>
                  <Box>Troppauer Str 19</Box>
                  <Box>01279 Dresden</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                display="flex"
                justifyContent={{ sx: 'left', md: 'center' }}
                marginTop={{ sx: 3, sm: 0 }}
              >
                <Box>
                  <Box component={'h4'} sx={{ marginTop: 0 }}>
                    Imprint
                  </Box>
                  <Box>
                    <GroupHeadline>Geschäftsführer</GroupHeadline>
                    <Box>Dr. Ulrich Winkler</Box>
                    <GroupHeadline>USt.-ID Nummer:</GroupHeadline>
                    <Box> DE815311875</Box>
                    <GroupHeadline>Amtsgericht</GroupHeadline>
                    <Box>Cottbus HRB 16633</Box>
                    <GroupHeadline>
                      Verantwortlich nach § 55 Abs. 2 RStV
                    </GroupHeadline>
                    <Box>Dr. Ulrich Winkler</Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box
                display={'flex'}
                justifyContent={{ sx: 'left', md: 'center' }}
              >
                <Box>
                  <Box component={'h4'} sx={{ marginTop: 0 }}>
                    Quick-Links
                  </Box>

                  <Box>
                    <Box
                      component="ul"
                      sx={{
                        margin: 0,
                        paddingInlineStart: { xs: 2, md: 0 },
                        marginInlineStart: { xs: 2, md: 0 },
                      }}
                    >
                      <li>
                        <Link
                          component={NextLink}
                          href="/imprint"
                          color="text.primary"
                          sx={{ textDecoration: 'none' }}
                        >
                          Impressum
                        </Link>
                      </li>
                      <li>
                        <Link
                          component={NextLink}
                          href="/privacy"
                          color="text.primary"
                          sx={{ textDecoration: 'none' }}
                        >
                          Privacy
                        </Link>
                      </li>
                      <li>
                        <Link
                          component={NextLink}
                          href="/restate"
                          color="text.primary"
                          sx={{ textDecoration: 'none' }}
                        >
                          Restate
                        </Link>
                      </li>
                      <li>
                        <Link
                          component={NextLink}
                          href="/restate"
                          color="text.primary"
                          sx={{ textDecoration: 'none' }}
                        >
                          Jobs
                          <Badge
                            badgeContent={2}
                            color="primary"
                            sx={{ marginLeft: 2 }}
                          />
                        </Link>
                      </li>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor={'#151a30'} color={grey[600]}>
        <Container paddingY={2}>
          <Box>
            Copyright © {2012}-{year} - Dr. Winkler GmbH
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
