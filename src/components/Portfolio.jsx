import { PortfolioProjects } from "../components-data/Portfolio";
import PortfolioProjectContainer from "./PortfolioProjectContainer";

const Portfolio = () => {
  return (
    <section>
      <div className="py-40">
        <div className="mb-20">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[52px] font-extrabold fontMontserrat mb-4 pb-4 text-[#000] border-b border-gray-400 mx-auto text-center min-[500px]:w-[420px] w-auto">
            SOLUTIONS
          </h2>
          <p className="mx-auto px-2 fontRoboto text-center w-auto md:w-[750px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-col flex-wrap gap-4 items-center justify-start h-auto lg:h-[2400px] xl:h-[1200px] w-auto xl:w-[1220px] m-auto px-2">
          {PortfolioProjects.map((project, i) => (
            <PortfolioProjectContainer project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
