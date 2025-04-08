// hooks/useTransactions.ts
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { Transaction } from '../features/transactions/transactionTypes';

// Reusable hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

export const useTransactions = () => {
  const items = useAppSelector((state) => state.transactions.items);

  // Sort by date descending (newest first)
  const sortedItems = [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const income = sortedItems
    .filter((t: Transaction) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = sortedItems
    .filter((t: Transaction) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return { items: sortedItems, income, expense, balance };
};
