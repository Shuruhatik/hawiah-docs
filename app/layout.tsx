import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL('https://hawiah.js.org'),
  title: {
    default: "Hawiah | The World's Fastest Universal ORM & Database Layer",
    template: "%s | Hawiah"
  },
  description: "Hawiah (حاوية) is an ultra-fast, lightweight ORM and database abstraction layer. Supporting SQL, NoSQL, and Local files with a unified API. 2.6x faster than industry standards. (حاوية - طبقة قواعد بيانات فائقة السرعة)",
  alternates: {
    canonical: "https://hawiah.js.org",
  },
  keywords: [
    "Hawiah", "حاوية", "ORM", "JavaScript ORM", "TypeScript ORM", "Database Layer", "Node.js Database",
    "Fastest ORM", "Universal ORM", "SQL ORM", "NoSQL ORM", "Database Abstraction", "SQLite ORM",
    "MongoDB ORM", "Database Portability", "JSON Database", "High Performance DB",
    "أسرع ORM", "قواعد بيانات", "برمجة", "تطوير تطبيقات", "Node.js", "Backend Development", "Hawia", "هاوية", "هوية", "Hawiah DB",
    "Hawiah ORM", "Hawiah npm", "hawiahjs", "hawiah.js"
  ],
  authors: [
    { name: "Shuruhatik", url: "https://github.com/Shuruhatik" },
    { name: "Amer Mohamed", url: "https://github.com/tahawy111" }
  ],
  creator: "Shuruhatik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hawiah.js.org",
    title: "Hawiah - The Ultra-Fast Universal ORM",
    description: "Swap database drivers instantly without changing code. Supporting SQLite, MongoDB, PostgreSQL, MySQL and more.",
    siteName: "Hawiah",
    images: [{
      url: "/hawiah-npm.png",
      width: 1200,
      height: 630,
      alt: "Hawiah - Universal Database Layer"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hawiah - The Ultra-Fast Universal ORM",
    description: "2.6x faster than industry standards. One API for all your databases.",
    images: ["/hawiah-npm.png"],
    creator: "@shuruhatik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased bg-white dark:bg-[#020202] text-slate-900 dark:text-[#ededed] transition-colors duration-300"
        suppressHydrationWarning
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
