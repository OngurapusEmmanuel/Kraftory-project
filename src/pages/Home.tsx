import { useEffect, useRef, useState } from 'react'
import Hero from '../components/Hero'
import InfoStrip from '../components/InfoStrip'
import SectionHeader from '../components/SectionHeader'
import salmon from '../assets/salmon.jpg'
import padelarea from '../assets/padel area.webp'
import taps from '../assets/taps.webp'
import entry from '../assets/entry.webp'
import schnitzel from '../assets/schnitzel.jpg'
import magarita from '../assets/magarita.jpg'
import screen from '../assets/ambience1.webp'
import game from '../assets/games1.webp'
import outdoor from '../assets/outdoor.webp'
import maingarden from '../assets/main garden.webp'
import cappuccino from '../assets/cappuccino.webp'
import conference from '../assets/conference.jpg'
import padelCourts from '../assets/padel/courts.jpg'
import padelCoach from '../assets/padel/coach.jpg'
import padelEquip from '../assets/padel/equipment.jpg'
import padelPremium from '../assets/padel/premium_court.jpg'
import './Home.css'

// ── Reveal helper hook ──
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); obs.unobserve(el) } }, { threshold })
    obs.observe(el); return () => obs.disconnect()
  }, [threshold])
  return ref
}

// ─────────────────────────────────────────────
// MENU DATA
// ─────────────────────────────────────────────
const MENU_TABS = ['Starters', 'Mains', 'Bakery & Desserts', 'Drinks']

const MENU_ITEMS: Record<string, { name: string; desc: string; price: string; tag?: string; img?: string }[]> = {
  'Starters': [
    { name: 'Bavarian Pretzel Board', desc: 'Soft pretzels, stone-ground mustard, beer cheese fondue, pickled jalapeños & house-cured meats', price: 'KES 1,800', tag: "Chef's Pick" },
    { name: 'Burrata & Heirloom Tomato', desc: 'Creamy burrata, roasted cherry tomatoes, aged balsamic, basil oil, sourdough crostini', price: 'KES 1,200', tag: 'Vegetarian' },
    { name: 'Charcuterie & Cheese Board', desc: 'Assorted cured meats, aged cheeses, pickles, house bread', price: 'KES 2,000' }

  ],
  'Mains': [
    { name: 'Atlantic Salmon Steak', desc: 'Crispy-skinned salmon on creamed spinach with lemon beurre blanc', price: 'KES 3,500', tag: 'Signature', img: salmon },
    { name: 'Classic Margherita Pizza', desc: 'Fresh mozzarella, basil leaves and zesty pomodoro sauce on a crispy crust', price: 'KES 1,300', tag: 'Vegetarian', img: magarita },
    { name: 'Chicken Schnitzel', desc: 'Crispy beer-battered chicken fried golden, topped with mango aioli and bacon', price: 'KES 1,800', tag: 'Popular', img: schnitzel }


  ],
  'Bakery & Desserts': [
    { name: 'Artisan Sourdough Loaf', desc: 'Slow-fermented, baked fresh each morning. Served with whipped butter', price: 'KES 350', tag: 'Daily Bake' },
    { name: 'Butter Croissant', desc: 'Classic laminated pastry, flaky and golden — available from 6 AM', price: 'KES 280' },
        { name: 'Salted Caramel Pretzel Tart', desc: 'Dark chocolate ganache, pretzel crust, candied peanuts', price: 'KES 950' }

    ],
  'Drinks': [
    { name: 'Kraftory Love Story', desc: 'Captain Morgan, Malibu, orange & pineapple juice — our best-selling signature cocktail', price: 'KES 1,200', tag: 'Signature' },
    { name: 'Espresso Martini', desc: 'Bold coffee, smooth vodka and kahlúa — the perfect starter or closer', price: 'KES 1,100' },
        { name: 'Craft Beer (Rotating)', desc: 'Ask your server for today\'s rotating local and international craft tap selection', price: 'From KES 500' }

   ],
}

