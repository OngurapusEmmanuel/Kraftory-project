import SectionHeader from '../../components/SectionHeader'
import { useReveal } from '../../components/useReveal'
import { BOOKING_LINKS } from '../../constants'
import { taps, cappuccino } from './data'

export default function BeerSection({ openModal }: { openModal: (url: string, title: string) => void }) {
  const textRef = useReveal()
  const imgRef = useReveal()

  return (
    <section id="beer" className="section section--forest">
      <div className="container">
        <div className="beer-layout">
          <div className="beer-text" ref={textRef}>
            <div className="reveal">
              <SectionHeader
                label="Biergarten & Tap Room"
                title="The <em>Beer Garden</em>"
                subtitle="Our outdoor biergarten is Nairobi's most atmospheric drinking experience. Open daily from 6 AM, with happy hour from 5–7 PM — 30% off all beers and cocktails."
                light
              />
              <div className="beer-happy-hour">
                <div className="beer-happy-hour__inner">
                  <span className="beer-happy-hour__time">5 PM – 7 PM</span>
                  <span className="beer-happy-hour__label">Happy Hour · Every Day · 30% Off All Beers & Cocktails</span>
                </div>
              </div>
              <button onClick={() => openModal(BOOKING_LINKS.drinksMenu, 'Kraftory Drinks Menu')} className="btn btn-outline-white" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                View Full Drinks Menu ↗
              </button>
            </div>
          </div>
          <div className="beer-images" ref={imgRef}>
            <div className="reveal reveal-delay-1 beer-mosaic">
              <img src={taps} alt="Beer taps" className="beer-mosaic__main" />
              <img src={cappuccino} alt="Capuccino" className="beer-mosaic__secondary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
