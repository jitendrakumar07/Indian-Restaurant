import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nizams Indian Restaurant',
  description: 'Nizam s Indian Restaurant',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
