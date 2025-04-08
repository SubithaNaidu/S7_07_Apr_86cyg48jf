import React from 'react';
import {
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import { Transaction } from '../features/transactions/transactionTypes';
import styled from 'styled-components';

interface TransactionItemProps {
  transaction: Transaction;
  onDelete: (id: string) => void;
}

// Styled Components
const StyledContainer = styled.div`
  background: #1c1c1c;
  border: 1px solid #ff8c00;
  border-radius: 12px;
  padding: 20px 28px;
  margin: 20px auto;
  max-width: 900px;
  color: white;
  box-shadow: 0 6px 15px rgba(255, 140, 0, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.015);
    box-shadow: 0 10px 25px rgba(255, 140, 0, 0.6);
  }
`;

const TitleText = styled(Typography)`
  font-weight: bold;
  font-size: 1.1rem;
  color: #ffffff;
`;

const AmountText = styled(Typography)<{ color: string }>`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${(props) => props.color};
`;

const DateText = styled(Typography)`
  color: #bbbbbb;
  margin-top: 6px;
  font-size: 0.9rem;
`;

const StyledIconButton = styled(IconButton)`
  color: #ff4d4d;

  &:hover {
    color: #ff1a1a;
    transform: scale(1.1);
  }
`;

const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  onDelete,
}) => {
  const { id, title, amount, date, type } = transaction;
  const theme = useTheme();

  const amountColor =
    type === 'income'
      ? theme.palette.success.main
      : theme.palette.error.main;

  return (
    <StyledContainer>
      <ListItem
        disableGutters
        secondaryAction={
          <StyledIconButton edge="end" onClick={() => onDelete(id)}>
            <DeleteIcon />
          </StyledIconButton>
        }
      >
        <ListItemText
          primary={
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <TitleText>{title}</TitleText>
              <AmountText color={amountColor}>₹{amount.toFixed(2)}</AmountText>
            </Box>
          }
          secondary={<DateText>{new Date(date).toLocaleDateString()}</DateText>}
        />
      </ListItem>
    </StyledContainer>
  );
};

export default TransactionItem;
