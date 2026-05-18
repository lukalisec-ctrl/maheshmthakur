'use client'

import { useState } from 'react'

type ContactFormProps = {
  defaultService?: string
}

const SERVICE_OPTIONS = [
  'Advisory for Boards or CEOs',
  'Coaching for VPs or Directors',
  'C-Suite Forum',
  'Speaking',
  'Something else',
]

export default function ContactForm({ defaultService }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  if (status === 'success') {
    return (
      <div className="py-16 text-center">
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
      className="space-y-6"
    >
      <div>
        <label className="block font-body text-[13px] uppercase tracking-[0.08em] text-muted mb-2">
          Full Name <span className="text-gold">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full border border-border bg-white px-4 py-3 font-body text-[16px] text-[#1A1A1A] outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block font-body text-[13px] uppercase tracking-[0.08em] text-muted mb-2">
          Email <span className="text-gold">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full border border-border bg-white px-4 py-3 font-body text-[16px] text-[#1A1A1A] outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block font-body text-[13px] uppercase tracking-[0.08em] text-muted mb-2">
          LinkedIn URL
        </label>
        <input
          type="url"
          className="w-full border border-border bg-white px-4 py-3 font-body text-[16px] text-[#1A1A1A] outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block font-body text-[13px] uppercase tracking-[0.08em] text-muted mb-2">
          What are you looking for? <span className="text-gold">*</span>
        </label>
        <select
          required
          defaultValue={defaultService ?? ''}
          className="w-full border border-border bg-white px-4 py-3 font-body text-[16px] text-[#1A1A1A] outline-none focus:border-gold appearance-none"
        >
          <option value="" disabled>
            Select one
          </option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-body text-[13px] uppercase tracking-[0.08em] text-muted mb-2">
          Tell me about your situation
        </label>
        <textarea
          rows={4}
          className="w-full border border-border bg-white px-4 py-3 font-body text-[16px] text-[#1A1A1A] outline-none focus:border-gold resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-navy text-white px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold transition-colors"
      >
        Send
      </button>
    </form>
  )
}
