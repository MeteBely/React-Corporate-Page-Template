import { AiOutlineInstagram } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { useState } from "react";
import classNames from "classnames";

const Footer = () => {
  const [iconUp, setIconUp] = useState(""); //mouse ile üzerine gelinen icon'un değerini alır.

  return (
    <footer>
      <div className="bg-[#191919] py-8 flex flex-row justify-evenly items-start fontRoboto gap-4 px-2">
        <div className="flex flex-col items-start justify-start gap-3 text-[#AFAFAF]">
          <div>
            <h3 className="text-[#fff] font-bold text-2xl">JFORCE</h3>
          </div>
          <div>
            <p>
              Fatih Sultan Mehmet Mah. Poligon Cd. Buyaka 2 Sitesi Kule:1 Kat:7
            </p>
            <p>Ümraniye / İSTANBUL</p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Phone:</span> +90 216 668 02 90
            </p>
            <p>
              <span className="font-semibold">Email:</span> jforce@jforce.com
            </p>
          </div>
          <div className="w-auto min-[670px]:w-[400px] min-[870px]:hidden block">
            <h4 className="text-[#fff] font-semibold mb-3 text-[17px]">
              Follow Us
            </h4>
            <p className="mb-4">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div>
              <ul className="flex flex-row gap-8 justify-start items-center">
                <li
                  onMouseEnter={() => setIconUp("instagram")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[40px] h-[40px]"
                >
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "instagram",
                      })}
                      color={`${iconUp === "instagram" ? `#D5307A` : ""}`}
                      size={34}
                    />
                  </a>
                </li>
                <li
                  onMouseEnter={() => setIconUp("tiktok")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[34px] h-[34px]"
                >
                  <a href="https://www.tiktok.com/">
                    <BsTiktok
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "tiktok",
                      })}
                      color={`${iconUp === "tiktok" ? "#008000" : ""}`}
                      size={28}
                    />
                  </a>
                </li>
                <li
                  onMouseEnter={() => setIconUp("facebook")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[34px] h-[34px]"
                >
                  <a href="https://www.facebook.com/">
                    <BsFacebook
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "facebook",
                      })}
                      color={`${iconUp === "facebook" ? `#257BF2` : ""}`}
                      size={28}
                    />
                  </a>
                </li>
                <li
                  onMouseEnter={() => setIconUp("pinterest")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[34px] h-[34px]"
                >
                  <a href="https://tr.pinterest.com/">
                    <BsPinterest
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "pinterest",
                      })}
                      color={`${iconUp === "pinterest" ? `#BE2026` : ""}`}
                      size={28}
                    />
                  </a>
                </li>
                <li
                  onMouseEnter={() => setIconUp("youtube")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[41px] h-[41px]"
                >
                  <a href="https://www.youtube.com/@metehanmuradoglu3782">
                    <AiFillYoutube
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "youtube",
                      })}
                      color={`${iconUp === "youtube" ? "red" : ""}`}
                      size={36}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-4 xl:gap-20 text-[#AFAFAF]">
          <div className="min-[870px]:block hidden">
            <h4 className="text-[#fff] font-semibold mb-3 text-[17px] w-[105px]">
              Useful Links
            </h4>
            <ul className="flex flex-col items-start justify-center gap-2 text-[15px]">
              <li>
                <a href="" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
          <div className="min-[870px]:block hidden">
            <h4 className="text-[#fff] font-semibold mb-3 text-[17px]">
              Our Services
            </h4>
            <ul className="flex flex-col items-start justify-center gap-2 text-[15px]">
              <li>
                <a href="" className="hover:underline">
                  Web Design
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Web Development
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Product Management
                </a>
              </li>
              <li>
                <a href="" className="hover:underline">
                  Marketing
                </a>
              </li>
            </ul>
          </div>
          <div className="min-[870px]:hidden block">
            <div className="mb-8">
              <h4 className="text-[#fff] font-semibold mb-3 text-[17px] w-[105px]">
                Useful Links
              </h4>
              <ul className="flex flex-col items-start justify-center gap-2 text-[15px]">
                <li>
                  <a href="" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Terms of service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#fff] font-semibold mb-3 text-[17px]">
                Our Services
              </h4>
              <ul className="flex flex-col items-start justify-center gap-2 text-[15px]">
                <li>
                  <a href="" className="hover:underline">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Product Management
                  </a>
                </li>
                <li>
                  <a href="" className="hover:underline">
                    Marketing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[400px] min-[870px]:block hidden">
            <h4 className="text-[#fff] font-semibold mb-3 text-[17px]">
              Follow Us
            </h4>
            <p className="mb-4">
              Cras fermentum odio eu feugiat lide par naso tierra videa magna
              derita valies
            </p>
            <div>
              <ul className="flex flex-row gap-8 justify-start items-center">
                <li
                  onMouseEnter={() => setIconUp("instagram")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[40px] h-[40px]"
                >
                  <a href="https://www.instagram.com/">
                    <AiOutlineInstagram
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "instagram",
                      })}
                      color={`${iconUp === "instagram" ? `#D5307A` : ""}`}
                      size={34}
                    />
                  </a>
                </li>
                <li
                  onMouseEnter={() => setIconUp("tiktok")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[34px] h-[34px]"
                >
                  <a href="https://www.tiktok.com/">
                    <BsTiktok
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "tiktok",
                      })}
                      color={`${iconUp === "tiktok" ? "#008000" : ""}`}
                      size={28}
                    />
                  </a>
                </li>
                <li
                  onMouseEnter={() => setIconUp("facebook")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[34px] h-[34px]"
                >
                  <a href="https://www.facebook.com/">
                    <BsFacebook
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "facebook",
                      })}
                      color={`${iconUp === "facebook" ? `#257BF2` : ""}`}
                      size={28}
                    />
                  </a>
                </li>
                <li
                  onMouseEnter={() => setIconUp("pinterest")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[34px] h-[34px]"
                >
                  <a href="https://tr.pinterest.com/">
                    <BsPinterest
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "pinterest",
                      })}
                      color={`${iconUp === "pinterest" ? `#BE2026` : ""}`}
                      size={28}
                    />
                  </a>
                </li>
                <li
                  onMouseEnter={() => setIconUp("youtube")}
                  onMouseLeave={() => setIconUp("")}
                  className="w-[41px] h-[41px]"
                >
                  <a href="https://www.youtube.com/@metehanmuradoglu3782">
                    <AiFillYoutube
                      className={classNames({
                        "text-[#6a6d75] transition-all duration-200": true,
                        "-translate-y-1": iconUp === "youtube",
                      })}
                      color={`${iconUp === "youtube" ? "red" : ""}`}
                      size={36}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
