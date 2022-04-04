import React from 'react';
import constate from 'constate';

function useTheme() {
  const [theme, setTheme] = React.useState('light');

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme]);

  return { theme, toggleTheme };
}

export const [ThemeContextConstateProvider, useThemeContext] =
  constate(useTheme);
