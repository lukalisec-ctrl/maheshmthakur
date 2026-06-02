import type { Metadata } from 'next'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import TestimonialCard from '@/components/TestimonialCard'

export const metadata: Metadata = {
  title: 'What Clients Say | Mahesh M. Thakur',
  description:
    'What CEOs, CTOs, and VPs at Meta, Google, NVIDIA, Apple, Microsoft, Samsung, and more say about working with Mahesh.',
}

const FEATURED = [
  {
    quote:
      'Hiring Mahesh will amplify your strengths and equip you with practical tools to lead at a higher level.',
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
    title: 'Machine Learning Product Manager',
    company: 'Apple',
  },
  {
    quote:
      'What sets Mahesh apart is that he has himself walked the walk a few times in startups and in trillion-dollar companies.',
    name: 'Sudha Thota',
    title: 'Senior Director of Product Management',
    company: 'Microsoft',
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
      'Mahesh is uniquely qualified as an indispensable tech CEO coach. His impressive background brings the right shift in the mindset and strategies every CEO needs to run a successful company. He genuinely listens and dives into your business as your thought partner.',
    name: 'Feyzi Fatehi',
    title: 'Chief Executive Officer',
    company: 'Corent Technologies',
  },
]

const COMPANIES = [
  'Meta',
  'Google',
  'Apple',
  'Microsoft',
  'Samsung',
  'NVIDIA',
  'PayPal',
  'Walmart',
  'Adobe',
  'LinkedIn',
  'eBay',
  'Autodesk',
  'Intuit',
  'OpenAI',
  'National Geographic',
  'Hackensack Meridian Health',
  'Sendoso',
  'Corent Technologies',
  'Zoox',
]

const LIBRARY = [
  {
    quote:
      'Mahesh adeptly identified areas where I could improve my leadership skills, communication, and decision-making processes. One of his key strengths is his deep understanding of the corporate landscape and the challenges executives face.',
    name: 'Mark Eimer',
    title: 'Chief Technology Officer',
    company: 'Hackensack Meridian Health',
  },
  {
    quote:
      'Mahesh helped me establish myself as a visionary leader in my organization. He provided the best strategies to elevate my org, the product vision, and the business performance.',
    name: 'Nivedita Ojha',
    title: 'Vice President Product Management',
    company: 'Autodesk',
  },
  {
    quote:
      'Mahesh is direct and will not hold back from saying what he sees is preventing you from growing. My only regret is not meeting him earlier in my career.',
    name: 'Monisha Kanoth',
    title: 'Senior Data Engineering Manager',
    company: 'Apple',
  },
  {
    quote:
      'Mahesh made me a powerful storyteller. My thought leadership and the impact of what I did was immediately noticed by my leadership and my teams.',
    name: 'Jogender Singh',
    title: 'Head of Engineering',
    company: 'PayPal',
  },
  {
    quote:
      'Working with him gave me the strategies to make my team high-performance and accountable. His business acumen, tech background, and work ethic make Mahesh unique.',
    name: 'Jean David Ruvini',
    title: 'AI Leader',
    company: 'Meta',
  },
  {
    quote:
      'Mahesh truly understands what it takes to formulate and deliver product-led growth. He quickly understood the need for us to scale and came up with effective strategies to incubate a new line of products.',
    name: 'Kris Rudeegraap',
    title: 'Chief Executive Officer',
    company: 'Sendoso',
  },
  {
    quote:
      'Mahesh has been instrumental in my learning leadership and strategic skills necessary to unlock my true potential and change my career trajectory.',
    name: 'Shirish Tatikonda',
    title: 'Head of Data Science and Machine Learning Engineering',
    company: 'Walmart',
  },
  {
    quote:
      'I recommend this program with no hesitation. Employee engagement, customer growth, and board relations are critical for every CEO to address. Mahesh helped us with these areas through active leadership training.',
    name: 'Jeff Paul',
    title: 'Chief Executive Officer and Founder',
    company: 'Ziotag',
  },
  {
    quote:
      "Mahesh's critical guidance equipped me with the leadership skills and executive presence essential for my leadership journey. His approach was highly personalized.",
    name: 'Henderson Jones',
    title: 'Senior Director Infrastructure and Security',
    company: 'National Geographic',
  },
  {
    quote:
      'Mahesh is the best advisor I could have ever asked for. He will work with you from the ground up to help you realize your full potential.',
    name: 'Subhan Ali',
    title: 'Senior Manager Data Science and Machine Learning',
    company: 'NVIDIA',
  },
  {
    quote:
      'Mahesh approaches board and C-Suite advisory with a mixture of mentorship and partnership. His approach improved the dynamics with my team, my relationships with the board, and my rapport with the executives.',
    name: 'Kent Lopez',
    title: 'Vice President of Sales',
    company: 'Neural',
  },
  {
    quote:
      'Mahesh helped us prepare how to get in front of large investors and made our pitch impactful by including key insights that matter.',
    name: 'Amit Chachnek',
    title: 'Chief Executive Officer and Founder',
    company: 'WeR',
  },
  {
    quote:
      'Through thought-provoking questions and practical exercises, Mahesh guided me to explore my potential, confront my limitations, and cultivate a growth mindset.',
    name: 'Eric Jones',
    title: 'Director Clinical Informatics',
    company: 'Hackensack Meridian Health',
  },
  {
    quote:
      'His work emphasized aligning with my teams and the teams across the broader organization to drive what was mission critical.',
    name: 'Bhuvana Ramachandran',
    title: 'Director Software Quality',
    company: 'Zoox',
  },
  {
    quote:
      'The enterprise strategy work I did with Mahesh has added tremendous value to my organization.',
    name: 'Gautam Kumar',
    title: 'Director of Analytics',
    company: 'eBay',
  },
]

