import type {Metadata} from 'next';
import './globals.css';
import {GlobalContextProvider} from '@/components/';

export const metadata: Metadata = {
  title: 'Image Gallery By Winchester',
  description: 'The page where you can search images that you like',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
