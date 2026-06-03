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
    body: 'Most leaders know what they want to say. Under pressure, in a room with senior stakeholders, something shifts. The thinking gets faster, the delivery gets worse, and the version of you that shows up is not the version you intended. The work builds the steadiness that holds when the stakes are highest.',
  },
  {
    title: 'Influencing without authority',
    body: 'At a certain level, getting things done requires moving people who do not report to you, do not owe you anything, and have their own agendas. Mahesh works on the specific relationships and conversations where that influence is breaking down.',
  },
  {
    title: 'Showing up as a leader, not just a deliverer',
    body: 'There is a version of performance that is productive but invisible. Heads down, delivering, trusted by your team, but not yet seen by the people above you as someone ready for more. The work makes the right people see the right things.',
  },
  {
    title: 'Communicating at the right altitude',
    body: 'What you say in a peer meeting and what you say in front of a VP or C-Suite leader requires a different calibration. Not a different identity. A different altitude. Mahesh works on the specific moments where that calibration is off.',
  },
  {
    title: 'Navigating difficult environments without absorbing them',
    body: 'Micromanagement, resistant peers, toxic dynamics, ambiguous authority. Some environments are genuinely hard. The work is not about tolerating them. It is about building the internal steadiness and strategic clarity to operate well inside them while making clear decisions about whether to stay.',
  },
  {
    title: 'Building the track record that makes promotion inevitable',
    body: 'Promotion decisions are made before the formal process begins. The leaders who get promoted are the ones who have already been doing the next job in the eyes of the people who matter. Mahesh works on closing that gap deliberately.',
  },
]

const FAQ_ITEMS = [
  {
    question: 'Who is this coaching for?',
    answer:
      'Mahesh works with technology leaders at every level, from first-time managers to C-Suite executives. The common thread is not title. It is a leader who is ready to operate at a higher level than they do today.',
  },
  {
    question: 'Is coaching only for senior executives?',
    answer:
      'No. Mahesh works with technology leaders at every level, from first-time managers to C-Suite executives. The common thread is not title. It is a leader who is ready to operate at a higher level than they do today.',
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
      'Leadership in this era requires you to elevate both yourself and your teams. Every engineering leader focused on building executive presence should work with Mahesh. Many engineers struggle with the so-called "soft skills" required to succeed in the executive suite. With Mahesh\'s guidance, those perceived weaknesses become powerful strengths. The impact of your work shifts from being competent to achieving true excellence.',
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
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            Mahesh helps high-performing technology leaders build the presence, judgment, and influence required for bigger scope.
          </p>
          <div>
            <a
              href="#who-this-is-for"
              className="inline-block bg-gold text-white px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-white hover:text-navy transition-colors"
            >
              Learn More
            </a>
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

      {/* Who Mahesh Works With */}
      <section id="who-this-is-for" className="bg-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            Who Mahesh Works With
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            <p>
              Mahesh works with high-performing leaders who are already succeeding. They deliver results. They are respected by their teams. They have strong track records.
            </p>
            <p>
              At some point, the dynamic shifts. The promotion does not come through. The feedback gets vague. They are asked to lead at a level where the rules are different and no one explains what changed.
            </p>
            <p>That is the moment most leaders reach out.</p>
          </div>
          <p className="font-body text-[17px] italic leading-[1.75] text-navy mt-2 mb-10">
            Mahesh works with technology leaders at every level of the journey, from first-time managers building their leadership foundation to C-Suite executives preparing for their next mandate.
          </p>
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
        </div>
      </section>

      <GoldDivider />

      {/* The Leadership Bar */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
                The Leadership Bar
              </h2>
              <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                <p>Most leaders are not held back because they lack intelligence, effort, or capability.</p>
                <p>They get held back because the bar changes, and no one tells them.</p>
                <p>
                  At one level, leaders are rewarded for execution. Deliver the project. Ship the product. Hit the number. At the next level, the evaluation shifts. The question is no longer what did you deliver. The question is how does the room feel when you walk in, how well do you think under pressure, and whether the people above you trust you with more.
                </p>
                <p>
                  This shift is real. It is consistent across companies. Most leaders do not see it clearly until they have already been passed over.
                </p>
                <p>
                  Mahesh calls this the Invisible Bar. His coaching is built around helping leaders see it precisely and cross it.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/images/mahesh-boardroom.jpg"
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

      {/* What Changes Through the Work */}
      <section className="bg-navy py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-white leading-tight mb-4">
            What Changes Through the Work
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-white/50 mb-12">
            Every engagement is private and tailored. The situations below are the ones Mahesh most commonly works through with technology leaders, not as a fixed curriculum, but as the terrain that tends to come up when the stakes are high.
          </p>
          <div className="space-y-12">
            {WORK_ITEMS.map((item, index) => (
              <div key={item.title} className="flex gap-8 items-start">
                <div className="font-display text-[40px] font-bold text-gold leading-none flex-shrink-0 w-12 text-right">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="pt-1">
                  <h3 className="font-body text-[18px] font-semibold text-white mb-3">{item.title}</h3>
                  <p className="font-body text-[17px] leading-[1.75] text-white/70">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What to Expect */}
      <section className="bg-bg py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-4">
            What to Expect
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-muted mb-12">
            The engagement is private, one-on-one, and built around what is actually happening in the leader&apos;s work, not a fixed syllabus.
          </p>
          <div className="space-y-10">
            <div>
              <h3 className="font-body text-[17px] font-semibold text-navy mb-3">How sessions work</h3>
              <div className="space-y-4 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                <p>
                  The first session is 60 minutes. Mahesh uses it to go deep on the leader&apos;s situation, goals, and how they operate: how they think under pressure, how they make decisions, what triggers them, and what they are trying to build. Every session after that is 45 minutes, split between the long-term goals set at the start and whatever is immediate and live in the leader&apos;s world right now.
                </p>
                <p>
                  Sessions are typically weekly at the start of the engagement, when the work is most intensive. As the leader stabilises, cadence moves to biweekly.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-semibold text-navy mb-3">Between sessions</h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                Leaders have access to Mahesh by email between sessions for real situations as they arise. For urgent matters, text works. Mahesh also does preparation and follow-up work around every session, not just the session itself.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-semibold text-navy mb-3">Engagement options</h3>
              <div className="space-y-4 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                <p>
                  Mahesh offers three-month and six-month engagements. Most clients who complete a three-month engagement renew, because the results become visible before it ends. The six-month engagement is the standard for leaders working on deeper identity and operational shifts.
                </p>
                <p>All engagements include a mutual NDA. Everything discussed is strictly confidential.</p>
              </div>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-semibold text-navy mb-3">How it starts</h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                Send a short note through the form below. Mahesh&apos;s team reviews every inquiry personally. If there is a clear fit, they will be in touch to schedule a first conversation.
              </p>
            </div>
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
