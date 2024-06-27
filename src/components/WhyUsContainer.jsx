/* eslint-disable react/prop-types */
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const WhyUsContainer = ({ reason, index }) => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);
  console.log(reason.title);
  return (
    <div
      className="flex flex-col items-center justify-start h-[300px] w-[350px]"
      data-aos="fade-up"
      data-aos-delay={
        index === 1 ? "200" : index === 2 ? "400" : index === 3 ? "600" : "0"
      }
    >
      <img src={reason.icon} className="mb-2" alt="" />
      <h3 className="text-[30px] fontRoboto font-bold text-center mb-3">
        {reason.title}
      </h3>
      <p className="fontRoboto">{reason.subTxt}</p>
    </div>
  );
};

export default WhyUsContainer;
