import SectionHeader from '../../components/SectionHeader'
import { useReveal } from '../../components/useReveal'
import { BOOKING_LINKS } from '../../constants'
import { salmon, magarita, schnitzel } from './data'

export default function DiningSection({ openModal }: { openModal: (url: string, title: string) => void }) {
  const textRef = useReveal()

  return (
    <section id="dining" className="section section--white">
      <div className="container">
        <div className="dining-layout">
          <div className="dining-text" ref={textRef}>
            <div className="reveal">
              <SectionHeader
                label="Restaurant & Bakery"
                title="The <em>Kitchen</em>"
                subtitle="Chef-driven plates crafted from premium ingredients. From our artisan bakery at dawn to our full dinner service — every dish is made with care."
              />
              <div className="dining-highlight">
                <div className="dining-highlight__inner">
                  <span className="dining-highlight__time">6 AM – 11 PM</span>
                  <span className="dining-highlight__label">Open Daily · Artisan Bakery · Weekend Brunch · Happy Hour 5–7 PM</span>
                </div>
              </div>
              <div className="menu-external-links" style={{ marginTop: '2rem' }}>
                <button onClick={() => openModal(BOOKING_LINKS.foodMenu, 'Kraftory Food Menu')} className="btn btn-outline btn-sm">
                  Full Food Menu ↗
                </button>
              </div>
            </div>
          </div>
          <div className="dining-images">
            <div className="dining-mosaic">
              <img src={salmon} alt="Atlantic salmon" className="dining-mosaic__main" />
              <img src={magarita} alt="Margherita pizza" className="dining-mosaic__top" />
              <img src={schnitzel} alt="Chicken schnitzel" className="dining-mosaic__bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
