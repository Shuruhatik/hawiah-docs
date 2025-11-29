import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hawiah - One API to Rule Them All",
  description: "A lightweight, schema-less database abstraction layer. Swap drivers instantly without changing your code.",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
