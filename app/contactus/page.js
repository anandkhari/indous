import ContactUs from '@/components/ContactUs'
import Map from '@/components/Map'
import React from 'react'
import WhatsAppButton from '@/components/Whatsappbutton';

export const metadata = {
  title: "Contact IndoUS Nexus LLP | Study Abroad & Careers",
  description:
    "Get in touch with IndoUS Nexus LLP in Thrissur, Kerala for study abroad guidance and international career opportunities.",
  keywords: [
    "Contact IndoUS Nexus",
    "Study Abroad Thrissur",
    "Education Consultancy Kerala",
    "Abroad Jobs Contact",
  ],
  openGraph: {
    title: "Contact IndoUS Nexus LLP",
    description:
      "Reach IndoUS Nexus LLP – your trusted partner for study abroad and global careers.",
    url: "https://yourdomain.com/contact",
    siteName: "IndoUS Nexus LLP",
    images: [
      {
        url: "https://yourdomain.com/og-contact.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


const page = () => {
  return (
    <div>
      <ContactUs />
      <Map />
      <WhatsAppButton />
    </div>
  )
}

export default page
