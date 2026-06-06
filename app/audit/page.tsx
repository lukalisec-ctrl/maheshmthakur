import type { Metadata } from 'next'
import { AUDIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The AI ROI Audit. Three Minutes.',
  description:
    "A three-minute self-assessment that maps your organization's AI investment against returns.",
}

export default function AuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-6">
            Take three minutes. Get an honest read.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            A short diagnostic on where your AI investment actually stands. No
            marketing PDF. No upsell.
          </p>
          <a
            href={AUDIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-white px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-white hover:text-navy transition-colors"
          >
            Start the Audit
          </a>
        </div>
      </section>

      {/* What It Tells You */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-8">
            What it tells you.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>Twelve questions. Three minutes. At the end, you get:</p>
            <ul className="space-y-3 pl-0">
              <li className="flex gap-3">
                <span className="text-gold font-semibold flex-shrink-0">—</span>
                <span>
                  A read on whether your capital allocation is sharp or sloppy.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-semibold flex-shrink-0">—</span>
                <span>
                  A read on whether your product is building a moat or buying
                  wrappers.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-semibold flex-shrink-0">—</span>
                <span>
                  A read on whether your execution is moving at the speed of the
                  market.
                </span>
              </li>
            </ul>
            <p>
              You also get a clear answer on whether a conversation with Mahesh is
              worth your time. If it is not, the audit tells you. If it is, get in
              touch to set up a call.
            </p>
          </div>

          <div className="mt-16 text-center">
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy text-white px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold transition-colors"
            >
              Start the Audit
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
