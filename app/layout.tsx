import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from "@/context/auth-context"

export const metadata: Metadata = {
  title: 'ATS Resume Tracker',
  description: 'ATS Resume Tracker',
  generator: 'ats.dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
