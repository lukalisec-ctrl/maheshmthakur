import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import StatBlock from '@/components/StatBlock'
import TestimonialCard from '@/components/TestimonialCard'
import Accordion from '@/components/Accordion'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Executive Coaching for VPs and Directors. Get to the C-Suite.',
  description:
    'Six-month one-on-one coaching for Directors and VPs in tech who are stuck at the door of the executive suite. Clients at Meta, Google, NVIDIA, Apple, and more.',
}

const COACHING_STATS = [
  {
    number: '529%',
    label: 'Coaching ROI',
    description: 'Return on executive coaching investment. Source: MetrixGlobal research.',
  },
  {
    number: '5–15',
    label: 'Hours Reclaimed Weekly',
    description: 'Hours per week reclaimed by coached leaders through better decision-making and delegation.',
  },
  {
    number: '$250K',
    label: 'Retention Value',
    description: 'Value saved per high-performer retained through targeted coaching intervention.',
  },
]

const COACHING_TESTIMONIALS = [
  {
    quote:
      'Hiring Mahesh will amplify your strengths and equip you with practical tools to lead at a higher level.',
    name: 'Varun Vontimitta',
    title: 'Partner Engineering Leader',
    company: 'Meta',
  },
  {
    quote:
      'Leadership in this era requires you to uplevel yourself and your teams. Every engineering leader focused on building executive presence should work with Mahesh.',
    name: 'Vijay Kristipati',
    title: 'Head of Engineering',
    company: 'Google',
  },
  {
    quote:
      'Mahesh helped me establish myself as a visionary leader in my organization. He balanced asking the right questions and giving advice, and provided the best strategies to elevate my org and business performance.',
    name: 'Nivedita Ojha',
    title: 'Vice President Product Management',
    company: 'Autodesk',
  },
  {
    quote:
      'Thanks to Mahesh, I am now a part of a Fortune 5 company. Working with Mahesh has been life-changing for me.',
    name: 'Shikha Jain',
    title: 'Machine Learning Product Manager',
    company: 'Apple',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How long is the engagement?',
    answer:
      'Six months. I do not offer single sessions or quarterly retainers. The full transformation needs the full time.',
  },
  {
    question: 'Is this you, or do I get handed to an associate?',
    answer: 'Me. Every session.',
  },
  {
    question: 'How many clients do you take at once?',
    answer:
      'A limited number per quarter. I cannot do the depth I promise at scale.',
  },
  {
    question: 'What if I have been told I am not ready by my manager?',
    answer:
      'That is exactly the conversation we start with. We map why, and we fix the specific gap.',
  },
  {
    question: 'Do we cover AI?',
    answer:
      'Every conversation runs through the AI lens. Your career is going to be shaped by what AI does to org charts. We talk about that.',
  },
  {
    question: 'How do I measure progress?',
    answer:
      'We use the Marshall Goldsmith Stakeholder Centered Coaching framework. Your stakeholders, not your feelings, validate the growth.',
  },
]

