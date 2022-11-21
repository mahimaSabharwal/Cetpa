import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { children, footerStatus } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Header></Header>
          <Navbar></Navbar>
          <div className="section">{children}</div>
          {!footerStatus && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default Layout;
