import './globals.css'
import { Sofia_Sans } from 'next/font/google'
import Script from 'next/script'

const font = Sofia_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

export const metadata = {
  title: 'Vimal Sakkthi | Portfolio',
  description: 'Personal portfolio of Vimal Sakkthi - Software Development Engineer. Explore my projects, skills, and professional experience.',
  keywords: 'Vimal Sakkthi, vimal, software developer, portfolio, web development, design, programming',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || ""),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || "https://www.vimalvs.com"
  },
  openGraph: {
    title: 'Vimal Sakkthi | Portfolio',
    description: 'Personal portfolio of Vimal Sakkthi - Software Development Engineer',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: 'Vimal Sakkthi',
    images: [
      {
        url: '/favicon.ico',
        width: 1200,
        height: 630,
        alt: 'Vimal Sakkthi Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vimal Sakkthi | Portfolio',
    description: 'Personal portfolio of Vimal Sakkthi - Software Development Engineer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <head>  
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_BASE_URL || "https://www.vimalvs.com"}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Vimal Sakkthi',
              url: process.env.NEXT_PUBLIC_BASE_URL,
              sameAs: [
                process.env.NEXT_PUBLIC_LINKEDIN_URL,
                process.env.NEXT_PUBLIC_GITHUB_URL,
              ],
              jobTitle: process.env.NEXT_PUBLIC_JOB_TITLE,
              worksFor: {
                '@type': 'Organization',
                name: process.env.NEXT_PUBLIC_COMPANY_NAME,
              },
              knowsAbout: ['Software Engineering', 'Cloud Engineering','PERN Stack', 'Next.js', 'React.js', 'GCP', 'AWS'],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'SRM University',
              },
            }),
          }}
        />
      </head>
      <body className="bg-slate-900 leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900">
        {children}
        
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      </body>
    </html>
  )
}