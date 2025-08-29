import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import axios from "axios";
import { RegisterUser } from "../services/authApi";

const Signup = () => {
  const [formData, setFormData] = useState({
    Username: "",
    Password: "",
    Email: "",
    phone: "",
    address: "",
    role: "USER",
  });
//Hashmap key: value
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData, //username: "" password: "123123"
      [e.target.name]: e.target.value,
    });
  };
  //muc dich la de truyen dung value vao key do

  const handleSignup = async () => {
    try {
      console.log("Signup Data:", formData);
  
      await RegisterUser(formData);
    //   navigate("/login"); // điều hướng về login sau khi đăng ký thành công
    } catch (error) {
      console.log("Signup error:", error);
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100 bg-light"
    >
      <Row className="w-100">
        <Col md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h3 className="text-center mb-4">Create Account</h3>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="Username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="Email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="Password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  className="w-100 rounded-pill"
                  type="button"
                  onClick={handleSignup}
                >
                  Sign Up
                </Button>
              </Form>

              <div className="text-center mt-3">
                <small>
                  Already have an account?{" "}
                  <a href="/login" className="fw-bold">
                    Login
                  </a>
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
