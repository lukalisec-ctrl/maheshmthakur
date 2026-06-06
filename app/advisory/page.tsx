import type { Metadata } from 'next'
import Image from 'next/image'
import GoldDivider from '@/components/GoldDivider'
import StatBlock from '@/components/StatBlock'
import TestimonialCard from '@/components/TestimonialCard'
import Accordion from '@/components/Accordion'
import { AUDIT_URL, BOOK_A_CALL_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AI Strategy Advisory for Boards. Turn AI Spending Into Real Returns.',
  description:
    'Mahesh helps CEOs and Boards turn eight-figure AI budgets into measurable P&L impact.',
}

const CLIENT_STATS = [
  {
    number: '2.7x',
    label: 'Revenue Growth',
    description: 'Average revenue growth achieved by client organizations.',
  },
  {
    number: '40%',
    label: 'Faster Decisions',
    description: 'Faster decision-making reported by client leadership teams.',
  },
  {
    number: '16%',
    label: 'Revenue Per Employee',
    description: 'Increase in Revenue Per Employee within twelve months.',
  },
]

const PROOF_STATS = [
  {
    number: '$1B',
    label: 'Revenue Delivered',
    description: 'Core architect of the first $1 billion in Bing Ads revenue at Microsoft.',
  },
  {
    number: '$600M',
    label: 'P&L Managed',
    description: 'Full P&L responsibility at GoDaddy.',
  },
  {
    number: '81%',
    label: 'Delivery Rate',
    description: 'Shifted organizational delivery from 23% to 81% on-time and on-budget.',
  },
]

export default function AdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-8">
            You are approving an eight-figure AI budget. The P&amp;L is not
            moving.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            Mahesh helps Boards and CEOs fix that. Independent. Operator-led. Tied to financial outcomes, not slides.
          </p>
          <div>
            <a
              href={BOOK_A_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-white px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-white hover:text-navy transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/mahesh-boardroom.jpg"
            alt="Mahesh M. Thakur in boardroom"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <GoldDivider />

      {/* The Problem + How Mahesh Helps — combined */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[20px] lg:text-[26px] font-semibold text-navy leading-tight mb-8">
            The problem is not the technology.
          </h2>
          <div className="space-y-4 font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-12">
            <p>Every committee meeting has AI on the agenda. Pilots are shipping. Products are not scaling. Revenue is not moving. And no one can answer the one question that matters: where is the return.</p>
            <p>The gap is not technical. It is the translation layer between Silicon Valley and the boardroom: capital allocated to the wrong bets, product strategy bolted on instead of built in, execution on a twelve-month roadmap in a market that moves every ninety days.</p>
          </div>
          <h3 className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gold mb-6">
            Three ways Mahesh can help
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                label: 'Board Advisor',
                body: 'Sits with your Board or Audit Committee as an independent expert. A second opinion on every major AI capital decision: which spending builds a moat and which is a vendor wrapper.',
                qualifier: 'For Boards and Audit Committees making recurring AI capital decisions.',
              },
              {
                label: 'Interim CTPO',
                body: 'Steps in as Interim Chief Technology and Product Officer for companies with a stalled roadmap. Realigns engineering with strategy. Runs ninety-day cycles. Leaves when the trajectory is fixed.',
                qualifier: 'For companies with a stalled roadmap and no clear owner of technical strategy.',
              },
              {
                label: 'C-Suite Alignment Sprint',
                body: 'Gets the CEO, CFO, and CTO into the same room and they leave with one defensible plan tied to P&L milestones.',
                qualifier: 'For leadership teams that cannot reach consensus on where AI fits in the business.',
              },
            ].map((card) => (
              <div key={card.label} className="bg-bg border border-border border-t-4 border-t-navy p-8">
                <h4 className="font-body text-[17px] font-semibold text-navy mb-3">{card.label}</h4>
                <p className="font-body text-[15px] leading-[1.75] text-[#1A1A1A] mb-4">{card.body}</p>
                <p className="font-body text-[12px] italic text-muted">{card.qualifier}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* CEO Testimonials */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-8">
            What CEOs Say
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TestimonialCard
              quote="Mahesh is uniquely qualified as an indispensable tech CEO coach. His impressive background brings the right shift in mindset and strategies every CEO needs to run a successful company. He genuinely listens and dives into your business as your thought partner."
              name="Feyzi Fatehi"
              title="Chief Executive Officer"
              company="Corent Technologies"
            />
            <TestimonialCard
              quote="Mahesh truly understands what it takes to formulate and deliver product-led growth. He quickly understood the need for us to scale and came up with effective strategies to incubate a new line of products."
              name="Kris Rudeegraap"
              title="Chief Executive Officer"
              company="Sendoso"
            />
          </div>
        </div>
      </section>

      {/* Proof Stats */}
      <section className="bg-navy py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StatBlock stats={PROOF_STATS} theme="dark" />
        </div>
      </section>

      {/* Client Outcomes */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-8">
            What Clients Achieve
          </div>
          <StatBlock stats={CLIENT_STATS} theme="light" />
        </div>
      </section>

      <GoldDivider />

      {/* FAQ */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[20px] lg:text-[26px] font-semibold text-navy leading-tight mb-12">
            Common questions.
          </h2>
          <Accordion
            items={[
              {
                question: 'How long does a board advisory engagement typically run?',
                answer: 'Most engagements run between six and eighteen months. Scope and cadence are defined in the first two weeks.',
              },
              {
                question: 'Is this ongoing or project-based?',
                answer: 'Both. Board Advisory is ongoing with a defined monthly cadence. The C-Suite Alignment Sprint is a contained project. Interim CTPO engagements run until the trajectory is fixed, usually three to six months.',
              },
              {
                question: 'How is this different from hiring a consulting firm?',
                answer: 'A consulting firm sends a team. Mahesh is the engagement. He has managed a billion-dollar revenue line and a six hundred million dollar P&L. He does not learn your business from a discovery deck. He has sat in the seat he is being asked to advise on.',
              },
              {
                question: 'Do you sign NDAs?',
                answer: 'Yes. Every engagement starts with a mutual NDA before any substantive conversation takes place.',
              },
            ]}
          />
        </div>
      </section>

      <GoldDivider />

      {/* CTA Footer */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-body text-[18px] font-semibold uppercase tracking-[0.08em] text-navy mb-4">
            Book a call.
          </h3>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-8">
            Mahesh takes a limited number of advisory engagements each year. Fifteen minutes, video. He will tell you whether he can help, and if not, who can.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={BOOK_A_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold transition-colors"
            >
              Book a Call
            </a>
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-[14px] text-gold underline decoration-gold"
            >
              Or take the 3-minute audit
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