const PADEL_CARDS = [
  { img: padelPremium, title: '3 Premium Courts', desc: 'Cushioned flooring, pro-grade nets, LED lighting and privacy fencing for uninterrupted play. Floodlit until closing.' },
  { img: padelCoach, title: 'Professional Coaching', desc: 'Certified coaches for one-on-one and group lessons. Perfect from complete beginners to tournament preparation.' },
  { img: padelEquip, title: 'Equipment Hire', desc: 'High-quality rackets and balls supplied. Lockers and changing facilities on site.' },
  { img: padelCourts, title: 'Flexible Booking', desc: 'Book online via Playtomic. Hourly or recurring slots with free cancellation up to 12 hours before play.' },
]

const EVENTS = [
  { icon: '🎵', title: 'Live Jazz Nights', when: 'Every Friday · 8 PM', desc: 'Local jazz musicians performing live in the biergarten.' },
  { icon: '☀️', title: 'Weekend Brunch', when: 'Sat & Sun · 10 AM', desc: 'Fresh bakery, cocktails and the full brunch menu all morning.' },
  { icon: '🎾', title: 'Sunset Padel Socials', when: 'Every Thursday · 5 PM', desc: 'Play a few sets and mingle with fellow enthusiasts over happy hour.' },
  { icon: '🍺', title: 'Craft Beer Tasting', when: '2nd Wednesday · Monthly', desc: 'Guided craft beer flights from local and international breweries.' },
  { icon: '🏆', title: 'Padel Tournaments', when: 'Monthly', desc: 'Open competitive matches for all levels — prizes and good vibes.' },
  { icon: '🎤', title: 'Comedy Night', when: 'Last Saturday · Monthly', desc: "Stand-up from Nairobi's best local talent — laughs guaranteed." },
]

const VENUE_SPACES = [
  {
    name: 'Main Garden',
    capacity: 'Up to 150 guests',
    vibe: 'Open-air · Lush · Social',
    desc: 'Perfect for large gatherings and celebrations.',
    image: maingarden,
    icon: '',
  },
  {
    name: 'Biergarten Deck',
    capacity: 'Up to 80 guests',
    vibe: 'Casual · Vibrant',
    icon: '',
    desc: 'Ideal for drinks and relaxed hangouts.',
    image: outdoor,
  },
  {
    name: 'Padel Arena',
    capacity: 'Up to 60 guests',
    vibe: 'Active · Energetic',
    desc: 'Great for team-building and sporty events.',
    image: padelarea,
    icon: '',
  },
  {
    name: 'Indoor Lounge',
    capacity: 'Up to 40 guests',
    vibe: 'Cozy · Intimate',
    desc: 'Perfect for private dinners and meetings.',
    image: conference,
    icon: '',

  },
]

const GALLERY_IMGS = [
  { url: entry, alt: 'Biergarten atmosphere', span: 2 },
  { url: outdoor, alt: 'Craft beer selection' },
  { url: maingarden, alt: 'Artisan food' },
  { url: screen, alt: 'Padel courts' },
  { url: game, alt: 'Restaurant dining', span: 2 }, // reuse for layout balance
  { url: taps, alt: 'Group dining' },
]

const TEAM = [
  { icon: '👩‍💼', name: 'Deval Modi', role: 'Director', quote: '"Kraftory was built on a dream — that Nairobi deserves a place where great people meet great beer. Welcome to our home."' },
  { icon: '👨‍🍳', name: 'Chef Alex', role: 'Head Chef', quote: '"Food is my love language. I pour craft into every plate — from the sourdough we bake at dawn to the salmon we plate at sunset."' },
  { icon: '👩‍💼', name: 'Cosmas Egwa', role: 'General Manager', quote: '"My job is to make sure you feel at home the moment you walk through our gates. The energy here is real. You\'re one of us now."' },
]

