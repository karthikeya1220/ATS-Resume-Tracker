"use client"

import { useEffect, useState } from "react"
import { auth } from "@/FirebaseConfig"

export function FirebaseProvider({ children }: { children: React.ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Wait for auth to initialize before showing the children
    const unsubscribe = auth.onAuthStateChanged(() => {
      setIsInitialized(true)
    })

    return () => unsubscribe()
  }, [])

  // Show loading state while Firebase initializes
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return <>{children}</>
}