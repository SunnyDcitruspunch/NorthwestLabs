import React from "react";
import Footer from "./common/Footer/Footer";
import Header from "./common/Header/Header";
import { AssayList, Navbar } from "./common";
import "./Welcome.css";

function Welcome() {
  return (
    <div>
      <Header />
      <AssayList />
      <Navbar />
      <Footer />
    </div>
  );
}

export default Welcome;
