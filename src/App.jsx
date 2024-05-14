import { Test } from "./Test";
import "./app.scss"
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section id="Homepage">Parallax</section>
      <section id="Services">Services</section>
      <section>Parallax</section>
      <section id="Portfolio">Portfolio1</section>
      <section>Portfolio2</section>
      <section id="About">Portfolio3</section>
      <section id="Contact">Contact</section>
        {/* <Test /> */}
    </div>
  )
};

export default App;
