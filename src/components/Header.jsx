import { useEffect, useState } from "react";
import jforceIcon from "../assets/jforceIcon.png";
import baby from "../assets/baby.png";

const Header = () => {
  const [small, setSmall] = useState(false);

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
        className={`flex flex-row justify-evenly items-center h-20 fixed w-full text-[#000002] fontMontserrat font-semibold transition-all duration-500 z-50 ${
          small && "bg-[#303030] opacity-95 text-[#fff]"
        }`}
      >
        <div className="w-[500px]">
          <a href="" className="pointer-events-none">
            {small ? (
              <img className="w-[500px]" src={baby} alt="" />
            ) : (
              <div className="w-[500px] ml-32">
                <img src={jforceIcon} />
              </div>
            )}
          </a>
        </div>
        <div>
          <ul className="flex flex-row gap-8 items-center justify-center text-lg roboto-medium tracking-wider">
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
