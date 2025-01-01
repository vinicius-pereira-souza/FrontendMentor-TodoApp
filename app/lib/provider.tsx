"use client";
import { ThemeContextProvider } from "./context";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
}
