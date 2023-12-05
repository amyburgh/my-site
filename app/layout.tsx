import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aaron Myburgh',
  description:
    'Aaron Myburgh is a software engineer based in Cape Town, South Africa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-gray-950 leading-relaxed text-gray-400 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
