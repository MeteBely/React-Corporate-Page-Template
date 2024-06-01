const Header = () => {
  return (
    <header>
      <div className="flex flex-row justify-around items-center h-20 font-serif fixed w-full text-[#DEE2EA]">
        <div>
          <a href="">Company Name</a>
        </div>
        <div>
          <ul className="flex flex-row gap-8 items-center justify-center text-lg">
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
