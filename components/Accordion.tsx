'use client'

import { useState } from 'react'

type AccordionItem = {
  question: string
  answer: string
}

type AccordionProps = {
  items: AccordionItem[]
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-border">
      {items.map((item, index) => (
        <div key={index} className="py-6">
          <button
            className="w-full flex items-start justify-between gap-4 text-left"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-body text-[17px] font-semibold text-navy leading-snug">
              {item.question}
            </span>
            <span className="flex-shrink-0 font-body text-[20px] text-gold leading-none mt-0.5">
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          {openIndex === index && (
            <div className="mt-4 font-body text-[17px] leading-[1.75] text-[#1A1A1A]">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
