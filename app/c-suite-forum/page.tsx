import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import ContactForm from '@/components/ContactForm'
import { type CarouselTestimonial } from '@/components/TestimonialCarousel'

export const metadata: Metadata = {
  title: 'The C-Suite Forum',
  description:
    'A confidential, curated executive leadership forum for senior technology leaders navigating visibility, influence, organizational complexity, and AI-era transformation.',
}

const FORUM_MOMENTS = [
  {
    moment: 'Visibility plateau',
    nav: '"I keep delivering. The right people are not noticing."',
  },
  {
    moment: 'Restructuring',
    nav: '"My organization just restructured. My scope changed and the expectations shifted overnight."',
  },
  {
    moment: 'Promotion readiness',
    nav: '"I have been told I am close. I do not fully understand what close means."',
  },
  {
    moment: 'Expansion',
    nav: '"We are growing fast. I am now responsible for a team and a scope I have never managed before."',
  },
  {
    moment: 'Isolation at the top',
    nav: '"There is no one inside my organization I can be fully honest with."',
  },
]


const FORUM_TESTIMONIALS: CarouselTestimonial[] = [
  {
    quote: 'Mahesh helped me fundamentally rethink how I lead and influence at senior levels. His ability to combine leadership psychology, executive presence, and strategic clarity is exceptional.',
    attribution: 'Senior Director, Microsoft',
  },
  {
    quote: 'Working with Mahesh accelerated my growth as a leader more than any leadership training I have attended in my career. The conversations were direct, strategic, and deeply transformative.',
    attribution: 'Vice President, Adobe',
  },
  {
    quote: 'For the first time in years, I felt like I had a room of peers who truly understood the pressure, ambiguity, and strategic weight of senior leadership.',
    attribution: 'Executive Leader, Fortune 100 Enterprise',
  },
  {
    quote: 'Mahesh approaches board and C-Suite advisory with a mixture of mentorship and partnership. His approach improved the dynamics with my team, my relationships with the board, and my rapport with the executives.',
    name: 'Kent Lopez',
    title: 'Vice President of Sales',
    company: 'Neural',
  },
  {
    quote: 'Mahesh is uniquely qualified as an indispensable tech CEO coach. He genuinely listens and dives into your business as your thought partner.',
    name: 'Feyzi Fatehi',
    title: 'Chief Executive Officer',
    company: 'Corent Technologies',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Submit your interest',
    body: 'Share a short note about your current leadership role, organizational environment, and what you are working to build.',
  },
  {
    number: '02',
    title: 'A 1:1 call with Mahesh',
    body: 'A confidential conversation with Mahesh to explore your goals, your current situation, and whether the forum is the right fit. No commitment required.',
  },
  {
    number: '03',
    title: 'Invitation and enrollment',
    body: 'Selected leaders receive a formal invitation. Participation is intentionally limited to preserve the quality and depth of every conversation.',
  },
]


