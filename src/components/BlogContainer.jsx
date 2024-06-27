import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

/* eslint-disable react/prop-types */
const BlogContainer = ({ blog, index }) => {
  const [onMouseImage, setOnMouseImage] = useState(false);
  const [hoverBtn, setHoverBtn] = useState(false);
  useEffect(() => {
    Aos.init({ once: true, duration: 2000 });
  }, []);

  return (
    <div
      className="w-[360px]"
      data-aos="fade-up"
      data-aos-delay={
        index === 1 || index === 4
          ? "200"
          : index === 2 || index === 5
          ? "400"
          : "0"
      }
    >
      <div
        onMouseOver={() => setOnMouseImage(true)}
        onMouseLeave={() => setOnMouseImage(false)}
        className="mb-1 rounded-2xl border border-[#D3D3D3] relative overflow-hidden max-w-[360px] z-1 after:absolute hover:after:opacity-20 after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 transition-all duration-500"
      >
        <img
          className={`transition-all duration-500 w-full object-cover hover:scale-105 ${
            onMouseImage && "scale-125"
          }`}
          src={blog.image}
          alt=""
        />
      </div>
      <div className="px-6">
        <p className="text-[#5F6060] fontRoboto font-semibold text-[17px] mb-2">
          {blog.subject}
        </p>
        <h2 className="fontMontserrat font-semibold text-[23px] text-[#000] leading-[26px] mb-3">
          <a href="" className="hover:underline">
            {blog.title}
          </a>
        </h2>
        <p className="mb-1 text-[16px] text-[#000] font-semibold fontMontserrat">
          {blog.author}
        </p>
        <p className="text-sm text-[#5F6060] font-semibold fontMontserrat mb-3">
          {blog.date}
        </p>
        <button
          onMouseEnter={() => setHoverBtn(true)}
          onMouseLeave={() => setHoverBtn(false)}
          className={`${
            hoverBtn ? "bg-[#000]" : "bg-[#fff]"
          } transition-all border-2 border-[#000] rounded-md px-4 py-[2px]`}
        >
          <span
            className={`${
              hoverBtn ? "text-[#fff]" : "text-[#000]"
            } text-sm font-medium transition-all fontRoboto`}
          >
            Read More{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default BlogContainer;
