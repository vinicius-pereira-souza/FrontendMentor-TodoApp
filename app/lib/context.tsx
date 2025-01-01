"use client";
import { useState, useEffect, createContext, use } from "react";

type ContextType = {
  theme: "light" | "dark";
  changeToggleThemeValue: () => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: "light",
  changeToggleThemeValue: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  const changeToggleThemeValue = (): void => {
    setTheme((previousState) => (previousState == "light" ? "dark" : "light"));

    localStorage.setItem("theme", theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeToggleThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return use(ThemeContext);
}
