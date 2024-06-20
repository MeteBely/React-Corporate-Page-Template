import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RxQuestionMarkCircled } from "react-icons/rx";

/* eslint-disable react/prop-types */
const FaqItem = ({ item }) => {
  const [mouseClick, setMouseClick] = useState(false);

  return (
    <div className="bg-[#fff] py-4 px-6 w-full h-auto">
      <div
        onClick={() => setMouseClick(!mouseClick)}
        className="flex flex-row items-center justify-between cursor-pointer"
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <RxQuestionMarkCircled color="#6B7592" size={24} />
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
            className={`transition-all duration-200 ease-linear ${
              mouseClick ? "rotate-90" : ""
            }`}
          />
        </div>
      </div>

      <p
        className={`${
          mouseClick
            ? "max-h-20 visible opacity-100 translate-y-2"
            : "max-h-0 invisible opacity-0 -translate-y-2"
        } transition-all duration-200 ease-linear fontRoboto`}
      >
        {item.answer}
      </p>
    </div>
  );
};

export default FaqItem;
