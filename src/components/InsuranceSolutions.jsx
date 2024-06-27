import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import InsuranceOne from "../assets/Insurance1.jpg";
import InsuranceTwo from "../assets/Insurance2.jpg";
import InsuranceThree from "../assets/Insurance3.jpg";

const InsuranceSolutions = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);

  return (
    <section>
      <div className="py-40 px-2">
        <div className="mb-16 lg:mb-32">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-extrabold fontMontserrat pb-4 mb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-auto min-[830px]:w-[800px]">
            Our Insurance Solutions
          </h2>
          <p className="mx-auto fontRoboto text-center w-auto lg:w-[800px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 fontRoboto flex-wrap">
          <div
            className="flex flex-col items-start justify-center rounded-md h-auto gap-4 w-[400px]"
            data-aos="fade-up"
          >
            <h4 className="text-[26px] font-bold fontMontserrat">
              Health Insurance
            </h4>
            <div className="bg-[#0061A0] pb-2 rounded-b-md">
              <img className="w-full" src={InsuranceOne} alt="" />
              <p className="text-white px-2">
                Easily manage complex Health Insurance Claims and
                Pre-Authorization management. Simplify your processes with
                machine-based risk assessment.
              </p>
            </div>
            <button className="py-3 px-12 text-[#0061A0] bg-[#fff] border-2 font-semibold text-lg tracking-wide rounded-lg border-[#0061A0] hover:text-[#fff] hover:bg-[#0061A0] transition-all duration-200">
              Read More
            </button>
          </div>
          <div
            className="flex flex-col items-start justify-center rounded-md h-auto gap-4 w-[400px]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-[26px] font-bold fontMontserrat">
              General Insurance
            </h4>
            <div className="bg-[#0061A0] pb-2 rounded-b-md">
              <img className="w-full" src={InsuranceTwo} alt="" />
              <p className="text-white px-2">
                Easily manage complex Health Insurance Claims and
                Pre-Authorization management. Simplify your processes with
                machine-based risk assessment.
              </p>
            </div>
            <button className="py-3 px-12 text-[#0061A0] bg-[#fff] border-2 font-semibold text-lg tracking-wide rounded-lg border-[#0061A0] hover:text-[#fff] hover:bg-[#0061A0] transition-all duration-200">
              Read More
            </button>
          </div>
          <div
            className="flex flex-col items-start justify-center rounded-md h-auto gap-4 w-[400px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4 className="text-[26px] font-bold fontMontserrat">
              Life & Pension
            </h4>
            <div className="bg-[#0061A0] pb-2 rounded-b-md">
              <img className="w-full" src={InsuranceThree} alt="" />
              <p className="text-white px-2">
                Easily manage complex Health Insurance Claims and
                Pre-Authorization management. Simplify your processes with
                machine-based risk assessment.
              </p>
            </div>
            <button className="py-3 px-12 text-[#0061A0] bg-[#fff] border-2 font-semibold text-lg tracking-wide rounded-lg border-[#0061A0] hover:text-[#fff] hover:bg-[#0061A0] transition-all duration-200">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSolutions;
