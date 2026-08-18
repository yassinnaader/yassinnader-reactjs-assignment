import { createContext, useState } from "react";

// Create the Theme Context
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
  // Shared theme state
  const [theme, setTheme] = useState("light");

  // Function to switch between light and dark
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;