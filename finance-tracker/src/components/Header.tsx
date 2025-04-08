import React from 'react';
import {
  IconButton,
  Button,
  Box,
  Tooltip,
  useTheme,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeContext } from '../ThemeContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const StyledAppBar = styled.header`
  background: linear-gradient(to right, #2c2c2c, #ff8c00);
  padding: 10px 30px;
  box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);

  &:hover {
    color: #ffe0b2;
  }
`;

const ButtonGroup = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    color: white;
    border: 1px solid #ff8c00;
    padding: 6px 12px;
    font-weight: bold;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #ff8c00;
      color: #1c1c1c;
    }
  }
`;

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeContext();
  const navigate = useNavigate();
  const theme = useTheme();

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <StyledAppBar>
      <Toolbar>
        <Logo onClick={() => navigate('/')}>Mini Finance Tracker</Logo>

        <ButtonGroup>
          <Tooltip title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}>
            <IconButton onClick={toggleTheme}>
              {isDarkMode ? (
                <Brightness7 sx={{ color: '#fff' }} />
              ) : (
                <Brightness4 sx={{ color: '#fff' }} />
              )}
            </IconButton>
          </Tooltip>

          {loggedInUser ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <>
              <Button onClick={() => navigate('/login')}>Login</Button>
              <Button onClick={() => navigate('/signup')}>Signup</Button>
            </>
          )}
        </ButtonGroup>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
