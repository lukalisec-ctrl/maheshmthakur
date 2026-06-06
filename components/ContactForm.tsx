'use client'

import { useState } from 'react'

type ContactFormProps = {
  defaultService?: string
  buttonLabel?: string
  dark?: boolean
}

export default function ContactForm({
  buttonLabel = 'Send Request',
  dark = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'success'>('idle')

  if (status === 'success') {
    return (
      <div className="py-8 text-center">
        <p className={`font-body text-[17px] ${dark ? 'text-white/80' : 'text-navy'}`}>
          Received. Mahesh reads every message personally.
        </p>
      </div>
    )
  }

  const labelClass = `block font-body text-[12px] uppercase tracking-[0.08em] mb-1.5 ${dark ? 'text-white/50' : 'text-muted'}`
  const inputClass = `w-full border bg-white px-4 py-2.5 font-body text-[15px] text-[#1A1A1A] outline-none focus:border-gold transition-colors ${dark ? 'border-white/20' : 'border-border'}`

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setStatus('success')
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            Name <span className="text-gold">*</span>
          </label>
          <input type="text" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>
            Email <span className="text-gold">*</span>
          </label>
          <input type="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass}>LinkedIn Link</label>
        <input type="url" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>
          Primary Challenge <span className="text-gold">*</span>
        </label>
        <textarea
          rows={3}
          required
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex items-center gap-6 pt-1">
        <button
          type="submit"
          className={`px-8 py-3 font-body font-semibold text-sm tracking-widest uppercase transition-colors ${
            dark
              ? 'bg-gold text-white hover:bg-white hover:text-navy'
              : 'bg-navy text-white hover:bg-gold'
          }`}
        >
          {buttonLabel}
        </button>
        <p className={`font-body text-[12px] ${dark ? 'text-white/40' : 'text-muted'}`}>
          Every inquiry is reviewed personally. All conversations are strictly confidential.
        </p>
      </div>
    </form>
  )
}
