import './globals.css';
import { Inter } from 'next/font/google';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Arcade Chat',
  description: 'Launching June 2023',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className + ' h-screen w-screen overflow-hidden bg-gray-950 text-gray-100 antialiased'}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
