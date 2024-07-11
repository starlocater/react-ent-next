import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Partners = () => {
  return (
    <div className="w-full h-2/5 mt-32 flex justify-center align-middle">
      <div className="w-full h-full columns-1 flex-col">
        <p className="text-white font-jersey text-6xl text-center"> Partners </p>
        <div className="w-full h-full flex justify-center items-center">
          <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{clickable: true}}
              modules={[EffectCoverflow, Pagination]}
            >
              <SwiperSlide className="flex justify-center items-center"><img className="mb-7 object-cover" src="/images/partners/partner_sample_1.png" alt="partner_1"></img></SwiperSlide>
              <SwiperSlide className="flex justify-center items-center"><img className=" object-cover" src="/images/partners/partner_sample_2.jpg" alt="partner_2"></img></SwiperSlide>
              <SwiperSlide className="flex justify-center items-center"><img className=" object-cover" src="/images/partners/partner_sample_3.png" alt="partner_3"></img></SwiperSlide>
              <SwiperSlide className="flex justify-center items-center"><img className=" object-cover" src="/images/partners/partner_sample_4.png" alt="partner_4"></img></SwiperSlide>
              <SwiperSlide className="flex justify-center items-center"><img className=" object-cover" src="/images/partners/partner_sample_5.png" alt="partner_5"></img></SwiperSlide>
            </Swiper>
        </div>
      </div>
      
    </div>
  )
}
export default Partners