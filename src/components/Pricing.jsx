import { FaCircleCheck } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);

  return (
    <section>
      <div className="py-40 px-2">
        <div className="mb-16 lg:mb-20">
          <h2 className="text-[52px] font-extrabold fontMontserrat pb-4 mb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-[300px]">
            PRICING
          </h2>
          <p className="mx-auto fontRoboto text-center w-auto lg:w-[800px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 fontRoboto flex-wrap">
          <div
            className="flex flex-col items-start justify-center shadow-md rounded-md px-4 h-[440px] gap-4"
            data-aos="fade-up"
          >
            <h4 className="text-[24px] font-bold fontMontserrat">Base</h4>
            <div className="text-gray-400">
              <span className="text-[42px] font-bold text-[#000]">$19 </span>/
              Month
            </div>
            <p>For most business that want to optimize web queries</p>
            <ul className="flex flex-col gap-3 justify-start items-start">
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                All limited links
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Own analiticys platform
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Chat support
              </li>
              <li className="flex flex-row items-center justify-start gap-2 text-[#6c757d]">
                <span>
                  <FaCircleCheck color="#B0B0C6" />
                </span>
                Optimize hashtags
              </li>
              <li className="flex flex-row items-center justify-start gap-2 text-[#6c757d]">
                <span>
                  <FaCircleCheck color="#B0B0C6" />
                </span>
                Unlimited users
              </li>
            </ul>
            <button className="py-3 px-12 text-[#fff] bg-[#000] border-2 font-semibold text-lg tracking-wide rounded-lg border-[#000] hover:text-[#000] hover:bg-[#fff] transition-all duration-200">
              Choose Plan
            </button>
          </div>
          <div
            className="flex flex-col items-start justify-center shadow-md rounded-md px-4 h-[440px] gap-4 bg-[#000] text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-[24px] font-bold fontMontserrat border-b">
              Popular
            </h4>
            <div className="text-white">
              <span className="text-[42px] font-bold">$39 </span>/ Month
            </div>
            <p>For most business that want to optimize web queries</p>
            <ul className="flex flex-col gap-3 justify-start items-start">
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                All limited links
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Own analiticys platform
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Chat support
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Optimize hashtags
              </li>
              <li className="flex flex-row items-center justify-start gap-2 text-[#6c757d]">
                <span>
                  <FaCircleCheck color="#B0B0C6" />
                </span>
                Unlimited users
              </li>
            </ul>
            <button className="py-3 px-12 text-[#000] bg-[#fff] border-2 font-semibold text-lg tracking-wide rounded-lg border-transparent hover:text-[#fff] hover:bg-[#808080] transition-all duration-200">
              Choose Plan
            </button>
          </div>
          <div
            className="flex flex-col items-start justify-center shadow-md rounded-md px-4 h-[440px] gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4 className="text-[24px] font-bold fontMontserrat">Base</h4>
            <div className="text-gray-400">
              <span className="text-[42px] font-bold text-[#000]">$69 </span>/
              Month
            </div>
            <p>For most business that want to optimize web queries</p>
            <ul className="flex flex-col gap-3 justify-start items-start">
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                All limited links
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Own analiticys platform
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Chat support
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Optimize hashtags
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Unlimited users
              </li>
            </ul>
            <button className="py-3 px-12 text-[#fff] bg-[#000] border-2 font-semibold text-lg tracking-wide rounded-lg border-[#000] hover:text-[#000] hover:bg-[#fff] transition-all duration-200">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
