import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'IpJuHelper',
  description: '점검 플랫폼',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={roboto.variable}>{children}</body>
    </html>
  );
}
