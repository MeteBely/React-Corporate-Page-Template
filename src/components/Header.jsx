import { useEffect, useState } from "react";

const Header = () => {
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <header>
      <div
        className={`flex flex-row justify-around items-center h-20 fixed w-full text-[#DEE2EA] fontMontserrat font-semibold transition-all duration-500 z-50 ${
          small && "bg-[#293C5D] opacity-95"
        }`}
      >
        <div>
          <a href="">ETEM COMPANY with ICON</a>
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
