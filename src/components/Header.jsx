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
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">ABOUT</a>
            </li>
            <li>
              <a href="">SERVICES</a>
            </li>
            <li>
              <a href="">PORTFOLIO</a>
            </li>
            <li>
              <a href="">TEAM</a>
            </li>
            <li>
              <a href="">PRICING</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
