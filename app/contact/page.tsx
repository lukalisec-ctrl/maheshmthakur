'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GoldDivider from '@/components/GoldDivider'
import { BOOK_A_CALL_URL } from '@/lib/constants'

const INQUIRY_TYPES = [
  'Executive Coaching',
  'The C-Suite Forum',
  'Keynote Speaking',
  'Advisory',
  'Other',
]

const REASONS = [
  {
    title: 'Executive Coaching',
    body: 'For senior leaders from Director to C-Suite working on presence, influence, and readiness for the next level.',
    href: '/executive-coaching',
  },
  {
    title: 'The C-Suite Forum',
    body: 'For leaders seeking a confidential peer group for the conversations that cannot happen inside their organization.',
    href: '/c-suite-forum',
  },
  {
    title: 'Keynote Speaking',
    body: 'For event organizers booking a keynote on AI strategy, executive leadership, and organizational transformation.',
    href: '/speaking',
  },
  {
    title: 'Advisory',
    body: 'For boards and CEOs seeking an operating partner on AI capital decisions, strategy, and organizational performance.',
    href: '/advisory',
  },
]

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  const labelClass = 'block font-body text-[12px] uppercase tracking-[0.08em] text-muted mb-1.5'
  const inputClass = 'w-full border border-border bg-white px-4 py-2.5 font-body text-[15px] text-[#1A1A1A] outline-none focus:border-gold transition-colors'

  if (status === 'success') {
    return (
      <div className="py-12 text-center">
        <p className="font-body text-[17px] text-navy">
          Received. Mahesh reads every message personally.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setStatus('success')
      }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Name <span className="text-gold">*</span></label>
          <input type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email <span className="text-gold">*</span></label>
          <input type="email" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Organization</label>
          <input type="text" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Title</label>
          <input type="text" className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>I am reaching out about <span className="text-gold">*</span></label>
        <select required className={`${inputClass} appearance-none`}>
          <option value="">Select one</option>
          {INQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Thank you for sharing more information, as appropriate. <span className="text-gold">*</span></label>
        <textarea rows={4} required className={`${inputClass} resize-none`} />
      </div>

      <div>
        <label className={labelClass}>LinkedIn</label>
        <input type="url" className={inputClass} />
      </div>

      <div className="pt-1">
        <button
          type="submit"
          className="bg-navy text-white px-10 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[70vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-6">
            Let&apos;s talk.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70">
            Whether you are navigating a leadership transition, exploring the C-Suite Forum, booking a keynote, or seeking a strategic advisory partner, this is where the conversation starts.
          </p>
        </div>
        <div className="relative min-h-[40vh] lg:min-h-full">
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

      <GoldDivider />

      {/* What to reach out about */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-[24px] lg:text-[32px] font-semibold text-navy leading-tight mb-10">
            What to reach out about.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map((item) => (
              <Link key={item.title} href={item.href} className="group border-t-2 border-gold pt-5 block">
                <h3 className="font-body text-[15px] font-semibold text-navy mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-[14px] leading-[1.7] text-muted">{item.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Form */}
      <section className="bg-bg py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

            {/* Left: context */}
            <div className="lg:col-span-2">
              <div className="w-8 h-[2px] bg-gold mb-6" />
              <h2 className="font-display text-[22px] lg:text-[28px] font-semibold text-navy leading-tight mb-5">
                Start the conversation.
              </h2>
              <p className="font-body text-[15px] leading-[1.75] text-muted mb-8">
                Mahesh personally reads every message. If there is a clear fit, you will hear back directly. He will tell you honestly if he is not the right person, and where to go instead.
              </p>
              <div className="border-t border-border pt-6">
                <p className="font-body text-[13px] uppercase tracking-[0.1em] text-gold mb-3">
                  Prefer to book directly?
                </p>
                <a
                  href={BOOK_A_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold text-white px-8 py-3 font-body text-[11px] font-semibold tracking-[0.16em] uppercase hover:bg-navy transition-colors"
                >
                  Book a Call with Mahesh
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3 bg-white border border-border p-8">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
