import type { Metadata } from 'next'
import Image from 'next/image'
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
      <section className="bg-navy py-16 lg:py-0 lg:min-h-[80vh] grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-16">
          <h1 className="font-display text-[36px] lg:text-[56px] font-bold text-white leading-tight mb-8">
            Let&apos;s talk.
          </h1>
          <p className="font-body text-[18px] leading-[1.75] text-white/70">
            Share what you are working on. Mahesh reads every message.
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

      {/* Form */}
      <section className="bg-bg py-14 lg:py-20">
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
            Mahesh personally reads every message. He responds to every fit within two
            business days. He will tell you directly if he is not the right person, and
            where to go instead.
          </p>
        </div>
      </section>
    </>
  )
}
