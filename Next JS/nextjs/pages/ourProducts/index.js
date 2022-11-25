import Link from "next/link";
import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

export const getServerSideProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: { allProducts: data },
  };
};

const ourProducts = (props) => {
  return (
    <>
      <h1>Products List</h1>
      <Row>
        {props.allProducts.map((item, index) => {
          return (
            <Col className="d-flex align-items-stretch" key={index}>
              <Card className="mb-4" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={item.image}
                  width="150"
                  height="300"
                  className="img"
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link href={`ourProducts/${item.id}`}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default ourProducts;
