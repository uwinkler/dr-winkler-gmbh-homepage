import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Main from 'src/layouts/Main';
import WithLayout from 'src/WithLayout';

import { NotFound } from 'src/views/supportingPages';
import { getThemeFromCookies } from 'src/common/getThemeFromCookies';

export const getServerSideProps = async ({ req }) => {
  return getThemeFromCookies(req);
};

const App = (props) => {
  return (
    <WithLayout
      component={NotFound}
      layout={Main}
      initialThemeMode={props.initialThemeMode}
    />
  );
};

export default App;
