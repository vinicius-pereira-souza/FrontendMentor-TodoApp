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
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const storedTheme: string | null = localStorage.getItem("theme");

    if (storedTheme) setTheme(storedTheme);

    // const html = document.querySelector("html");

    // html!.classList.toggle(storedTheme === "light" ? "" : "dark");
  }, []);

  const changeToggleThemeValue = (): void => {
    setTheme((previousState) => (previousState === "light" ? "dark" : "light"));

    localStorage.setItem("theme", theme);

    const html = document.querySelector("html");
    html!.classList.toggle("dark");
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
