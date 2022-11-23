import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Main from 'src/layouts/Main';
import WithLayout from 'src/WithLayout';
import { DesignAgency } from '../src/views/landingPages';

const App = () => {
  return <WithLayout component={DesignAgency} layout={Main} />;
};

export default App;
