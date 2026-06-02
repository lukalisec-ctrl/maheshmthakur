import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'The C-Suite Forum',
  description:
    'A confidential, curated executive leadership forum for senior technology leaders navigating visibility, influence, organizational complexity, and AI-era transformation.',
}

const FORUM_MOMENTS = [
  {
    moment: 'Visibility plateau',
    nav: '"I keep delivering. The right people are not noticing."',
  },
  {
    moment: 'Political complexity',
    nav: '"I know what needs to happen. Getting alignment is the hard part."',
  },
  {
    moment: 'Promotion readiness',
    nav: '"I have been told I am close. I do not fully understand what close means."',
  },
  {
    moment: 'AI-era uncertainty',
    nav: '"The landscape is shifting fast. I want to lead into it, not react to it."',
  },
  {
    moment: 'Isolation at the top',
    nav: '"There is no one inside my organization I can be fully honest with."',
  },
]

const ARENAS = [
  {
    title: 'Executive visibility and strategic presence',
    body: 'Building the influence, perception, and positioning that accelerate advancement at senior levels.',
  },
  {
    title: 'Navigating politics and stakeholder complexity',
    body: 'Understanding and managing the invisible dynamics that shape leadership effectiveness in large organizations.',
  },
  {
    title: 'AI-era leadership and strategic relevance',
    body: 'Maintaining clarity, positioning, and strategic authority as AI reshapes organizational priorities and power structures.',
  },
  {
    title: 'Decision-making under pressure',
    body: 'Developing the frameworks and composure to make high-stakes decisions when the information is incomplete and the stakes are real.',
  },
  {
    title: 'Career positioning and executive advancement',
    body: 'Shaping trajectory, narrative, and readiness for expanded leadership scope.',
  },
  {
    title: 'High-trust leadership relationships',
    body: 'Building the peer networks and executive relationships that sustain long-term career momentum.',
  },
]

const FORUM_TESTIMONIALS = [
  {
    quote:
      'Mahesh helped me fundamentally rethink how I lead and influence at senior levels. His ability to combine leadership psychology, executive presence, and strategic clarity is exceptional.',
    attribution: 'Senior Director, Microsoft',
  },
  {
    quote:
      'Working with Mahesh accelerated my growth as a leader more than any leadership training I have attended in my career. The conversations were direct, strategic, and deeply transformative.',
    attribution: 'Vice President, Adobe',
  },
  {
    quote:
      'For the first time in years, I felt like I had a room of peers who truly understood the pressure, ambiguity, and strategic weight of senior leadership.',
    attribution: 'Executive Leader, Fortune 100 Enterprise',
  },
]

const STEPS = [
  {
    number: '01',
    title: 'Submit your interest',
    body: 'Share a short note about your current leadership role, organizational environment, and what you are working to build.',
  },
  {
    number: '02',
    title: 'Introductory conversation',
    body: 'A confidential discussion with Mahesh to explore your leadership goals, challenges, and trajectory. Together, you assess alignment, contribution potential, and fit within the forum community.',
  },
  {
    number: '03',
    title: 'Invitation and enrollment',
    body: 'Selected leaders receive a formal invitation to the upcoming forum. Participation is intentionally limited to preserve the quality, trust, and depth of every conversation.',
  },
]

