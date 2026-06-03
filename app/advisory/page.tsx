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
    'Independent board-level advisory for AI capital decisions. Mahesh helps CEOs and Boards turn eight-figure AI budgets into measurable P&L impact.',
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
    description:
      'Core architect of the first $1 billion in Bing Ads revenue at Microsoft.',
  },
  {
    number: '$600M',
    label: 'P&L Managed',
    description: 'Full P&L responsibility at GoDaddy.',
  },
  {
    number: '81%',
    label: 'Delivery Rate',
    description:
      'Shifted organizational delivery from 23% to 81% on-time and on-budget.',
  },
]

export default function AdvisoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-8">
            You are approving an eight-figure AI budget. The P&amp;L is not
            moving.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            Mahesh helps Boards and CEOs fix that. Independent. Operator-led. Tied to
            financial outcomes, not slides.
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

      {/* The Problem */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Three things are happening at the same time.
          </h2>

          <div className="space-y-10">
            {[
              {
                num: '01',
                body: 'Every committee meeting now has AI on the agenda. Every executive has an opinion. Nobody has a clean way to measure what is working.',
              },
              {
                num: '02',
                body: 'Your engineering team is shipping pilots. The pilots are not turning into products. The products are not turning into revenue.',
              },
              {
                num: '03',
                body: 'You cannot tell whether you are behind your competitors, ahead of them, or paying for the same vendor wrappers they are paying for.',
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-8 items-start">
                <div className="font-display text-[48px] font-bold text-gold leading-none flex-shrink-0">
                  {item.num}
                </div>
                <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] pt-2">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 border-l-4 border-gold pl-8">
            <p className="font-body text-[20px] italic leading-[1.75] text-navy">
              You do not have a technology problem. You have a translation
              problem between Silicon Valley and the boardroom.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* How I Work */}
      <section className="py-14 lg:py-20" style={{ background: '#F4F6FA' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Three ways Mahesh can help.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                label: 'Board Advisor',
                body: 'Mahesh sits with your Board or Audit Committee as an independent expert. He gives you a second opinion on every major AI capital decision. He tells you which spending is a moat and which is a wrapper.',
                qualifier: 'For Boards and Audit Committees making recurring AI capital decisions.',
              },
              {
                label: 'Interim CTPO',
                body: 'For companies with a stalled product roadmap, Mahesh steps in as Interim Chief Technology and Product Officer. He realigns engineering with strategy. He runs ninety-day cycles instead of twelve-month roadmaps. He leaves when the trajectory is fixed.',
                qualifier: 'For companies with a stalled roadmap and no clear owner of the technical strategy.',
              },
              {
                label: 'C-Suite Alignment Sprint',
                body: 'A focused engagement for leadership teams that cannot agree on the AI roadmap. Mahesh gets the CEO, CFO, and CTO into the same room and they leave with a single defensible plan tied to P&L milestones.',
                qualifier: 'For leadership teams that cannot reach consensus on where AI fits in the business.',
              },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-white border border-border border-t-4 border-t-navy p-10"
              >
                <h3 className="font-body text-[18px] font-semibold text-navy mb-4">
                  {card.label}
                </h3>
                <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                  {card.body}
                </p>
                <p className="font-body text-[13px] italic text-muted mt-4">
                  {card.qualifier}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* The Framework */}
      <section className="bg-[#F4F6FA] py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-4">
            Three things have to line up. Mahesh calls this the Conviction Engine.
          </h2>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                label: 'Capital.',
                body: 'The money is going to the wrong twenty percent. We find the bets that will actually drive eighty percent of your EBITDA, and we stop funding the rest.',
              },
              {
                label: 'Product.',
                body: 'You are buying vendor features instead of building a moat. We rebuild your product strategy so AI is in the foundation, not bolted on.',
              },
              {
                label: 'Execution.',
                body: 'Your team is on a twelve-month roadmap in a market that moves every ninety days. We replace the roadmap with ninety-day cycles tied to financial outcomes.',
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-body text-[17px] font-semibold text-navy mb-3">
                  {item.label}
                </div>
                <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16 border-l-4 border-gold pl-8">
            <p className="font-body text-[20px] italic leading-[1.75] text-navy">
              When these three line up, AI stops being a cost center and starts
              being a revenue driver. That is the entire job.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* CEO Testimonials */}
      <section className="bg-white py-14 lg:py-20">
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

      {/* Proof */}
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

      {/* Who I Work With */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            The seat Mahesh sits in.
          </h2>
          <div className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] space-y-4">
            <p className="text-navy italic mb-6">
              Most advisors have studied this problem. Mahesh has lived it.
            </p>
            <p>
              Public company Boards and Audit Committees. CEOs of B2B SaaS and
              enterprise tech companies between one hundred million and one
              billion-plus in revenue. Private equity Operating Partners
              overseeing portfolio company AI strategy.
            </p>
            <p>
              If you are running a ten-person seed stage startup, Mahesh is not your
              fit. If you are a Fortune 500 board member with an AI line item
              that is keeping you up at night, reach out.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* FAQ */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Common questions.
          </h2>
          <Accordion
            items={[
              {
                question: 'How long does a board advisory engagement typically run?',
                answer:
                  'Most engagements run between six and eighteen months. The length depends on the complexity of the roadmap and the pace at which the leadership team moves. We define scope and cadence in the first two weeks.',
              },
              {
                question: 'Is this ongoing or project-based?',
                answer:
                  'Both models are available. Board Advisory is typically ongoing with a defined monthly cadence. The C-Suite Alignment Sprint is a contained project with a fixed endpoint. Interim CTPO engagements run until the trajectory is fixed, which is usually three to six months.',
              },
              {
                question: 'How is this different from hiring a consulting firm?',
                answer:
                  'A consulting firm sends a team. Mahesh is the engagement. He has managed a billion-dollar revenue line and a six hundred million dollar P&L. He does not learn your business from a discovery deck. He has sat in the seat he is being asked to advise on.',
              },
              {
                question: 'Do you sign NDAs?',
                answer:
                  'Yes. Every engagement starts with a mutual NDA before any substantive conversation takes place.',
              },
              {
                question: 'Have you worked with companies in my industry?',
                answer:
                  "Mahesh's client base spans B2B SaaS, enterprise tech, healthcare technology, financial services, and e-commerce. If your question is whether he has seen your specific problem before, the answer is almost certainly yes.",
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
          <p className="font-body text-[14px] text-muted text-center mb-4">
            Mahesh takes a limited number of advisory engagements each year.
          </p>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-8">
            Fifteen minutes, video. Mahesh will tell you whether he can help. If
            he cannot, he will tell you who can.
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
