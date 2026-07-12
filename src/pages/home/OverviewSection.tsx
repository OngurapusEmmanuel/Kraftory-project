import SectionHeader from '../../components/SectionHeader'
import { useReveal } from '../../components/useReveal'
import { BOOKING_LINKS } from '../../constants'
import { taps, salmon, game } from './data'

export default function OverviewSection({ openModal }: { openModal: (url: string, title: string) => void }) {
  const textRef = useReveal()
  const imgRef = useReveal()

  return (
    <section id="overview" className="section section--light">
      <div className="container">
        <div className="overview-grid">
          <div className="overview-text" ref={textRef}>
            <div className="reveal">
              <SectionHeader
                label="Welcome to Kraftory"
                title="A green escape for <em>craft beer</em>, great food &amp; good times"
                subtitle="Founded in 2025 on Red Hill Road, Kraftory was born from a simple vision: to create Nairobi's most vibrant community gathering place. Craft beer, a chef-driven kitchen, an artisan bakery, three professional padel courts, and world-class event spaces — all in one extraordinary venue."
              />
              <div className="overview-stats">
                <div className="stat-block">
                  <span className="stat-block__num">3</span>
                  <span className="stat-block__label">Padel Courts</span>
                </div>
                <div className="stat-block">
                  <span className="stat-block__num">6AM</span>
                  <span className="stat-block__label">Open Daily</span>
                </div>
                <div className="stat-block">
                  <span className="stat-block__num">5–7</span>
                  <span className="stat-block__label">Happy Hour PM</span>
                </div>
                <div className="stat-block">
                  <span className="stat-block__num">200+</span>
                  <span className="stat-block__label">Event Capacity</span>
                </div>
              </div>
              <div className="overview-actions">
                <button onClick={() => openModal(BOOKING_LINKS.reserveTable, 'Reserve a Table')} className="btn btn-sm btn-amber">
                  Reserve a Table
                </button>
                <button onClick={() => document.getElementById('padel')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline btn-lg">Book Padel Court</button>
              </div>
            </div>
          </div>
          <div className="overview-image-grid" ref={imgRef}>
            <div className="reveal reveal-delay-1">
              <img src={taps} alt="Craft beer taps at Kraftory" className="ov-img ov-img--tall" />
            </div>
            <div className="reveal reveal-delay-2" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <img src={salmon} alt="Atlantic salmon" className="ov-img" />
              <img src={game} alt="Kraftory games" className="ov-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
