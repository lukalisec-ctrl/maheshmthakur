import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import Accordion from '@/components/Accordion'
import ContactForm from '@/components/ContactForm'
import TestimonialCarousel, { type CarouselTestimonial } from '@/components/TestimonialCarousel'

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
    moment: 'Political complexity',
    nav: '"I know what needs to happen. Getting alignment is the hard part."',
  },
  {
    moment: 'Promotion readiness',
    nav: '"I have been told I am close. I do not fully understand what close means."',
  },
  {
    moment: 'AI-era uncertainty',
    nav: '"The landscape is shifting fast. I want to lead into it, not react to it."',
  },
  {
    moment: 'Isolation at the top',
    nav: '"There is no one inside my organization I can be fully honest with."',
  },
]

const ARENAS = [
  {
    title: 'Executive visibility and strategic presence',
    body: 'Building the influence and positioning that accelerate advancement at senior levels.',
  },
  {
    title: 'Navigating politics and stakeholder complexity',
    body: 'Managing the invisible dynamics that shape leadership effectiveness in large organizations.',
  },
  {
    title: 'AI-era leadership and strategic relevance',
    body: 'Maintaining clarity and authority as AI reshapes organizational priorities and power structures.',
  },
  {
    title: 'Decision-making under pressure',
    body: 'The composure and frameworks to make high-stakes calls when information is incomplete.',
  },
  {
    title: 'Career positioning and executive advancement',
    body: 'Shaping trajectory, narrative, and readiness for expanded leadership scope.',
  },
  {
    title: 'High-trust leadership relationships',
    body: 'Building the peer networks and executive relationships that sustain long-term career momentum.',
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
  {
    quote: 'It is very hard to find an executive coach who has been there and done that.',
    name: 'Hyo Jung Song',
    title: 'Vice President of Mobile',
    company: 'Samsung',
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
    title: 'Introductory conversation',
    body: 'A confidential discussion with Mahesh to explore your goals and assess alignment, contribution potential, and fit.',
  },
  {
    number: '03',
    title: 'Invitation and enrollment',
    body: 'Selected leaders receive a formal invitation. Participation is intentionally limited to preserve the quality and depth of every conversation.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How much time does participation require?',
    answer:
      'One session every two weeks, ninety minutes each. Members are also expected to engage thoughtfully between sessions and attend quarterly one-on-one advisory conversations with Mahesh.',
  },
  {
    question: 'Is this only for Bay Area leaders?',
    answer:
      'No. The forum is global. Sessions are scheduled to accommodate members across time zones.',
  },
  {
    question: 'How private is the forum?',
    answer:
      'The forum operates under the Chatham House Rule. Every member accepts this standard before joining. What is shared in the room stays in the room.',
  },
  {
    question: 'Is this only for technology leaders?',
    answer:
      'Primarily yes, with some participants from finance, healthcare, and telecom. Rooms are kept cross-industry on purpose to encourage diverse strategic thinking.',
  },
  {
    question: 'Can my company reimburse the cost?',
    answer:
      'Yes. Most members submit this as the formal credential their company reimburses against. An invoice can be provided in any format required.',
  },
]

export default function CSuiteForumPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-6">
            Top 100 Coach Globally &nbsp;|&nbsp; Stanford GSB Certified Board Member &nbsp;|&nbsp; Trusted Advisor
          </div>
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-8">
            The C-Suite Forum
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-8">
            A confidential executive leadership forum for senior leaders navigating visibility, influence, and AI-era transformation.
          </p>
          <div>
            <Link
              href="/about-us"
              className="inline-block border border-white/40 text-white/80 px-8 py-4 font-body text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
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

      {/* Why It Exists + Who It's For — combined */}
      <section id="why-it-exists" className="bg-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-6">
            The Higher You Rise, The Fewer Honest Conversations You Have
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-8">
            Senior leadership is isolating by design. The decisions get harder, the honest conversations get rarer, and the most important questions about trajectory, blind spots, and next moves go largely unasked. The C-Suite Forum is built for that gap.
          </p>
          <ul className="space-y-3 mb-10">
            {[
              'Confidential. What is shared in the room stays in the room.',
              'Peer-level. Every member understands the weight of senior leadership.',
              'Real situations. Every session is built around what members bring forward.',
              'Selective. The caliber of the room is everything.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gold font-semibold flex-shrink-0">—</span>
                <span className="font-body text-[17px] text-[#1A1A1A]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="font-body text-[15px] text-muted mb-6">These are the moments that typically bring leaders to the forum.</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-5 font-body text-[12px] uppercase tracking-[0.08em] text-left w-[220px]">
                    The moment
                  </th>
                  <th className="px-6 py-5 font-body text-[12px] uppercase tracking-[0.08em] text-left">
                    What the leader is carrying
                  </th>
                </tr>
              </thead>
              <tbody>
                {FORUM_MOMENTS.map((row, i) => (
                  <tr key={row.moment} className={`border-b border-border ${i % 2 === 0 ? 'bg-white' : 'bg-bg'}`}>
                    <td className="px-6 py-5 font-body font-semibold text-navy align-top">{row.moment}</td>
                    <td className="px-6 py-5 font-body text-[16px] italic text-[#1A1A1A]">{row.nav}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-gold text-white px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-navy transition-colors"
            >
              Inquire Here
            </a>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Challenges Explored */}
      <section className="bg-navy py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-white leading-tight mb-3">
            The Challenges Explored Together
          </h2>
          <p className="font-body text-[15px] leading-[1.75] text-white/50 mb-10">
            Topics evolve based on what members bring into the room. Every session has direct relevance to what is live in members&apos; work.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            {ARENAS.map((arena) => (
              <div key={arena.title} className="border-t border-white/20 pt-5">
                <h3 className="font-body text-[16px] font-semibold text-white mb-2">{arena.title}</h3>
                <p className="font-body text-[15px] leading-[1.7] text-white/60">{arena.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Testimonials */}
      <section className="bg-white py-14 lg:py-20">
        <div className="px-6 lg:px-8">
          <div className="max-w-7xl mx-auto mb-8">
            <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold">
              What Forum Members Say
            </div>
          </div>
          <TestimonialCarousel testimonials={FORUM_TESTIMONIALS} cardWidth={400} />
        </div>
      </section>

      <GoldDivider />

      {/* How to Join */}
      <section className="bg-bg py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-2">
            <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight">
              How to Join
            </h2>
            <p className="font-body text-[15px] text-muted">
              Participation is selective and limited.
            </p>
          </div>
          <p className="font-body text-[13px] text-muted mb-8">
            8–15 leaders per cohort &nbsp;·&nbsp; Sessions every two weeks &nbsp;·&nbsp; Six-month engagement &nbsp;·&nbsp; Chatham House confidentiality
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {STEPS.map((step) => (
              <div key={step.number} className="border-t-2 border-gold pt-5">
                <div className="font-display text-[28px] font-bold text-gold leading-none mb-3">
                  {step.number}
                </div>
                <h3 className="font-body text-[16px] font-semibold text-navy mb-2">{step.title}</h3>
                <p className="font-body text-[15px] leading-[1.7] text-[#1A1A1A]">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* FAQ */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-10">
            Common Questions
          </h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <GoldDivider />

      {/* Final CTA Form */}
      <section id="contact" className="bg-bg py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-navy px-8 lg:px-14 py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="w-8 h-[2px] bg-gold mb-5" />
                <h2 className="font-display text-[24px] lg:text-[28px] font-semibold text-white leading-tight mb-4">
                  An Invitation to Join
                </h2>
                <p className="font-body text-[15px] leading-[1.75] text-white/65">
                  If the forum sounds aligned with where you are in your leadership trajectory, share a short note. Every inquiry is reviewed personally. All conversations are strictly confidential.
                </p>
              </div>
              <div>
                <ContactForm buttonLabel="Contact Us" dark />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
