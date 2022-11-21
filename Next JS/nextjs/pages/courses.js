import React from "react";

//Bootatrap Modules
import { Row, Col, Card, Button } from "react-bootstrap";

//Styles
import styles from "../styles/Courses.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: { courseData: data },
  };
};

const courses = (props) => {
  console.log(props.courseData);
  return (
    <>
      <h1>Courses</h1>
      <Row>
        {props.courseData.map((item, index) => {
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
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default courses;
