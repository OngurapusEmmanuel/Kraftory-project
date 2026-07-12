import { CONTACT, SOCIALS, BOOKING_LINKS } from '../constants'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">Kraftory</div>
            <p className="footer__tagline">Craft Beer · Great Food · Good Times</p>
            <p className="footer__address">Off Red Hill Road<br />Next to Commission for University Education<br />Nairobi, Kenya</p>
            <div className="footer__socials">
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Instagram">IG</a>
              <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="Twitter/X">𝕏</a>
              <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="footer__social-btn" aria-label="WhatsApp">WA</a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Explore</h4>
            <ul className="footer__links">
              <li><button onClick={() => scrollTo('overview')} className="footer__link-btn">Overview</button></li>
              <li><button onClick={() => scrollTo('dining')} className="footer__link-btn">Dining & Menu</button></li>
              <li><button onClick={() => scrollTo('beer')} className="footer__link-btn">Beer & Drinks</button></li>
              <li><button onClick={() => scrollTo('padel')} className="footer__link-btn">Padel & Sports</button></li>
              <li><button onClick={() => scrollTo('events')} className="footer__link-btn">Events & Venue</button></li>
              <li><button onClick={() => scrollTo('gallery')} className="footer__link-btn">Gallery</button></li>
              <li><button onClick={() => scrollTo('contact')} className="footer__link-btn">Contact</button></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Book</h4>
            <ul className="footer__links">
              <li>
                <a href={BOOKING_LINKS.reserveTable} target="_blank" rel="noopener noreferrer" className="footer__link-btn">
                  Reserve a Table →
                </a>
              </li>
              <li>
                <a href={BOOKING_LINKS.bookPadel} target="_blank" rel="noopener noreferrer" className="footer__link-btn">
                  Book a Padel Court →
                </a>
              </li>
              <li>
                <a href={BOOKING_LINKS.foodMenu} target="_blank" rel="noopener noreferrer" className="footer__link-btn">
                  View Food Menu →
                </a>
              </li>
              <li>
                <a href={BOOKING_LINKS.drinksMenu} target="_blank" rel="noopener noreferrer" className="footer__link-btn">
                  View Drinks Menu →
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="footer__link-btn">
                  WhatsApp Us →
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__links footer__contact-list">
              <li>
                <span className="footer__contact-icon">📞</span>
                <a href={CONTACT.phoneHref} className="footer__link-btn">{CONTACT.phone}</a>
              </li>
              <li>
                <span className="footer__contact-icon">✉️</span>
                <a href={CONTACT.emailHref} className="footer__link-btn">{CONTACT.email}</a>
              </li>
              <li>
                <span className="footer__contact-icon">🕐</span>
                <span className="footer__link-btn" style={{cursor:'default'}}>Mon–Sun · 6 AM – 11 PM</span>
              </li>
              <li>
                <span className="footer__contact-icon">🍺</span>
                <span className="footer__link-btn" style={{cursor:'default'}}>Happy Hour · 5–7 PM Daily</span>
              </li>
              <li>
                <span className="footer__contact-icon">🎾</span>
                <span className="footer__link-btn" style={{cursor:'default'}}>Padel · 6 AM – 10 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Kraftory Biergarten. All rights reserved.</p>
          <p className="footer__bottom-right">Nairobi, Kenya · Off Red Hill Road</p>
        </div>
      </div>
    </footer>
  )
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
