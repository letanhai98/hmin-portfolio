'use client';

import React, { useEffect } from 'react';
import { Header, ScrollToTop } from '@/components';
import { Inter } from 'next/font/google';
import AOS from 'aos';

import './globals.css';
import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`hminDev()`}</title>
        <meta name="description" content="Welcome to hminDev() website. 👏" />
        <meta property="og:title" content="hminDev()" />
        <meta
          property="og:description"
          content="Welcome to hminDev() website. 👏!! Connect with me!!!"
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