// ─────────────────────────────────────────────
export default function Home() {
  const [activeTab, setActiveTab] = useState('Starters')
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', date: '', time: '7:00 PM', guests: '2', type: 'Restaurant Table', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setFormState({ name: '', email: '', phone: '', date: '', time: '7:00 PM', guests: '2', type: 'Restaurant Table', notes: '' }) }, 4000)
  }

  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal()
  const r4 = useReveal(); const r5 = useReveal(); const r6 = useReveal()
  const r7 = useReveal(); const r8 = useReveal(); const r9 = useReveal()

  return (
    <div className="home">

      {/* ══════════════════ HERO ══════════════════ */}
      <Hero />

      {/* ══════════════════ INFO STRIP ══════════════════ */}
      <InfoStrip />
       <div className="padel-ticker">
                <div className="padel-ticker__track">
                  {Array(4).fill('🎾 Kraftory Padel — Play Hard · Dine Well · Come Back ; KES 4,000/hr with complimentary F&B voucher ; Book via Playtomic ; 3 Professional Courts ;').join('')}
                </div>
              </div>

      {/* ══════════════════ OVERVIEW ══════════════════ */}
      <section id="overview" className="section section--light">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-text" ref={r1}>
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
                  <a href="https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi" target="_blank" rel="noopener noreferrer" className="btn btn-amber btn-lg">Reserve a Table</a>
                  <button onClick={() => document.getElementById('padel')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline btn-lg">Book Padel Court</button>
                </div>
              </div>
            </div>
            <div className="overview-image-grid" ref={r2}>
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

      {/* ══════════════════ FEATURES STRIP ══════════════════ */}
      <section className="features-strip">
        <div className="container features-strip__grid">
          {[
            { icon: '🍺', label: 'Craft Beer & Cocktails', sub: 'Curated local & international selection' },
            { icon: '🍽️', label: 'Restaurant & Bakery', sub: 'Chef-driven kitchen, fresh daily bakes' },
            { icon: '🎾', label: 'Padel Courts', sub: '3 professional courts · KES 4,000/hr' },
            { icon: '🎉', label: 'Events & Venue', sub: 'Private hire for up to 200 guests' },
            { icon: '☕', label: 'Open from 6 AM', sub: 'Breakfast, brunch, lunch & dinner' },
            { icon: '📍', label: 'Red Hill Road', sub: 'Nairobi · Free Parking' },
          ].map((f, i) => (
            <div key={i} className="feature-item">
              <span className="feature-item__icon">{f.icon}</span>
              <span className="feature-item__label">{f.label}</span>
              <span className="feature-item__sub">{f.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ DINING & MENU ══════════════════ */}
      <section id="dining" className="section section--white">
        <div className="container">
          <div className="section-header-row" ref={r3}>
            <div className="reveal">
              <SectionHeader
                label="Restaurant & Bakery"
                title="The <em>Kitchen</em>"
                subtitle="Chef-driven plates crafted from premium ingredients. From our artisan bakery at dawn to our full dinner service — every dish is made with care."
              />
            </div>
            <div className="reveal reveal-delay-2 menu-external-links">
              <a href="https://kraftory-biergarten.ubuntu.click/menu.html?menuId=d5e8eae0-cc8c-4bd2-9d0d-12fcad432180&title=Kraftory%20Food%20Menu" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Full Food Menu ↗</a>
              <a href="https://kraftory-biergarten.ubuntu.click/menu.html?menuId=b0a494f4-7f0f-42dc-8e09-3dcee962fd6d&title=Kraftory%20Drinks%20Menu" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">Full Drinks Menu ↗</a>
            </div>
          </div>

          {/* Tabs */}
          <div className="menu-tabs" role="tablist">
            {MENU_TABS.map(tab => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`menu-tab ${activeTab === tab ? 'menu-tab--active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >{tab}</button>
            ))}
          </div>

          {/* Menu grid */}
          <div className="menu-grid" role="tabpanel">
            {MENU_ITEMS[activeTab].map((item, i) => (
              <div key={i} className="menu-card">
                {item.img && <div className="menu-card__img" style={{ backgroundImage: `url(${item.img})` }} />}
                <div className="menu-card__body">
                  <div className="menu-card__top">
                    <h3 className="menu-card__name">{item.name}</h3>
                    {item.tag && <span className="badge">{item.tag}</span>}
                  </div>
                  <p className="menu-card__desc">{item.desc}</p>
                  <p className="menu-card__price">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ BEER & DRINKS ══════════════════ */}
      <section id="beer" className="section section--forest">
        <div className="container">
          <div className="beer-layout">
            <div className="beer-text" ref={r4}>
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
                <ul className="beer-list">
                  {[
                    { name: 'Tusker Lager', style: "Kenya's Finest · Premium Lager", price: 'KES 450' },
                    { name: 'Kraftory Love Story', style: 'Signature Cocktail · Captain Morgan, Malibu, Orange & Pineapple', price: 'KES 1,200' },
                   { name: 'Cappuccino', style: 'Rich Espresso · Steamed Milk · From 6 AM', price: 'KES 350' },
                  ].map((b, i) => (
                    <li key={i} className="beer-item">
                      <div>
                        <span className="beer-item__name">{b.name}</span>
                        <span className="beer-item__style">{b.style}</span>
                      </div>
                      <span className="beer-item__price">{b.price}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://kraftory-biergarten.ubuntu.click/menu.html?menuId=b0a494f4-7f0f-42dc-8e09-3dcee962fd6d&title=Kraftory%20Drinks%20Menu" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                  View Full Drinks Menu ↗
                </a>
              </div>
            </div>
            <div className="beer-images" ref={r5}>
              <div className="reveal reveal-delay-1 beer-mosaic">
                <img src={taps} alt="Beer taps" className="beer-mosaic__main" />
                <img src={cappuccino} alt="Capuccino" className="beer-mosaic__secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ PADEL ══════════════════ */}
      <section id="padel" className="section section--light">
        <div className="container">
          <div className="section-header-row" ref={r6}>
            <div className="reveal">
              <SectionHeader
                label="Padel & Sports"
                title="Three Professional <em>Padel Courts</em>"
                subtitle="Book online via Playtomic. Every session includes a complimentary F&B voucher redeemable at the Biergarten — play hard, then dine well."
              />
            </div>
            <div className="reveal reveal-delay-2">
              <a href="https://playtomic.com/clubs/kraftory-biergarten-padel" target="_blank" rel="noopener noreferrer" className="btn btn-amber">Book a Court →</a>
            </div>
          </div>

          <div className="padel-cards">
            {PADEL_CARDS.map((c, i) => (
              <div key={i} className="padel-card">
                <div className="padel-card__img" style={{ backgroundImage: `url(${c.img})` }} />
                <div className="padel-card__body">
                  <h3 className="padel-card__title">{c.title}</h3>
                  <p className="padel-card__desc">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
         

          {/* Pricing table */}
<div className="padel-pricing" ref={r7}>
  <div className="reveal">
    <h3 className="padel-pricing__title">Court Rental Pricing</h3>

    <p className="padel-pricing__note">
      Same rates apply every day · Morning slot (6 AM – 12 PM) is <strong>50% off</strong>
    </p>

    <div className="padel-pricing__table-wrap">
      <table className="data-table padel-pricing__table">
        <thead>
          <tr>
            <th>Time Slot</th>
            <th>Rate</th>
            <th>F&amp;B Voucher Included</th>
          </tr>
        </thead>
        <tbody>
          {[
            { slot: 'Morning · 6 AM – 12 PM', rate: 4000, discount: true },
            { slot: 'Afternoon · 12 PM – 5 PM', rate: 4000, discount: false },
            { slot: 'Evening · 5 PM – 10 PM', rate: 4000, discount: false },
          ].map((row, i) => {
            const finalRate = row.discount ? row.rate / 2 : row.rate;
            return (
              <tr key={i}>
                <td>{row.slot}</td>

                <td>
                  <strong style={{ color: 'var(--amber)' }}>
                    KES {finalRate.toLocaleString()} / hr
                    {row.discount && (
                      <span style={{ color: 'var(--green)', marginLeft: '0.5rem', fontWeight: 600 }}>
                        (50% Off!)
                      </span>
                    )}
                  </strong>
                </td>

                <td style={{ color: 'var(--moss)', fontWeight: 600 }}>
                  KES 1,000 (1 hr)&nbsp;&nbsp;·&nbsp;&nbsp;KES 1,500 (1.5 hr)
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* ══════════════════ EVENTS ══════════════════ */}
      <section id="events" className="section section--white">
        <div className="container">
          <div className="section-header-row" ref={r8}>
            <div className="reveal">
              <SectionHeader
                label="What's On"
                title="Events &amp; <em>Venue Hire</em>"
                subtitle="Something is always happening at Kraftory — from weekly jazz nights to monthly padel tournaments. And when you need a venue, we've got the perfect space."
              />
            </div>
          </div>

          <div className="events-grid">
            {EVENTS.map((ev, i) => (
              <div key={i} className="event-card">
                <div className="event-card__icon">{ev.icon}</div>
                <div className="event-card__body">
                  <span className="event-card__when">{ev.when}</span>
                  <h3 className="event-card__title">{ev.title}</h3>
                  <p className="event-card__desc">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Venue spaces */}
          <div className="venue-section">
            <div className="venue-section__header">
              <SectionHeader
                label="Private Hire"
                title="Our <em>Venue Spaces</em>"
                subtitle="From birthday parties to corporate gatherings, product launches to team-building — Kraftory offers flexible spaces for every occasion."
              />
            </div>
            <div className="venue-grid">
  {VENUE_SPACES.map((v, i) => (
    <div
      key={i}
      className="venue-card"
      style={{ backgroundImage: `url(${v.image})` }}
    >
      <div className="venue-card__overlay" />

      <div className="venue-card__content">
        <div className="venue-card__icon">{v.icon}</div>
        <h3 className="venue-card__name">{v.name}</h3>
        <p className="venue-card__capacity">{v.capacity}</p>
        <p className="venue-card__vibe">{v.vibe}</p>
        <p className="venue-card__desc">{v.desc}</p>
      </div>
    </div>
  ))}
</div>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary btn-lg">
                Enquire About Venue Hire
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ TEAM ══════════════════ */}
      <section className="section section--light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <SectionHeader label="The People" title="Meet Our <em>Team</em>" center />
          </div>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className="team-card">
                <div className="team-card__avatar">{m.icon}</div>
                <h3 className="team-card__name">{m.name}</h3>
                <p className="team-card__role">{m.role}</p>
                <p className="team-card__quote">{m.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ GALLERY ══════════════════ */}
      <section id="gallery" className="section section--white gallery-section">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <SectionHeader label="Atmosphere" title="Life at <em>Kraftory</em>" />
          </div>
        </div>
        <div className="gallery-grid">
          {GALLERY_IMGS.map((img, i) => (
            <div
              key={i}
              className={`gallery-cell${img.span ? ` gallery-cell--span-${img.span}` : ''}`}
              style={{ backgroundImage: `url(${img.url})` }}
              role="img"
              aria-label={img.alt}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════ CONTACT & RESERVATION ══════════════════ */}
      <section id="contact" className="section section--light">
        <div className="container">
          <div className="contact-grid" ref={r9}>
            {/* LEFT — info + map */}
            <div className="contact-info reveal">
              <SectionHeader label="Find Us" title="Contact &amp; <em>Reservations</em>" />

              <div className="contact-details">
                <div className="contact-detail">
                  <span className="contact-detail__icon">📍</span>
                  <div>
                    <strong>Address</strong>
                    <p>Off Red Hill Road, Next to Commission for University Education, Nairobi, Kenya</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail__icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <p><a href="tel:+254113555777">+254 113 555 777</a></p>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail__icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@kraftorybiergarten.com">info@kraftorybiergarten.com</a></p>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail__icon">🕐</span>
                  <div>
                    <strong>Opening Hours</strong>
                    <p>Monday – Sunday · 6 AM – 11 PM</p>
                    <p style={{ color: 'var(--amber)', fontWeight: 500 }}>Happy Hour · 5–7 PM Daily (30% Off)</p>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="contact-detail__icon">💬</span>
                  <div>
                    <strong>WhatsApp</strong>
                    <p><a href="https://wa.me/254113555777" target="_blank" rel="noopener noreferrer">Message us on WhatsApp →</a></p>
                  </div>
                </div>
              </div>

              {/* Quick booking buttons */}
              <div className="contact-quick-book">
                <a href="https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi" target="_blank" rel="noopener noreferrer" className="btn btn-amber">🍽️ Reserve a Table</a>
                <a href="https://playtomic.com/clubs/kraftory-biergarten-padel" target="_blank" rel="noopener noreferrer" className="btn btn-primary">🎾 Book a Court</a>
              </div>

              {/* Map */}
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.5365001510845!2d36.79517577395949!3d-1.2258177987624916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f172fa40abbaf%3A0xe34087d17f1fea13!2sKraftory%20Biergarten!5e1!3m2!1sen!2ske!4v1754983508785!5m2!1sen!2ske"
                  width="100%" height="280"
                  style={{ border: 'none', display: 'block', borderRadius: 'var(--radius)' }}
                  allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kraftory Biergarten on Google Maps"
                />
              </div>
            </div>

            {/* RIGHT — reservation form */}
            <div className="contact-form-wrap reveal reveal-delay-2">
              <div className="contact-form-card">
                <h3 className="contact-form-card__title">Make a Reservation</h3>
                <p className="contact-form-card__sub">Table · Padel Court · Private Event</p>

                {submitted ? (
                  <div className="form-success">
                    <div className="form-success__icon">✅</div>
                    <h4>Booking Received!</h4>
                    <p>Thank you — we'll be in touch within 24 hours to confirm your reservation.</p>
                  </div>
                ) : (
                  <form className="res-form" onSubmit={handleSubmit}>
                    <div className="res-form__row">
                      <label className="res-form__label">Full Name *
                        <input className="res-form__input" type="text" placeholder="Jane Kamau" value={formState.name} onChange={e => setFormState({ ...formState, name: e.target.value })} required />
                      </label>
                      <label className="res-form__label">Phone
                        <input className="res-form__input" type="tel" placeholder="+254 7XX XXX XXX" value={formState.phone} onChange={e => setFormState({ ...formState, phone: e.target.value })} />
                      </label>
                    </div>
                    <label className="res-form__label">Email Address *
                      <input className="res-form__input" type="email" placeholder="jane@email.com" value={formState.email} onChange={e => setFormState({ ...formState, email: e.target.value })} required />
                    </label>
                    <div className="res-form__row">
                      <label className="res-form__label">Date *
                        <input className="res-form__input" type="date" value={formState.date} onChange={e => setFormState({ ...formState, date: e.target.value })} required min={new Date().toISOString().split('T')[0]} />
                      </label>
                      <label className="res-form__label">Time
                        <select className="res-form__input" value={formState.time} onChange={e => setFormState({ ...formState, time: e.target.value })}>
                          {['6:00 AM','7:00 AM','8:00 AM','12:00 PM','1:00 PM','5:00 PM (Happy Hour)','6:00 PM','7:00 PM','8:00 PM','9:00 PM'].map(t => <option key={t}>{t}</option>)}
                        </select>
                      </label>
                    </div>
                    <div className="res-form__row">
                      <label className="res-form__label">Guests
                        <select className="res-form__input" value={formState.guests} onChange={e => setFormState({ ...formState, guests: e.target.value })}>
                          {['1–2','3–4','5–8','9–15','16+ (Group)'].map(g => <option key={g}>{g}</option>)}
                        </select>
                      </label>
                      <label className="res-form__label">Booking Type
                        <select className="res-form__input" value={formState.type} onChange={e => setFormState({ ...formState, type: e.target.value })}>
                          {['Restaurant Table','Beer Garden Table','Padel Court','Private VIP Lounge','Corporate / Event'].map(t => <option key={t}>{t}</option>)}
                        </select>
                      </label>
                    </div>
                    <label className="res-form__label">Special Requests
                      <textarea className="res-form__input res-form__textarea" rows={3} placeholder="Dietary requirements, special occasions, or any other notes..." value={formState.notes} onChange={e => setFormState({ ...formState, notes: e.target.value })} />
                    </label>
                    <button type="submit" className="btn btn-amber" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                      Confirm Reservation
                    </button>
                    <p className="res-form__note">We'll confirm your booking within 24 hours · <a href="tel:+254113555777">+254 113 555 777</a></p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
