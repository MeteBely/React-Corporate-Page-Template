import { ServicesArr } from "../components-data/Services";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <section>
      <div className="bg-[#F5F6F8] py-12">
        <div className="mb-12">
          <h2 className="text-[32px] fontMontserrat font-bold mb-4 pb-4 text-[#36517E] border-b border-gray-400 mx-auto text-center w-[220px]">
            SERVICES
          </h2>
          <p className="mx-auto text-center w-[800px] fontRoboto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 flex-wrap w-[1600px] m-auto">
          {ServicesArr.map((serviceItem, i) => (
            <ServiceItem key={i} serviceItem={serviceItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
