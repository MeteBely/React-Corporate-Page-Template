import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import jforceImage from "../assets/filteredImage.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [hoverBtn, setHoverBtn] = useState(false);
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);

  return (
    <section>
      <div className="mb-40 px-4">
        <div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-extrabold mb-8 sm:mb-12 lg:mb-16 pb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-auto max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[400px] fontMontserrat">
            ABOUT US
          </h2>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row justify-evenly items-start fontRoboto text-[#6c757d]">
          <div
            className="w-full lg:w-[50%] h-auto lg:h-[600px] mb-8 lg:mb-0"
            data-aos="fade-up"
          >
            <img
              src={jforceImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-8 md:gap-12 items-center justify-start w-full lg:w-[50%] h-auto text-[15px] sm:text-[16px] md:text-[17px] leading-6 tracking-[1.75]">
            <div className="shadow-lg p-4" data-aos="fade-up">
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="flex flex-col gap-[10px] text-[14px] sm:text-[15px]">
                <li className="flex flex-row items-center">
                  <span>
                    <IoMdCheckmarkCircleOutline size={18} color="#6B7592" />
                  </span>
                  <p className="ml-2">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </li>
                <li className="flex flex-row items-center">
                  <span>
                    <IoMdCheckmarkCircleOutline size={18} color="#6B7592" />
                  </span>
                  <p className="ml-2">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </li>
                <li className="flex flex-row items-center">
                  <span>
                    <IoMdCheckmarkCircleOutline size={18} color="#6B7592" />
                  </span>
                  <p className="ml-2">
                    Ullamco laboris nisi ut aliquip ex ea commodo.
                  </p>
                </li>
              </ul>
            </div>
            <div className="">
              <p
                className="mb-4 text-black"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                JFORCE Bilişim Teknolojileri has been founded in Istanbul in
                2003 in order to meet entire Technology demands of their
                customers. We have been providing products, solutions and
                services for all kinds of technology hardware, communication,
                security, backup, business continuity topics independent from
                any platform. We ensure our customers which we achieved
                successful projects together to avoid harsh effects of digital
                transformation by supporting digitalization of their business
                processes; and let them adapt efficient and creative solutions
                by analysing their requirements accurately.
              </p>
              <div data-aos="fade-up" data-aos-delay="300">
                <button
                  onMouseEnter={() => setHoverBtn(true)}
                  onMouseLeave={() => setHoverBtn(false)}
                  className="transition-all flex flex-row items-center gap-2 border-2 border-[#000] rounded-lg px-4 py-2 sm:px-6 sm:py-2.5 hover:bg-[#fff] bg-[#000]"
                >
                  <span
                    className={`text-[14px] sm:text-[15px] font-semibold transition-all ${
                      hoverBtn ? "text-[#000]" : "text-[#fff]"
                    }`}
                  >
                    Read More{" "}
                  </span>
                  <FaLongArrowAltRight
                    color={`${hoverBtn ? "#000" : "#fff"}`}
                    className={`transition-all ${hoverBtn && "translate-x-2"}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
