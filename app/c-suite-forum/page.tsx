import type { Metadata } from 'next'
import Image from 'next/image'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCard from '@/components/TestimonialCard'
import Accordion from '@/components/Accordion'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'The C-Suite Forum. A Private Peer Group for Senior Tech Leaders.',
  description:
    'A small, invitation-only peer group for Directors and VPs. Ten weeks. Private sessions. Real career outcomes.',
}

const FORUM_TESTIMONIALS = [
  {
    quote:
      'The Forum helped me build the executive presence needed to thrive in the executive suite.',
    name: 'Vijay Kristipati',
    title: 'Head of Engineering',
    company: 'Google',
  },
  {
    quote:
      'Mahesh brings a rich perspective as a business leader, technologist, and coach. He humanizes and simplifies complex situations. It is very hard to find an executive coach who has been there and done that.',
    name: 'Hyo Jung Song',
    title: 'Vice President of Mobile',
    company: 'Samsung',
  },
  {
    quote:
      'I value his candor, his wisdom, and his uncanny ability to say precisely what you need to hear at exactly the right moment. My only regret is not hiring him earlier.',
    name: 'Monisha Kanoth',
    title: 'Senior Data Engineering Manager',
    company: 'Apple',
  },
]

const FAQ_ITEMS = [
  {
    question: 'How much time will this take?',
    answer:
      'Three hours a week. Ninety minutes live on Zoom. Ninety minutes of structured work.',
  },
  {
    question: 'Is this only for Bay Area people?',
    answer:
      'No. The room is global. Live sessions are scheduled to make it work.',
  },
  {
    question: 'How private is private?',
    answer:
      'Chatham House Rule. Strict. Every member signs the same agreement.',
  },
  {
    question: 'Is this just for tech?',
    answer:
      'Mostly tech, with some finance, healthcare, and telecom. We keep the rooms cross-industry on purpose.',
  },
  {
    question: 'Can I bring my startup idea?',
    answer:
      'Yes. Many members use the room to stress test their next venture before they leave their current role.',
  },
  {
    question: 'Can my company pay for this?',
    answer:
      'Yes. Graduates receive a Certificate in Strategic Command from TIRA Academy. Most members submit this certificate as the formal credential their company reimburses against. If your company has a professional development or leadership training budget, this program qualifies. We can provide an invoice in whatever format your finance team requires.',
  },
]

export default function CSuiteForumPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-24">
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-6">
            Your career is not stalling because of competence.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            It is stalling because you do not have the right room to ask the
            questions you cannot ask anywhere else.
          </p>
          <div>
            <a
              href="#forum-form"
              className="inline-block bg-white text-navy px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors"
            >
              Request an Invitation
            </a>
          </div>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/mahesh-speaking.jpg"
            alt="Mahesh M. Thakur speaking"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* The Idea */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            A private room with people who are facing what you are facing.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>
              You probably have a manager. You may have a mentor. You may even
              have a coach.
            </p>
            <p>
              You almost certainly do not have a room of peers at your level,
              from outside your company, who will tell you the truth about your
              blind spots, your next move, and your worth on the market.
            </p>
            <p>That room is what this is.</p>
            <p className="mt-6">
              One-on-one coaching gives you a mirror. The Forum gives you a
              room. The people in it are not your colleagues. They have no stake
              in your company, your politics, or your reputation. That is
              exactly why they can tell you the truth.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* How It Works */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            Three hours a week. Ten weeks. A small cohort.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>
              We meet once a week for ninety minutes on a private Zoom. The rest
              of the time is structured peer work, focused reflection, and
              one-on-one threads with members in your cohort.
            </p>
            <p>
              Every cohort is vetted. Cohorts are kept to a maximum of ten
              members. Every member has managed real scale. What is said in the
              room stays in the room.
            </p>
            <p>
              Once a week, one member brings their hardest current problem to
              the full group. The cohort spends the entire ninety minutes on it.
              No agenda. No slides. Just the room working your problem. The
              following week, it is someone else&apos;s turn.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What You Get */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            The four things this is actually for.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              {
                label: 'Bigger scope.',
                body: 'Most members come in running one thing and leave running three. We work on the language and the moves that get you a bigger charter.',
              },
              {
                label: 'A real outside brain trust.',
                body: 'You stop running your hardest decisions past people inside your own company. You start running them past peers who do not have a political stake in your answer.',
              },
              {
                label: 'The promotion or the pivot.',
                body: 'Members leave with either a bigger role inside or a credible next move outside. Sometimes both.',
              },
              {
                label: 'Friendships that survive the next ten years of your career.',
                body: 'This is not on the brochure but it is the part most members talk about afterward.',
              },
            ].map((item) => (
              <div key={item.label}>
                <div className="font-body text-[17px] font-semibold text-navy mb-3">
                  {item.label}
                </div>
                <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* The Credential */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            You leave with a certificate.
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            Graduates receive a Certificate in Strategic Command from the TIRA
            Academy. Many members use this as the formal credential their
            company reimburses against. It signals to your leadership that you
            have done serious work on the executive-level decisions and language
            they expect from a VP.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* Who Is In The Room */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            Vetted peers.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>
              Senior Managers and Directors stepping into VP. VPs stepping into
              SVP. Founders running fast-growth companies.
            </p>
            <p>
              Members come from Tech, Finance, Healthcare, and Telecom. Every
              member has managed comparable scale. We do not mix career stages.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Testimonials */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FORUM_TESTIMONIALS.map((t) => (
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

      {/* Application Form */}
      <section id="forum-form" className="bg-bg py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <p className="font-body text-[14px] text-muted text-center mb-6">
            Cohorts open twice per year. Next cohort details available on
            request.
          </p>
          <h3 className="font-body text-[18px] font-semibold uppercase tracking-[0.08em] text-navy mb-3">
            Request an invitation.
          </h3>
          <ContactForm defaultService="C-Suite Forum" />
        </div>
      </section>
    </>
  )
}
