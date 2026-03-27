import './InfoStrip.css'

export default function InfoStrip() {
  return (
    <div className="info-strip">
      <div className="container info-strip__inner">
        <div className="info-strip__item">
          <span className="info-strip__icon">📞</span>
          <div>
            <span className="info-strip__label">Phone</span>
            <a href="tel:+254113555777" className="info-strip__value">+254 113 555 777</a>
          </div>
        </div>
        <div className="info-strip__divider" />
        <div className="info-strip__item">
          <span className="info-strip__icon">✉️</span>
          <div>
            <span className="info-strip__label">Email</span>
            <a href="mailto:info@kraftorybiergarten.com" className="info-strip__value">
              info@kraftorybiergarten.com
            </a>
          </div>
        </div>
        <div className="info-strip__divider" />
        <div className="info-strip__item">
          <span className="info-strip__icon">📍</span>
          <div>
            <span className="info-strip__label">Location</span>
            <span className="info-strip__value">Off Red Hill Road, Nairobi</span>
          </div>
        </div>
        <div className="info-strip__divider" />
        <div className="info-strip__item">
          <span className="info-strip__icon">🕐</span>
          <div>
            <span className="info-strip__label">Hours</span>
            <span className="info-strip__value">Daily 6 AM – 11 PM</span>
          </div>
        </div>
        <div className="info-strip__divider" />
        <div className="info-strip__item">
          <span className="info-strip__icon">⭐</span>
          <div>
            <span className="info-strip__label">Happy Hour</span>
            <span className="info-strip__value">5 PM – 7 PM · 30% Off</span>
          </div>
        </div>
        <div className="info-strip__divider hide-mobile" />
        <div className="info-strip__actions hide-mobile">
          <a
            href="https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi"
            target="_blank" rel="noopener noreferrer"
            className="btn btn-sm btn-amber"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </div>
  )
}
