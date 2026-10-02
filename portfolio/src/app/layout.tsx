import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riya Venkat | Software Engineer & AI/ML",
  description:
    "Riya Venkat's personal portfolio featuring software engineering, AI/ML, and full-stack projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}