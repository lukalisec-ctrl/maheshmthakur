import type { Metadata } from 'next'
import Image from 'next/image'
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
      'Leadership in this era requires you to elevate both yourself and your teams. Every engineering leader focused on building executive presence should work with Mahesh. Many engineers struggle with the so-called “soft skills” required to succeed in the executive suite. With Mahesh\'s guidance, those perceived weaknesses become powerful strengths. The impact of your work shifts from being competent to achieving true excellence.',
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
      'Mahesh is sharp, wise, funny, highly accomplished, and incredibly knowledgeable. His enthusiasm for your team\'s potential is infectious. I value his candor, his wisdom, and his uncanny ability to say precisely what you need to hear at exactly the right moment. My only regret is not hiring him earlier.',
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
      'Digital acceleration is essential for organizations looking to stay ahead in their industry. Working with Mahesh provided the ideal blend of support, challenge, and confidence building. His guidance equipped us with the leadership skills and executive presence critical to our journey at the National Geographic Society. Mahesh empowered us to lead with clarity and a strong vision, and his approach was highly personalized for our organization.',
    name: 'Henderson Jones',
    title: 'Senior Director, Infrastructure and Security',
    company: 'National Geographic Society',
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
      <section className="bg-navy py-8 lg:py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-8">
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
      <section className="bg-white py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-8">
            In Their Own Words.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURED.map((t) => (
              <div key={t.name} className="bg-bg border border-border p-6 flex flex-col gap-4">
                <p className="font-body text-[15px] italic leading-[1.7] text-navy flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <div className="font-body text-[14px] font-semibold text-navy">{t.name}</div>
                  <div className="font-body text-[13px] text-muted">{t.title}</div>
                  <div className="font-body text-[12px] font-semibold uppercase tracking-[0.08em] text-gold mt-1">
                    {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Section 3 — Trusted At */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-10">
            Trusted at the Highest Levels of Enterprises
          </h2>
          <Image
            src="/images/client_logos.jpeg"
            alt="Client organizations"
            width={900}
            height={220}
            className="w-full max-w-4xl h-auto mx-auto"
          />
        </div>
      </section>

      <GoldDivider />

      {/* Section 4 — The Full Library */}
      <section className="bg-white py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-12">
            Client Success Stories.
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
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative min-h-[400px] lg:min-h-[480px]">
              <Image
                src="/images/mahesh-about.jpg"
                alt="Mahesh M. Thakur"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-6">
                Ready to Start the Conversation?
              </h2>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-10">
                These are not unusual people. They are high-performing executives at demanding organizations who decided that operating at the next level was worth the investment. If that resonates, send a short note.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-navy text-white px-10 py-5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold transition-colors"
              >
                Contact Mahesh
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