export default function CSuiteForumPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-8">
            The C-Suite Forum
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-8">
            The higher you rise, the fewer people you can be fully honest with. The C-Suite Forum is the room where that changes.
          </p>
          <div className="grid grid-cols-3 gap-8 mb-4">
            <div className="flex items-center justify-center h-14">
              <Image src="/images/Stanford.png" alt="Stanford GSB" width={240} height={80} className="h-full w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center h-14">
              <Image src="/images/MCC1.png" alt="Master Certified Coach" width={120} height={120} className="h-full w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center h-14">
              <Image src="/images/100coaches.png" alt="100 Coaches" width={120} height={120} className="h-full w-auto object-contain" />
            </div>
          </div>
          <div className="flex items-center font-body text-[10px] uppercase tracking-[0.12em] text-gold mb-8">
            <div className="flex-1 text-center">Stanford GSB Board Director</div>
            <span className="px-2">|</span>
            <div className="flex-1 text-center">Master Certified Coach</div>
            <span className="px-2">|</span>
            <div className="flex-1 text-center">Top 100 Coach Globally</div>
          </div>
          <div>
            <Link
              href="/about-us"
              className="inline-block border border-gold text-gold px-6 py-2.5 font-body text-[11px] font-medium tracking-[0.16em] uppercase hover:bg-gold hover:text-white transition-colors"
            >
              Read Mahesh&apos;s Full Bio Here
            </Link>
          </div>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/c-suite_forum.jpeg"
            alt="The C-Suite Forum in session"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <GoldDivider />

      {/* The Problem */}
      <section id="why-it-exists" className="bg-white py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-6">
            The Higher You Rise, The Fewer Honest Conversations You Have
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            Senior leadership is isolating by design. The decisions get harder, the stakes get higher, and the circle of people you can be fully honest with gets smaller. Most leaders reach a point where the most important questions about their trajectory go largely unasked.
          </p>
          <div className="space-y-5 mb-10">
            {FORUM_MOMENTS.map((row) => (
              <p key={row.moment} className="font-body text-[17px] italic text-[#1A1A1A] border-l-2 border-border pl-5">
                {row.nav}
              </p>
            ))}
          </div>
          <p className="font-body text-[16px] text-muted">
            Leaders often outgrow their current circle before they grow into their next level. The C-Suite Forum exists to close that gap.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* Who This Is For */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-10">
            The strength of this forum comes from the caliber of the leaders in the room.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            <div>
              <div className="font-body text-[11px] uppercase tracking-[0.12em] text-gold mb-5">Designed for</div>
              <ul className="space-y-3">
                {[
                  'Directors, Vice Presidents, and Senior Managers',
                  'High-potential and succession-track leaders',
                  'Ambitious operators preparing for expanded scope',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold font-semibold flex-shrink-0">—</span>
                    <span className="font-body text-[16px] text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-body text-[11px] uppercase tracking-[0.12em] text-gold mb-5">Particularly valuable for leaders who are</div>
              <ul className="space-y-3">
                {[
                  'Navigating organizational complexity and political dynamics',
                  'Feeling plateaued despite consistently strong performance',
                  'Preparing for larger scope, greater responsibility, or a new role',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold font-semibold flex-shrink-0">—</span>
                    <span className="font-body text-[16px] text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What the Forum Is */}
      <section className="bg-navy py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-white leading-tight mb-4">
            A Curated, Confidential, High-Caliber Environment
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-white/70 mb-10">
            The C-Suite Forum is a structured, confidential peer advisory experience for senior leaders. Members explore real leadership challenges alongside peers of equivalent caliber, facilitated by Mahesh M. Thakur. Every session is built around what members are actually navigating. Participation is selective and intentionally limited to preserve the quality of every conversation.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: 'Confidential',
                body: 'A protected space for strategic thinking that cannot happen inside your own organization.',
              },
              {
                title: 'Peer-level',
                body: 'Leaders who understand the weight, ambiguity, and political complexity of senior roles.',
              },
              {
                title: 'Real situations',
                body: 'Sessions are driven by what members are actually navigating right now, not hypothetical scenarios.',
              },
              {
                title: 'Selective',
                body: '8–12 leaders per cohort. Every applicant reviewed personally. The caliber of the room is everything.',
              },
            ].map((item) => (
              <div key={item.title} className="border-t-2 border-gold pt-5">
                <h3 className="font-body text-[15px] font-semibold text-white mb-1">{item.title}</h3>
                <p className="font-body text-[15px] leading-[1.7] text-white/60">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              'Sessions every two weeks',
              'Quarterly 1:1 with Mahesh',
              'Six-month engagement',
              'Chatham House confidentiality',
            ].map((item) => (
              <div key={item} className="bg-navy px-4 py-5 text-center">
                <span className="font-body text-[14px] lg:text-[16px] font-semibold text-white leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Testimonials */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-3">
            What Forum Members Say
          </div>
          <p className="font-body text-[16px] text-muted mb-8">
            Members have come from NVIDIA, Google, Meta, Microsoft, Adobe, Apple, and Fortune 100 organizations globally.
          </p>
          <div className="flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {FORUM_TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="flex-none bg-white border border-border p-5 flex flex-col gap-4"
                style={{ width: 280 }}
              >
                <p className="font-body text-[14px] italic leading-[1.65] text-navy flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  {t.name ? (
                    <>
                      <div className="font-body text-[12px] font-semibold text-navy">{t.name}</div>
                      {t.title && <div className="font-body text-[11px] text-muted mt-0.5">{t.title}</div>}
                      {t.company && (
                        <div className="font-body text-[10px] font-semibold uppercase tracking-[0.08em] text-gold mt-1">
                          {t.company}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="font-body text-[11px] font-semibold text-navy">{t.attribution}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Video */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-4">
            Hear from forum members.
          </h2>
          <p className="font-body text-[16px] leading-[1.75] text-muted mb-8">
            Senior technology leaders share what they gained from the C-Suite Forum.
          </p>
          <div className="aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/5Y1d96bDOrs"
              title="C-Suite Forum: Success Stories & Wins from Top Bay Area Tech Leaders"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* How to Join + Form */}
      <section id="contact" className="bg-bg py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="w-8 h-[2px] bg-gold mb-5" />
              <h2 className="font-display text-[22px] lg:text-[28px] font-semibold text-navy leading-tight mb-8">
                How to Join
              </h2>
              <div className="space-y-8">
                {STEPS.map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <div className="font-display text-[22px] font-bold text-gold leading-none flex-shrink-0 w-8">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-body text-[15px] font-semibold text-navy mb-1">{step.title}</h3>
                      <p className="font-body text-[14px] leading-[1.7] text-muted">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ContactForm buttonLabel="Request Invitation" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
