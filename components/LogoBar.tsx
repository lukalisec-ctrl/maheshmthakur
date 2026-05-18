import { builtAt, coachedAt } from '@/lib/logos'

export default function LogoBar() {
  return (
    <div className="space-y-10">
      <div>
        <div className="font-body text-[11px] uppercase tracking-[0.14em] text-gold mb-4">
          Built at
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-4">
          {builtAt.map((name) => (
            <span
              key={name}
              className="font-display text-[18px] font-bold uppercase tracking-[0.1em] text-navy"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <div className="border-t border-border pt-10">
        <div className="font-body text-[11px] uppercase tracking-[0.14em] text-gold mb-4">
          Coached leaders at
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-4">
          {coachedAt.map((name) => (
            <span
              key={name}
              className="font-display text-[16px] font-semibold uppercase tracking-[0.08em] text-navy/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
