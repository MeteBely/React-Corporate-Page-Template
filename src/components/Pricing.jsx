import { FaCircleCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <section>
      <div className="py-8">
        <div className="mb-12">
          <h2 className="text-[32px] fontMontserrat font-bold pb-4 mb-4 text-[#36517E] border-b border-gray-400 mx-auto text-center w-[220px]">
            PRICING
          </h2>
          <p className="mx-auto fontRoboto text-center w-[800px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-6 fontRoboto">
          <div className="flex flex-col items-start justify-center shadow-md rounded-md px-4 h-[440px] gap-4">
            <h4 className="text-[24px] font-bold fontMontserrat">Base</h4>
            <div className="text-gray-400">
              <span className="text-[42px] font-bold text-[#000]">$39 </span>/
              Month
            </div>
            <p>For most business that want to optimize web queries</p>
            <ul className="flex flex-col gap-3 justify-start items-start">
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                All limited links
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Own analiticys platform
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Chat support
              </li>
              <li className="flex flex-row items-center justify-start gap-2 text-[#6c757d]">
                <span>
                  <FaCircleCheck color="#B0B0C6" />
                </span>
                Optimize hashtags
              </li>
              <li className="flex flex-row items-center justify-start gap-2 text-[#6c757d]">
                <span>
                  <FaCircleCheck color="#B0B0C6" />
                </span>
                Unlimited users
              </li>
            </ul>
            <button className="py-3 px-12 text-[#47B2E4] border-2 font-semibold text-lg tracking-wide rounded-lg border-[#47B2E4] hover:text-white hover:bg-[#47B2E4] transition-all">
              Choose Plan
            </button>
          </div>
          <div className="flex flex-col items-start justify-center shadow-md rounded-md px-4 h-[440px] gap-4 bg-[#36517E] text-white">
            <h4 className="text-[24px] font-bold fontMontserrat">Popular</h4>
            <div className="text-white">
              <span className="text-[42px] font-bold">$39 </span>/ Month
            </div>
            <p>For most business that want to optimize web queries</p>
            <ul className="flex flex-col gap-3 justify-start items-start">
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                All limited links
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Own analiticys platform
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Chat support
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Optimize hashtags
              </li>
              <li className="flex flex-row items-center justify-start gap-2 text-[#6c757d]">
                <span>
                  <FaCircleCheck color="#B0B0C6" />
                </span>
                Unlimited users
              </li>
            </ul>
            <button className="py-3 px-12 text-[#47B2E4] bg-white border-2 font-semibold text-lg tracking-wide rounded-lg border-transparent hover:text-white hover:bg-[#47B2E4] transition-all">
              Choose Plan
            </button>
          </div>
          <div className="flex flex-col items-start justify-center shadow-md rounded-md px-4 h-[440px] gap-4">
            <h4 className="text-[24px] font-bold fontMontserrat">Base</h4>
            <div className="text-gray-400">
              <span className="text-[42px] font-bold text-[#000]">$39 </span>/
              Month
            </div>
            <p>For most business that want to optimize web queries</p>
            <ul className="flex flex-col gap-3 justify-start items-start">
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                All limited links
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Own analiticys platform
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Chat support
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Optimize hashtags
              </li>
              <li className="flex flex-row items-center justify-start gap-2">
                <span>
                  <FaCircleCheck />
                </span>
                Unlimited users
              </li>
            </ul>
            <button className="py-3 px-12 text-[#47B2E4] border-2 font-semibold text-lg tracking-wide rounded-lg border-[#47B2E4] hover:text-white hover:bg-[#47B2E4] transition-all">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
