import About from "./components/About";
import Blogs from "./components/Blogs";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Pricing />
      <Testimonials />
      <Blogs />
      <Faq />
      <Footer />
    </>
  );
}
