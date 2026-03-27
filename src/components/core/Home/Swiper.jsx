import { sliderImages } from "../../../data/home";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ImageSwiper = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ dynamicBullets: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper container w-11/12 sm:my-10 my-5 rounded-lg overflow-hidden shadow-xl shadow-accent"
    >
      {sliderImages.map((image) => (
        <SwiperSlide key={image.id}>
          <img
            src={image.url}
            alt="slide"
            className="w-full h-80 object-cover rounded-lg border overflow-hidden "
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;