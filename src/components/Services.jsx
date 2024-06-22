import { ServicesArr } from "../components-data/Services";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section>
      <div className="bg-[#F5F6F8] py-20 md:py-40">
        <div className="mb-12 md:mb-20 px-4">
          <h2 className="text-[32px] md:text-[40px] lg:text-[52px] font-extrabold fontMontserrat mb-4 pb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-auto max-w-[90%] sm:max-w-[420px]">
            SERVICES
          </h2>
          <p className="mx-auto text-center w-auto max-w-[90%] sm:max-w-[800px] fontRoboto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 px-4 w-auto min-[1440px]:w-[1400px] mx-auto">
          {ServicesArr.map((serviceItem, index) => (
            <ServiceItem
              key={index}
              serviceItem={serviceItem}
              index={index}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
