import React, { Fragment } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Icons from "./components/Icons";
import Template from "./components/Template";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Carousel />
      <Icons />
      <Template />
      <Pricing />
      <ContactUs />
      <Footer />
    </Fragment>
  );
};

export default App;
