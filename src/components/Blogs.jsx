import { BlogArr } from "../components-data/Blogs";
import BlogContainer from "./BlogContainer";

const Blogs = () => {
  return (
    <section>
      <div className="py-40">
        <div className="mb-20">
          <h2 className="text-[52px] font-extrabold mb-4 pb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-[400px] fontMontserrat">
            BLOGS
          </h2>
          <p className="mx-auto fontRoboto text-center w-[800px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 flex-wrap">
          {BlogArr.map((blog, index) => (
            <BlogContainer key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
