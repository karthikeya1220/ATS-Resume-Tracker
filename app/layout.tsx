import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from "@/context/auth-context"
import { FirebaseProvider } from "@/components/providers/firebase-provider"

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
        <FirebaseProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </FirebaseProvider>
      </body>
    </html>
  )
}