export default function TestimonialsPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-6">
            What Clients Say
          </div>
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-8">
            Voices From the Work.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70 mb-4 max-w-3xl mx-auto">
            Senior leaders across Meta, Google, Apple, Microsoft, Samsung, NVIDIA, and dozens of other organizations have worked with Mahesh through coaching engagements, forum membership, and keynote audiences. The voices below are theirs, not his.
          </p>
          <p className="font-body text-[16px] leading-[1.75] text-white/50 max-w-2xl mx-auto">
            Every testimonial on this page is from a named client or a verified anonymous contributor. Nothing is paraphrased.
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* Section 2 — Featured Testimonials */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            Six Voices.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FEATURED.map((t) => (
              <div key={t.name} className="bg-bg border border-border p-10 flex flex-col gap-6">
                <p className="font-body text-[18px] italic leading-[1.75] text-navy flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-body text-[15px] font-semibold text-navy">{t.name}</div>
                  <div className="font-body text-[14px] text-muted">{t.title}</div>
                  <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gold mt-1">
                    {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 3 — Companies Represented */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-4">
            Companies Represented
          </div>
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-4">
            Leaders From Across the Industry.
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-muted mb-12">
            Mahesh has coached and advised leaders at the following organizations.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-5">
            {COMPANIES.map((name) => (
              <span
                key={name}
                className="font-display text-[16px] font-semibold uppercase tracking-[0.08em] text-navy/60"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 4 — The Full Library */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-12">
            The Full Library.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIBRARY.map((t) => (
              <TestimonialCard key={t.name + t.company} {...t} />
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 5 — Final CTA */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-6">
            Ready to Start the Conversation?
          </h2>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
            These are not unusual people. They are high-performing executives at demanding organizations who decided that operating at the next level was worth the investment. If that resonates, send a short note.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-navy text-white px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold transition-colors"
          >
            Contact Mahesh
          </Link>
        </div>
      </section>
    </>
  )
}
