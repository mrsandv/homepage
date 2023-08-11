import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "styles/globals.css";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Marco Sandoval Works",
  description: "Portfolio and some articles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
