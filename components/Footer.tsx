import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import { AUDIT_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="font-display text-[20px] font-bold text-white mb-3">
              TIRA Strategic Advisory
            </div>
            <p className="font-body text-[14px] leading-relaxed text-white/70 mb-4">
              I help leaders win. Boards. CEOs. The next generation of executives.
            </p>
            <p className="font-body text-[13px] leading-relaxed text-white/60 mb-6">
              Member of the 100 Coaches Group. Stanford GSB Certified Board
              Professional.
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/maheshmthakur/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[13px] text-white/70 hover:text-gold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@maheshmthakur"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[13px] text-white/70 hover:text-gold transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          <div>
            <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">
              Work with me
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Advisory', href: '/advisory' },
                { label: 'Coaching', href: '/executive-coaching' },
                { label: 'C-Suite Forum', href: '/c-suite-forum' },
                { label: 'Speaking', href: '/speaking' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[14px] text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">
              About
            </div>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about-us' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[14px] text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-white/50 mb-4">
              Resources
            </div>
            <ul className="space-y-3">
              {[
                { label: 'Blog', href: '/blog' },
                { label: 'Newsletter', href: '/newsletter' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[14px] text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={AUDIT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[14px] text-white/70 hover:text-gold transition-colors"
                >
                  The Audit
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <GoldDivider />
        </div>

        <div className="mb-12">
          <h3 className="font-display text-[24px] font-semibold text-white mb-2">
            The Executive Navigator
          </h3>
          <p className="font-body text-[14px] text-white/60 mb-4">
            Weekly notes for senior leaders. No fluff.
          </p>
          <iframe
            src="https://embeds.beehiiv.com/e0b150e1-a8f2-4652-9061-0508a5f8eac4?slim=true"
            height={60}
            width="100%"
            style={{ border: 0, background: 'transparent' }}
            loading="lazy"
          />
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="font-body text-[13px] text-white/40">
            © 2026 TIRA Strategic Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
