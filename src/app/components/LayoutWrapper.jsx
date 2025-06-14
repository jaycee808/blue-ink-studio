'use client'

import { usePathname } from 'next/navigation'
import MainLayout from './MainLayout'
import LandingLayout from './LandingLayout'

export default function LayoutWrapper({ children }) {
    const pathname = usePathname()
    const isHome = pathname === '/'

    return isHome ? (
        <LandingLayout>{children}</LandingLayout>
    ) : (
        <MainLayout>{children}</MainLayout>
    )
}