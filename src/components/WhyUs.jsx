import WhyUsContainer from "./WhyUsContainer";
import { WhyUsReasons } from "../components-data/WhyUs";

const WhyUs = () => {
  return (
    <section className="bg-[#808080]">
      <div className="py-40 text-white">
        <div className="mb-20">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-extrabold mb-4 pb-4 border-b border-gray-400 mx-auto text-center md:w-[740px] w-auto fontMontserrat">
            Figures behind the trust
          </h2>
          <p className="mx-auto fontRoboto text-center w-auto md:w-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 flex-wrap px-2 w-full m-auto">
          {WhyUsReasons.map((reason, index) => (
            <WhyUsContainer key={index} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
