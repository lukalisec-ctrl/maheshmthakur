import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Mahesh M. Thakur.',
  description:
    'Reach out about advisory, coaching, speaking, or the C-Suite Forum.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-32 lg:py-40">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-6">
            Let&apos;s talk.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70">
            Tell me what you are working on. I read every message.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="bg-bg py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <h3 className="font-body text-[18px] font-semibold text-navy mb-4">
            What to expect.
          </h3>
          <p className="font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
            I personally read every message. I respond to every fit within two
            business days. I tell you directly if I am not the right person, and
            where to go instead.
          </p>
        </div>
      </section>
    </>
  )
}
