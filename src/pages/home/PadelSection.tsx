import SectionHeader from '../../components/SectionHeader'
import { useReveal } from '../../components/useReveal'
import { BOOKING_LINKS } from '../../constants'
import { PADEL_CARDS } from './data'

export default function PadelSection({ openModal }: { openModal: (url: string, title: string) => void }) {
  const headerRef = useReveal()
  const pricingRef = useReveal()

  return (
    <section id="padel" className="section section--light">
      <div className="container">
        <div className="section-header-row" ref={headerRef}>
          <div className="reveal">
            <SectionHeader
              label="Padel & Sports"
              title="Three Professional <em>Padel Courts</em>"
              subtitle="Book online via Playtomic. Every session includes a complimentary F&B voucher redeemable at the Biergarten — play hard, then dine well."
            />
          </div>
          <div className="reveal reveal-delay-2">
            <button onClick={() => openModal(BOOKING_LINKS.bookPadel, 'Book a Padel Court')} className="btn btn-amber">
              Book a Court →
            </button>
          </div>
        </div>

        <div className="padel-cards">
          {PADEL_CARDS.map((c, i) => (
            <div key={i} className="padel-card">
              <div className="padel-card__img" style={{ backgroundImage: `url(${c.img})` }}>
                <span className="padel-card__badge">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="padel-card__body">
                <h3 className="padel-card__title">{c.title}</h3>
                <p className="padel-card__desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="padel-pricing" ref={pricingRef}>
          <div className="reveal">
            <h3 className="padel-pricing__title">Court Rental Pricing</h3>

            <p className="padel-pricing__note">
              Mon–Thu mornings (8 AM – 3 PM) are <strong>50% off</strong> · Full rates apply from 3 PM onwards and all weekend · F&amp;B voucher included on full-rate bookings
            </p>

            <div className="padel-pricing__table-wrap">
              <table className="data-table padel-pricing__table">
                <thead>
                  <tr>
                    <th>Days</th>
                    <th>Time Slot</th>
                    <th>1 hr</th>
                    <th>1.5 hr</th>
                    <th>F&amp;B Voucher</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="padel-pricing__row--discount">
                    <td>Mon – Thu</td>
                    <td>8 AM – 3 PM</td>
                    <td>
                      <strong style={{ color: 'var(--amber)' }}>KES 2,000</strong>
                      <span className="padel-pricing__badge">50% off</span>
                    </td>
                    <td><strong style={{ color: 'var(--amber)' }}>KES 3,000</strong></td>
                    <td style={{ color: 'var(--muted-text)' }}>—</td>
                  </tr>
                  <tr>
                    <td>Mon – Thu</td>
                    <td>3 PM – 11 PM</td>
                    <td><strong style={{ color: 'var(--amber)' }}>KES 4,000</strong></td>
                    <td><strong style={{ color: 'var(--amber)' }}>KES 6,000</strong></td>
                    <td style={{ color: 'var(--moss)', fontWeight: 600 }}>KES 1,000  ·  KES 1,500</td>
                  </tr>
                  <tr>
                    <td>Fri – Sun</td>
                    <td>All Day</td>
                    <td><strong style={{ color: 'var(--amber)' }}>KES 4,000</strong></td>
                    <td><strong style={{ color: 'var(--amber)' }}>KES 6,000</strong></td>
                    <td style={{ color: 'var(--moss)', fontWeight: 600 }}>KES 1,000  ·  KES 1,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
