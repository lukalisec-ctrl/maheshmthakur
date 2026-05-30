'use client'

import { useState } from 'react'

type ContactFormProps = {
  defaultService?: string
  buttonLabel?: string
}

export default function ContactForm({
  buttonLabel = 'Send Request',
}: ContactFormProps) {
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
          Name <span className="text-gold">*</span>
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
          LinkedIn Link
        </label>
        <input
          type="url"
          className="w-full border border-border bg-white px-4 py-3 font-body text-[16px] text-[#1A1A1A] outline-none focus:border-gold"
        />
      </div>

      <div>
        <label className="block font-body text-[13px] uppercase tracking-[0.08em] text-muted mb-2">
          Primary Challenge <span className="text-gold">*</span>
        </label>
        <textarea
          rows={4}
          required
          className="w-full border border-border bg-white px-4 py-3 font-body text-[16px] text-[#1A1A1A] outline-none focus:border-gold resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-navy text-white px-8 py-4 font-body font-semibold text-sm tracking-widest uppercase hover:bg-gold transition-colors"
      >
        {buttonLabel}
      </button>
      <p className="font-body text-[13px] text-muted mt-3">
        All inquiries are treated confidentially.
      </p>
    </form>
  )
}
