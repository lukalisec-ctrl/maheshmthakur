'use client'

import { useRef, useEffect } from 'react'

const TESTIMONIALS = [
  {
    quote: 'Hiring Mahesh will amplify your strengths and equip you with practical tools to lead at a higher level.',
    name: 'Varun Vontimitta',
    title: 'Partner Engineering Leader',
    company: 'Meta',
  },
  {
    quote: 'Thanks to Mahesh, I am now a part of a Fortune 5 company. Working with Mahesh has been life-changing for me.',
    name: 'Shikha Jain',
    title: 'Machine Learning Product Manager',
    company: 'Apple',
  },
  {
    quote: 'What sets Mahesh apart is that he has himself walked the walk a few times in startups and in trillion-dollar companies.',
    name: 'Sudha Thota',
    title: 'Senior Director of Product Management',
    company: 'Microsoft',
  },
  {
    quote: 'It is very hard to find an executive coach who has been there and done that.',
    name: 'Hyo Jung Song',
    title: 'Vice President of Mobile',
    company: 'Samsung',
  },
  {
    quote: 'His uncanny ability to say precisely what you need to hear at exactly the right moment. My only regret is not hiring him earlier.',
    name: 'Monisha Kanoth',
    title: 'Senior Data Engineering Manager',
    company: 'Apple',
  },
  {
    quote: 'Every engineering leader focused on building executive presence should work with Mahesh. The impact of your work shifts from being competent to achieving true excellence.',
    name: 'Vijay Kristipati',
    title: 'Head of Engineering',
    company: 'Google',
  },
  {
    quote: 'Mahesh is uniquely qualified as an indispensable tech CEO coach. He genuinely listens and dives into your business as your thought partner.',
    name: 'Feyzi Fatehi',
    title: 'Chief Executive Officer',
    company: 'Corent Technologies',
  },
  {
    quote: 'Mahesh helped me establish myself as a visionary leader in my organization. He provided the best strategies to elevate my org, the product vision, and the business performance.',
    name: 'Nivedita Ojha',
    title: 'Vice President Product Management',
    company: 'Autodesk',
  },
]

// 3 copies so the loop works in both scroll directions
const ITEMS = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS]
const CARD_GAP = 24 // px — matches mr-6

export default function TestimonialCarousel() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Measure one set width from the live DOM so responsive widths are correct
    const setWidth = el.scrollWidth / 3

    // Start in the middle copy so the user can scroll left or right
    el.scrollLeft = setWidth

    const onScroll = () => {
      const { scrollLeft } = el
      if (scrollLeft >= setWidth * 2) {
        // Drifted into third copy — jump back one set (same visual position)
        el.scrollLeft = scrollLeft - setWidth
      } else if (scrollLeft < setWidth) {
        // Drifted into first copy — jump forward one set
        el.scrollLeft = scrollLeft + setWidth
      }
    }

    el.addEventListener('scroll', onScroll, { passive: true })

    // Recalculate on resize so the jump point stays accurate
    const onResize = () => {
      const newSetWidth = el.scrollWidth / 3
      el.scrollLeft = newSetWidth
    }
    window.addEventListener('resize', onResize)

    return () => {
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="flex overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
      style={{ scrollBehavior: 'auto' }}
    >
      {ITEMS.map((t, i) => (
        <div
          key={i}
          className="w-[300px] lg:w-[360px] flex-none bg-white border border-border p-8 flex flex-col gap-6"
          style={{ marginRight: CARD_GAP }}
        >
          <p className="font-body text-[17px] italic leading-[1.75] text-navy flex-1">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div>
            <div className="font-body text-[14px] font-semibold text-navy">{t.name}</div>
            <div className="font-body text-[13px] text-muted mt-0.5">{t.title}</div>
            <div className="font-body text-[12px] font-semibold uppercase tracking-[0.08em] text-gold mt-1">{t.company}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
