/* eslint-disable react/prop-types */
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceItem = ({ serviceItem, index }) => {
  console.log(index);
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  return (
    <div
      className="w-[280px] border border-gray-100 flex flex-col gap-4 items-center justify-start shadow-md rounded-md h-[475px] relative"
      data-aos="fade-up"
      data-aos-delay={
        index === 1 || index === 4
          ? "200"
          : index === 2 || index === 5
          ? "400"
          : "0"
      }
    >
      <div className="bg-[#0061A0] w-full rounded-md">
        <h2 className="font-semibold text-[20px] pl-2 pt-3 fontMontserrat text-white">
          {serviceItem.title}
        </h2>
        <img className="w-full object-cover" src={serviceItem.img} alt="" />
      </div>
      <p className="leading-6 fontRoboto text-[#6c757d] h-[100px] px-2">
        {serviceItem.shortDesc}
      </p>
      <button className="hover:underline fontRoboto absolute bottom-0 right-2">
        Read More
      </button>
    </div>
  );
};

export default ServiceItem;
