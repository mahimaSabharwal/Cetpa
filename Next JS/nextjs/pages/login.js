import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const getStaticProps = () => {
  let url = process?.env?.BASE_URL;
  return {
    props: {
      baseUrl: url,
    },
  };
};

const login = (props) => {
  const router = useRouter();
  const [formData, setFormData] = useState();
  const [loginStatus, setLoginStatus] = useState(false);
  useEffect(() => {
    const loginStat = localStorage.getItem("loginStatus");
    if (loginStat) {
      router.push("/");
    }
  });

  const loginFn = async () => {
    console.log(props);
    try {
      const response = await axios.post(
        `${props.baseUrl}/api/users/login`,
        formData
      );
      console.log(response.data);
      if (response.data.userid) {
        setLoginStatus(true);
        console.log(loginStatus);
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("username", response.data.email);
        localStorage.setItem("name", response.data.name);

        router.push("/ourProducts");
      }
    } catch {}
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
        <title>Login Page</title>
      </Head>
      <>
        <h1>Login</h1>
        <Form>
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={loginFn}>
            Login
          </Button>
        </Form>
      </>
    </>
  );
};

export default login;
