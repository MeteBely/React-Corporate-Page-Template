import { useEffect, useState } from "react";
import jforceIcon from "../assets/jforceIcon.png";
import babyy from "../assets/jforcedenemasyon.png";
import { LuMenu } from "react-icons/lu";
import { RiCloseLargeFill } from "react-icons/ri";

const Header = () => {
  const [small, setSmall] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setSmall(window.pageYOffset > 200);
      });
    }
  }, []);

  return (
    <header>
      <div
        className={`flex flex-row min-[950px]:px-0 px-4 justify-between min-[950px]:justify-evenly items-center h-20 fixed w-full text-[#000002] fontMontserrat font-semibold transition-all duration-500 z-50 ${
          small && "bg-[#303030] opacity-95 text-[#fff]"
        }`}
      >
        <div className="">
          <a href="" className="pointer-events-none">
            {small ? (
              <div className="w-[200px] min-[1080px]:w-[260px]">
                <img src={babyy} alt="" />
              </div>
            ) : (
              <div className="w-[200px] min-[1080px]:w-[260px]">
                <img src={jforceIcon} />
              </div>
            )}
          </a>
        </div>
        <div>
          <div className="min-[950px]:hidden block">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <LuMenu size={40} />
            </button>
          </div>
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[#323232] transition-transform transform min-[950px]:hidden block ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-white absolute top-2 right-2"
            >
              <RiCloseLargeFill size={36} />
            </button>
            <div className="p-4 text-white mt-12">
              <ul className="flex flex-col gap-4 min-[1080px]:gap-8 items-center justify-center text-[17px] min-[1080px]:text-lg roboto-medium tracking-wider">
                <li>
                  <a
                    href=""
                    className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                      small ? "before:bg-[#fff]" : "before:bg-[#fff]"
                    }`}
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                      small ? "before:bg-[#fff]" : "before:bg-[#fff]"
                    }`}
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                      small ? "before:bg-[#fff]" : "before:bg-[#fff]"
                    }`}
                  >
                    SERVICES
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                      small ? "before:bg-[#fff]" : "before:bg-[#fff]"
                    }`}
                  >
                    PORTFOLIO
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                      small ? "before:bg-[#fff]" : "before:bg-[#fff]"
                    }`}
                  >
                    TEAM
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                      small ? "before:bg-[#fff]" : "before:bg-[#fff]"
                    }`}
                  >
                    PRICING
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                      small ? "before:bg-[#fff]" : "before:bg-[#fff]"
                    }`}
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul className="min-[950px]:flex hidden flex-row gap-6 min-[1080px]:gap-8 items-center justify-center text-[17px] min-[1080px]:text-lg roboto-medium tracking-wider">
            <li>
              <a
                href=""
                className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                  small ? "before:bg-[#fff]" : "before:bg-[#000]"
                }`}
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href=""
                className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                  small ? "before:bg-[#fff]" : "before:bg-[#000]"
                }`}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href=""
                className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                  small ? "before:bg-[#fff]" : "before:bg-[#000]"
                }`}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href=""
                className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                  small ? "before:bg-[#fff]" : "before:bg-[#000]"
                }`}
              >
                PORTFOLIO
              </a>
            </li>
            <li>
              <a
                href=""
                className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                  small ? "before:bg-[#fff]" : "before:bg-[#000]"
                }`}
              >
                TEAM
              </a>
            </li>
            <li>
              <a
                href=""
                className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                  small ? "before:bg-[#fff]" : "before:bg-[#000]"
                }`}
              >
                PRICING
              </a>
            </li>
            <li>
              <a
                href=""
                className={`relative no-underline hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:w-full before:h-[2px] before:bottom-0 before:left-0 before:scale-x-0 before:transition-all before:duration-300 ${
                  small ? "before:bg-[#fff]" : "before:bg-[#000]"
                }`}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
