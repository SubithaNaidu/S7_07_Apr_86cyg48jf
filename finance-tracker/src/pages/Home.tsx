import React from 'react';
import {
  Typography,
  Divider,
  List,
  useTheme,
  Paper,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTransactions } from '../hooks/useTransactions';
import { useAppDispatch } from '../hooks/useTransactions';
import { deleteTransaction } from '../features/transactions/transactionSlice';
import TransactionItem from '../components/TransactionItem';
import BalanceSummary from '../components/BalanceSummary';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to right, #2c2c2c, #ff8c00);
  padding: 40px 20px;
  transition: background-color 0.3s ease;
`;

const StyledPaper = styled(Paper)`
  padding: 30px;
  background-color: #1c1c1c !important;
  color: white !important;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(255, 140, 0, 0.3);
`;

const StyledTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: bold !important;
  margin-bottom: 20px;
  color: #ff8c00;
`;

const StyledButton = styled(Button)`
  background-color: #ff8c00 !important;
  font-weight: bold !important;

  &:hover {
    background-color: #e07b00 !important;
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
  }
`;

const SectionTitle = styled(Typography)`
  color: white;
  font-weight: bold !important;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const Home: React.FC = () => {
  const { items, income, expense, balance } = useTransactions();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleDelete = (id: string) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <>
      <Header />
      <PageContainer>
        <StyledPaper elevation={3}>
          <StyledTitle variant="h4" gutterBottom>
            <strong>Personal Finance Tracker</strong>
          </StyledTitle>

          <Box mb={2}>
            <StyledButton variant="contained" onClick={() => navigate('/add')}>
              <strong>ADD</strong>
            </StyledButton>
          </Box>

          <BalanceSummary balance={balance} income={income} expense={expense} />
        </StyledPaper>

        <Divider sx={{ my: 3, backgroundColor: '#ff8c00' }} />

        <SectionTitle variant="h4" align="center">
          <strong>TRANSACTIONS</strong>
        </SectionTitle>

        {items.length === 0 ? (
          <Typography sx={{ color: '#ddd' }} fontWeight="bold">
            No transactions yet.
          </Typography>
        ) : (
          <List>
            {items
              .slice()
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((tx) => (
                <motion.div
                  key={tx.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <TransactionItem transaction={tx} onDelete={handleDelete} />
                </motion.div>
              ))}
          </List>
        )}
      </PageContainer>
    </>
  );
};

export default Home;