import type { Metadata } from 'next'
import Image from 'next/image'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCard from '@/components/TestimonialCard'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Keynote Speaker | Mahesh M. Thakur',
  description:
    'Mahesh M. Thakur delivers keynotes that move boards and executive teams beyond the AI ROI mirage, aligning capital, product, and execution to deliver measurable financial certainty.',
}

const CREDENTIALS = [
  {
    label: 'Elite Selection',
    body: 'Selected from 18,000 global applicants for Marshall Goldsmith\'s 100 Coaches.',
  },
  {
    label: 'Global Exclusivity',
    body: 'One of only 15 Master Certified Coaches globally in Stakeholder Centered Coaching.',
  },
  {
    label: 'Clinical Methodology',
    body: 'Results-based methodology where organizational growth is measured and verified by key stakeholders.',
  },
  {
    label: 'Market Verification',
    body: 'Featured in Forbes for pioneering AI methodologies utilized by Meta and Spotify.',
  },
]

const TALKS = [
  {
    title: 'How to Tell If Your AI Investment Will Actually Pay Off',
    audience: 'For Boards and CEOs.',
    body: 'Audiences walk through the simple test that separates AI bets that will move the P&L from AI bets that will not. Built for fiduciary audiences who need to make a decision this quarter.',
    takeaway:
      'The audience leaves with a single framework for evaluating AI investments before next quarter\'s board meeting.',
  },
  {
    title: 'From Pilot to Profit',
    audience: 'For executive leadership teams stuck in pilot mode.',
    body: 'Why ninety percent of AI projects never scale, and the operational pattern that fixes it. Audiences leave with a framework they can take into Monday\'s leadership meeting.',
    takeaway:
      'The audience leaves with a clear operational pattern for moving from pilot to production. Applicable the following Monday.',
  },
  {
    title: 'How to Lead at the Speed of Agentic AI',
    audience: 'For senior leaders facing teams where the human-to-AI ratio is shifting fast.',
    body: 'What the next eighteen months actually require from VPs and above. Built for leadership offsites and strategy retreats.',
    takeaway:
      'The audience leaves with a concrete picture of what leadership needs to look like in the next eighteen months.',
  },
]

const OUTCOME_CARDS = [
  {
    title: 'Decode AI',
    body: 'Audiences leave with a clear-eyed read on what AI actually means for their business. Not the hype. The specific levers that turn pilots into products, and products into revenue.',
  },
  {
    title: 'Align Capital, Product, and Execution',
    body: 'Strategy, governance, and operating model determine AI outcomes more than technology does. Mahesh\'s keynotes give leadership teams the frameworks to align the three systems that drive financial certainty.',
  },
  {
    title: 'Drive Transformation',
    body: 'Every keynote is rooted in battle-tested lessons from Microsoft, Amazon, Intuit, and GoDaddy. Audiences leave with playbooks they can act on the Monday after the event, not principles to think about.',
  },
]

const VIDEO_EMBEDS = [
  {
    id: '_Yk2SHreBis',
    title: 'AI and Experimentation, ProductCon',
  },
  {
    id: '5z7Uwx1jon4',
    title: 'AI Product Leaders with Big Bold Vision',
  },
  {
    id: '_3zTNgipHJg',
    title: 'Keynote Speaking with BBB',
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Mahesh didn\'t just help us adopt AI. He helped us align as a leadership team and use AI to unlock growth in ways we hadn\'t seen before.',
    name: 'CEO',
    title: '',
    company: 'Fortune 500 Financial Services Company',
  },
  {
    quote:
      'Mahesh rebuilt our culture of experimentation. In two years, we ran over one thousand experiments and reignited our growth.',
    name: 'Senior Vice President',
    title: '',
    company: 'GoDaddy',
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
      'Don\'t play small. Don\'t pitch tweaks. Pitch possibility. Mahesh helps leaders do just that.',
    name: 'Vice President',
    title: '',
    company: 'Global Technology Company',
  },
  {
    quote: 'He doesn\'t just talk culture. He gives you the tools to practice it daily.',
    name: 'Chief Operating Officer',
    title: '',
    company: 'Fortune 500',
  },
  {
    quote:
      'Mahesh\'s work has added tremendous value to the leadership within our organization. He has been instrumental in equipping us with the strategic skills needed to unlock our true potential.',
    name: 'Shirish Tatikonda',
    title: 'Head of Data Science and Machine Learning Engineering',
    company: 'Walmart',
  },
]

