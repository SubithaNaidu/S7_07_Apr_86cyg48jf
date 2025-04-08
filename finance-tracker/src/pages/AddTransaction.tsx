import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addTransaction } from '../features/transactions/transactionSlice';
import { Transaction } from '../features/transactions/transactionTypes';
import {
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
  Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';
import Header from '../components/Header';

const StyledContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.background.default};
  padding-top: 3rem;
  transition: background-color 0.3s ease;
`;

const StyledForm = styled(Paper)`
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  box-shadow: ${({ theme }) => theme.shadows[3]};
  transition: all 0.3s ease;
`;

const AddTransaction: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const newTransaction: Transaction = {
      id: uuidv4(),
      title,
      amount: parseFloat(amount),
      type,
      date,
    };

    dispatch(addTransaction(newTransaction));
    navigate('/home');
  };

  return (
    <>
      <Header />
      <StyledContainer theme={theme}>
        <StyledForm elevation={4} theme={theme}>
          <Typography variant="h5" align="center" gutterBottom>
            Add New Transaction
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              fullWidth
              label="Amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              margin="normal"
            />
            <TextField
              select
              fullWidth
              label="Type"
              value={type}
              onChange={(e) => setType(e.target.value as 'income' | 'expense')}
              required
              margin="normal"
            >
              <MenuItem value="income">Income</MenuItem>
              <MenuItem value="expense">Expense</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Add Transaction
            </Button>
          </Box>
        </StyledForm>
      </StyledContainer>
    </>
  );
};

export default AddTransaction;
