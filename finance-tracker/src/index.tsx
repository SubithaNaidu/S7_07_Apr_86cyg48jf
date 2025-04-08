import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { CustomThemeProvider, useThemeContext } from './ThemeContext'; // ✅ fixed path
import { lightTheme, darkTheme } from './theme';

// Component that wraps App with dynamic theme
const ThemedApp = () => {
  const { isDarkMode } = useThemeContext();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  );
};

// Main render
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomThemeProvider>
        <BrowserRouter>
          <ThemedApp />
        </BrowserRouter>
      </CustomThemeProvider>
    </Provider>
  </React.StrictMode>
);
