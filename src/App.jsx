import About from "./components/About";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import InsuranceSolutions from "./components/InsuranceSolutions";
import Services from "./components/Services";
import SwiperBanner from "./components/SwiperBanner";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <SwiperBanner />
      <WhyUs />
      <Services />
      <Portfolio />
      <Team />
      <InsuranceSolutions />
      <Testimonials />
      <Blogs />
      <Faq />
      <Footer />
    </>
  );
}
