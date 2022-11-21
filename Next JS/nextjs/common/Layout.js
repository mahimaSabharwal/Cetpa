import React from "react";

//Common
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

//Bootatrap Modules
import { Container, Row, Col } from "react-bootstrap";

const Layout = (props) => {
  const { children, footerStatus } = props;
  return (
    <Container>
      <Row>
        <Col>
          <Header></Header>
          <Navbar></Navbar>
          <div className="section">{children}</div>
          {!footerStatus && <Footer />}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
