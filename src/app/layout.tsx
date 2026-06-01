import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anjelo Arnaez | Portfolio",
  description: "Entry-level software developer portfolio for Anjelo Arnaez.",
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
