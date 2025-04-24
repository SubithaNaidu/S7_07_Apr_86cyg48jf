
# 💰 Mini Personal Finance Tracker

A responsive, theme-aware finance tracker app built with **React + TypeScript**, allowing users to track income and expenses, view transaction summaries, and manage personal finances in a clean UI.

[🎥 Live Demo / Walkthrough](https://drive.google.com/file/d/1rUtQnuKdWHy-BmCXyLXHJIQjw3ixHuI5)


## 🚀 Objective

Build a minimal yet functional personal finance manager to understand and apply:

- **React + TypeScript** fundamentals
- **Redux Toolkit** for state management
- **React Router** for page navigation
- Custom hooks
- **Styled Components** & **Material-UI** for UI design
- Optional integration with **AXIOS** and localStorage

---

## 🧱 Features

### ✅ Core Functionality

- **Add Transaction**
  - Fields: Title, Amount, Type (Income/Expense), Date
  - Basic input validation

- **Transaction List**
  - Display transaction title, amount (color-coded), and date
  - Delete button to remove individual transactions

- **Balance Summary**
  - Display total balance, total income, and total expense

- **Routing**
  - `/` → Landing Page
  - `/home` → Dashboard with transactions
  - `/add` → Add a new transaction

### 🛠 Custom Hook

- `useTransactions.ts`
  - Provides reusable logic and selectors for transactions

### 🧑‍🎨 UI/UX Enhancements

- **Material-UI (MUI)** for Buttons, Cards, Typography
- **Styled Components** for layout wrappers, forms, and containers
- **Responsive design**: works well on mobile, tablet, desktop
- **Dark/Light Theme toggle** via `ThemeContext`


## 🎁 Bonus Features

- Persist transactions in **localStorage**
- **Sort** transactions (by date, income/expense)
- Use **MUI DatePicker**
- Add simple **animations** with Framer Motion
- Basic authentication (Signup/Login stored in localStorage)

## 📂 Folder Structure

src/
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── TransactionItem.tsx
│   └── BalanceSummary.tsx
├── features/
│   └── transactions/     # Redux slice + types
│       ├── transactionSlice.ts
│       └── transactionTypes.ts
├── hooks/
│   └── useTransactions.ts
├── pages/
│   ├── Home.tsx
│   ├── AddTransaction.tsx
│   ├── Landing.tsx
│   ├── Login.tsx
│   └── Signup.tsx
├── styles/
│   └── GlobalStyles.ts
├── ThemeContext.tsx
├── App.tsx
├── index.tsx
├── store.ts
└── theme.ts


## 🛠 Tech Stack

- ⚛️ React + TypeScript
- 🧰 Redux Toolkit
- 📦 React Router
- 🎨 Material UI (MUI)
- 💅 Styled Components
- 🔄 Axios (for mock API or dummy integration)
- 🌙 Theme Toggle with React Context
- 🧠 Custom Hooks
- 💾 LocalStorage for persistence


## 📦 Installation

# Clone the repository
git clone https://github.com/SubithaNaidu/S7_07_Apr_86cyg48jf.git

cd mini-finance-tracker

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm start
# or
yarn start

## 🖼 Demo Preview

Watch the full app demo here:  
📽 **[View on Google Drive](https://drive.google.com/file/d/1rUtQnuKdWHy-BmCXyLXHJIQjw3ixHuI5)**

## 🙌 Author

**Your Name**  
🔗 GitHub: [@your-username](https://github.com/SubithaNaidu)
