import { ServicesArr } from "../components-data/Services";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section>
      <div className="bg-[#F5F6F8] py-40">
        <div className="mb-20">
          <h2 className="text-[52px] font-extrabold fontMontserrat mb-4 pb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-[420px]">
            SERVICES
          </h2>
          <p className="mx-auto text-center w-[800px] fontRoboto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 flex-wrap w-[1600px] m-auto">
          {ServicesArr.map((serviceItem, index) => (
            <ServiceItem key={index} serviceItem={serviceItem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
