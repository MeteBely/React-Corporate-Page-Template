import { faqArr } from "../components-data/Faq";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <section>
      <div className="py-40">
        <div className="mb-20">
          <h2 className="text-[52px] font-extrabold mb-4 pb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-[1200px] fontMontserrat">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mx-auto text-center w-[1400px] fontRoboto">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-[1200px] m-auto gap-6">
          {faqArr.map((item, i) => (
            <FaqItem item={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
