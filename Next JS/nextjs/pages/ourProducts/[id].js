import { useRouter } from "next/router";
import React from "react";

//Bootatrap Modules
import { Row, Col, Card, Button, Container } from "react-bootstrap";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return {
    props: { productDetail: data },
  };
};

const ProductId = (props) => {
  const prodDetails = props.productDetail;
  return (
    <>
      <h1>Product Title : {prodDetails.title}</h1>
      <Container>
        <Row>
          <Col md={4}>{/* <img src={prodDetails.image} /> */}Image</Col>
          <Col md={8}>
            <h2>{prodDetails.title}</h2>
            <p>{prodDetails.description}</p>
            <p>Price : {prodDetails.price}</p>
            <p>Categories : {prodDetails.category}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductId;
