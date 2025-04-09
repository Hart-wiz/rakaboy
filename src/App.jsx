import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Titlecards from "./components/Titlecards";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Titlecards />
      <Portfolio />
      <About />
      <Footer />
    </div>
  );
};

export default App;
