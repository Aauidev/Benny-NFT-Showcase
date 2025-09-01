import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext({ isDark: false });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("isDark");
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem("isDark", isDark ? "true" : "false");
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
