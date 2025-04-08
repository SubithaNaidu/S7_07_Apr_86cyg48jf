// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './features/transactions/transactionSlice';

// ✅ Load state from LocalStorage
const loadState = () => {
  try {
    const serialized = localStorage.getItem('transactions');
    if (serialized === null) return undefined;
    return { transactions: { items: JSON.parse(serialized) } };
  } catch (e) {
    console.warn('Could not load from localStorage', e);
    return undefined;
  }
};

// ✅ Save state to LocalStorage
const saveState = (state: any) => {
  try {
    const serialized = JSON.stringify(state.transactions.items);
    localStorage.setItem('transactions', serialized);
  } catch (e) {
    console.warn('Could not save to localStorage', e);
  }
};

const preloadedState = loadState();

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
