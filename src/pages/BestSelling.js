import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from '../components/ProductCard';
import '../css/sec2.css';
import '../css/card.css';
import { data } from '../data';
import { useState } from 'react';

export default function BestSelling() {
  let [list, setList] = useState(data);
  return (
    <section className="sec2">
      <div className="_inner mw">
        <div className="headline">
          <h2>Best Selling Plants</h2>
          <p>Easiest way to healthy life by buying your favorite plants </p>
          <Link to="/Bestlist" className="more">
            more
          </Link>
        </div>
        <div className="listCon">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              680: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {list.map((cardList) => {
              return (
                <SwiperSlide key={cardList.id}>
                  <ProductCard cardList={cardList} />
                </SwiperSlide>
              );
            })}
            ;
          </Swiper>
        </div>
      </div>
    </section>
  );
}
