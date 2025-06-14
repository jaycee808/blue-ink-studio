'use client'

import Image from 'next/image'
import Link from 'next/link'
import HeroLogoHorizontal from '../../public/blue-ink-logo-h-hqual.svg'
import HeroLogoMobile from '../../public/blue-ink-logo-v-hqual.svg'
import './globals.css'

export default function Home() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-logo-wrapper">
          {/* Desktop Logo */}
          <div className="logo-desktop">
            <Image
              src={HeroLogoHorizontal}
              alt="Blue Ink Studio Logo"
              className="hero-logo"
              priority
            />
          </div>

          {/* Mobile Logo */}
          <div className="logo-mobile">
            <Image
              src={HeroLogoMobile}
              alt="Blue Ink Studio Logo"
              className="hero-logo"
              priority
            />
          </div>
        </div>

        <div className="hero-tagline-cta-container">
          <p className="hero-tagline">Inked with Intent.</p>
          <Link href="/about">
            <button className="hero-cta">Enter</button>
          </Link>
        </div>
      </div>
    </section>
  )
}