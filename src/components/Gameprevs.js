'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Gameprevs = () => {
  return (
    <div className="mt-20 flex h-2/5 justify-start flex-col">
        <h1 className="text-white font-jersey text-6xl w-full text-center">Currently We are hosting...</h1>
        <div  className="mt-10 w-full h-full flex items-center">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'3'}
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
            <SwiperSlide className="flex justify-center items-center" ><img className="w-2/3 h-2/3 mb-7 object-cover" src="/images/games/minecraft.jpg" alt="minecraft"></img></SwiperSlide>
            <SwiperSlide className="flex justify-center items-center" ><img className="w-2/3 h-2/3 mb-7 object-cover" src="/images/games/zomboid.jpg" alt="zomboid"></img></SwiperSlide>
            <SwiperSlide className="flex justify-center items-center" ><img className="w-2/3 h-2/3 mb-7 object-cover" src="/images/games/palworld.jpg" alt="palworld"></img></SwiperSlide>
            <SwiperSlide className="flex justify-center items-center" ><img className="w-2/3 h-2/3 mb-7 object-cover" src="/images/games/helldivers2.jpg" alt="helldivers2"></img></SwiperSlide>
            <SwiperSlide className="flex justify-center items-center" ><img className="w-2/3 h-2/3 mb-7 object-cover" src="/images/games/satisfactory.jpg" alt="satisfactory"></img></SwiperSlide>
            <SwiperSlide className="flex justify-center items-center" ><img className="w-2/3 h-2/3 mb-7 object-cover" src="/images/games/rust.jpg" alt="rust"></img></SwiperSlide>
            <SwiperSlide className="flex justify-center items-center" ><img className="w-2/3 h-2/3 mb-7 object-cover" src="/images/games/valheim.jpg" alt="valheim"></img></SwiperSlide>
            <SwiperSlide className="flex justify-center items-center" ><img className="w-2/3 h-2/3 mb-7 object-cover" src="/images/games/factorio.jpg" alt="factorio"></img></SwiperSlide>
          </Swiper>
        </div>
    </div>
  )
}
export default Gameprevs