'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { label: 'Meet Mahesh', href: '/about-us' },
  { label: 'Coaching', href: '/executive-coaching' },
  { label: 'C-Suite Forum', href: '/c-suite-forum' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'What Clients Say', href: '/testimonials' },
  { label: 'Insights', href: '/insights' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-bg/95 backdrop-blur-sm border-b border-border relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-[22px] font-bold text-navy tracking-tight"
            >
              <Image
                src="/images/TIRA-logo.jpeg"
                alt="TIRA logo"
                width={36}
                height={36}
                className="mix-blend-multiply"
              />
              TIRA
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-[13px] font-medium uppercase tracking-[0.08em] text-navy hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-navy text-white px-6 py-2.5 font-body font-semibold text-[12px] tracking-widest uppercase hover:bg-gold transition-colors"
              >
                Contact
              </Link>
            </div>

            <button
              className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-full h-px bg-navy" />
              <span className="block w-full h-px bg-navy" />
              <span className="block w-full h-px bg-navy" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-bg border-b border-border">
            <div className="px-6 py-4 space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block font-body text-[13px] font-medium uppercase tracking-[0.08em] text-navy hover:text-gold transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-block bg-navy text-white px-6 py-2.5 font-body font-semibold text-[12px] tracking-widest uppercase hover:bg-gold transition-colors mt-2"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
