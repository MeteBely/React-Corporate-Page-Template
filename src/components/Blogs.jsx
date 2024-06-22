import { BlogArr } from "../components-data/Blogs";
import BlogContainer from "./BlogContainer";

const Blogs = () => {
  return (
    <section>
      <div className="py-40">
        <div className="mb-20">
          <h2 className="text-[52px] font-extrabold mb-4 pb-4 text-[#000] border-b border-gray-400 mx-auto text-center min-[500px]:w-[400px] w-auto fontMontserrat">
            BLOGS
          </h2>
          <p className="mx-auto fontRoboto text-center w-auto md:w-[700px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className="flex flex-row justify-center items-center gap-8 flex-wrap px-2">
          {BlogArr.map((blog, index) => (
            <BlogContainer key={index} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
