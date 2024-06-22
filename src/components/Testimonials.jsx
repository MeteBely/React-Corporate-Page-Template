import FiveStarFunc from "../utils/FiveStar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 1500 });
  }, []);

  return (
    <section className="bg-[#F5F6F8]">
      <div className="py-24 m-auto">
        <div className="mb-20 px-2">
          <h2 className="min-[500px]:text-[52px] text-[44px] font-extrabold pb-4 mb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-auto min-[500px]:w-[470px] md:w-[500px] fontMontserrat">
            TESTIMONIALS
          </h2>
          <p className="mx-auto text-center fontRoboto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <Swiper
          data-aos="fade-up"
          style={{
            "--swiper-pagination-color": "#000",
            "--swiper-navigation-color": "#F5F6F8",
          }}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 4000 }}
          className="mySwiper fontRoboto md:w-[70%] lg:w-[70%] w-[90%]"
        >
          <SwiperSlide className="flex flex-col items-center justify-center w-[1200px] m-auto mb-12">
            <img
              className="w-[140px] rounded-full mb-2"
              src="https://imgix.bustle.com/scary-mommy/2019/11/michael-scott-quotes.jpg?w=1200&h=1200&fit=crop&crop=faces&fm=jpg"
              alt=""
            />
            <h3 className="text-2xl font-bold text-[#000] mb-2">
              Michael Scott
            </h3>
            <h4 className="text-sm text-[#444444] font-semibold mb-4">
              HP CEO
            </h4>
            <FiveStarFunc />
            <p className="text-center">
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
              veniam tempor noster veniam enim culpa labore duis sunt culpa
              nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
              quid.
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center w-[1200px] m-auto mb-12">
            <img
              className="w-[140px] rounded-full mb-2"
              src="https://theofficeanalytics.wordpress.com/wp-content/uploads/2017/11/dwight.jpeg?w=1200"
              alt=""
            />
            <h3 className="text-2xl font-bold text-[#000] mb-2">
              Dwight Schrute
            </h3>
            <h4 className="text-sm text-[#444444] font-semibold mb-4">
              Lenovo Assistant Manager
            </h4>
            <FiveStarFunc />
            <p className="text-center">
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
              veniam tempor noster veniam enim culpa labore duis sunt culpa
              nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
              quid.
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center w-[1200px] m-auto mb-12">
            <img
              className="w-[140px] rounded-full mb-2"
              src="https://img.nbc.com/files/images/2013/11/12/jim-500x500.jpg"
              alt=""
            />
            <h3 className="text-2xl font-bold text-[#000] mb-2">Jim Halpert</h3>
            <h4 className="text-sm text-[#444444] font-semibold mb-4">
              IBM Software Manager
            </h4>
            <FiveStarFunc />
            <p className="text-center">
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
              veniam tempor noster veniam enim culpa labore duis sunt culpa
              nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
              quid.
            </p>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col items-center justify-center w-[1200px] m-auto mb-12">
            <img
              className="w-[140px] rounded-full mb-2"
              src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/testimonials/testimonials-1.jpg"
              alt=""
            />
            <h3 className="text-2xl font-bold text-[#000] mb-2">
              Anonymous People
            </h3>
            <h4 className="text-sm text-[#444444] font-semibold mb-4">
              HITACHI CFO
            </h4>
            <FiveStarFunc />
            <p className="text-center">
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
              veniam tempor noster veniam enim culpa labore duis sunt culpa
              nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
              quid.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
