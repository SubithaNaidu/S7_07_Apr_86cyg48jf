// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useThemeContext must be used within ThemeProvider");
  return context;
};

export const CustomThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Load initial value from localStorage (default to false if not found)
    const storedTheme = localStorage.getItem('isDarkMode');
    return storedTheme === 'true';
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Persist theme change to localStorage
  useEffect(() => {
    localStorage.setItem('isDarkMode', String(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
