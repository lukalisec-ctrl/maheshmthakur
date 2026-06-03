import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'About Mahesh M. Thakur. Operator. Board Director. Executive Coach.',
  description:
    'Twenty years inside Microsoft, Amazon, Intuit, and GoDaddy. Stanford GSB Board Director. One of fifteen Master Certified Coaches in the world.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-24">
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-6">
            I do this work because I have done the work.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70">
            Before I advised CEOs, I ran their job. Before I coached VPs, I was
            one.
          </p>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/mahesh-about.jpg"
            alt="Mahesh M. Thakur"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Operator Years */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            The operating years.
          </h2>

          <div className="space-y-10">
            <div>
              <div className="font-display text-[22px] font-bold text-gold mb-3">
                Microsoft.
              </div>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I was one of the first Product Managers in what is now Microsoft
                AI. I helped launch Bing Search and Bing Ads. The team I worked
                on delivered the first billion dollars in revenue for Bing Ads.
                I sat in rooms with Bill Gates and Satya Nadella while it was
                happening.
              </p>
            </div>

            <div>
              <div className="font-display text-[22px] font-bold text-gold mb-3">
                Amazon.
              </div>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I held responsibility for forty percent of Amazon Marketplace
                units.
              </p>
            </div>

            <div>
              <div className="font-display text-[22px] font-bold text-gold mb-3">
                Intuit.
              </div>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I drove nineteen percent SaaS growth in a year most teams did
                not grow at all.
              </p>
            </div>

            <div>
              <div className="font-display text-[22px] font-bold text-gold mb-3">
                GoDaddy.
              </div>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I managed a six hundred million dollar P&amp;L. We ran more
                than a thousand experiments in two years. We shifted on-time
                delivery from twenty three percent to eighty one percent.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { company: 'Microsoft', metric: '$1B', label: 'Revenue' },
              { company: 'GoDaddy', metric: '$600M', label: 'P&L Managed' },
              { company: 'Amazon', metric: '40%', label: 'Marketplace' },
              { company: 'Intuit', metric: '19%', label: 'SaaS Growth' },
            ].map((item) => (
              <div key={item.company} className="border-t-2 border-gold pt-5">
                <div className="font-body text-[11px] uppercase tracking-[0.14em] text-gold mb-2">
                  {item.company}
                </div>
                <div className="font-display text-[32px] font-bold text-navy leading-none mb-2">
                  {item.metric}
                </div>
                <div className="font-body text-[12px] uppercase tracking-[0.08em] text-muted">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Why I Left */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            In 2021 I stepped out of the corporate chair.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>
              I had run global teams. I had managed nine-figure budgets. And I
              had watched too many smart leaders fail at the exact same moment
              in their career for the exact same reasons.
            </p>
            <p>
              Talented Directors getting stuck. Capable VPs missing the
              promotion. CEOs approving AI budgets that never showed up in the
              P&amp;L. Boards asking the right questions and getting the wrong
              answers.
            </p>
            <p>
              I left to work on that gap full time. That is what TIRA Strategic
              Advisory exists to do.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Credentials */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            The pedigree that matters.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gold mb-3">
                Stanford GSB
              </div>
              <h3 className="font-body text-[18px] font-semibold text-navy mb-3">
                Stanford GSB Certified Board Director.
              </h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I sit on boards and I help boards govern AI capital decisions at
                the highest level.
              </p>
            </div>
            <div>
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gold mb-3">
                Master Certified Coach
              </div>
              <h3 className="font-body text-[18px] font-semibold text-navy mb-3">
                Master Certified Coach.
              </h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I am one of fifteen people in the world holding this designation
                in Marshall Goldsmith&apos;s Stakeholder Centered Coaching
                method.
              </p>
              <p className="font-body text-[14px] leading-[1.75] text-muted italic mt-3">
                There are roughly five million certified coaches worldwide.
                Fifteen hold this designation.
              </p>
            </div>
            <div>
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gold mb-3">
                100 Coaches
              </div>
              <h3 className="font-body text-[18px] font-semibold text-navy mb-3">
                100 Coaches Member.
              </h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                Selected from eighteen thousand global applicants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* About Testimonials */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-8">
            What People Say About Mahesh
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Mahesh is sharp, wise, funny, highly accomplished, and incredibly knowledgeable. His enthusiasm for your team's potential is infectious. I value his candor, his wisdom, and his uncanny ability to say precisely what you need to hear at exactly the right moment. My only regret is not hiring him earlier."
              name="Monisha Kanoth"
              title="Senior Data Engineering Manager"
              company="Apple"
            />
            {/* PHOTO SLOT: Add a photo of Mahesh here — e.g. mahesh-about-2.jpg or similar */}
            <div className="bg-border flex items-center justify-center min-h-[300px] lg:min-h-full">
              <span className="font-body text-[13px] uppercase tracking-[0.08em] text-muted">
                Photo coming soon
              </span>
            </div>
            <TestimonialCard
              quote="Mahesh brings a rich perspective as a business leader, technologist, and coach. He humanizes and simplifies complex situations. It is very hard to find an executive coach who has been there and done that."
              name="Hyo Jung Song"
              title="Vice President of Mobile"
              company="Samsung"
            />
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* How I Work */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Three things I bring to every engagement.
          </h2>
          <div className="space-y-10">
            <div>
              <div className="font-body text-[17px] font-semibold text-navy mb-3">
                I have managed the budget.
              </div>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I have run a six hundred million dollar P&amp;L. I know what a
                real ROI conversation feels like. I do not pretend to understand
                fiduciary pressure. I have lived inside it.
              </p>
            </div>
            <div>
              <div className="font-body text-[17px] font-semibold text-navy mb-3">
                I have invented the product.
              </div>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I hold two USPTO patents. I have shipped AI products at scale. I
                do not learn about technology from press releases.
              </p>
            </div>
            <div>
              <div className="font-body text-[17px] font-semibold text-navy mb-3">
                I sit on the other side of the table.
              </div>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I am a Stanford-certified Board Director. I have governed
                enterprises through volatility. When I advise a Board, I know
                exactly what the seat feels like.
              </p>
            </div>
            <div>
              <div className="font-body text-[17px] font-semibold text-navy mb-3">
                I have stood on the stage.
              </div>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                I have delivered keynotes to Fortune 100 leadership teams,
                executive summits, and Boards. The same clarity I bring to the
                boardroom, I bring to the stage.
              </p>
              <div className="mt-3">
                <Link
                  href="/speaking"
                  className="font-body text-[14px] text-gold underline decoration-gold"
                >
                  See speaking topics →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Personal */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-6">
            The other things.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>Home is the Bay Area, where my wife and daughters keep the perspective honest.</p>
            <p>Reading covers a lot of territory: strategy, behavioral psychology, organizational design, emerging technology. Beyond the desk, there are weights to lift, meals to cook, and travel taken with intention rather than habit.</p>
            <p>On the side: two USPTO patents, active board seats, and early investments in technology companies. The best clients tend to be the ones who have built something genuinely full outside their titles. That fullness is what carries people through the hardest moments of the work.</p>
            <p>The work matters most when the rest of it is in order.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-navy py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="font-body text-[18px] font-semibold uppercase tracking-[0.08em] text-white mb-8">
            Let&apos;s talk.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/advisory"
              className="bg-white text-navy px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors"
            >
              For Boards and CEOs
            </Link>
            <Link
              href="/executive-coaching"
              className="border border-white text-white px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
            >
              For VPs and Directors
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
