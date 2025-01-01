import type { Metadata } from "next";
import { josefinSans } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frontend Mentor | Todo app",
  description: "Front-End Challange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.className} antialiased`}>{children}</body>
    </html>
  );
}
