
import CallToAction from '@/components/CallToAction'
import React from 'react'
import FeaturedTour from '@/components/FeaturedTour';

export const metadata = {
  title: "International Tours & Holiday Packages | IndoUS Nexus LLP",
  description:
    "Explore carefully curated international holiday packages and guided group tours. Travel the world seamlessly with IndoUS Nexus LLP.",
  keywords: [
    "International Tours",
    "Holiday Packages",
    "IndoUS Tours",
    "Guided Group Tours",
    "Europe Tour Packages",
    "Thrissur Travel Agency",
    "Global Tourism IndoUS",
  ],
  openGraph: {
    title: "International Tours & Holiday Packages | IndoUS Nexus LLP",
    description:
      "Embark on unforgettable journeys with IndoUS Nexus LLP. Explore custom and group holiday packages to Europe, Asia, and America.",
    url: "https://yourdomain.com/tours",
    siteName: "IndoUS Nexus LLP",
    images: [
      {
        url: "https://yourdomain.com/og-tours.jpg",
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
      <FeaturedTour />
      <CallToAction />
      
    </div>
  )
}

export default page