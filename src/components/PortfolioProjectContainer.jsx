/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const PortfolioProjectContainer = ({ project }) => {
  const [onMouseImage, setOnMouseImage] = useState(false);
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);

  return (
    <div>
      <div className="relative cursor-pointer" data-aos="fade-up">
        <img
          className="w-[490px] xl:w-[400px] object-cover"
          src={project.img}
          alt=""
        />
        <div
          onMouseEnter={() => setOnMouseImage(true)}
          onMouseLeave={() => setOnMouseImage(false)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black bg-white flex justify-center items-center flex-col  w-full h-[101%] opacity-0 hover:opacity-90 transition-all duration-300"
        >
          <h2
            className={`fontMontserrat text-center text-2xl font-bold transition-all duration-700 opacity-0 ${
              onMouseImage && "-translate-y-3 opacity-100"
            }`}
          >
            {project.title}
          </h2>
          <p
            className={`text-[#6a6d75] fontMontserrat text-sm font-semibold transition-all duration-700 opacity-0  ${
              onMouseImage && "-translate-y-3 opacity-100"
            }`}
          >
            {project.subTxt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProjectContainer;
