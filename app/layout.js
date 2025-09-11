import './globals.css';
import { Poppins, Roboto } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SimplePageLoader from "@/components/SimplePageLoader";
import WhatsAppButton from "@/components/WhatsAppButton";

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

// app/layout.js
export const metadata = {
  title: "IndoUS Nexus LLP | Study Abroad, PR Pathways & Global Career Solutions",
  description:
    "IndoUS Nexus LLP, based in Thrissur, Kerala, is your trusted partner for study abroad consulting, international recruitment, investment visa, PR pathways and air ticketing services.",
  keywords: [
    "IndoUS Nexus LLP",
    "Study Abroad Kerala",
    "Overseas Education Consultants India",
    "PR Pathway Services",
    "Investment Visa",
    "Air Ticketing India",
    "Global Careers",
    "Thrissur Consultancy",
    "International Recruitment",
  ],
  openGraph: {
    title: "IndoUS Nexus LLP | Study Abroad & Global Career Solutions",
    description:
      "Trust IndoUS Nexus LLP in Thrissur for expert guidance on studying abroad, PR pathways, investment visas, and more.",
    url: "https://indousnexusllp.com",
    siteName: "IndoUS Nexus LLP",
    images: [
      {
        url: "https://indousnexusllp.com/og-default.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",         // main browser favicon
    apple: "/apple-touch-icon.png" // optional for iOS
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className="font-sans">
        
         <SimplePageLoader>
          <Navbar />
        {children}
    
         <Footer />
        </SimplePageLoader>
      </body>
    </html>
  );
}
