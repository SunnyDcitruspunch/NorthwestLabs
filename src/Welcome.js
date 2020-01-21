import React from "react";
import Footer from "./common/Footer/Footer";
import Header from "./common/Header/Header";
import Center from "./common/Center/Center";
import { Navbar } from "./common";
import "./Welcome.css";

function Welcome() {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
    </div>
  );
}

export default Welcome;
