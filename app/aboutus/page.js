import AboutPage from '@/components/Aboutpage'
import CallToAction from '@/components/CallToAction'
import React from 'react'


export const metadata = {
  title: "About IndoUS Nexus LLP | Gateway to Global Careers",
  description:
    "Learn about IndoUS Nexus LLP – our vision, mission, and commitment to helping students and professionals build successful international careers.",
  keywords: [
    "About IndoUS Nexus",
    "Study Abroad Consultancy",
    "Thrissur Education Agency",
    "Global Career Guidance",
  ],
  openGraph: {
    title: "About IndoUS Nexus LLP",
    description:
      "Discover IndoUS Nexus LLP – your trusted partner for international education and career opportunities.",
    url: "https://yourdomain.com/about",
    siteName: "IndoUS Nexus LLP",
    images: [
      {
        url: "https://yourdomain.com/og-about.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "article",
  },
};




const page = () => {
  return (
    <div>
    <AboutPage />
    <CallToAction />
   
    </div>
  )
}

export default page
