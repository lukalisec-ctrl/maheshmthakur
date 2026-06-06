import type { Metadata } from 'next'
import Image from 'next/image'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import ContactForm from '@/components/ContactForm'
import { BOOK_A_CALL_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Mahesh M. Thakur. Operator. Board Director. Executive Coach.',
  description:
    'Twenty years inside Microsoft, Amazon, Intuit, and GoDaddy. Stanford GSB Board Director. One of fifteen Master Certified Coaches in the world.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-6">
            From operator to AI-native coach.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-3">
            Before he coached leaders through the hardest transitions of their careers, he had navigated every one of them himself.
          </p>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            Before he advised boards on AI strategy, he had already built the products those boards are now trying to fund.
          </p>
          <div>
            <a
              href={BOOK_A_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold text-gold px-6 py-2.5 font-body text-[11px] font-medium tracking-[0.16em] uppercase hover:bg-gold hover:text-white transition-colors"
            >
              Book a Call with Mahesh
            </a>
          </div>
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
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-8">
            The operating years.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                company: 'Microsoft',
                metric: '$1B',
                label: 'Revenue',
                body: 'One of the first PMs in what is now Microsoft AI. Launched Bing Search and Bing Ads. Delivered the first billion dollars in Bing Ads revenue.',
              },
              {
                company: 'Amazon',
                metric: '40%',
                label: 'Marketplace',
                body: 'Held responsibility for forty percent of Amazon Marketplace units.',
              },
              {
                company: 'Intuit',
                metric: '19%',
                label: 'SaaS Growth',
                body: 'Drove nineteen percent SaaS growth in a year most teams did not grow at all.',
              },
              {
                company: 'GoDaddy',
                metric: '$600M',
                label: 'P&L Managed',
                body: 'Managed a six hundred million dollar P&L. Over a thousand experiments in two years.',
              },
            ].map((item) => (
              <div key={item.company} className="border-t-2 border-gold pt-5">
                <div className="font-body text-[11px] uppercase tracking-[0.14em] text-gold mb-2">
                  {item.company}
                </div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display text-[40px] font-bold text-navy leading-none">{item.metric}</span>
                  <span className="font-body text-[12px] uppercase tracking-[0.08em] text-muted">{item.label}</span>
                </div>
                <p className="font-body text-[15px] leading-[1.7] text-[#1A1A1A]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Why I Left */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-8">
                In 2021, Mahesh stepped out of the corporate chair.
              </h2>
              <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                <p>
                  He had run global teams. He had managed nine-figure budgets. And he
                  had watched too many smart leaders fail at the exact same moment
                  in their career for the exact same reasons.
                </p>
                <p>
                  Directors getting passed over during restructurings. VPs taking on expanded scope with no map for the new level. CEOs approving eight-figure AI budgets that never showed up in the P&amp;L. Different companies, different titles, the same moment.
                </p>
                <p>
                  He left to close that gap. Directly, one leader at a time.
                </p>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:min-h-[360px]">
              <Image
                src="/images/mahesh-hero.jpg"
                alt="Mahesh M. Thakur"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Credentials */}
      <section className="bg-navy py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-white leading-tight mb-10">
            Credentials built in rooms, not classrooms.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-14">
            <div className="border-t border-white/20 pt-6">
              <h3 className="font-body text-[18px] font-semibold text-white mb-3">
                Stanford GSB Certified Board Director.
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-white/70">
                Mahesh sits on boards and helps boards govern AI capital decisions at
                the highest level.
              </p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <h3 className="font-body text-[18px] font-semibold text-white mb-3">
                Master Certified Coach.
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-white/70">
                Mahesh is one of fifteen people in the world holding this designation
                in Marshall Goldsmith&apos;s Stakeholder Centered Coaching method.
              </p>
              <p className="font-body text-[14px] leading-[1.75] text-white/40 italic mt-3">
                There are roughly five million certified coaches worldwide.
                Fifteen hold this designation.
              </p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <h3 className="font-body text-[18px] font-semibold text-white mb-3">
                100 Coaches Member.
              </h3>
              <p className="font-body text-[16px] leading-[1.75] text-white/70">
                Selected from eighteen thousand global applicants.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 mb-5">
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
      </section>

      <GoldDivider />

      {/* About Testimonials */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-8">
            From the leaders themselves
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <GoldDivider />

      {/* The Framework */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-6">
            The Leadership Bar Framework™
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-6">
            At every level of leadership, the evaluation shifts. The skills that got you here are no longer the ones being measured. The bar moves to presence, judgment, influence, and trust. Most leaders never see it until they have already been passed over.
          </p>
          <p className="font-body text-[17px] leading-[1.75] text-muted">
            The Leadership Bar Framework is the system Mahesh built to close that gap. It is the foundation of every coaching engagement, every forum cohort, and every keynote.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* CTA — An Invitation to Begin */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="font-body text-[11px] uppercase tracking-[0.16em] text-gold mb-5">
                  An Invitation to Begin
                </div>
                <h2 className="font-display text-[22px] lg:text-[28px] font-bold text-navy leading-tight mb-5">
                  Working with someone who has been there starts with a conversation.
                </h2>
                <p className="font-body text-[16px] leading-[1.75] text-muted">
                  If you are navigating a transition and want to work with someone who has been on the other side of that table, request a private discovery conversation.
                </p>
              </div>
              <div>
                <ContactForm buttonLabel="Request a Conversation" />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
