type TestimonialCardProps = {
  quote: string
  name: string
  title: string
  company: string
}

export default function TestimonialCard({
  quote,
  name,
  title,
  company,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-border p-8 flex flex-col gap-6">
      <p className="font-body text-[17px] italic leading-[1.75] text-navy">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <div className="font-body text-[14px] font-semibold text-navy">
          {name}
        </div>
        <div className="font-body text-[13px] text-muted mt-0.5">
          {title ? `${title}, ${company}` : company}
        </div>
      </div>
    </div>
  )
}