export default function ExecutiveCoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-24">
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-6">
            You have been told you are not ready for VP. Nobody told you why.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            Six months. One on one. Designed to fix the exact thing that is
            keeping you out of the room.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-block bg-white text-navy px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors"
            >
              Request a Confidential Call
            </Link>
          </div>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/mahesh-coaching.jpg"
            alt="Executive coaching session"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* The Real Problem */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            The gap between Director and VP is not what you think.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>
              You are hitting your numbers. You are shipping good work. You are
              getting decent feedback on your reviews. And every time the VP
              role opens up, it goes to somebody else, and the only explanation
              you get is something about presence or readiness.
            </p>
            <p>
              The gap is real. It is not random. It is not about you working
              harder.
            </p>
            <p>
              The gap is about three things. How you show up in a room of
              executives. How you talk about money. And how you handle a re-org
              or a high-stakes pivot without losing your footing.
            </p>
            <p>
              These three things are learnable. They are not what your manager
              wants to talk to you about. They are what we work on.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* The Six Months */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            One hundred and eighty days. Three phases. A clear plan.
          </h2>
          <div className="space-y-12">
            {[
              {
                phase: '1',
                title: 'Days one to forty-five.',
                heading: 'How you show up.',
                body: 'We start by auditing what people see when you walk into a room. Your physical presence. How you handle complex data in front of senior leaders. How you read tension during a quarterly review. How you align your personal story with what your organization actually needs from a VP.',
              },
              {
                phase: '2',
                title: 'Days forty-six to one-twenty.',
                heading: 'How you run a business.',
                body: 'You stop managing tasks and start orchestrating velocity. We rebuild how you run meetings, how you make decisions, and how you translate engineering work into P&L language. By the end of this phase, you can sit across from a CFO and hold your own.',
              },
              {
                phase: '3',
                title: 'Days one-twenty-one to one-eighty.',
                heading: 'How you navigate politics.',
                body: 'This is the phase nobody else teaches. How to build trust with peers who quietly compete with you. How to lead a re-org without bleeding momentum. How to lock in your reputation as the kind of operator who belongs at the table.',
              },
            ].map((p) => (
              <div key={p.phase} className="flex gap-8 items-start">
                <div className="font-display text-[56px] font-bold text-gold leading-none flex-shrink-0 w-12">
                  {p.phase}
                </div>
                <div>
                  <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-muted mb-1">
                    {p.title}
                  </div>
                  <h3 className="font-body text-[20px] font-semibold text-navy mb-3">
                    {p.heading}
                  </h3>
                  <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Method */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            Marshall Goldsmith Stakeholder Centered Coaching.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>
              This is the most validated executive coaching method in the world.
              It does not depend on me liking you or you liking me. It depends
              on measurable change observed by the actual stakeholders you work
              with.
            </p>
            <p>
              I am one of fifteen people in the world holding the Master
              Certified Coach designation in this method.
            </p>
            <p>
              The reason this works for promotions is that your stakeholders are
              the ones who decide whether you are ready. We measure change where
              it counts.
            </p>
            <p>The results are not opinion. They are tracked.</p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Who This Is For */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            The clients I take.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>
              Directors and Senior Directors in tech. VPs in tech who are about
              to step into SVP. Founders running fast-growth companies who
              suddenly find themselves managing executives instead of building
              product.
            </p>
            <p>
              Most of my current clients are at Meta, Google, NVIDIA, Apple,
              Microsoft, Amazon, Adobe, and unicorn startups. They are not
              failing. They are good operators about to become great executives.
            </p>
            <p>
              If you are early career and trying to figure out what kind of
              leader you want to be, this is not the right program for you. I
              work with people who already know what they want and need help
              removing the last few obstacles.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What This Is Not */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            What you will not get.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>
              You will not get a generic coach who asks &ldquo;and how does that
              make you feel&rdquo; for an hour every two weeks.
            </p>
            <p>
              You will not get a curriculum I deliver to a hundred clients at
              once.
            </p>
            <p>
              You will not get me handing you off to a junior associate. Every
              session is with me directly.
            </p>
            <p>
              You will not get vague encouragement. I will tell you what I see,
              including the things your manager will not say out loud.
            </p>
          </div>

          <div className="my-12">
            <GoldDivider />
          </div>

          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            What you will get.
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            A direct read on exactly what is keeping you out of the room. A
            clear plan to fix it. And someone who has sat in the executive seat
            telling you the truth your manager will not say out loud.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* Coaching Proof Numbers */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-8">
            The Return on Coaching
          </div>
          <StatBlock stats={COACHING_STATS} theme="dark" />
        </div>
      </section>

      <GoldDivider />

      {/* Testimonials */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {COACHING_TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name + t.company} {...t} />
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* FAQ */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-10">
            Common questions.
          </h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <GoldDivider />

      {/* CTA Footer with Form */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h3 className="font-body text-[18px] font-semibold uppercase tracking-[0.08em] text-navy mb-3">
            Request a call.
          </h3>
          <p className="font-body text-[14px] text-muted mb-6">
            I take a limited number of coaching clients each quarter. Current
            quarter has availability.
          </p>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            Fifteen minutes. I will tell you if the program is the right fit.
            No sales pitch.
          </p>
          <ContactForm defaultService="Coaching for VPs or Directors" />
        </div>
      </section>
    </>
  )
}
