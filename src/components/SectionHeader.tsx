interface Props {
  label?: string
  title: string
  subtitle?: string
  light?: boolean
  center?: boolean
}

export default function SectionHeader({ label, title, subtitle, light, center }: Props) {
  return (
    <div className={`section-header${center ? ' section-header--center' : ''}`}>
      {label && (
        <p className="section-label" style={light ? { color: 'var(--gold-light)' } : {}}>
          {label}
        </p>
      )}
      <h2
        className="section-title"
        style={light ? { color: 'var(--white)' } : {}}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="section-subtitle" style={light ? { color: 'rgba(255,255,255,0.65)' } : {}}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
