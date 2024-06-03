/* eslint-disable react/prop-types */
const ServiceItem = ({ serviceItem }) => {
  return (
    <div className="w-[400px] border border-gray-100 flex flex-col gap-4 items-center justify-center py-12 px-6 rounded-sm shadow-md">
      <img className="w-12 border border-black" src={serviceItem.icon} alt="" />
      <h2 className="font-bold text-lg fontMontserrat">{serviceItem.title}</h2>
      <p className="text-center leading-6 fontRoboto text-[#6c757d]">
        {serviceItem.shortDesc}
      </p>
      <a href="" className="text-[#47B2E4] hover:underline fontRoboto">
        Read More
      </a>
    </div>
  );
};

export default ServiceItem;
