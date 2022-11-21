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
import Grid from '@mui/material/Grid';
import { colors } from '@mui/material';
import Image from 'next/image';
import { grey } from '@mui/material/colors';

const Process = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const GridItemHeadlineBlock = () => (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'secondary'}
      >
        Technologies
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        gutterBottom
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        Technologies we love
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        data-aos={isMd ? 'fade-right' : 'fade-up'}
      >
        We are a specialized agency with a talented team of developers. Here are
        some of the cutting edge technologies we love and use to bring your
        ideas to live.
      </Typography>
    </Box>
  );

  const GridItemReviewBlock = () => {
    const sliderOpts = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    return (
      <Box maxWidth={'100%'} data-aos={isMd ? 'fade-left' : 'fade-up'}>
        <Slider {...sliderOpts}>
          {[
            {
              title: 'React',
              subtitle:
                'We are using React as our primary frontend and mobile framework. We love the component based approach and the huge ecosystem of frameworks, libraries and tools.',
              icon: (
                <Image
                  src="/assets/logos/react.svg"
                  alt="react"
                  width={80}
                  height={80}
                />
              ),
              color: colors.amber,
            },
            {
              title: 'Typescript',
              subtitle:
                'Typescript is the programming language of our choice. It is a strongly-typed language and that helps us to write more robust code - in the frontend and in the backend.',
              icon: (
                <Image
                  src="/assets/logos/ts.svg"
                  alt="react"
                  width={80}
                  height={80}
                />
              ),
              color: colors.amber,
            },
            {
              title: 'Node',
              subtitle:
                'We are using Node as our primary backend framework. Node is a great platform for building fast and web applications that can be deployed in the cloud.',
              icon: (
                <Image
                  src="/assets/logos/node.svg"
                  alt="react"
                  width={80}
                  height={80}
                />
              ),
              color: colors.purple,
            },
            {
              title: 'MongoDB',
              subtitle:
                'MongoDB is our primary database. We love the flexibility and the document based approach, which makes it easy to develop modern applications.',
              icon: (
                <Image
                  src="/assets/logos/mongodb.svg"
                  alt="MongoDb"
                  width={80}
                  height={80}
                />
              ),

              color: colors.purple,
            },
            {
              title: 'Cloud',
              subtitle:
                'We deploy your wep-app using the best cloud practices and standards, so you have a perfectly responsive, lightning fast, easy to maintain, and super scalable application.',
              icon: (
                <Image
                  src="/assets/logos/aws.svg"
                  alt="aws"
                  width={80}
                  height={80}
                />
              ),
              color: colors.green,
            },
          ].map((item, i) => (
            <Box padding={{ xs: 1, sm: 2 }} key={i}>
              <Box
                component={Card}
                boxShadow={{ xs: 1, sm: 3 }}
                borderRadius={5}
                padding={{ xs: 1, sm: 2, md: 3 }}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                >
                  <Box
                    component={Avatar}
                    variant="rounded"
                    width={84}
                    height={84}
                    marginBottom={2}
                    bgcolor={
                      // bgcolor={
                      themeMode === 'light'
                        ? theme.palette.grey[50]
                        : theme.palette.grey[200]
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
                  >
                    {item.title}
                  </Box>
                  <Typography color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    );
  };

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
            <GridItemReviewBlock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

Process.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Process;
