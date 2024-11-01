import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Plus_Jakarta_Sans as GoogleFont } from 'next/font/google';
import type { ReactNode } from 'react';

const font = GoogleFont({ weight: ['400', '500', '700'], subsets: ['latin']});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
