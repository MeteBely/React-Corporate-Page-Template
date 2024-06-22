import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RxQuestionMarkCircled } from "react-icons/rx";
import Aos from "aos";
import "aos/dist/aos.css";

/* eslint-disable react/prop-types */
const FaqItem = ({ item, index }) => {
  const [mouseClick, setMouseClick] = useState(false);
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);

  return (
    <div
      className="bg-[#fff] py-4 px-6 w-full h-auto"
      data-aos="fade-up"
      data-aos-delay={
        index === 1
          ? "200"
          : index === 2
          ? "400"
          : index === 3
          ? "600"
          : index === 4
          ? "800"
          : "0"
      }
    >
      <div
        onClick={() => setMouseClick(!mouseClick)}
        className="flex flex-row items-start justify-between gap-2 cursor-pointer"
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <div>
            <RxQuestionMarkCircled color="#6B7592" size={24} />
          </div>
          <h3
            className={`text-lg font-semibold transition-all duration-200 ease-linear fontMontserrat ${
              mouseClick ? "text-[#36517E]" : "text-[#000]"
            }`}
          >
            {item.question}
          </h3>
        </div>
        <div>
          <IoIosArrowForward
            className={`transition-all duration-200 ease-linear mt-[5px] ${
              mouseClick ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>

      <p
        className={`${
          mouseClick
            ? "max-h-[200px] visible opacity-100 translate-y-2"
            : "max-h-0 invisible opacity-0 -translate-y-2"
        } transition-all duration-200 ease-linear fontRoboto`}
      >
        {item.answer}
      </p>
    </div>
  );
};

export default FaqItem;
