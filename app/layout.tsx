import type { Metadata } from "next";
import Head from "next/head";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brandon Quon Portfolio",
  description: "Brandon Quon Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="icon.ico" />
      </Head>
      <body className={`${GeistSans.className}`}>{children}</body>
    </html>
  );
}
