import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const registration = (props) => {
  const router = useRouter();
  const [formData, setFormData] = useState();
  const [registrationStatus, setRegistrationStatus] = useState(false);
  const registerFn = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/users/register",
      formData
    );
    console.log(response.data);
    if (response.status === 201) {
      setRegistrationStatus(true);
      router.push("/login");
    }
  };
  const handleChange = (e) => {
    let tempObj = {};
    tempObj[e.target.name] = e.target.value;
    setFormData({ ...formData, ...tempObj });
    console.warn(formData);
  };
  return (
    <>
      <Head>
        <title>Registration Page</title>
      </Head>
      <>
        <h1>Registration</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="number"
              name="mobile"
              placeholder="Enter Mobile Number"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={registerFn}>
            Register Now
          </Button>
        </Form>
      </>
    </>
  );
};

export default registration;
