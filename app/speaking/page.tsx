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
    body: 'Featured in Forbes and Inc. magazine for pioneering AI methodologies utilized by Meta and Spotify.',
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
]

const TESTIMONIALS = [
  {
    quote:
      'Digital acceleration is essential for organizations looking to stay ahead in their industry. Working with Mahesh provided the ideal blend of support, challenge, and confidence building. His guidance equipped us with the leadership skills and executive presence critical to our journey at the National Geographic Society. Mahesh empowered us to lead with clarity and a strong vision, and his approach was highly personalized for our organization.',
    name: 'Henderson Jones',
    title: 'Senior Director, Infrastructure and Security',
    company: 'National Geographic Society',
  },
  {
    quote:
      'Hiring Mahesh will amplify your strengths and equip you with practical tools to lead at a higher level.',
    name: 'Varun Vontimitta',
    title: 'Partner Engineering Leader',
    company: 'Meta',
  },
  {
    quote:
      'Leadership in this era requires you to elevate both yourself and your teams. Every engineering leader focused on building executive presence should work with Mahesh. Many engineers struggle with the so-called “soft skills” required to succeed in the executive suite. With Mahesh\'s guidance, those perceived weaknesses become powerful strengths. The impact of your work shifts from being competent to achieving true excellence.',
    name: 'Vijay Kristipati',
    title: 'Head of Engineering',
    company: 'Google',
  },
  {
    quote:
      'Mahesh\'s work has added tremendous value to the leadership within our organization. He has been instrumental in equipping us with the strategic skills needed to unlock our true potential.',
    name: 'Shirish Tatikonda',
    title: 'Head of Data Science and Machine Learning Engineering',
    company: 'Walmart',
  },
  {
    quote:
      'Mahesh is sharp, wise, funny, highly accomplished, and incredibly knowledgeable. His enthusiasm for your team\'s potential is infectious. I value his candor, his wisdom, and his uncanny ability to say precisely what you need to hear at exactly the right moment. My only regret is not hiring him earlier.',
    name: 'Monisha Kanoth',
    title: 'Senior Data Engineering Manager',
    company: 'Apple',
  },
]

export default function SpeakingPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-8">
            Boardroom Vision for the Agentic Era.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-10">
            Keynotes for boards, executive teams, leadership offsites, and global conferences. Moving organizations from AI ambiguity to measurable financial certainty.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-block bg-gold text-white px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-white hover:text-navy transition-colors"
            >
              Book Mahesh
            </a>
          </div>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full">
          <Image
            src="/images/IMG_6593.jpeg"
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
      <section id="the-message" className="bg-white py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-8">
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
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative min-h-[420px] lg:min-h-[540px]">
              <Image
                src="/images/MMT_SpeakerShowcase.JPG"
                alt="Mahesh M. Thakur speaking"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-4">
                A Rare Tier of Executive Advisory
              </div>
              <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-10">
                The Credentials Behind the Message
              </h2>
              <div className="grid grid-cols-1 gap-y-8">
                {CREDENTIALS.map((item) => (
                  <div key={item.label}>
                    <h3 className="font-body text-[14px] font-semibold uppercase tracking-[0.08em] text-gold mb-3">
                      {item.label}
                    </h3>
                    <p className="font-body text-[16px] leading-[1.75] text-[#1A1A1A]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 4 — Signature Keynotes */}
      <section className="bg-navy py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-white leading-tight mb-4">
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
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-12">
            Watch Mahesh on stage.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-12">
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
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-6">
            Past Stages and Audiences
          </div>
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-10">
            Delivered at Boards, Summits, and Leadership Offsites Globally.
          </h2>
          <div className="flex flex-col items-center gap-10 mb-8">
            <div className="text-center">
              <div className="font-body text-[11px] uppercase tracking-[0.14em] text-gold mb-5">Companies</div>
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
                {['GoDaddy', 'Stanford GSB', 'Meta', 'Google', 'NVIDIA', 'Qualcomm'].flatMap((venue, i, arr) => [
                  <span key={venue} className="font-display text-[16px] font-semibold uppercase tracking-[0.08em] text-navy">{venue}</span>,
                  ...(i < arr.length - 1 ? [<span key={venue + '-dot'} className="text-gold text-[14px]">·</span>] : []),
                ])}
              </div>
            </div>
            <div className="w-12 h-px bg-gold" />
            <div className="text-center">
              <div className="font-body text-[11px] uppercase tracking-[0.14em] text-gold mb-5">Events &amp; Forums</div>
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3">
                {['Fortune 100 Leadership Summits', 'C-Suite Network', 'Executive Leadership Councils'].flatMap((venue, i, arr) => [
                  <span key={venue} className="font-display text-[16px] font-semibold uppercase tracking-[0.08em] text-navy">{venue}</span>,
                  ...(i < arr.length - 1 ? [<span key={venue + '-dot'} className="text-gold text-[14px]">·</span>] : []),
                ])}
              </div>
            </div>
          </div>
          <p className="font-body text-[15px] italic text-muted mb-10">
            Each talk is customized to the event&apos;s theme, audience, and objectives.
          </p>
          <div className="grid grid-cols-3 gap-4 items-start">
            <Image
              src="/images/talkadot-social-share%20(1).png"
              alt="Audience feedback social share"
              width={600}
              height={800}
              className="w-full h-auto"
            />
            <Image
              src="/images/talkadot-testimonial-share%20(1).png"
              alt="Audience testimonial share"
              width={600}
              height={800}
              className="w-full h-auto"
            />
            <Image
              src="/images/talkadot-social-share%20(3).png"
              alt="Audience feedback social share"
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 8 — What Audiences Take Away */}
      <section className="bg-white py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.12em] text-gold mb-6">
            What Audiences Take Away
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white border border-border p-5 flex flex-col gap-4">
                <p className="font-body text-[14px] italic leading-[1.7] text-navy">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-body text-[13px] font-semibold text-navy">{t.name}</div>
                  <div className="font-body text-[12px] text-muted mt-0.5">{t.title ? `${t.title}, ${t.company}` : t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 9 — Final CTA Form */}
      <section id="contact" className="bg-bg py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="w-8 h-[2px] bg-gold mb-5" />
                <h2 className="font-display text-[22px] lg:text-[26px] font-semibold text-navy leading-tight mb-4">
                  Bring the right speaker to the right room.
                </h2>
                <p className="font-body text-[15px] leading-[1.75] text-muted">
                  If you are organizing a board retreat, executive summit, conference, or leadership offsite and want to explore whether Mahesh is the right speaker for your audience, share a short note. Every inquiry is reviewed personally.
                </p>
              </div>
              <div>
                <ContactForm buttonLabel="Inquire for Availability" />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
