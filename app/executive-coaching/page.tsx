import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCard from '@/components/TestimonialCard'
import Accordion from '@/components/Accordion'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'The AI-Native Leadership Coach.',
  description:
    'Private one-on-one coaching for technology leaders at every level — from first-time managers to C-Suite — building presence, judgment, and influence for bigger scope.',
}

const WORK_ITEMS = [
  {
    title: 'Performing under pressure without losing yourself',
    body: 'The steadiness that holds when the stakes are highest — and the room is full of senior stakeholders.',
  },
  {
    title: 'Influencing without authority',
    body: 'Moving people who do not report to you, do not owe you anything, and have their own agendas.',
  },
  {
    title: 'Showing up as a leader, not just a deliverer',
    body: 'Being seen by the right people as ready for more — not just trusted by your team.',
  },
  {
    title: 'Communicating at the right altitude',
    body: 'Different calibration for different rooms. Not a different identity — a different altitude.',
  },
  {
    title: 'Navigating difficult environments without absorbing them',
    body: 'Operating well inside hard environments while staying strategically clear on whether to stay.',
  },
  {
    title: 'Building the track record that makes promotion inevitable',
    body: 'Promotion decisions are made before the formal process begins. Mahesh works on closing that gap deliberately.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Who is this coaching for?',
    answer:
      'Mahesh works with technology leaders at every level, from first-time managers to C-Suite executives. The common thread is not title. It is a leader who is ready to operate at a higher level than they do today.',
  },
  {
    question: 'How long is the engagement?',
    answer:
      "Engagement length is discussed during the first conversation and depends on the leader's situation and goals. Mahesh offers three-month and six-month options. Most clients who complete a three-month engagement renew because the results become visible before it ends.",
  },
  {
    question: 'How is this different from mentoring or consulting?',
    answer:
      'A mentor shares their experience. A consultant solves a defined problem. Coaching is different. It is a structured private engagement focused on how a leader thinks, operates, and shows up. The goal is permanent capability, not a single answer.',
  },
  {
    question: 'What support is available between sessions?',
    answer:
      'Leaders have access to Mahesh by email between sessions for real situations as they arise. For urgent matters, text works. Mahesh also does preparation and follow-up work around every session, not just the session itself.',
  },
  {
    question: 'Is everything confidential?',
    answer:
      "Yes. Every engagement begins with a mutual NDA. Every conversation is strictly confidential. Nothing is shared with anyone, including the leader's organisation.",
  },
  {
    question: 'How does the process start?',
    answer:
      "Send a short note through the form below. Mahesh's team reviews every inquiry personally. If there is a clear fit, they will be in touch to schedule a first conversation.",
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

const TABLE_ROWS = [
  {
    situation: 'Leadership transition',
    nav: '"I have just moved into a management role and the rules are completely different from what got me here."',
  },
  {
    situation: 'Promotion readiness',
    nav: '"I have been told I am close but not ready. I need to understand exactly what that means."',
  },
  {
    situation: 'Bigger scope',
    nav: '"I am being asked to lead beyond what I have done before and I want to be genuinely ready."',
  },
  {
    situation: 'Enterprise influence',
    nav: '"I can deliver results within my team. Influencing across functions and up the chain is harder."',
  },
  {
    situation: 'Executive presence',
    nav: '"I know what I need to say. I am not always landing it the way I intend to."',
  },
]

export default function ExecutiveCoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-6">
            Top 100 Coach Globally &nbsp;|&nbsp; Master Certified Coach &nbsp;|&nbsp; Trusted Advisor
          </div>
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-8">
            The AI-Native Leadership Coach.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-8">
            Mahesh helps high-performing technology leaders build the presence, judgment, and influence required for bigger scope.
          </p>
          <div>
            <Link
              href="/about-us"
              className="inline-block border border-white/40 text-white/80 px-8 py-4 font-body text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Read Mahesh&apos;s Full Bio Here
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

      <GoldDivider />

      {/* Who This Is For + The Leadership Bar — combined */}
      <section id="who-this-is-for" className="bg-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-6">
            Who Mahesh Works With
          </h2>
          <div className="space-y-4 font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-8">
            <p>
              High-performing leaders who are already delivering results — but hitting a ceiling. The promotion stalls. The feedback gets vague. The rules change and no one explains what changed.
            </p>
            <p>
              At a certain level the evaluation shifts. It is no longer about what was delivered. It is about presence, judgment, and whether senior leaders trust you with more. Mahesh calls this the Leadership Bar. His coaching is built around crossing it.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-5 font-body text-[12px] uppercase tracking-[0.08em] text-left w-[220px]">
                    The situation
                  </th>
                  <th className="px-6 py-5 font-body text-[12px] uppercase tracking-[0.08em] text-left">
                    What the leader is navigating
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr key={row.situation} className={`border-b border-border ${i % 2 === 0 ? 'bg-white' : 'bg-bg'}`}>
                    <td className="px-6 py-5 font-body font-semibold text-navy align-top">{row.situation}</td>
                    <td className="px-6 py-5 font-body text-[16px] italic text-[#1A1A1A]">{row.nav}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-block bg-gold text-white px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-navy transition-colors"
            >
              Inquire Here
            </a>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What Changes Through the Work */}
      <section className="bg-navy py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-white leading-tight mb-3">
            What Changes Through the Work
          </h2>
          <p className="font-body text-[15px] leading-[1.75] text-white/50 mb-10">
            Private, tailored engagements. No fixed curriculum — built around what is live in the leader&apos;s world.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            {WORK_ITEMS.map((item) => (
              <div key={item.title} className="border-t border-white/20 pt-5">
                <h3 className="font-body text-[16px] font-semibold text-white mb-2">{item.title}</h3>
                <p className="font-body text-[15px] leading-[1.7] text-white/60">{item.body}</p>
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
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-10">
            Common Questions
          </h2>
          <Accordion items={FAQ_ITEMS} />
        </div>
      </section>

      <GoldDivider />

      {/* Final CTA Form */}
      <section id="contact" className="bg-bg py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-navy px-8 lg:px-14 py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="w-8 h-[2px] bg-gold mb-5" />
                <h2 className="font-display text-[24px] lg:text-[28px] font-semibold text-white leading-tight mb-4">
                  Talk to Mahesh Today
                </h2>
                <p className="font-body text-[15px] leading-[1.75] text-white/65">
                  If you are preparing for bigger scope, navigating a promotion cycle, or working on your presence and influence as a senior leader, send a short note.
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
