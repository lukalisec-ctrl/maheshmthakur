import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import StatBlock from '@/components/StatBlock'
import LogoBar from '@/components/LogoBar'
import TestimonialCard from '@/components/TestimonialCard'
import { AUDIT_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title:
    'Mahesh M. Thakur. AI ROI for Boards. C-Suite Coaching for Tech Leaders.',
  description:
    'I help Boards turn AI spending into real returns. I help VPs in tech get to the C-Suite. Microsoft, Amazon, GoDaddy operator. Stanford GSB Certified Board Director.',
}

const PROOF_STATS = [
  {
    number: '$1B',
    label: 'Revenue Delivered',
    description:
      'Core architect of the first $1 billion in Bing Ads revenue at Microsoft.',
  },
  {
    number: '$600M',
    label: 'P&L Managed',
    description: 'Full P&L responsibility at GoDaddy.',
  },
  {
    number: '81%',
    label: 'Delivery Rate',
    description:
      'Shifted organizational delivery from 23% to 81% on-time and on-budget.',
  },
]

const CLIENT_STATS = [
  {
    number: '2.7x',
    label: 'Revenue Growth',
    description: 'Average revenue growth achieved by client organizations.',
  },
  {
    number: '40%',
    label: 'Faster Decisions',
    description: 'Faster decision-making reported by client leadership teams.',
  },
  {
    number: '16%',
    label: 'Revenue Per Employee',
    description: 'Increase in Revenue Per Employee within twelve months.',
  },
]

