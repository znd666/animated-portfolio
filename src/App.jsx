import { Test } from "./Test";
import "./app.scss"
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>Services</section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio2</section>
      <section id="About">Portfolio3</section>
      <section id="Contact">Contact</section>
        {/* <Test /> */}
    </div>
  )
};

export default App;
