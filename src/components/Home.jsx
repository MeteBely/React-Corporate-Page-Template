import homePageTasarim from "../assets/tasarimiki.jpeg";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";

const Home = () => {
  const [hoverBtn, setHoverBtn] = useState(false);

  return (
    <section>
      <div
        style={{ backgroundImage: `url(${homePageTasarim})` }}
        className="h h-screen w-full bg-[#fff] mb-40 bg-no-repeat bg-cover relative bg-fixed"
      >
        <div className="absolute left-[15%] top-[30%] w-[700px]">
          <h1 className="fontMontserrat text-[52px] font-semibold leading-[60px] tracking-wide mb-[10px]">
            Delivering Superior Services Cutting-Edge IT Solutions
          </h1>{" "}
          <p className="fontRoboto font-semibold text-[#9A979C] text-[17px] mb-12">
            At JForce, as one of Turkey&apos;s leading technology & software
            companies, we aim to provide the best possible digital
            transformation solution. We offer highest-quality systems and
            software solutions that meet your requirements.
          </p>
          <div className="flex flex-row items-center justify-start gap-4 mb-4">
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
          <button
            onMouseEnter={() => setHoverBtn(true)}
            onMouseLeave={() => setHoverBtn(false)}
            className={`${
              hoverBtn ? "bg-[#FDFDFD]" : "bg-[#000]"
            } transition-all border-2 border-[#000] rounded-3xl px-6 py-[8px]`}
          >
            <span
              className={`${
                hoverBtn ? "text-[#000]" : "text-[#FDFDFD]"
              } text-sm font-semibold transition-all fontMontserrat  tracking-wider`}
            >
              Get Started{" "}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
