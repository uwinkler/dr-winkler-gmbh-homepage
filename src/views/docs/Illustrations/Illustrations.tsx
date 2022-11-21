/* eslint-disable react/jsx-key */
/* eslint-disable quotes */
/* eslint-disable react/no-unescaped-entities */
import { Rocket } from '@mui/icons-material';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Container from 'src/common/Container';
import Chart1 from 'src/svg/illustrations/Chart1';
import Chart2 from 'src/svg/illustrations/Chart2';
import Chart3 from 'src/svg/illustrations/Chart3';
import Chart4 from 'src/svg/illustrations/Chart4';
import City from 'src/svg/illustrations/City';
import CloudHosting from 'src/svg/illustrations/CloudHosting';
import CreditCards from 'src/svg/illustrations/CreditCards';
import CreditCards2 from 'src/svg/illustrations/CreditCards2';
import Cycling from 'src/svg/illustrations/Cycling';
import Designer from 'src/svg/illustrations/Designer';
import Globe from 'src/svg/illustrations/Globe';
import Innovation from 'src/svg/illustrations/Innovation';
import TeamWorking from 'src/svg/illustrations/TeamWorking';
import { Travel } from 'src/views/landingPages';
import { NotFound } from 'src/views/supportingPages';

const Illustrations = () => {
  const theme = useTheme();
  const renderCodeBlock = (code = '', language = 'jsx') => {
    return (
      <Box
        component={SyntaxHighlighter}
        language={language}
        style={vs2015}
        padding={`${theme.spacing(2)} !important`}
        borderRadius={2}
        margin={`${theme.spacing(0)} !important`}
      >
        {code}
      </Box>
    );
  };
  return (
    <Box>
      <Container>
        <Box>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Illustrations
          </Typography>
          <Typography
            gutterBottom
            sx={{
              '& code': {
                background: colors.yellow[400],
                color: theme.palette.common.black,
              },
            }}
          >
            The illustrations in the theme are simple React components stored in{' '}
            <code>src/svg/illustrations</code>. They can be used as normail
            React components. Form example:
          </Typography>
          <Box marginY={2}>
            {renderCodeBlock(`import Box from '@mui/material/Box';
import CreditCardsIllustration from 'src/svg/illustrations/CreditCards';

<Box height={'100%'} width={'100%'} maxWidth={600}>
  <CreditCardsIllustration width={'100%'} height={'100%'} />
</Box>`)}
          </Box>
          <Typography gutterBottom>
            Illustrations are created using{' '}
            <Link href={'https://www.manypixels.co/gallery'} target={'_blank'}>
              Many Pixels
            </Link>
          </Typography>
        </Box>
      </Container>
      <Container paddingTop={'0 !important'}>
        <Grid container spacing={4}>
          {[
            <City />,
            <Rocket />,
            <CloudHosting />,
            <CreditCards />,
            <CreditCards2 />,
            <Cycling />,
            <Designer />,
            <Globe />,
            <Innovation />,
            <NotFound />,
            <TeamWorking />,
            <Travel />,
            <Chart1 />,
            <Chart2 />,
            <Chart3 />,
            <Chart4 />,
          ].map((item, i) => (
            <Grid
              item
              alignItems={'center'}
              justifyContent={'center'}
              key={i}
              xs={12}
              sm={6}
              md={4}
            >
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                borderRadius={4}
                boxShadow={3}
              >
                <Box
                  component={CardContent}
                  padding={4}
                  display={'flex'}
                  alignItems={'center'}
                  height={'100%'}
                >
                  {item}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Illustrations;
