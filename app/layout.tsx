import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Spotlight from '@/components/Spotlight';
import Header from '@/components/Header';
import Head from 'next/head';
import { Toaster } from '@/components/ui/toaster';

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
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} overflow-x-hidden overflow-y-scroll leading-relaxed antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
        >
          <Spotlight>
            <Header />
            {children}
            <Toaster />
          </Spotlight>
        </ThemeProvider>
      </body>
    </html>
  );
}
