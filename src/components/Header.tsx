import { useState, useEffect } from 'react'
import LinkModal from './LinkModal'
import logo from '../assets/logo1.png'
import { CONTACT, SOCIALS, BOOKING_LINKS } from '../constants'
import './Header.css'

const SECTIONS = [
  { id: 'overview',  label: 'Overview' },
  { id: 'dining',    label: 'Dining & Menu' },
  { id: 'beer',      label: 'Beer & Drinks' },
  { id: 'padel',     label: 'Padel & Sports' },
  { id: 'events',    label: 'Events & Venue' },
  { id: 'gallery',   label: 'Gallery' },
  { id: 'contact',   label: 'Contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('overview')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sectionNavStuck, setSectionNavStuck] = useState(false)

  const [modal, setModal] = useState<{ url: string; title: string } | null>(null)
  const openModal = (url: string, title: string) => setModal({ url, title })
  const closeModal = () => setModal(null)

  // Scroll spy
  useEffect(() => {
    const onScroll = () => {
      setSectionNavStuck(window.scrollY > 520)
      const offsets = SECTIONS.map(s => {
        const el = document.getElementById(s.id)
        return { id: s.id, top: el ? el.getBoundingClientRect().top : 9999 }
      })
      const active = offsets.filter(o => o.top <= 120).pop()
      if (active) setActiveSection(active.id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* ── TOP CONTACT BAR ── */}
      <div className="top-bar">
        <div className="container top-bar__inner">
          <div className="top-bar__left">
            <a href={CONTACT.phoneHref} className="top-bar__item">
              <span className="top-bar__icon">📞</span>{CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref} className="top-bar__item">
              <span className="top-bar__icon">✉️</span>{CONTACT.email}
            </a>
            <span className="top-bar__item">
              <span className="top-bar__icon">📍</span>{CONTACT.addressShort}
            </span>
          </div>
          <div className="top-bar__right">
            <span className="top-bar__item">
              <span className="top-bar__icon">🕐</span>Open Daily · 6 AM – 11 PM
            </span>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" className="top-bar__social">IG</a>
            <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" className="top-bar__social">𝕏</a>
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="top-bar__social">WA</a>
          </div>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <header className="main-header">
        <div className="container main-header__inner">
          {/* Logo */}
          <button className="logo-btn" onClick={() => scrollTo('overview')} aria-label="Go to top">
            <img src={logo} alt="Kraftory Biergarten" className="logo-img" />
            <div className="logo-text">
              <span className="logo-name">Kraftory</span>
              <span className="logo-sub">Biergarten · Restaurant · Padel</span>
            </div>
          </button>

          {/* Desktop CTAs */}
          <div className="main-header__ctas hide-mobile">
            <a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
              WhatsApp Us
            </a>
            <button onClick={() => openModal(BOOKING_LINKS.reserveTable, 'Reserve a Table')} className="btn btn-sm btn-amber">
              Reserve a Table
            </button>
            <button onClick={() => openModal(BOOKING_LINKS.foodMenu, 'Kraftory Food Menu')} className="btn btn-sm btn-outline">
              View Menu
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="hamburger hide-desktop"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={mobileOpen ? 'open' : ''}></span>
            <span className={mobileOpen ? 'open' : ''}></span>
            <span className={mobileOpen ? 'open' : ''}></span>
          </button>
        </div>
      </header>

      {/* ── SECTION NAV TABS (Radisson-style) ── */}
      <nav className={`section-nav ${sectionNavStuck ? 'section-nav--stuck' : ''}`} aria-label="Page sections">
        <div className="section-nav__inner">
          {SECTIONS.map(s => (
            <button
              key={s.id}
              className={`section-nav__tab ${activeSection === s.id ? 'active' : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-drawer__nav">
            {SECTIONS.map(s => (
              <button key={s.id} className="mobile-drawer__link" onClick={() => scrollTo(s.id)}>
                {s.label}
              </button>
            ))}
            <button onClick={() => openModal(BOOKING_LINKS.reserveTable, 'Reserve a Table')}
               className="btn btn-amber" style={{ marginTop: '1rem', textAlign: 'center', justifyContent: 'center' }}>
              Reserve a Table
            </button>
            <button onClick={() => openModal(BOOKING_LINKS.bookPadel, 'Book a Padel Court')}
               className="btn btn-outline" style={{ textAlign: 'center', justifyContent: 'center' }}>
              Book a Court
            </button>
          </nav>
        </div>
      )}
      <LinkModal url={modal ? modal.url : null} title={modal ? modal.title : undefined} onClose={closeModal} />
    </>
  )
}
