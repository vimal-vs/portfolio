import './globals.css'
import { Sofia_Sans } from '@next/font/google'

const font  = Sofia_Sans ({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Vs | Portfolio',
  description: 'Created by Vs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="bg-slate-900 leading-relaxed antialiased selection:bg-teal-300 selection:text-teal-900">{children}</body>
    </html>
  )
}
