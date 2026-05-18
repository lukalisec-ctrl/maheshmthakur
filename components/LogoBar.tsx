import { builtAt, coachedAt } from '@/lib/logos'

export default function LogoBar() {
  return (
    <div className="space-y-8">
      <div>
        <div className="font-body text-[11px] uppercase tracking-[0.12em] text-gold mb-3">
          Built at:
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {builtAt.map((name) => (
            <span
              key={name}
              className="font-body text-[12px] uppercase tracking-[0.12em] text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div className="font-body text-[11px] uppercase tracking-[0.12em] text-gold mb-3">
          Coached leaders at:
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {coachedAt.map((name) => (
            <span
              key={name}
              className="font-body text-[12px] uppercase tracking-[0.12em] text-muted"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
