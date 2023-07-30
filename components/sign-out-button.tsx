'use client'

import { signOut } from "next-auth/react"

interface SignOutButtonProps {
  children: React.ReactNode
}

export const SignOutButton = ({ children }: SignOutButtonProps) => {
  return (
    <button onClick={() => signOut()}>{children}</button>
  )
}