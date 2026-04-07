import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ImageSwiper = ({ data }) => {
  if (!data) return <p>sorry, please provide a image src</p>;

  return (
    <motion.div
      initial={{ y: 200, scale: 0.6, rotate: -5 }}
      animate={{ y: 0, scale: 1, rotate: 0 }}
      transition={{
        duration: 0.3,
        type: "spring",
        damping: 18,
        stiffness: 300,
      }}
    >
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
        {data?.map((image) => (
          <SwiperSlide key={image.id}>
            <img
              src={image?.url || image?.src}
              alt="slide"
              className="w-full h-80 object-cover rounded-lg border overflow-hidden "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ImageSwiper;
