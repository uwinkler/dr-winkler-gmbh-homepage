import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Main from 'src/layouts/Main';
import WithLayout from 'src/WithLayout';
import { getCookie } from 'cookies-next';

import { NotFound } from 'src/views/supportingPages';

const App = () => {
  const initialThemeMode = getCookie('initialThemeMode') || 'light';
  return (
    <WithLayout
      component={NotFound}
      layout={Main}
      initialThemeMode={initialThemeMode}
    />
  );
};

export default App;
