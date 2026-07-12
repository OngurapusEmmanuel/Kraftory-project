const FEATURES = [
  { icon: '🍺', label: 'Craft Beer & Cocktails', sub: 'Curated local & international selection' },
  { icon: '🍽️', label: 'Restaurant & Bakery', sub: 'Chef-driven kitchen, fresh daily bakes' },
  { icon: '🎾', label: 'Padel Courts', sub: '3 professional courts · KES 4,000/hr' },
  { icon: '🎉', label: 'Events & Venue', sub: 'Private hire for up to 200 guests' },
  { icon: '☕', label: 'Open from 6 AM', sub: 'Breakfast, brunch, lunch & dinner' },
  { icon: '📍', label: 'Red Hill Road', sub: 'Nairobi · Free Parking' },
]

export default function FeaturesStrip() {
  return (
    <section className="features-strip">
      <div className="container features-strip__grid">
        {FEATURES.map((f, i) => (
          <div key={i} className="feature-item">
            <span className="feature-item__icon">{f.icon}</span>
            <span className="feature-item__label">{f.label}</span>
            <span className="feature-item__sub">{f.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
