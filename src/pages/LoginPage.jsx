import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authApi";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from "react-bootstrap";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandel = async () => {
    try {
      const user = await login(Username, Password);
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
    catch (error) {
      console.log(error);
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
              <div className="text-center mb-4">
                <Image src="/image/logo.png" alt="Logo" height={60} />
              </div>

              <Button
                variant="outline-dark"
                className="w-100 d-flex align-items-center justify-content-center gap-2 mb-3"
              >
                <Image
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  height={20}
                  alt="Google"
                />
                Log in with Google
              </Button>

              <div className="text-center my-3 text-muted">
                <hr />
                <span className="px-2 bg-white">OR LOGIN WITH EMAIL</span>
              </div>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Email"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-flex justify-content-between mb-3">
                  <Form.Text className="text-muted">
                    <a href="#">Forgot Your Password?</a>
                  </Form.Text>
                </div>

                <Button
                  variant="primary"
                  type="button"
                  className="w-100 rounded-pill"
                  onClick={loginHandel}
                >
                  Log In
                </Button>
              </Form>

              <div className="text-center mt-3">
                <Form.Text>
                  Don’t have an account? <a href="#">Sign Up</a>
                </Form.Text>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
