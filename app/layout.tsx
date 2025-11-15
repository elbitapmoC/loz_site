import React from 'react'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { FontProvider } from '@/components/providers/FontProvider'
import { AuthProvider } from '@/components/auth/AuthContext'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lions of Zion',
  description: 'A spiritual community dedicated to learning and living biblical truth',
  keywords: ['Lions of Zion', 'biblical truth', 'twelve tribes', 'spiritual community'],
  authors: [{ name: 'Lions of Zion' }],
  creator: 'Lions of Zion',
  publisher: 'Lions of Zion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Check if Clerk is properly configured
  const hasValidClerkKeys = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && 
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY !== 'your_clerk_publishable_key_here' &&
    process.env.CLERK_SECRET_KEY && 
    process.env.CLERK_SECRET_KEY !== 'your_clerk_secret_key_here'

  const content = (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light">
          <FontProvider>
            <AuthProvider>
              {children}
              <Toaster />
            </AuthProvider>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  )

  // Only wrap with ClerkProvider if keys are properly configured
  if (hasValidClerkKeys) {
    return (
      <ClerkProvider>
        {content}
      </ClerkProvider>
    )
  }

  return content
}