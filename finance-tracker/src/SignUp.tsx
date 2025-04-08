import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

// Props type
type SignupProps = {
  setIsAuthenticated: (value: boolean) => void;
};

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
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  width: 350px;
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
    border-color: #ff8c00;
    outline: none;
    box-shadow: 0 0 8px rgba(255, 140, 0, 0.6);
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
    transform: scale(1.08);
    box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 5px 0 0 0;
`;

const LoginText = styled.p`
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

const Signup: React.FC<SignupProps> = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateForm = () => {
    if (name.trim().length < 3) return "Name must be at least 3 characters long.";
    if (!email.includes("@")) return "Invalid email format.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(password)) return "Password must contain an uppercase letter.";
    if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) return "Password must contain a special character.";
    if (password !== confirmPassword) return "Passwords do not match.";
    return null;
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((user: any) => user.email === email)) {
      setError("Email already registered. Please log in.");
      return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));

    setIsAuthenticated(true);
    alert("Signup successful!");
    navigate("/home");
  };

  return (
    <>
      <Header />
      <Container>
        <FormWrapper>
          <Title>Create Account</Title>
          <form onSubmit={handleSignup} autoComplete="off">
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <ErrorText>{error}</ErrorText>}
            <Button type="submit">Signup</Button>
          </form>
          <LoginText>
            Already have an account? <a onClick={() => navigate("/login")}>Login</a>
          </LoginText>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Signup;
