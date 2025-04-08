import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #ff8c00, #2c2c2c);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 30px;
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 14px 28px;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  background: #ff8c00;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #e07b00;
    transform: scale(1.05);
  }
`;

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Welcome to Personal Finance Tracker</Title>
      <Subtitle>Track your income and expenses, stay on budget, and take control of your finances with ease.</Subtitle>
      <ButtonGroup>
        <Button onClick={() => navigate('/signup')}>Get Started</Button>
      </ButtonGroup>
    </Container>
  );
};

export default Landing;
