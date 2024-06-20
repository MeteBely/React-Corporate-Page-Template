import { PortfolioProjects } from "../components-data/Portfolio";
import PortfolioProjectContainer from "./PortfolioProjectContainer";

const Portfolio = () => {
  return (
    <section>
      <div className="py-40">
        <div className="mb-20">
          <h2 className="text-[52px] font-extrabold fontMontserrat mb-4 pb-4 text-[#000] border-b border-gray-400 mx-auto text-center w-[420px]">
            PROJECTS
          </h2>
          <p className="mx-auto fontRoboto text-center w-[800px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-col flex-wrap gap-4 items-start justify-start h-[1200px] w-[1220px] m-auto">
          {PortfolioProjects.map((project, i) => (
            <PortfolioProjectContainer project={project} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
