import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const SwiperBanner = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);

  return (
    <section>
      <div className="text-center fontRoboto font-semibold text-lg">
        <p>
          Innovation, creativity and reliability make us stand out among other
          alternatives.
        </p>
      </div>
      <div className="mb-20">
        <Swiper
          data-aos="fade-up"
          style={{
            "--swiper-pagination-color": "#000",
            "--swiper-navigation-color": "#fff",
          }}
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          slidesPerView={5}
          slidesPerGroup={5}
          navigation={false}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          speed={2000}
          breakpoints={{
            0: {
              slidesPerGroup: 1,
              slidesPerView: 1,
            },
            400: {
              slidesPerGroup: 2,
              slidesPerView: 2,
            },
            639: {
              slidesPerGroup: 3,
              slidesPerView: 3,
            },
            865: {
              slidesPerGroup: 4,
              slidesPerView: 4,
            },
            1000: {
              slidesPerGroup: 5,
              slidesPerView: 5,
            },
          }}
          className="mySwiper fontRoboto lg:w-[80%] 2xl:w-[70%] w-[95%] h-40"
        >
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/anadolu-sigorta-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/anadolu-hayat-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/agesa-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/aktif-bank-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/ziraat-teknoloji-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/gratis-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/halkbank-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/borusan-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/alianz-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/hdi-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/exim-bank-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/tcmb-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/oyak-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/kale-holding-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/teb-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/agesa-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/jandarma-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/abb-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/azericard-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://jforce.com.tr/wp-content/uploads/2023/01/aktif-bank-150x150.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperBanner;
