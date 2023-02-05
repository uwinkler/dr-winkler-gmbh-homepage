import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { getThemeFromCookies } from 'src/common/getThemeFromCookies';
import Main from 'src/layouts/Main';
import WithLayout from 'src/WithLayout';
import DesignAgency from '../src/views/landingPages/DesignAgency';

export const getServerSideProps = async ({ req }) => {
  console.log(req.headers.cookie);
  return getThemeFromCookies(req);
};

const App = (props) => {
  return (
    <WithLayout
      component={DesignAgency}
      layout={Main}
      initialThemeMode={props.initialThemeMode}
    />
  );
};

export default App;
