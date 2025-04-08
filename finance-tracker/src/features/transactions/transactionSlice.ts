import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Transaction } from './transactionTypes';

interface TransactionState {
  items: Transaction[];
}

const initialState: TransactionState = {
  items: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.items.unshift(action.payload);
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(t => t.id !== action.payload);
    },
  },
});

export const { addTransaction, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
