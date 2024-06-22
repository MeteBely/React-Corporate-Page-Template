import { faqArr } from "../components-data/Faq";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <section className="bg-[#F5F6F8]">
      <div className="py-40">
        <div className="mb-12 md:mb-16 lg:mb-20 px-2 sm:px-4 md:px-8">
          <h2 className="text-[52px] font-extrabold mb-4 pb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-[200px] fontMontserrat">
            FAQ
          </h2>
          <p className="mx-auto text-center w-auto 2xl:w-[1400px] fontRoboto">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-auto px-2 xl:p-0 xl:w-[1200px] m-auto gap-6">
          {faqArr.map((item, index) => (
            <FaqItem item={item} key={index} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
