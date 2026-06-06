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


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy min-h-[60vh] lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-3 flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-12 lg:py-0">
          <h1 className="font-display text-[26px] lg:text-[40px] font-bold text-white leading-tight mb-5">
            Executive Leadership Through High-Stakes Transitions.
          </h1>
          <p className="font-body text-[17px] leading-[1.75] text-white/70 mb-3">
            Whether the organization is expanding, shrinking, or restructuring, transitions define leaders. Mahesh prepares them.
          </p>
          <p className="font-body text-[15px] leading-[1.75] text-white/60 mb-10">
            A former Vice President at Microsoft, Amazon, Intuit, and GoDaddy, Mahesh M. Thakur works with senior technology leaders from Director to C-Suite navigating the moments that define careers.
          </p>
          <div className="w-full">
            <div className="grid grid-cols-3 mb-4">
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/images/Stanford.png"
                  alt="Stanford GSB"
                  width={360}
                  height={116}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/images/MCC1.png"
                  alt="Master Certified Coach"
                  width={160}
                  height={160}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-20">
                <Image
                  src="/images/100coaches.png"
                  alt="100 Coaches"
                  width={160}
                  height={160}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <div className="flex items-center font-body text-[11px] uppercase tracking-[0.12em] text-gold">
              <div className="flex-1 text-center">Stanford GSB Board Director</div>
              <span className="px-2">|</span>
              <div className="flex-1 text-center">Master Certified Coach</div>
              <span className="px-2">|</span>
              <div className="flex-1 text-center">Top 100 Coach Globally</div>
            </div>
          </div>
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
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-10">
            Results at Scale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg border border-border p-8">
              <div className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-gold mb-4">Revenue Optimization</div>
              <div className="font-display text-[56px] font-bold text-navy leading-none mb-3">16%</div>
              <p className="font-body text-[15px] leading-[1.7] text-muted">
                Increase in Revenue Per Employee within 12 months across client organizations.
              </p>
            </div>
            <div className="bg-bg border border-border p-8">
              <div className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-gold mb-4">Execution Discipline</div>
              <div className="font-display text-[56px] font-bold text-navy leading-none mb-3">81%</div>
              <p className="font-body text-[15px] leading-[1.7] text-muted">
                Shifted organizational delivery from 23 percent to 81 percent on-time and on-budget.
              </p>
            </div>
            <div className="bg-navy p-8">
              <div className="font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-gold mb-4">Scale</div>
              <div className="font-display text-[56px] font-bold text-gold leading-none mb-3">$1B</div>
              <p className="font-body text-[15px] leading-[1.7] text-white/70">
                Core architect of the $1 billion Bing Ads revenue engine at Microsoft.
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
              <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-8">
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

      {/* The Leadership Bar + Assessment — combined */}
      <section className="bg-navy py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-white leading-tight mb-6">
                The Leadership Bar
              </h2>
              <div className="space-y-4 font-body text-[17px] leading-[1.75] text-white/75 mb-8">
                <p>
                  Most leaders are not held back because they lack intelligence, effort, or capability.
                </p>
                <p>
                  They get held back because the bar changes. At the next level, the evaluation shifts to judgment, influence, presence, and trust. No one explains this shift. Leaders who do not see it get passed over. Leaders who do see it move ahead.
                </p>
              </div>
              <ul className="space-y-2 mb-10">
                {INVISIBLE_BAR_ITEMS.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold font-semibold flex-shrink-0">—</span>
                    <span className="font-body text-[16px] text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:border-l lg:border-white/20 lg:pl-16">
              <div className="w-8 h-[2px] bg-gold mb-6" />
              <h3 className="font-display text-[20px] font-semibold text-white leading-tight mb-4">
                The Leadership Assessment
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-white/65 mb-8">
                Find out what may be limiting your readiness for bigger scope, stronger influence, and higher-stakes leadership. Five questions. Five minutes. A clear picture of where you stand.
              </p>
              <a
                href={ASSESSMENT_URL}
                className="inline-block bg-gold text-white px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-white hover:text-navy transition-colors"
              >
                Take the Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Latest Insights */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-12">
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
      <section className="bg-[#0d2240] py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <div className="font-body text-[11px] uppercase tracking-[0.16em] text-gold mb-5">
                An Invitation to Begin
              </div>
              <h2 className="font-display text-[22px] lg:text-[28px] font-semibold text-white leading-tight mb-5">
                Ready to Start the Conversation?
              </h2>
              <p className="font-body text-[16px] leading-[1.75] text-white/65">
                If you are navigating bigger scope, executive presence, stakeholder influence, or a leadership transition, send a short note. Mahesh reads every message personally.
              </p>
            </div>
            <div>
              <ContactForm buttonLabel="Send Request" dark />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
