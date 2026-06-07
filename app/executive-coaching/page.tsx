import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCard from '@/components/TestimonialCard'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Executive Coaching | Mahesh M. Thakur',
  description:
    'Private coaching for technology leaders from Director to C-Suite. Build the presence, judgment, and influence required for bigger scope.',
}

const CHALLENGES = [
  '"My company just reorganized. My scope changed overnight and I am figuring out who I need to be in this new structure."',
  '"We went through layoffs. I survived, but now I am being asked to lead a larger team through a strategy I did not write."',
  '"The company is growing fast. I am being asked to lead at a scale I have never operated at before."',
  '"I know what I want to say. In a room with senior stakeholders, something shifts and I lose the room."',
  '"I have been told I am close. But close is not a roadmap. I need to know exactly what the gap is."',
  '"I am navigating a promotion cycle with no clear signal on what is actually being evaluated."',
]


const COACHING_TESTIMONIALS = [
  {
    quote:
      'Mahesh is the rare coach who does not try to change who you are. He amplifies your strengths and equips you with practical tools to lead at a higher level.',
    name: 'Varun Vontimitta',
    title: 'Partner Engineering Leader',
    company: 'Meta',
  },
  {
    quote:
      'Every engineering leader focused on building executive presence should work with Mahesh. The impact of your work shifts from being competent to achieving true excellence.',
    name: 'Vijay Kristipati',
    title: 'Head of Engineering',
    company: 'Google',
  },
  {
    quote:
      'Thanks to Mahesh, I am now a part of a Fortune 5 company. Working with Mahesh has been life-changing for me.',
    name: 'Shikha Jain',
    title: 'Machine Learning PM',
    company: 'Apple',
  },
]

const DIFFERENTIATORS = [
  {
    title: 'He ran the job before he coached it.',
    body: 'Former Vice President at Microsoft, Amazon, Intuit, and GoDaddy. Mahesh has managed nine-figure P&Ls, built billion-dollar products, and led global teams through every kind of transition. He coaches from direct experience, not theory.',
  },
  {
    title: 'One of fifteen people in the world.',
    body: 'Mahesh is one of fifteen people worldwide to hold the Master Certified Coach designation in Marshall Goldsmith\'s Stakeholder Centered Coaching. Of the roughly five million certified coaches in the world, fifteen carry this designation.',
  },
  {
    title: 'Selected from eighteen thousand.',
    body: 'Mahesh was selected from 18,000 global applicants to join Marshall Goldsmith\'s 100 Coaches, the most selective leadership development community in the world.',
  },
  {
    title: 'AI leader before AI was a strategy.',
    body: 'One of the first product leaders inside what is now Microsoft AI. Featured in Forbes and Inc. for pioneering AI methodologies now used by Meta and Spotify. His perspective on AI leadership was built in the field, not derived from it.',
  },
  {
    title: 'Results that are measured, not claimed.',
    body: 'Coaching engagements have produced a 16% increase in Revenue Per Employee and shifted organizational delivery from 23% to 81% on-time and on-budget. Every result is validated by the stakeholders who work alongside the leader, not reported by the leader themselves.',
  },
  {
    title: 'The organizations that trust him.',
    body: 'Senior leaders at Microsoft, Apple, Google, Meta, Samsung, NVIDIA, Adobe, and dozens of the world\'s most demanding technology organizations have worked with Mahesh. Many come through referral from leaders who have worked with him before.',
  },
]

const PHASES = [
  {
    number: '01',
    framework: 'See the Bar',
    title: 'The Executive Presence Audit',
    items: [
      'How you show up physically and mentally in high-stakes rooms',
      'Reading the situation before you speak',
      'Aligning your message with what senior leaders actually care about',
    ],
  },
  {
    number: '02',
    framework: 'Close the Gap',
    title: 'Operational Command',
    items: [
      'Making decisions at the pace the organization requires',
      'Running meetings that move things forward',
      'Translating your work into business and financial outcomes',
    ],
  },
  {
    number: '03',
    framework: 'Beyond the Bar',
    title: 'Political Navigation and Scaling',
    items: [
      'Influencing people who do not report to you',
      'Leading your team through change without losing momentum',
      'Making your readiness for the next level visible to the people who decide',
    ],
  },
]