export default function CSuiteForumPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-24">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-6">
            Top 100 Coach Globally &nbsp;|&nbsp; Stanford GSB Certified Board Member &nbsp;|&nbsp; Trusted Advisor
          </div>
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-8">
            The C-Suite Forum
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            A confidential executive leadership forum for senior leaders navigating visibility, influence, and AI-era transformation.
          </p>
          <div>
            <a
              href="#why-it-exists"
              className="inline-block bg-white text-navy px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* PHOTO SLOT: Boardroom session shot, Mahesh facilitating a forum meeting */}
        <div className="relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/csf-hero.jpg"
            alt="The C-Suite Forum in session"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <GoldDivider />

      {/* Why It Exists */}
      <section id="why-it-exists" className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            The Higher You Rise, The Fewer Honest Conversations You Have
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            <p>Senior leadership is isolating by design.</p>
            <p>
              The decisions get harder. The honest conversations get rarer. The people above you evaluate you. The people below you need things from you. The peers inside your organization have their own agendas. And the most important questions about your trajectory, your blind spots, and your next move go largely unasked.
            </p>
            <p>
              Most leaders are navigating the most complex terrain of their careers with the fewest real thinking partners they have ever had.
            </p>
            <p>The C-Suite Forum is built for that gap.</p>
          </div>
          <ul className="space-y-3 mt-8">
            {[
              'Confidential. What is shared in the room stays in the room.',
              'Peer-level. Every member understands the weight and complexity of senior leadership.',
              'Real situations. Every session is built around actual challenges members bring forward.',
              'Selective. The caliber of the room is everything.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-gold font-semibold flex-shrink-0">—</span>
                <span className="font-body text-[17px] text-[#1A1A1A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <GoldDivider />

      {/* Who This Is For */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            Who This Forum Is Designed For
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            <p>
              Mahesh works with Directors, Vice Presidents, Senior Managers, and high-potential leaders preparing for expanded scope. The common thread is not title. It is a leader who has outgrown their current circle and is ready to operate at a higher level.
            </p>
            <p>These are the moments that typically bring leaders to the forum.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-5 font-body text-[12px] uppercase tracking-[0.08em] text-left w-[220px]">
                    The moment
                  </th>
                  <th className="px-6 py-5 font-body text-[12px] uppercase tracking-[0.08em] text-left">
                    What the leader is carrying
                  </th>
                </tr>
              </thead>
              <tbody>
                {FORUM_MOMENTS.map((row, i) => (
                  <tr key={row.moment} className={`border-b border-border ${i % 2 === 0 ? 'bg-white' : 'bg-bg'}`}>
                    <td className="px-6 py-5 font-body font-semibold text-navy align-top">{row.moment}</td>
                    <td className="px-6 py-5 font-body text-[16px] italic text-[#1A1A1A]">{row.nav}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* What the Forum Explores */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-4">
            The Challenges Explored Together
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-muted mb-12">
            Topics evolve based on what members bring into the room. Every session has direct and immediate relevance to what is live in members&apos; work.
          </p>
          <div className="space-y-12">
            {ARENAS.map((arena, index) => (
              <div key={arena.title} className="flex gap-8 items-start">
                <div className="font-display text-[40px] font-bold text-gold leading-none flex-shrink-0 w-12 text-right">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="pt-1">
                  <h3 className="font-body text-[18px] font-semibold text-navy mb-3">{arena.title}</h3>
                  <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">{arena.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* How the Forum Works */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-4">
            How the Forum Works
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-muted mb-12">
            Participation is intentionally limited to preserve the depth, trust, and quality of every conversation.
          </p>
          <div className="space-y-10">
            <div>
              <h3 className="font-body text-[17px] font-semibold text-navy mb-3">Forum structure</h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                Eight to fifteen senior leaders. One session every two weeks. Six-month engagement. Facilitated executive advisory discussions centered on the real situations members bring forward.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-semibold text-navy mb-3">One-on-one sessions with Mahesh</h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                Each participant receives individual strategic advisory sessions with Mahesh each quarter, dedicated to personal leadership challenges, career trajectory, and growth.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-semibold text-navy mb-3">Confidentiality</h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                The forum operates under the Chatham House Rule. What is shared within the room stays within the room. Every member accepts this standard before joining.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-semibold text-navy mb-3">What members gain</h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                Greater executive confidence, sharper strategic clarity, stronger stakeholder influence, and the kind of peer relationships that sustain career momentum well beyond the engagement.
              </p>
            </div>
            <div>
              <h3 className="font-body text-[17px] font-semibold text-navy mb-3">Who belongs in the room</h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                Active engagement. Thoughtful perspective. Real challenges brought forward. Genuine investment in the growth of every other leader in the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Testimonials */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-4">
            Trusted by Leaders Across Global Organizations
          </div>
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            What Forum Members Say
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-12 max-w-4xl">
            Leaders from NVIDIA, Apple, Meta, Google, LinkedIn, Microsoft, Adobe, eBay, VMware, Autodesk, Micron, Marvell, John Deere, Bank of America, Chase, Wells Fargo, Intuit, Walmart, National Geographic, and Hackensack Meridian Health have participated in Mahesh&apos;s coaching, advisory, and leadership development engagements.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FORUM_TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-bg border border-border p-8 flex flex-col gap-6">
                <p className="font-body text-[16px] italic leading-[1.75] text-navy">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="font-body text-[14px] font-semibold text-navy">
                  {t.attribution}
                </div>
              </div>
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

      {/* How to Join */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-4">
            How to Join
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-muted mb-12">
            Participation is selective and limited. The caliber of the room is everything.
          </p>
          <div className="space-y-12">
            {STEPS.map((step) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="font-display text-[40px] font-bold text-gold leading-none flex-shrink-0 w-12 text-right">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-body text-[18px] font-semibold text-navy mb-3">{step.title}</h3>
                  <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Final CTA Form */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-6">
            Request Invitation
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            If the forum sounds aligned with where you are in your leadership trajectory, share a short note. Every inquiry is reviewed personally. All conversations are strictly confidential.
          </p>
          <ContactForm buttonLabel="Contact Us" />
        </div>
      </section>
    </>
  )
}
