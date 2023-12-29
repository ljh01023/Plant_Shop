import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CateList from '../components/CateList';

import { useState } from 'react';
import { cateDate } from '../data';
import '../css/cate.css';

export default function Categories() {
  let [list, setList] = useState(cateDate);
  return (
    <section className="sec4">
      <div className="_inner mw">
        <div className="headling">
          <h2>Categories</h2>
          <p>Find what you are looking for</p>
        </div>
        <div className="listCon">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
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
            {list.map((cateList) => {
              return (
                <SwiperSlide key={cateList.id}>
                  <CateList cateList={cateList} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
