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
  {
    title: 'Performance plateau',
    body: 'You keep delivering. The right people are not noticing. The rules have changed and no one said so.',
  },
  {
    title: 'Vague feedback',
    body: 'You have been told you are close. Close is not a roadmap. You need to know exactly what the gap is.',
  },
  {
    title: 'Influence ceiling',
    body: 'You can execute within your team. Moving people above you and across functions is harder than it should be.',
  },
  {
    title: 'Presence under pressure',
    body: 'You know what you want to say. In a room with senior stakeholders, something shifts and you lose the room.',
  },
  {
    title: 'Scope expansion',
    body: 'You are being asked to lead beyond what you have done before. You want to be genuinely ready.',
  },
  {
    title: 'Strategic visibility',
    body: 'Your work is strong. The people who matter are not seeing it the way you intend.',
  },
  {
    title: 'Promotion readiness',
    body: 'You are navigating a promotion cycle with no clear signal on what is actually being evaluated.',
  },
  {
    title: 'AI-era positioning',
    body: 'The landscape is shifting. You want to lead into it with confidence and clarity, not react from behind.',
  },
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
    body: 'Think, communicate, and decide well in the moments that matter most.',
  },
  {
    title: 'Strategic positioning',
    body: 'Ensure the right people see your work, your judgment, and your readiness for more.',
  },
  {
    title: 'AI-era leadership',
    body: 'Lead with confidence and relevance as technology reshapes what leadership requires at the top.',
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

const FAQ_ITEMS = [
  {
    question: 'Who is this coaching for?',
    answer:
      'Mahesh works with technology leaders from Director to C-Suite. The common thread is not title. It is a leader who is ready to operate at a higher level than they do today.',
  },
  {
    question: 'How long is the engagement?',
    answer:
      'Mahesh offers three-month and six-month options. Most clients who complete a three-month engagement renew because the results become visible before it ends.',
  },
  {
    question: 'How is this different from mentoring or consulting?',
    answer:
      'A mentor shares their experience. A consultant solves a defined problem. Coaching is a structured private engagement focused on how a leader thinks, operates, and shows up. The goal is permanent capability, not a single answer.',
  },
  {
    question: 'What support is available between sessions?',
    answer:
      'Leaders have access to Mahesh by email between sessions for real situations as they arise. Mahesh also does preparation and follow-up work around every session.',
  },
  {
    question: 'Is everything confidential?',
    answer:
      "Yes. Every engagement begins with a mutual NDA. Every conversation is strictly confidential. Nothing is shared with anyone, including the leader's organisation.",
  },
  {
    question: 'How does the process start?',
    answer:
      'Send a short note through the form below. If there is a clear fit, the team will be in touch to schedule a first conversation.',
  },
]

export default function ExecutiveCoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-6">
            The AI-Native Leadership Coach.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-8">
            Private coaching for technology leaders from Director to C-Suite. Building the presence, judgment, and influence required for bigger scope.
          </p>
          <div className="w-full mt-2">
            <div className="grid grid-cols-2 max-w-[240px] mb-3">
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
            <div className="flex items-center font-body text-[10px] uppercase tracking-[0.12em] text-gold max-w-[240px]">
              <div className="flex-1 text-center">Master Certified Coach</div>
              <span className="px-2">|</span>
              <div className="flex-1 text-center">Top 100 Coach Globally</div>
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
      <section className="bg-white py-14 lg:py-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {CHALLENGES.map((item) => (
              <div key={item.title} className="bg-white p-6">
                <h3 className="font-body text-[15px] font-semibold text-navy mb-2">{item.title}</h3>
                <p className="font-body text-[14px] leading-[1.7] text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What Leaders Gain */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-4">
            What Changes Through the Coaching
          </div>
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-4">
            What leaders gain from working with Mahesh.
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-muted mb-10">
            Private, tailored engagements built around what is live in the leader&apos;s world. No fixed curriculum.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {OUTCOMES.map((item) => (
              <div key={item.title} className="border-t-2 border-gold pt-5">
                <h3 className="font-body text-[16px] font-semibold text-navy mb-2">{item.title}</h3>
                <p className="font-body text-[15px] leading-[1.7] text-[#1A1A1A]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What Clients Say */}
      <section className="bg-white py-14 lg:py-20">
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
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-10">
            Common Questions
          </h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <GoldDivider />

      {/* Final CTA Form */}
      <section className="bg-bg py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-navy px-8 lg:px-14 py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="font-body text-[11px] uppercase tracking-[0.16em] text-gold mb-5">
                  An Invitation to Begin
                </div>
                <h2 className="font-display text-[22px] lg:text-[26px] font-semibold text-white leading-tight mb-4">
                  Ready to elevate your leadership impact?
                </h2>
                <p className="font-body text-[15px] leading-[1.75] text-white/65">
                  If you are preparing for bigger scope, navigating a promotion cycle, or working on your presence and influence as a senior leader, request a private discovery conversation.
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
