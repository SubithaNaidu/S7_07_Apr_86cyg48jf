// components/BalanceSummary.tsx

import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface BalanceSummaryProps {
  balance: number;
  income: number;
  expense: number;
}

const BalanceSummary: React.FC<BalanceSummaryProps> = ({ balance, income, expense }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6">Balance: ₹{balance.toFixed(2)}</Typography>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Typography color="green">Income: ₹{income.toFixed(2)}</Typography>
        <Typography color="red">Expense: ₹{expense.toFixed(2)}</Typography>
      </Box>
    </Paper>
  );
};

export default BalanceSummary;
