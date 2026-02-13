import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home - Promidata - Your partner in commercial success",
  description:
    "Your partner for advanced IT solutions and commercial success within the promotional products and workwear industry. Whether you are a distributor, dealer or supplier, our powerful software and efficient data services are designed to take your business to new heights.",
  keywords: [
    "promotional products",
    "workwear",
    "ERP",
    "webshop",
    "sourcing",
    "corporate gifts",
    "bedrijfskleding",
  ],
  openGraph: {
    title: "Home - Promidata - Your partner in commercial success",
    description:
      "Advanced IT solutions for the promotional products and workwear industry.",
    url: "https://promidata.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
