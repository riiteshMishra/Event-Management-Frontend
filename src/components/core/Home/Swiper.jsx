import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ImageSwiper = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className=" mx-auto w-11/12 sm:my-10 my-5 rounded-lg overflow-hidden shadow-xl shadow-accent relative">
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.p
            className="text-3xl sm:text-4xl font-mono text-dark font-semibold  rounded-lg backdrop-blur-sm"
            initial={{ y: 30, opacity: 0, scale: 0.6 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            Image Data not found
          </motion.p>
        </div>
        <div className="w-full h-80 bg-gray-300 animate-pulse rounded-lg" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ y: 20, scale: 0.7, opacity: 0.8, rotate: -0.7 }}
      whileInView={{ y: 0, scale: 1, rotate: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        type: "spring",
        ease: "easeInOut",
        damping: 20,
        stiffness: 200,
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
        className="mySwiper container w-11/12 rounded-lg overflow-hidden shadow-black dark:shadow-white shadow-[0px_2px_12px]"
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
