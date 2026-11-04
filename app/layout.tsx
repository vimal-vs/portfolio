import './globals.css'
import { Schibsted_Grotesk, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'

const sans = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: false,
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Vimal Sakkthi | Portfolio',
  description: 'Personal portfolio of Vimal Sakkthi - Associate Software Engineer at Bajaj Finserv Health, building observability platforms, conversational AI and cloud systems.',
  keywords: 'Vimal Sakkthi, vimal, software engineer, portfolio, observability, cloud engineer, GCP, full stack, Next.js, Spring Boot',
  metadataBase: new URL("https://www.vimalvs.in"),
  alternates: {
    canonical: "https://www.vimalvs.in"
  },
  openGraph: {
    title: 'Vimal Sakkthi | Portfolio',
    description: 'Personal portfolio of Vimal Sakkthi - Associate Software Engineer at Bajaj Finserv Health',
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
    description: 'Personal portfolio of Vimal Sakkthi - Associate Software Engineer at Bajaj Finserv Health',
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
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try { if (localStorage.getItem('theme') === 'light') document.documentElement.classList.add('light') } catch (_) {}`,
          }}
        />
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_BASE_URL || "https://www.vimalvs.in"}
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
              jobTitle: 'Associate Software Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'Bajaj Finserv Health',
              },
              knowsAbout: ['Software Engineering', 'Observability', 'Cloud Engineering', 'Next.js', 'React.js', 'Spring Boot', 'GCP', 'Kubernetes', 'Elasticsearch'],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'SRM University',
              },
            }),
          }}
        />
      </head>
      <body className="bg-ink font-sans leading-relaxed antialiased selection:bg-signal selection:text-paper">
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