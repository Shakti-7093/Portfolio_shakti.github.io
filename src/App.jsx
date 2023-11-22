import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/potfolio/Portfolio";
import Footer from "./components/footer/Footer";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
