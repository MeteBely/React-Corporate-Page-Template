import homePageTasarim from "../assets/tasarimiki.jpeg";

const Home = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${homePageTasarim})` }}
        className="h h-screen w-full bg-[#fff] mb-40 bg-no-repeat bg-cover relative bg-fixed"
      >
        <div className="absolute left-[15%] top-[30%] w-[700px]">
          <h1 className="fontMontserrat text-[52px] font-semibold leading-[60px] tracking-wide mb-[10px]">
            Delivering Superior Services Cutting-Edge IT Solutions
          </h1>{" "}
          <p className="fontRoboto font-semibold text-[#9A979C] text-[17px]">
            At JForce, as one of Turkey&apos;s leading technology & software
            companies, we aim to provide the best possible digital
            transformation solution. We offer highest-quality systems and
            software solutions that meet your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
