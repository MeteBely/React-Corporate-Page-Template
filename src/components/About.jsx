import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";

const About = () => {
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <section>
      <div className="mb-20">
        <div>
          <h2 className="text-[32px] font-bold mb-16 pb-4 text-[#36517E] border-b border-gray-400 mx-auto text-center w-[220px]">
            ABOUT US
          </h2>
        </div>
        <div className="flex flex-row justify-evenly items-center">
          <div className="w-[600px] h-[400px] border border-black">
            <img
              src="https://img.freepik.com/free-photo/business-team-ai-generated-image_268835-6686.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-12 items-center justify-start w-[600px] h-[400px] text-[17px] leading-6">
            <div>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="flex flex-col gap-[10px]">
                <li className="flex flex-row">
                  <span>
                    <IoMdCheckmarkCircleOutline size={22} color="#47B2E4" />
                  </span>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </li>
                <li className="flex flex-row">
                  <span>
                    <FaCheckCircle size={22} color="#47B2E4" />
                  </span>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </li>
                <li className="flex flex-row">
                  <span>
                    <BsCheck2Circle size={22} color="#47B2E4" />
                  </span>
                  <p>Ullamco laboris nisi ut aliquip ex ea commodo</p>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="mb-4">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button
                onMouseEnter={() => setHoverBtn(true)}
                onMouseLeave={() => setHoverBtn(false)}
                className={`${
                  hoverBtn && "bg-[#47B2E4]"
                } transition-all flex flex-row items-center gap-2 border-2 border-[#47B2E4] rounded-lg px-8 py-[10px]`}
              >
                <span
                  className={`${
                    hoverBtn ? "text-[#ffffff]" : "text-[#47B2E4]"
                  } text-[15px] font-semibold transition-all`}
                >
                  Read More{" "}
                </span>
                <FaLongArrowAltRight
                  color={`${hoverBtn ? "#ffffff" : "#47B2E4"}`}
                  className={`transition-all ${hoverBtn && "translate-x-2"}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
