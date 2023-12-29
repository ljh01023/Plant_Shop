import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { memberDate } from '../data';
import { useState } from 'react';
import Member from '../components/MemberList';
import '../css/member.css';
export default function Customers() {
  let [list, setList] = useState(memberDate);
  return (
    <section className="sec5">
      <div className="_inner mw">
        <div className="heading">
          <h2>
            What customers say about
            <br /> GREEMIND?
          </h2>
        </div>
        <div className="listCon">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={'auto'}
          >
            {list.map((memberList) => {
              return (
                <SwiperSlide key={memberList.id}>
                  <Member memberList={memberList} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
