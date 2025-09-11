import HeroSection from '@/components/HeroSection'
import About from '@/components/AboutUs'
import StatsSection from '@/components/StatsSection'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'


// ✅ Metadata
export const metadata = {
  title: "Global Careers & Study Abroad | IndoUS Nexus LLP",
  description:
    "IndoUS Nexus LLP helps students and professionals achieve their dreams with trusted study abroad consulting and international recruitment services.",
  keywords: [
    "IndoUS Nexus LLP",
    "Study Abroad Kerala",
    "Global Careers",
    "International Recruitment",
    "Thrissur Education Consultancy",
    "Abroad Jobs",
  ],
  openGraph: {
    title: "Study Abroad & Global Careers | IndoUS Nexus LLP",
    description:
      "Launch your global career with IndoUS Nexus LLP – trusted study abroad and recruitment partner from Thrissur, India.",
    url: "https://yourdomain.com",
    siteName: "IndoUS Nexus LLP",
    images: [
      {
        url: "https://yourdomain.com/og-home.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

// ✅ Page Component
export default function Page() {
  return (
    <div>
      <HeroSection />
      <About />
      <StatsSection />
      <Services />
      <Testimonials />
      <CallToAction />

    </div>
  )
}
