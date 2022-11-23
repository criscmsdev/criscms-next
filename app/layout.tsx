import '@/styles/dist.css';
import React from 'react';
import { ReactQueryProvider } from '@/lib/ReactQueryContext';
import { NextAuthProvider } from '@/lib/NextAuthContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="">
        <NextAuthProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
