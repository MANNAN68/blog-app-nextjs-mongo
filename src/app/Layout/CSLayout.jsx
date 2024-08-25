import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import "./CSLayout.css";

const CSLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default CSLayout;
