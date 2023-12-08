import { GeistSans } from 'geist/font/sans'
import './globals.css'
import '@mantine/core/styles.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { ColorSchemeScript } from '@mantine/core';

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head><ColorSchemeScript /></head>
      <body className="bg-background text-foreground">
        <MantineProvider>
          <main className="min-h-screen flex flex-col items-center">
            {children}
          </main>
        </MantineProvider>
      </body>
    </html>
  )
}