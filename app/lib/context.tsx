"use client";
import { useState, useEffect, createContext, use } from "react";

type ContextType = {
  theme: string | null;
  changeToggleThemeValue: () => void;
};

export const ThemeContext = createContext<ContextType>({
  theme: "",
  changeToggleThemeValue: () => {},
});

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string>("");

  useEffect(() => {
    const storedTheme: string | null = localStorage.getItem("theme");

    if (!storedTheme) {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const storedTheme: string | null = localStorage.getItem("theme");

    if (storedTheme) {
      const html = document.querySelector("html");
      setTheme(storedTheme);
      html?.classList.toggle(storedTheme);
    }
  }, [theme]);

  const changeToggleThemeValue = (): void => {
    setTheme((previousState) => (previousState === "light" ? "dark" : "light"));

    const html = document.querySelector("html");
    html!.classList.toggle("light");
    html!.classList.toggle("dark");

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
