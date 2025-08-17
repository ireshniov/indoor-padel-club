import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReCAPTCHAProvider from '@/components/ReCAPTCHAProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Berlin Indoor Padel Club - Современный крытый падел-клуб в Берлине',
  description: 'Проект в разработке. Мы ищем партнёров и инвесторов для создания современного крытого падел-клуба в Берлине.',
  keywords: 'падел, padel, берлин, berlin, крытый клуб, indoor club, спорт, спортзал, корты, партнёрство, инвестиции',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <ReCAPTCHAProvider>
          {children}
        </ReCAPTCHAProvider>
      </body>
    </html>
  );
}
