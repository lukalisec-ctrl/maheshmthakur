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
          <h1 className="font-display text-[28px] lg:text-[44px] font-bold text-white leading-tight mb-8">
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
      <section className="bg-bg py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="bg-navy px-8 lg:px-14 py-10 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <div>
                <div className="w-8 h-[2px] bg-gold mb-5" />
                <h2 className="font-display text-[22px] lg:text-[26px] font-semibold text-white leading-tight mb-4">
                  Send a Note.
                </h2>
                <p className="font-body text-[15px] leading-[1.75] text-white/65">
                  Mahesh personally reads every message. He responds to every fit within two business days. He will tell you directly if he is not the right person, and where to go instead.
                </p>
              </div>
              <div>
                <ContactForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
