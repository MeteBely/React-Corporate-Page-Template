// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="bg-[#F5F6F8]">
      <div className="py-8 w-[60%] m-auto">
        <div className="mb-12">
          <h2 className="text-[32px] font-bold pb-4 mb-4 text-[#36517E] border-b border-gray-400 mx-auto text-center w-[220px]">
            TESTIMONIALS
          </h2>
          <p className="mx-auto text-center w-[800px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="flex flex-col items-center justify-center w-[1200px] m-auto mb-12">
            <img
              className="w-[140px] rounded-full mb-2"
              src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/testimonials/testimonials-1.jpg"
              alt=""
            />
            <h3 className="text-2xl font-bold text-[#37517e] mb-2">
              Dwight Schrute
            </h3>
            <h4 className="text-sm text-[#444444] font-semibold mb-4">
              Assistant Manager
            </h4>
            <span className="mb-4">&&&&&</span>
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
            <h3 className="text-2xl font-bold text-[#37517e] mb-2">
              Dwight Schrute
            </h3>
            <h4 className="text-sm text-[#444444] font-semibold mb-4">
              Assistant Manager
            </h4>
            <div className="mb-4">&&&&&</div>
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
            <h3 className="text-2xl font-bold text-[#37517e] mb-2">
              Dwight Schrute
            </h3>
            <h4 className="text-sm text-[#444444] font-semibold mb-4">
              Assistant Manager
            </h4>
            <div className="mb-4">&&&&&</div>
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
            <h3 className="text-2xl font-bold text-[#37517e] mb-2">
              Dwight Schrute
            </h3>
            <h4 className="text-sm text-[#444444] font-semibold mb-4">
              Assistant Manager
            </h4>
            <div className="mb-4">&&&&&</div>
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
