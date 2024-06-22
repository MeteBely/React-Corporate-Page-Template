import homePageTasarim from "../assets/tasarimiki.jpeg";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [hoverBtn, setHoverBtn] = useState(false);
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${homePageTasarim})` }}
        className="h-[80vh] sm:h-screen w-full bg-no-repeat bg-cover max-lg:bg-[center_top_1rem] sm:bg-fixed mb-40 relative"
      >
        <div className="absolute left-[5%] sm:left-[10%] md:left-[15%] top-[15%] md:top-[20%] lg:top-[25%] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%]">
          <h1
            className="fontMontserrat text-[32px] lg:w-[600px] 2xl:w-[700px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-semibold leading-[40px] sm:leading-[50px] md:leading-[55px] lg:leading-[60px] tracking-wide mb-[10px]"
            data-aos="fade-up"
          >
            Delivering Superior Services Cutting-Edge IT Solutions
          </h1>
          <p
            className="fontRoboto font-semibold text-[#9A979C] 2xl:w-[800px] text-[14px] sm:text-[16px] md:text-[17px] mb-8 md:mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            At JForce, as one of Turkey&apos;s leading technology & software
            companies, we aim to provide the best possible digital
            transformation solution. We offer highest-quality systems and
            software solutions that meet your requirements.
          </p>
          <div
            className="flex flex-row items-center justify-start gap-4 mb-4"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <a href="https://www.instagram.com/jforcebilisim/" target="_blank">
              <AiOutlineInstagram size={22} />
            </a>
            <a href="https://www.facebook.com/jforcebilisim" target="_blank">
              <BsFacebook size={18} />
            </a>
            <a href="https://x.com/jforcebilisim" target="_blank">
              <FaXTwitter size={18} />
            </a>
            <a href="https://www.linkedin.com/company/jforce" target="_blank">
              <FaLinkedin size={20} />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-delay="800">
            <button
              onMouseEnter={() => setHoverBtn(true)}
              onMouseLeave={() => setHoverBtn(false)}
              className="transition-all border-2 border-[#000] hover:bg-[#FDFDFD] bg-[#000] rounded-3xl px-4 py-2 sm:px-6 sm:py-2.5"
            >
              <span
                className={`${
                  hoverBtn ? "text-[#000]" : "text-[#FDFDFD]"
                } text-sm font-semibold transition-all fontMontserrat tracking-wider`}
              >
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
