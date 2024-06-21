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
      className="w-[400px] border border-gray-100 flex flex-col gap-4 items-center justify-center py-12 px-6 rounded-sm shadow-md"
      data-aos="fade-up"
      data-aos-delay={
        index === 1 || index === 4
          ? "200"
          : index === 2 || index === 5
          ? "400"
          : "0"
      }
    >
      <img className="w-12 h-12" src={serviceItem.icon} alt="" />
      <h2 className="font-semibold text-[20px] fontMontserrat">
        {serviceItem.title}
      </h2>
      <p className="text-center leading-6 fontRoboto text-[#6c757d] h-[100px]">
        {serviceItem.shortDesc}
      </p>
    </div>
  );
};

export default ServiceItem;
