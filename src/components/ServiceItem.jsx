/* eslint-disable react/prop-types */
const ServiceItem = ({ serviceItem }) => {
  return (
    <div className="w-[400px] border border-gray-100 flex flex-col gap-4 items-center justify-center py-12 px-6 rounded-sm shadow-md">
      <img className="w-12 h-12" src={serviceItem.icon} alt="" />
      <h2 className="font-semibold text-[20px] fontMontserrat">
        {serviceItem.title}
      </h2>
      <p className="text-center leading-6 fontRoboto text-[#6c757d] h-[100px]">
        {serviceItem.shortDesc}
      </p>
    </div>
  );
};

export default ServiceItem;
