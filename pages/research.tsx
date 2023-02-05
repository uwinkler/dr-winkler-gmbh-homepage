import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { getThemeFromCookies } from 'src/common/getThemeFromCookies';
import Main from 'src/layouts/Main';
import WIP from 'src/views/supportingPages/WIP';
import WithLayout from 'src/WithLayout';

export const getServerSideProps = async ({ req }) => {
  return getThemeFromCookies(req);
};

const App = (props) => {
  return (
    <WithLayout
      component={WIP}
      layout={Main}
      initialThemeMode={props.initialThemeMode}
    />
  );
};

export default App;
