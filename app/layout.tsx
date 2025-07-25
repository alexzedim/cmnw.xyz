import './globals.css';
import type { Metadata } from 'next';
import { Inter, Great_Vibes as GreatVibes } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const greatVibes = GreatVibes({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
  weight: '400', // Only 400 is available for Great Vibes
});

export const metadata: Metadata = {
  title: 'Visual Collections | Art Gallery',
  description: 'Explore curated visual collections and artistic expressions through beautiful gallery spaces.',
  keywords: 'art gallery, visual collections, photography, artwork, exhibitions',
  authors: [{ name: 'Your Name' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${greatVibes.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