export default function SpeakingPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-navy py-24 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-24">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-6">
            Keynote Speaker &nbsp;|&nbsp; Top 100 Coach &nbsp;|&nbsp; Stanford GSB Certified Board Member
          </div>
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-8">
            Boardroom Vision for the Agentic Era.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            Keynotes that move boards and executive teams from AI ambiguity to measurable financial certainty.
          </p>
          <div>
            <a
              href="#the-message"
              className="inline-block bg-white text-navy px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/mahesh-speaking.jpg"
            alt="Mahesh M. Thakur delivering a keynote"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <GoldDivider />

      {/* Section 2 — The Message */}
      <section id="the-message" className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-4">
            The Message
          </div>
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
            The Reason Most AI Investments Fail Is Not Technical.
          </h2>
          <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            <p>
              Ninety-five percent of generative AI pilots fail to deliver measurable ROI. Ninety-two percent of companies remain stuck in pilot mode. Ninety-four percent of C-Suite executives are dissatisfied with their current AI solutions.
            </p>
            <p>The technology is not the problem. The alignment between capital, product, and execution is.</p>
            <p>
              Most boards approving eight-figure AI budgets cannot answer one question with confidence: where is the return. Most leadership teams are running pilots that never reach the business. Most executives are watching strategic latency widen between what the market signals and what the boardroom commits to.
            </p>
            <p>
              Mahesh&apos;s keynotes close that gap. Not as theory. As frameworks that boards and executive teams can act on the Monday after the event.
            </p>
          </div>
          <blockquote className="border-l-4 border-gold pl-6 mt-10">
            <p className="font-body text-[20px] italic leading-[1.75] text-navy">
              &ldquo;In the AI era, you cannot deliver measurable ROI without aligning capital, product, and execution.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      <GoldDivider />

      {/* Section 3 — A Rare Tier of Executive Advisory */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-4">
            A Rare Tier of Executive Advisory
          </div>
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            The Credentials Behind the Message
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {CREDENTIALS.map((item) => (
              <div key={item.label}>
                <h3 className="font-body text-[14px] font-semibold uppercase tracking-[0.08em] text-gold mb-3">
                  {item.label}
                </h3>
                <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 4 — Signature Keynotes */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-white leading-tight mb-4">
            Signature keynotes.
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-white/50 mb-12">
            Each talk is built for a specific moment and customized to the event&apos;s audience and objectives.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TALKS.map((talk) => (
              <div
                key={talk.title}
                className="border border-white/20 border-t-4 border-t-gold p-10 flex flex-col gap-4"
              >
                <h3 className="font-body text-[18px] font-semibold text-white leading-snug">
                  {talk.title}
                </h3>
                <div className="font-body text-[12px] font-semibold uppercase tracking-[0.08em] text-gold">
                  {talk.audience}
                </div>
                <p className="font-body text-[17px] leading-[1.75] text-white/70">{talk.body}</p>
                <p className="font-body text-[14px] italic text-white/50 mt-auto">{talk.takeaway}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 5 — Watch Mahesh on Stage */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Watch Mahesh on stage.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {VIDEO_EMBEDS.map((video) => (
              <div
                key={video.id}
                className="relative w-full"
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  style={{ border: 0 }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 6 — What Audiences Walk Away With */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Decode AI. Align Capital, Product, and Execution. Drive Transformation.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {OUTCOME_CARDS.map((card) => (
              <div key={card.title} className="bg-bg border border-border p-10">
                <h3 className="font-body text-[18px] font-semibold text-navy mb-4">{card.title}</h3>
                <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 7 — Past Stages */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-6">
            Past Stages and Audiences
          </div>
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Delivered at Boards, Summits, and Leadership Offsites Globally.
          </h2>
          <div className="flex flex-wrap gap-x-12 gap-y-5 mb-10">
            {[
              'GoDaddy',
              'Qualcomm',
              'ProductCon',
              'Stanford GSB',
              'Fortune 100 Leadership Summits',
              'C-Suite Network',
              'Executive Leadership Councils',
            ].map((venue) => (
              <span
                key={venue}
                className="font-display text-[17px] font-semibold uppercase tracking-[0.08em] text-navy/70"
              >
                {venue}
              </span>
            ))}
          </div>
          <p className="font-body text-[16px] italic text-muted">
            Each talk is customized to the event&apos;s theme, audience, and objectives.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="text-center lg:text-left">
              <div className="font-display text-[72px] font-bold text-navy leading-none mb-3">
                100%
              </div>
              <div className="font-body text-[14px] font-semibold text-navy mb-1">
                Value Rating
              </div>
              <div className="font-body text-[15px] text-muted">
                Across every audience surveyed. 89.5% rated the session inspiring and relevant.
              </div>
            </div>
            <div className="text-center lg:text-left">
              <div className="font-display text-[72px] font-bold text-navy leading-none mb-3">
                100%
              </div>
              <div className="font-body text-[14px] font-semibold text-navy mb-1">
                Re-hire Intent
              </div>
              <div className="font-body text-[15px] text-muted">
                68% rated &ldquo;Definitely Yes.&rdquo; 88.4% rated the session engaging and interactive.
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 8 — What Audiences Take Away */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-8">
            What Audiences Take Away
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 9 — Final CTA Form */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-6">
            Book Mahesh.
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            If you are organizing a board retreat, executive summit, conference, or leadership offsite and want to explore whether Mahesh is the right speaker for your audience, share a short note. Every inquiry is reviewed personally.
          </p>
          <ContactForm buttonLabel="Inquire for Availability" />
        </div>
      </section>
    </>
  )
}
