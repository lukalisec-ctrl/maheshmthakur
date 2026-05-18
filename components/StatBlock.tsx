type Stat = {
  number: string
  label: string
  description: string
}

type StatBlockProps = {
  stats: Stat[]
  theme?: 'light' | 'dark'
}

export default function StatBlock({ stats, theme = 'light' }: StatBlockProps) {
  const labelColor = theme === 'dark' ? 'text-white/70' : 'text-navy'
  const descColor = theme === 'dark' ? 'text-white/60' : 'text-muted'

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center md:text-left">
          <div className="font-display text-[64px] leading-none font-bold text-gold mb-3">
            {stat.number}
          </div>
          <div
            className={`font-body text-[13px] font-semibold uppercase tracking-[0.08em] mb-2 ${labelColor}`}
          >
            {stat.label}
          </div>
          <div className={`font-body text-[16px] leading-relaxed ${descColor}`}>
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  )
}
