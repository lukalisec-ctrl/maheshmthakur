import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import ContactForm from '@/components/ContactForm'
import { ASSESSMENT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Mahesh M. Thakur | AI-Native Coaching for Leaders Who Are Ready for More',
  description:
    'Mahesh M. Thakur helps high-performing senior leaders build the presence, judgment, and influence required for bigger scope. AI-Native Coach. Top 100 Coach Globally.',
}

const INSIGHTS = [
  {
    title: 'Why High Performance Is No Longer Enough',
    excerpt:
      'At a certain level, the evaluation changes. Most leaders do not see it until they have already been passed over.',
    href: '/insights',
  },
  {
    title: 'The Invisible Bar: What Is Actually Holding You Back',
    excerpt: 'The gap between Director and VP is not a capability gap. It is a signal gap.',
    href: '/insights',
  },
  {
    title: 'How to Influence Senior Stakeholders Without Direct Authority',
    excerpt: 'Getting things done at this level requires moving people who do not report to you.',
    href: '/insights',
  },
]

const INVISIBLE_BAR_ITEMS = [
  'Executive presence',
  'Strategic communication',
  'Stakeholder influence',
  'Enterprise judgment',
  'Promotion readiness',
  'Confidence under pressure',
]

const INFLECTION_ROWS = [
  { moment: 'Bigger scope', nav: '"I am being asked to lead beyond my current role."' },
  { moment: 'Executive presence', nav: '"I need to show up with more clarity, confidence, and authority."' },
  { moment: 'Enterprise influence', nav: '"I need to influence senior stakeholders across functions and agendas."' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy min-h-[60vh] lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-3 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-12 lg:py-0">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-4">
            Top 100 Coach Globally &nbsp;|&nbsp; Stanford GSB Board Director &nbsp;|&nbsp; Master Certified Coach
          </div>
          <h1 className="font-display text-[32px] lg:text-[48px] font-bold text-white leading-tight mb-5">
            AI-Native Coaching for Leaders Who Are Ready for More.
          </h1>
          <p className="font-body text-[17px] leading-[1.75] text-white/70 mb-3">
            Delivering impact, influence, and executive presence at enterprise grade.
          </p>
          <p className="font-body text-[15px] leading-[1.75] text-white/60">
            A former Vice President at Microsoft, Amazon, Intuit, and GoDaddy, Mahesh M. Thakur now helps senior leaders navigate bigger scope, executive visibility, and high-stakes influence in the AI era.
          </p>
        </div>
        <div className="lg:col-span-2 relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/P2134653.jpeg"
            alt="Mahesh M. Thakur"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
      </section>

      <GoldDivider />

      {/* Credibility Metrics */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-bg border border-border p-8">
              <div className="font-display text-[48px] font-bold text-gold leading-none mb-2">100%</div>
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-navy mb-2">
                Value Rating
              </div>
              <p className="font-body text-[15px] leading-[1.7] text-muted">
                89.5% of keynote audiences rated the session inspiring and immediately relevant.
              </p>
            </div>
            <div className="bg-bg border border-border p-8">
              <div className="font-display text-[48px] font-bold text-gold leading-none mb-2">100%</div>
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-navy mb-2">
                Re-Hire Intent
              </div>
              <p className="font-body text-[15px] leading-[1.7] text-muted">
                88.4% of event organizers rated the session engaging, interactive, and worth repeating.
              </p>
            </div>
            <div className="bg-bg border border-border p-8">
              <div className="font-display text-[48px] font-bold text-gold leading-none mb-2">15</div>
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-navy mb-2">
                Worldwide
              </div>
              <p className="font-body text-[15px] leading-[1.7] text-muted">
                One of only 15 Master Certified Coaches globally in Marshall Goldsmith&apos;s Stakeholder Centered Coaching method.
              </p>
            </div>
            <div className="bg-navy p-8">
              <div className="font-display text-[48px] font-bold text-gold leading-none mb-2">$1B</div>
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-white mb-2">
                Revenue Delivered
              </div>
              <p className="font-body text-[15px] leading-[1.7] text-white/70">
                Core architect of the first $1 billion in Bing Ads revenue at Microsoft. Operator-level credibility no coach-only advisor can match.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Why Senior Leaders Work With Mahesh */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
                Why Senior Leaders Work With Mahesh
              </h2>
              <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                <p>
                  Mahesh brings the perspective of a former operator, product executive, AI leader, investor, and executive coach.
                </p>
                <p>
                  He has worked inside high-pressure technology organizations where leaders are expected to deliver results, manage ambiguity, influence stakeholders, and keep growing.
                </p>
                <p>At this level, performance matters. But performance alone is not enough.</p>
                <p>
                  The next level requires presence, judgment, trust, and communication that lands when the stakes are high.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/executive-coaching"
                  className="inline-block border border-navy text-navy px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  Work With Mahesh
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/images/mahesh-coaching.jpg"
                alt="Mahesh M. Thakur"
                width={600}
                height={700}
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Trusted At */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-4">
            Trusted at the Highest Levels of Enterprises
          </h2>
          <p className="font-body text-[16px] leading-[1.75] text-muted mb-10 max-w-2xl mx-auto">
            Senior leaders at Microsoft, Apple, Google, Meta, Samsung, NVIDIA, Adobe, and dozens of the world&apos;s most demanding technology organizations have worked with Mahesh.
          </p>
          <Image
            src="/images/client_logos.jpeg"
            alt="Client organizations"
            width={900}
            height={220}
            className="w-full max-w-4xl h-auto mx-auto"
          />
        </div>
      </section>

      <GoldDivider />

      {/* Partnering With Leaders */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-6">
            Partnering With Leaders at Critical Inflection Points
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            Mahesh works with high-performing leaders when performance alone is no longer enough.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-5 font-body text-[12px] uppercase tracking-[0.08em] text-left w-[200px]">
                    Moment
                  </th>
                  <th className="px-6 py-5 font-body text-[12px] uppercase tracking-[0.08em] text-left">
                    What the leader is navigating
                  </th>
                </tr>
              </thead>
              <tbody>
                {INFLECTION_ROWS.map((row, i) => (
                  <tr key={row.moment} className={`border-b border-border ${i % 2 === 0 ? 'bg-white' : 'bg-bg'}`}>
                    <td className="px-6 py-5 font-body font-semibold text-navy align-top">{row.moment}</td>
                    <td className="px-6 py-5 font-body text-[16px] italic text-[#1A1A1A]">{row.nav}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* The Leadership Bar */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-6">
                The Leadership Bar
              </h2>
              <div className="space-y-4 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                <p>
                  Most leaders are not held back because they lack intelligence, effort, or capability.
                </p>
                <p>
                  They get held back because the bar changes. At one level, leaders are rewarded for execution. At the next, they are evaluated on judgment, influence, presence, and trust. No one explains this shift. Leaders who do not see it get passed over. Leaders who do see it move ahead.
                </p>
                <p>Mahesh helps leaders cross that bar.</p>
              </div>
            </div>
            <div>
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-navy mb-5">
                What We Strengthen
              </div>
              <ul className="space-y-3">
                {INVISIBLE_BAR_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold font-semibold flex-shrink-0">—</span>
                    <span className="font-body text-[17px] text-[#1A1A1A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* The Leadership Assessment */}
      <section className="bg-navy py-14 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-white leading-tight mb-6">
            The Leadership Assessment
          </h2>
          <div className="space-y-4 font-body text-[17px] leading-[1.75] text-white/80 mb-10">
            <p>
              Find out what may be limiting your readiness for bigger scope, stronger influence, and higher-stakes leadership.
            </p>
            <p>Five questions. Five minutes. A clear picture of where you stand.</p>
          </div>
          <a
            href={ASSESSMENT_URL}
            className="inline-block bg-gold text-white px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-white hover:text-navy transition-colors"
          >
            Take the Assessment
          </a>
        </div>
      </section>

      <GoldDivider />

      {/* Latest Insights */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            The Latest From Mahesh
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {INSIGHTS.map((item) => (
              <div key={item.title} className="bg-bg border border-border p-8 flex flex-col gap-4">
                <h3 className="font-body text-[17px] font-semibold text-navy leading-snug">
                  {item.title}
                </h3>
                <p className="font-body text-[15px] leading-[1.7] text-muted flex-1">{item.excerpt}</p>
                <Link
                  href={item.href}
                  className="font-body text-[13px] text-gold underline decoration-gold mt-auto"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Final CTA Form */}
      <section className="bg-bg py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-navy px-8 lg:px-14 py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="w-8 h-[2px] bg-gold mb-5" />
                <h2 className="font-display text-[24px] lg:text-[28px] font-semibold text-white leading-tight mb-4">
                  Ready to Start the Conversation?
                </h2>
                <p className="font-body text-[15px] leading-[1.75] text-white/65">
                  If you are navigating bigger scope, executive presence, stakeholder influence, or a leadership transition, send a short note.
                </p>
              </div>
              <div>
                <ContactForm buttonLabel="Send Request" dark />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
