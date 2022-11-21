import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { colors } from '@mui/material';
import Container from 'src/common/Container';

const Services = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }
  if (isLg) {
    slidesToShow = 4;
  }

  const sliderOpts = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow,
    // slidesToScroll: 1,
    arrows: true,
  };

  return (
    <Box>
      <Container paddingY={'0 !important'}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
          >
            Services
          </Typography>
          <Box
            component={Typography}
            fontWeight={700}
            variant={'h3'}
            gutterBottom
          >
            High-impact design & development services
          </Box>
          <Typography variant={'h6'} component={'p'} color={'textSecondary'}>
            Centered around modern web technologies, we provide a wide range of
            services to help you to bring your ideas to life.
          </Typography>
        </Box>
      </Container>
      <Box>
        <Slider {...sliderOpts}>
          {[
            {
              title: 'Web-Apps',
              subtitle:
                'We are using cutting edge technologies to design and develop beautiful, responsive, and really really fast web apps. ',
              icon: (
                <svg
                  width={48}
                  height={48}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth={2}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                  />
                </svg>
              ),
              color: colors.orange,
            },
            {
              title: 'Mobile Apps',
              subtitle:
                'We design intuitive mobile  apps focused on driving user engagement and increasing users retention.',
              icon: (
                <svg
                  width={48}
                  height={48}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              ),
              color: colors.green,
            },

            {
              title: 'Desktop Apps',
              subtitle:
                'We design and develop amazing and beautiful cross-platform Desktop Apps - using modern web technologies - that you and your users will love.',
              icon: (
                <svg
                  width={48}
                  height={48}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              ),
              color: colors.purple,
            },
            {
              title: 'Cloud Apps',
              subtitle:
                'We help you to transform your idea into a live, intuitive and scalable digital cloud product that your users will use and love. No server required.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width={48}
                  height={48}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                  />
                </svg>
              ),
              color: colors.pink,
            },
          ].map((item, i) => (
            <Box padding={{ xs: 1, md: 2, lg: 3 }} key={i}>
              <Box
                component={Card}
                boxShadow={{ xs: 1, sm: 3 }}
                borderRadius={5}
                minHeight={370}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                  padding={{ xs: 2, sm: 4, md: 6 }}
                  sx={{
                    '&:last-child': {
                      paddingBottom: { xs: 2, sm: 4, md: 6 },
                    },
                  }}
                >
                  <Box
                    component={Avatar}
                    variant="rounded"
                    width={84}
                    height={84}
                    marginBottom={2}
                    bgcolor={
                      themeMode === 'light' ? item.color[50] : item.color[200]
                    }
                    borderRadius={5}
                  >
                    <Box color={item.color[themeMode === 'light' ? 500 : 700]}>
                      {item.icon}
                    </Box>
                  </Box>
                  <Box
                    component={Typography}
                    variant={'h6'}
                    gutterBottom
                    fontWeight={500}
                    align={'center'}
                  >
                    {item.title}
                  </Box>
                  <Typography align={'center'} color="textSecondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services;
