import { PortfolioProjects } from "../components-data/Portfolio";

const Portfolio = () => {
  return (
    <section>
      <div className="py-8">
        <div className="mb-12">
          <h2 className="text-[32px] fontMontserrat font-bold mb-4 pb-4 text-[#36517E] border-b border-gray-400 mx-auto text-center w-[220px]">
            PORTFOLIO
          </h2>
          <p className="mx-auto fontRoboto text-center w-[800px]">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex flex-col flex-wrap gap-4 items-start justify-start h-[1200px] w-[1220px] m-auto">
          {PortfolioProjects.map((project, i) => (
            <div key={i} className="">
              <img
                className="w-[400px] object-cover"
                src={project.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
