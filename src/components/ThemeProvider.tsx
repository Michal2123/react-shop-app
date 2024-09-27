import { ReactNode, useState } from "react";
import { ThemeContext, UpdateThemeContext } from "../context/ThemeContext";

interface Prop {
  children: ReactNode;
}

const ThemeProvider = ({ children }: Prop) => {
  const [isDark, setIsDark] = useState(true);

  function updateTheme(value: boolean) {
    setIsDark(value);
  }
  return (
    <ThemeContext.Provider value={{ isDark }}>
      <UpdateThemeContext.Provider value={{ updateTheme }}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