const HOME_TESTIMONIALS = [
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
      'Mahesh is uniquely qualified as an indispensable tech CEO coach. His impressive background brings the right shift in the mindset and strategies every CEO needs to run a successful company. He genuinely listens and dives into your business as your thought partner.',
    name: 'Feyzi Fatehi',
    title: 'Chief Executive Officer',
    company: 'Corent Technologies',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy min-h-[80vh] lg:min-h-screen grid grid-cols-1 lg:grid-cols-2">
        <div
          className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-24 lg:py-0"
          style={{
            background:
              'linear-gradient(135deg, #1A2B49 0%, #162040 100%)',
          }}
        >
          <div className="font-body text-[12px] uppercase tracking-[0.15em] text-gold mb-6">
            TIRA Strategic Advisory
          </div>
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-8">
            I help leaders make the decisions that define their careers.
          </h1>
          <div className="space-y-4 mb-10">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[18px] font-bold text-gold whitespace-nowrap">
                Boards.
              </span>
              <span className="font-body text-[18px] text-white leading-relaxed">
                I turn AI spending into real returns.
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[18px] font-bold text-gold whitespace-nowrap">
                Leaders.
              </span>
              <span className="font-body text-[18px] text-white leading-relaxed">
                I get you to the C-Suite.
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              href="/advisory"
              className="bg-navy text-white px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold transition-colors text-center border border-white/20"
            >
              For Boards and CEOs
            </Link>
            <Link
              href="/executive-coaching"
              className="border border-white text-white px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-colors text-center"
            >
              For VPs and Directors
            </Link>
          </div>
          <p className="font-body text-[13px] text-white/60">
            Not sure which path is yours?{' '}
            <a
              href={AUDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold text-white/60"
            >
              Take the 3-minute audit.
            </a>
          </p>
        </div>

        <div className="relative min-h-[50vh] lg:min-h-full">
          <Image
            src="/images/mahesh-hero.jpg"
            alt="Mahesh M. Thakur"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-[32px] lg:text-[40px] font-semibold text-navy leading-tight mb-8">
                I built revenue lines before I advised them.
              </h2>
              <div className="space-y-5 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
                <p>
                  My name is Mahesh M. Thakur. I founded TIRA Strategic
                  Advisory after twenty years inside Microsoft, Amazon, Intuit,
                  and GoDaddy.
                </p>
                <p>
                  At Microsoft, I was part of the team that built the first
                  billion dollars in Bing Ads revenue. At GoDaddy, I ran a six
                  hundred million dollar P&amp;L. At Amazon, I held
                  responsibility for forty percent of Marketplace units.
                </p>
                <p>
                  I am a Stanford GSB Certified Board Director and one of
                  fifteen Master Certified Coaches in the world in Marshall
                  Goldsmith&apos;s Stakeholder Centered Coaching method. I was
                  selected for his 100 Coaches group from eighteen thousand
                  applicants worldwide.
                </p>
                <p>
                  I know what it feels like to sit in front of a Board and
                  explain why an eight-figure AI budget is not moving the
                  P&amp;L. I know what it feels like to be told you are not
                  ready for VP with no real explanation why.
                </p>
                <p>That is the work I do now.</p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about-us"
                  className="font-body text-[15px] text-gold underline decoration-gold"
                >
                  Read the full bio
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src="/images/mahesh-about.jpg"
                alt="Mahesh M. Thakur"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Press Bar */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="font-body text-[12px] uppercase tracking-[0.12em] text-gold mb-4">
            As Featured In
          </div>
          <p className="font-body text-[13px] uppercase tracking-[0.1em] text-muted">
            Forbes &nbsp;&middot;&nbsp; C-Suite Network &nbsp;&middot;&nbsp; ProductCon
          </p>
        </div>
      </section>

      <GoldDivider />

      {/* Two Paths */}
      <section className="py-24 lg:py-32" style={{ background: '#F4F6FA' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-border border-t-4 border-t-navy p-10">
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gold mb-4">
                Boards and CEOs
              </div>
              <h3 className="font-body text-[20px] font-semibold text-navy leading-snug mb-5">
                You are spending real money on AI. Where are the returns?
              </h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-8">
                Most enterprise AI budgets are not failing because the
                technology does not work. They are failing because nobody at the
                table can connect the spending to the P&amp;L. I fix that.
              </p>
              <Link
                href="/advisory"
                className="font-body text-[14px] text-gold underline decoration-gold"
              >
                See how I work with Boards
              </Link>
            </div>

            <div className="bg-white border border-border border-t-4 border-t-navy p-10">
              <div className="font-body text-[13px] font-semibold uppercase tracking-[0.08em] text-gold mb-4">
                VPs and Directors
              </div>
              <h3 className="font-body text-[20px] font-semibold text-navy leading-snug mb-5">
                You have been told you are not ready for VP. Nobody told you
                why.
              </h3>
              <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A] mb-8">
                The gap between Director and VP is not about capability. It is
                about how you show up, how you talk about money, and how you
                handle pressure at the executive level. I map that gap and close
                it.
              </p>
              <Link
                href="/executive-coaching"
                className="font-body text-[14px] text-gold underline decoration-gold"
              >
                See how I work with tech leaders
              </Link>
            </div>
          </div>
          <p className="font-body text-[14px] text-muted text-center mt-8">
            I work with a limited number of clients each quarter. Both programs are currently open.
          </p>
          <p className="font-body text-[14px] text-muted text-center mt-3">
            Looking to book a{' '}
            <Link href="/speaking" className="text-gold underline decoration-gold">
              keynote →
            </Link>
            ?
          </p>
        </div>
      </section>

      {/* Proof Numbers */}
      <section className="bg-navy py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <StatBlock stats={PROOF_STATS} theme="dark" />
        </div>
      </section>

      {/* Client Outcomes */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.08em] text-gold mb-8">
            What Clients Achieve
          </div>
          <StatBlock stats={CLIENT_STATS} theme="light" />
        </div>
      </section>

      {/* Logo Bar */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="font-body text-[13px] uppercase tracking-[0.08em] text-gold mb-8">
            Twenty years building. Ten thousand hours coaching.
          </div>
          <LogoBar />
        </div>
      </section>

      <GoldDivider />

      {/* Testimonials */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10 overflow-x-auto">
            {HOME_TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/testimonials"
              className="font-body text-[15px] text-gold underline decoration-gold"
            >
              Read all testimonials
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />
    </>
  )
}
