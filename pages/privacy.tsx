/* eslint-disable no-useless-concat */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { BlockWithImage } from 'src/common/BlockWithImage';
import Container from 'src/common/Container';
import { getThemeFromCookies } from 'src/common/getThemeFromCookies';
import Main from 'src/layouts/Main';
import ContactCard from 'src/views/supportingPages/Privacy/components/ContactCard';
import Content from 'src/views/supportingPages/Privacy/components/Content';
import WithLayout from 'src/WithLayout';
import PrivacyIllustration from 'src/svg/illustrations/Privacy';
import { Block } from 'src/common/Block';
import Button from '@mui/material/Button';
import { useEmail } from 'src/common/useEmail';

export const getServerSideProps = async ({ req }) => {
  return getThemeFromCookies(req);
};

const App = (props) => {
  return (
    <WithLayout
      component={Privacy}
      layout={Main}
      initialThemeMode={props.initialThemeMode}
    />
  );
};

function Privacy() {
  const theme = useTheme();
  const email = useEmail('privacy' + '@dr' + '-winkler-gmbh.de');

  return (
    <>
      <Block background="alternate">
        <BlockWithImage
          Image={<PrivacyIllustration width={'100%'} height={'100%'} />}
        >
          <Typography variant={'h1'}>Datenschutz</Typography>

          <Typography variant="h6" component="p" color="textSecondary">
            Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
            E-Mail oder wenden Sie sich direkt an unseren
            Datenschutzbeauftragten:
          </Typography>
          <Button
            variant="contained"
            component="a"
            sx={{ padding: 2, marginTop: 5 }}
            href={`mailto:${email}`}
          >
            <Typography variant="h5">{email}</Typography>
          </Button>
        </BlockWithImage>
      </Block>
      <Block>
        <Typography
          variant={'h3'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Datenschutz
        </Typography>
        <Typography gutterBottom sx={{}}>
          <strong>20 Nov 2022</strong>
        </Typography>

        <Box
          component={Grid}
          container
          spacing={4}
          flexDirection={{ xs: 'column-reverse', md: 'row' }}
        >
          <Grid item xs={12} md={9}>
            <Content />
          </Grid>
          <Grid item xs={12} md={3}>
            <Box
              position={'sticky'}
              top={theme.spacing(10)}
              className={'sticky'}
            >
              <ContactCard />
            </Box>
          </Grid>
        </Box>
      </Block>
    </>
  );
}

export default App;
