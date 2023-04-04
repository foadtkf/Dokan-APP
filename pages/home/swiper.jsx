import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import { Autoplay, Scrollbar } from "swiper";
const SwiperSection = () => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Autoplay, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full  max-h-[90vh]"
            src="https://images.unsplash.com/photo-1541544181051-e46607bc22a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full   max-h-[90vh]"
            src="https://images.unsplash.com/photo-1514792368985-f80e9d482a02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full   max-h-[90vh]"
            src="https://images.unsplash.com/photo-1614735241165-6756e1df61ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full    max-h-[90vh]"
            src="https://images.unsplash.com/photo-1581515286348-98549702050f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt=""
            srcset=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full    max-h-[90vh]"
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            srcset=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSection;
