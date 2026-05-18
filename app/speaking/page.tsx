import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCard from '@/components/TestimonialCard'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Mahesh M. Thakur Keynote Speaker. AI Strategy for Boards.',
  description:
    'Keynote talks on AI ROI, executive readiness, and the agentic shift. Built for Boards, leadership offsites, and executive summits.',
}

const TALKS = [
  {
    title: 'How to Tell If Your AI Investment Will Actually Pay Off',
    audience: 'For Boards and CEOs.',
    body: 'We walk through the simple test that separates AI bets that will move the P&L from AI bets that will not. Built for fiduciary audiences who need to make a decision this quarter.',
    takeaway: 'The audience leaves with a single framework for evaluating AI investments before next quarter\'s board meeting.',
  },
  {
    title: 'From Pilot to Profit',
    audience: 'For executive leadership teams stuck in pilot mode.',
    body: 'Why ninety percent of AI projects never scale, and the operational pattern that fixes it. Audiences leave with a framework they can take into Monday\'s leadership meeting.',
    takeaway: 'The audience leaves with a clear operational pattern for moving from pilot to production. Applicable the following Monday.',
  },
  {
    title: 'How to Lead at the Speed of Agentic AI',
    audience: 'For senior leaders facing teams where the human-to-AI ratio is shifting fast.',
    body: 'What the next eighteen months actually require from VPs and above. Built for leadership offsites and strategy retreats.',
    takeaway: 'The audience leaves with a concrete picture of what leadership needs to look like in the next eighteen months.',
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

export default function SpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <Image
          src="/images/mahesh-speaking.jpg"
          alt="Mahesh M. Thakur speaking"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-8 lg:px-16 py-24">
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-6">
            Most speakers have studied the boardroom. I have run it.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            For Boards, leadership offsites, and executive summits.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-navy px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors"
          >
            Inquire About Availability
          </Link>
        </div>
      </section>

      {/* What Separates Me */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            I bring three things to the stage that most speakers cannot.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                label: 'The operator.',
                body: 'I have run a billion-dollar revenue line. I have managed a six hundred million dollar P&L. I have shipped AI at scale at Microsoft. When I talk about ROI, I have been the one accountable for delivering it.',
              },
              {
                label: 'The inventor.',
                body: 'I hold two USPTO patents in AI, search, and product architecture. I am not summarizing other people\'s research from the stage.',
              },
              {
                label: 'The governor.',
                body: 'I am a Stanford GSB Certified Board Director. I sit on the other side of the table from the executives in the audience. I know what the seat asks of them.',
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

      {/* Past Venues */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-4">
            Past Stages and Audiences
          </div>
          <p className="font-body text-[13px] uppercase tracking-[0.1em] text-muted">
            GoDaddy &nbsp;&middot;&nbsp; Qualcomm &nbsp;&middot;&nbsp; ProductCon &nbsp;&middot;&nbsp; Stanford GSB &nbsp;&middot;&nbsp; Fortune 100 Leadership Summits
          </p>
          <p className="font-body text-[14px] italic text-muted mt-4">
            Each talk is customized to the event&apos;s theme, audience, and objectives.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* The Three Talks */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Three talks. Each built for a specific moment.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {TALKS.map((talk) => (
              <div
                key={talk.title}
                className="bg-white border border-border border-t-4 border-t-navy p-10"
              >
                <h3 className="font-body text-[18px] font-semibold text-navy leading-snug mb-3">
                  {talk.title}
                </h3>
                <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gold mb-4">
                  {talk.audience}
                </div>
                <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                  {talk.body}
                </p>
                <p className="font-body text-[14px] italic text-gold mt-4">
                  {talk.takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Proof */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center">
            <div>
              <div className="font-display text-[72px] font-bold text-navy leading-none mb-3">
                100%
              </div>
              <div className="font-body text-[14px] font-semibold text-navy mb-1">
                Value Rating
              </div>
              <div className="font-body text-[15px] text-muted">
                Across every audience surveyed. 89.5% rated the session
                inspiring and relevant.
              </div>
            </div>
            <div>
              <div className="font-display text-[72px] font-bold text-navy leading-none mb-3">
                100%
              </div>
              <div className="font-body text-[14px] font-semibold text-navy mb-1">
                Re-hire Intent
              </div>
              <div className="font-body text-[15px] text-muted">
                68% rated &ldquo;Definitely Yes.&rdquo; 88.4% rated the session
                engaging and interactive.
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Watch Mahesh Speak */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Watch Mahesh speak.
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

      {/* What Audiences Say */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-8">
            What Audiences Say
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Mahesh rebuilt our culture of experimentation. In two years, we ran over a thousand experiments and reignited our growth."
              name="Senior Vice President"
              title=""
              company="GoDaddy"
            />
            <TestimonialCard
              quote="He doesn&apos;t just talk culture. He gives you the tools to practice it daily."
              name="Chief Operating Officer"
              title=""
              company="Fortune 500"
            />
            <TestimonialCard
              quote="Don&apos;t play small. Don&apos;t pitch tweaks. Pitch possibility. Mahesh helps leaders do just that."
              name="Vice President"
              title=""
              company="Global Technology Company"
            />
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* CTA Footer with Form */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h3 className="font-body text-[18px] font-semibold uppercase tracking-[0.08em] text-navy mb-3">
            Inquire about availability.
          </h3>
          <p className="font-body text-[14px] text-muted mb-4">
            Every engagement includes a planning call, a customized
            presentation, and pre and post-event video promotion.
          </p>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            I take a limited number of speaking engagements each quarter. Tell
            me about the event and we will see if it is a fit.
          </p>
          <ContactForm defaultService="Speaking" />
        </div>
      </section>
    </>
  )
}
