import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  min-height: calc(100vh - 60px);
  background: linear-gradient(to right, #ff8c00, #2c2c2c);
`;

const FormWrapper = styled.div`
  background: #1c1c1c;
  padding: 40px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const Title = styled.h2`
  color: #ff8c00;
  font-size: 2rem;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ff8c00;
  border-radius: 5px;
  font-size: 1rem;
  background: #2c2c2c;
  color: white;

  &:focus {
    outline: none;
    border-color: #ff8c00;
    box-shadow: 0 0 8px rgba(255, 140, 0, 0.5);
    background: #3c3c3c;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  font-size: 1.1rem;
  font-weight: bold;
  color: white;
  background: #ff8c00;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #e07b00;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const SignupText = styled.p`
  margin-top: 15px;
  color: white;
  font-size: 0.9rem;

  a {
    color: #ff8c00;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

type LoginProps = {
  setIsAuthenticated: (value: boolean) => void;
};

interface User {
  name: string;
  email: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedInUser") || "null");
    if (!isLoggedIn) {
      setEmail("");
      setPassword("");
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Login successful!");
      setIsAuthenticated(true);
      setEmail("");
      setPassword("");
      navigate("/home");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <FormWrapper>
          <Title>Login</Title>
          <form onSubmit={handleLogin} autoComplete="off">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <ErrorText>{error}</ErrorText>}
            <Button type="submit">Login</Button>
            <SignupText>
              Don't have an account?{" "}
              <a onClick={() => navigate("/signup")}>Sign Up</a>
            </SignupText>
          </form>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Login;
