import type { Metadata } from 'next'
import Image from 'next/image'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'About Mahesh M. Thakur. Operator. Board Director. Executive Coach.',
  description:
    'Twenty years inside Microsoft, Amazon, Intuit, and GoDaddy. Stanford GSB Board Director. One of fifteen Master Certified Coaches in the world.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-6">
            Mahesh does this work because he has done the work.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70">
            Before he advised CEOs, he ran their job. Before he coached VPs, he
            was one.
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
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[20px] lg:text-[26px] font-semibold text-navy leading-tight mb-8">
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
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-display text-[20px] lg:text-[26px] font-semibold text-navy leading-tight mb-8">
                In 2021, Mahesh stepped out of the corporate chair.
              </h2>
              <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                <p>
                  He had run global teams. He had managed nine-figure budgets. And he
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
                  He left to work on that gap full time. That is what TIRA Strategic
                  Advisory exists to do.
                </p>
              </div>
            </div>
            <div className="relative min-h-[420px] lg:min-h-[520px]">
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
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[20px] lg:text-[26px] font-semibold text-navy leading-tight mb-12">
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
                Mahesh sits on boards and helps boards govern AI capital decisions at
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
                Mahesh is one of fifteen people in the world holding this designation
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
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-8">
            What People Say About Mahesh
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <GoldDivider />

      {/* How I Work */}
      <section className="bg-bg py-14 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[20px] lg:text-[26px] font-semibold text-navy leading-tight mb-8">
            Three things Mahesh brings to every engagement.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="border-t-2 border-gold pt-5">
              <div className="font-body text-[16px] font-semibold text-navy mb-2">
                Clarity.
              </div>
              <p className="font-body text-[15px] leading-[1.7] text-[#1A1A1A]">
                Mahesh helps senior leaders cut through complexity, identify the real business issue, and communicate their leadership agenda with precision.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-5">
              <div className="font-body text-[16px] font-semibold text-navy mb-2">
                Connection.
              </div>
              <p className="font-body text-[15px] leading-[1.7] text-[#1A1A1A]">
                He helps them build trust, alignment, and influence with boards, CEOs, peers, and teams so their leadership lands with greater impact.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-5">
              <div className="font-body text-[16px] font-semibold text-navy mb-2">
                Command.
              </div>
              <p className="font-body text-[15px] leading-[1.7] text-[#1A1A1A]">
                He helps them lead with the presence, judgment, and strategic authority required to operate at the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* CTA — An Invitation to Begin */}
      <section className="bg-bg py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-navy px-8 lg:px-14 py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="font-body text-[11px] uppercase tracking-[0.16em] text-gold mb-5">
                  An Invitation to Begin
                </div>
                <h2 className="font-display text-[22px] lg:text-[28px] font-bold text-white leading-tight mb-5">
                  Ready to elevate your leadership impact?
                </h2>
                <p className="font-body text-[16px] leading-[1.75] text-white/65">
                  If you are ready to explore what is possible, request a private discovery conversation. A first step toward transformative results.
                </p>
              </div>
              <div>
                <ContactForm buttonLabel="Request a Conversation" dark />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
