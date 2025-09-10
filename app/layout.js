import './globals.css';
import { Poppins, Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title: 'Indo US Nexus LLP',
  description: 'Your description here',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}
