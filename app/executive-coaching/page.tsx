import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCard from '@/components/TestimonialCard'
import Accordion from '@/components/Accordion'
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

const OUTCOMES = [
  {
    title: 'Executive presence that commands the room',
    body: 'Show up with the clarity, confidence, and authority that senior leaders trust and respond to.',
  },
  {
    title: 'Influence above and across',
    body: 'Move boards, CEOs, and cross-functional peers without positional authority.',
  },
  {
    title: 'Promotion readiness that is visible',
    body: 'Build the track record and perception that make the next step inevitable, not uncertain.',
  },
  {
    title: 'Clarity under pressure',
    body: 'Walk into a board review, a reorg, or a high-stakes conversation and come out having led it — not just survived it.',
  },
  {
    title: 'Visibility that is earned',
    body: 'The right people see your judgment, your work, and your readiness — before the opportunity is on the table.',
  },
  {
    title: 'AI-era leadership',
    body: 'Lead with authority as AI shifts who gets trusted, who gets promoted, and who gets asked to the table.',
  },
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

const FAQ_ITEMS = [
  {
    question: 'Who is this for?',
    answer:
      'Technology leaders from Director to C-Suite at firms like NVIDIA, Meta, Google, Apple, and high-growth companies. The common thread is not title. It is a leader who is ready to operate at a higher level and wants a direct, structured path to get there.',
  },
  {
    question: 'What makes this different from standard coaching?',
    answer:
      'Standard coaching is reflective. This is clinical and prescriptive. Mahesh is one of only 15 people globally designated as a Master Certified Coach in Stakeholder Centered Coaching, the world\'s premier methodology for measurable leadership results. Every engagement is a direct 1:1 with Mahesh. Nothing is delegated.',
  },
  {
    question: 'How is success measured?',
    answer:
      'Using the Marshall Goldsmith stakeholder framework, your growth is validated by the people you actually lead and work alongside. Not self-reported. Results are visible to the people who matter before the engagement ends.',
  },
  {
    question: 'Why is pricing not listed?',
    answer:
      'Every engagement is a bespoke strategic partnership built around your specific situation, goals, and trajectory. We begin with a confidential conversation to determine fit before any investment is discussed.',
  },
  {
    question: 'How do I find out if this is the right fit?',
    answer:
      'Send a short note through the form below. Mahesh reviews every inquiry personally. If there is a clear fit, you will be invited to a fifteen-minute call to assess alignment. No commitment required.',
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
            Request a Confidential Executive Leadership Strategy Session
          </p>
          <a
            href="#contact"
            className="flex-shrink-0 inline-block bg-white text-navy px-8 py-3 font-body font-semibold text-[11px] tracking-[0.18em] uppercase hover:bg-navy hover:text-white transition-colors"
          >
            Inquire Here
          </a>
        </div>
      </section>

      <GoldDivider />

      {/* What Leaders Gain */}
      <section className="bg-navy py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-4">
            What Changes
          </div>
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-white leading-tight mb-4">
            What shifts when you work with Mahesh.
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-white/60 mb-10">
            Private, tailored engagements built around what is live in the leader&apos;s world. No fixed curriculum.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {OUTCOMES.map((item) => (
              <div key={item.title} className="border-t-2 border-gold pt-5">
                <h3 className="font-body text-[16px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="font-body text-[15px] leading-[1.7] text-white/70">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What Clients Say */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-8">
            What Clients Say
          </div>
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

      {/* FAQ */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-10">
            Common Questions
          </h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <GoldDivider />

      {/* Final CTA Form */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="font-body text-[11px] uppercase tracking-[0.16em] text-gold mb-5">
                  An Invitation to Begin
                </div>
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