export default function ExecutiveCoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-6">
            The AI-Native Leadership Coach.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-8">
            When organizations expand, shrink, or restructure, the rules of leadership change. Mahesh coaches technology leaders from Director to C-Suite through the transitions that define careers.
          </p>
          <div className="w-full mt-2">
            <div className="grid grid-cols-2 gap-10 mb-3">
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/images/MCC1.png"
                  alt="Master Certified Coach"
                  width={160}
                  height={160}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center h-16">
                <Image
                  src="/images/100coaches.png"
                  alt="100 Coaches"
                  width={160}
                  height={160}
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 font-body text-[10px] uppercase tracking-[0.12em] text-gold">
              <div className="text-center whitespace-nowrap">Master Certified Coach</div>
              <div className="text-center whitespace-nowrap">Top 100 Coach Globally</div>
            </div>
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

      <GoldDivider />

      {/* The Challenges */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-4">
            Leadership Challenges
          </div>
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-4">
            From high performer to recognized leader.
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-muted mb-10">
            The rules change at a certain level. Most leaders find out too late. These are the moments that bring leaders to Mahesh.
          </p>
          <div className="space-y-5">
            {CHALLENGES.map((quote) => (
              <p key={quote} className="font-body text-[17px] italic text-[#1A1A1A] border-l-2 border-border pl-5">
                {quote}
              </p>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* The Program */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-4">
            The Leadership Bar Framework™
          </h2>
          <p className="font-body text-[16px] leading-[1.75] text-muted mb-12">
            Most leaders are held back not by capability, but by a bar they cannot see. The Leadership Bar Framework was built to change that. It starts by naming exactly what is being evaluated at the next level. Then it builds the capabilities that make the leap possible: presence, judgment, influence, and trust. Every engagement moves through three phases. First, diagnosing the real gap. Then closing it. Then leading with the authority that belongs at the next level.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {PHASES.map((phase) => (
              <div key={phase.number} className="border-t border-border pt-6">
                <div className="font-display text-[40px] font-bold text-gold leading-none mb-3">
                  {phase.number}
                </div>
                <h3 className="font-body text-[18px] font-semibold text-navy mb-1">
                  {phase.framework}
                </h3>
                <div className="font-body text-[12px] uppercase tracking-[0.1em] text-muted mb-5">
                  {phase.title}
                </div>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-gold font-semibold flex-shrink-0 mt-0.5">—</span>
                      <span className="font-body text-[14px] leading-[1.6] text-[#1A1A1A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-gold py-7">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-5">
          <p className="font-body text-[15px] font-semibold uppercase tracking-[0.18em] text-white text-center lg:text-left">
            Request a Confidential Leadership Strategy Session
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 inline-block bg-white text-navy px-8 py-3 font-body font-semibold text-[11px] tracking-[0.18em] uppercase hover:bg-navy hover:text-white transition-colors"
          >
            Inquire Here
          </a>
        </div>
      </section>

      {/* What Sets Mahesh Apart */}
      <section className="bg-navy py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-white leading-tight mb-10">
            What sets Mahesh apart.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            {DIFFERENTIATORS.map((item) => (
              <div key={item.title} className="border-t border-white/20 pt-5">
                <h3 className="font-body text-[15px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="font-body text-[15px] leading-[1.7] text-white/60">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What Clients Say */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {COACHING_TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="font-body text-[14px] text-gold underline decoration-gold">
              See more client stories →
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Final CTA Form */}
      <section id="contact" className="bg-bg py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div>
              <div className="w-8 h-[2px] bg-gold mb-6" />
              <h2 className="font-display text-[22px] lg:text-[26px] font-semibold text-navy leading-tight mb-4">
                Every transition starts with one conversation.
              </h2>
              <p className="font-body text-[15px] leading-[1.75] text-muted">
                If you are leading through a reorganization, taking on expanded scope, or navigating the transition to the next level, request a private discovery conversation.
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
