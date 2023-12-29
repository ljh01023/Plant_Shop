import SecBanner from './SecBanner';
import BestSelling from './BestSelling';
import AboutUs from './AboutUs';
import Categories from './Categories';
import Customers from './Customers';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SecCon() {
  return (
    <div className='secCon'>
      <SecBanner />
      <BestSelling />
      <AboutUs />
      <Categories />
      <Customers />
    </div>
  );
}
