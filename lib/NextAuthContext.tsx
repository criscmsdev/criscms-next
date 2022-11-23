'use client';

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SessionProvider } from 'next-auth/react';
import React, { useState } from 'react';

export function NextAuthProvider({ children }: { children: React.ReactNode }) {
  
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}