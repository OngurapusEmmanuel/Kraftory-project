import { useEffect, useRef, useState, FC } from 'react'
import Hero from '../components/Hero'
import LinkModal from '../components/LinkModal'
import InfoStrip from '../components/InfoStrip'
import SectionHeader from '../components/SectionHeader'
import salmon from '../assets/salmon.jpg'
import padelarea from '../assets/padel area.webp'
import taps from '../assets/taps.webp'
import EventModal, { type EventDetail } from '../components/EventModal'

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

const EVENTS: EventDetail[] = [
  {
    icon: '🎵',
    title: 'Live Jazz Nights',
    when: 'Every Friday · 8 PM',
    desc: 'Local jazz musicians performing live in the biergarten.',
    longDesc: 'Every Friday evening, Kraftory transforms into Nairobi\'s most intimate live music venue. Our resident and guest jazz artists perform from 8 PM until late, filling the biergarten with soulful melodies that pair perfectly with a cold craft beer or a Kraftory Love Story cocktail. From smooth standards to Afro-jazz originals, the quality is consistently extraordinary.',
    highlights: [
      'Live performance from 8 PM until late',
      'Rotating local and visiting jazz artists',
      'Full food and drinks menu available throughout',
      'Happy hour runs until 7 PM — arrive early for deals',
      'Both indoor seating and outdoor garden available',
      'No reservation required — walk-ins welcome',
    ],
    price: 'Free Entry',
    dresscode: 'Smart casual',
    location: 'Main Biergarten & Outdoor Garden',
    bookingNote: 'No ticket required — simply show up and find a seat. We recommend arriving before 7:30 PM on Fridays as it gets busy. Table reservations available via EatApp.',
    ctaLabel: 'Reserve a Table for Friday',
    ctaUrl: 'https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi',
    color: '#c8780a',
  },
  {
    icon: '☀️',
    title: 'Weekend Brunch',
    when: 'Sat & Sun · 10 AM – 3 PM',
    desc: 'Fresh bakery, cocktails and the full brunch menu all morning.',
    longDesc: 'Start your weekend the right way. Our Weekend Brunch runs every Saturday and Sunday from 10 AM, serving the full brunch menu alongside bottomless mimosa options, fresh pastries from our in-house bakery, and a laid-back atmosphere that stretches lazily into the afternoon. Whether you\'re recovering from Friday or energising for the day ahead, this is the Nairobi brunch you\'ve been looking for.',
    highlights: [
      'Full brunch menu served 10 AM to 3 PM',
      'Fresh pastries, breads and bakes from our in-house bakery',
      'Bottomless mimosa option available',
      'Cappuccinos, cold brew and fresh juices on the bar',
      'Live acoustic music on select Sundays',
      'Family-friendly — children\'s menu available',
    ],
    price: 'À la carte — from KES 280',
    dresscode: 'Relaxed',
    location: 'Restaurant & Outdoor Garden',
    bookingNote: 'We highly recommend reserving a table for Saturday and Sunday brunch — it fills up fast by 11 AM. Bottomless mimosa packages must be pre-ordered at the time of booking.',
    ctaLabel: 'Book Your Brunch Table',
    ctaUrl: 'https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi',
    color: '#e8a020',
  },
  {
    icon: '🎾',
    title: 'Sunset Padel Socials',
    when: 'Every Thursday · 5 PM',
    desc: 'Play a few sets and mingle with fellow enthusiasts over happy hour.',
    longDesc: 'Our Sunset Padel Socials are the perfect mid-week reset. Every Thursday from 5 PM, players of all levels gather on our three floodlit courts for a relaxed social format — mixed doubles, round-robin rotations, and plenty of laughter. The timing is perfect: courts light up just as happy hour kicks in, so every game ends with a well-deserved 30% off your drinks order at the biergarten.',
    highlights: [
      'Social play format — all levels welcome, beginners included',
      'Mixed doubles and round-robin rotations',
      'Racket hire available if you don\'t have your own',
      'Runs straight into happy hour (5–7 PM · 30% off drinks)',
      'Great way to meet other padel players in Nairobi',
      'Courts are floodlit — play goes on after sunset',
    ],
    price: 'Court fee: KES 4,000/hr + KES 1,000 F&B voucher',
    dresscode: 'Sports attire',
    location: 'Padel Courts (All 3)',
    bookingNote: 'Book your court slot in advance via Playtomic to secure your Thursday spot. Social rotations are organised on the night — just show up and you\'ll be paired with other players.',
    ctaLabel: 'Book a Court on Playtomic',
    ctaUrl: 'https://playtomic.com/clubs/kraftory-biergarten-padel',
    color: '#3d6b45',
  },
  {
    icon: '🍺',
    title: 'Craft Beer Tasting',
    when: '2nd Wednesday · Monthly · 6:30 PM',
    desc: 'Guided craft beer flights from local and international breweries.',
    longDesc: 'Once a month on the second Wednesday, our resident beer expert hosts an intimate guided tasting session exploring a curated flight of craft beers. Each session focuses on a theme — East African brews, German classics, seasonal IPAs, or dark ales — pairing each beer with complementary bites from the kitchen. It\'s educational, sociable, and always a lot of fun. Limited to 30 guests per session to keep it personal.',
    highlights: [
      '6-beer guided tasting flight with tasting notes',
      'Monthly rotating theme — local, imported, or seasonal',
      'Paired bar snacks and bites from the kitchen included',
      'Led by our certified beer sommelier',
      'Limited to 30 guests — intimate and personal',
      'Take-home tasting card and beer notes',
    ],
    price: 'KES 2,500 per person (incl. all tastings & bites)',
    dresscode: 'Smart casual',
    location: 'Private Biergarten Section',
    bookingNote: 'Places are strictly limited to 30 guests and sell out quickly. Pre-booking and pre-payment required. Contact us via WhatsApp or email to secure your spot for the next session.',
    ctaLabel: 'Reserve Your Tasting Spot',
    ctaUrl: 'https://wa.me/254113555777',
    color: '#c8780a',
  },
  {
    icon: '🏆',
    title: 'Padel Tournaments',
    when: 'Monthly · Date Announced Per Edition',
    desc: 'Open competitive matches for all levels — prizes and good vibes.',
    longDesc: 'The Kraftory Padel Tournament is our flagship monthly sporting event — open to players of all levels, from enthusiastic beginners to competitive club players. Register as a pair and compete in a structured round-robin format across all three courts. Each edition has a different format: mixed doubles, same-gender doubles, or corporate team challenges. Trophies, Kraftory merchandise, and dining vouchers up for grabs.',
    highlights: [
      'Open to all levels — beginner, intermediate and advanced categories',
      'Register as a pair (doubles format)',
      'Round-robin groups followed by knockout finals',
      'Trophies and Kraftory prizes for winners',
      'F&B vouchers for all participants',
      'Post-tournament celebration in the biergarten',
    ],
    price: 'KES 1,500 per pair to enter',
    dresscode: 'Sports attire',
    location: 'All 3 Padel Courts',
    bookingNote: 'Tournament dates are announced monthly on our Instagram @kraftorybiergarten. Registration closes 5 days before each tournament. WhatsApp us to get on the notification list.',
    ctaLabel: 'Register Your Pair',
    ctaUrl: 'https://wa.me/254113555777',
    color: '#3d6b45',
  },
  {
    icon: '🎤',
    title: 'Comedy Night',
    when: 'Last Saturday · Monthly · 7:30 PM',
    desc: "Stand-up from Nairobi's best local talent — laughs guaranteed.",
    longDesc: 'On the last Saturday of every month, Kraftory hosts Nairobi\'s most enjoyable comedy night. We curate a line-up of three to four comedians — a mix of established names and exciting new voices from the Kenyan comedy scene. Performed in the heart of our biergarten with full table service throughout, Comedy Night has become one of the most-booked events on our calendar. Come with friends, expect to laugh until it hurts.',
    highlights: [
      '3–4 comedians per show — mixed established & emerging talent',
      'Doors open at 7 PM, show begins at 7:30 PM sharp',
      'Full food and drinks service throughout the show',
      'Hosted in the main biergarten — intimate standing & seated format',
      'Post-show mixer with the comedians',
      'Happy hour deals active until 7 PM — arrive early',
    ],
    price: 'KES 800 per person (table reservation includes entry)',
    dresscode: 'Come as you are',
    location: 'Main Biergarten',
    bookingNote: 'Comedy Night tables must be reserved and paid in advance — this event sells out every month. Minimum spend of KES 1,500 per person applies for reserved tables. Standing room available on the door (subject to capacity).',
    ctaLabel: 'Reserve for Comedy Night',
    ctaUrl: 'https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi',
    color: '#8b5cf6',
  },
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

interface GoogleReview {
  author_name: string
  rating: number
  text: string
}

const STATIC_GOOGLE_REVIEWS: GoogleReview[] = [
  { author_name: 'Customer', rating: 5, text: 'Amazing vibe, great music, and the padel courts make it a unique experience.' },
  { author_name: 'Guest', rating: 4.5, text: 'Perfect place for weekend hangouts. Food, drinks, and atmosphere are all on point.' },
  { author_name: 'Visitor', rating: 4, text: 'Loved the outdoor setting and the service was friendly and fast.' },
  { author_name: 'Patron', rating: 5, text: 'One of the best spots in Nairobi for group events and social gatherings.' },
  { author_name: 'Diner', rating: 4.2, text: 'Great food and cocktails, plus plenty of space and parking.' },
  { author_name: 'Customer', rating: 4, text: 'Nice ambience and good variety on the menu. Worth visiting again.' },
  { author_name: 'Guest', rating: 5, text: 'The combination of sports and dining is brilliant. Highly recommend.' },
  { author_name: 'Visitor', rating: 4.3, text: 'Relaxed beer garden feel with excellent service and clean facilities.' },
  { author_name: 'Patron', rating: 4, text: 'Good spot for sundowners with friends. Chill and enjoyable.' },
  { author_name: 'Diner', rating: 4.6, text: 'Great pizza, great drinks, and a lively environment.' },
]

const AVATAR_PALETTE = ['#1a472a', '#c8780a', '#3d6b45', '#8b6914', '#2d5a27']

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="review-stars">
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={`review-star${rating >= i ? ' review-star--full' : rating >= i - 0.5 ? ' review-star--half' : ' review-star--empty'}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

const GoogleReviewCard: FC<{ review: GoogleReview; colorIndex: number }> = ({ review, colorIndex }) => {
  const initials = review.author_name
    .split(' ')
    .map((p) => p[0] ?? '')
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <article className="review-card">
      <div className="review-card__quote">"</div>
      <p className="review-card__text">{review.text}</p>
      <div className="review-card__footer">
        <div
          className="review-card__avatar"
          style={{ background: AVATAR_PALETTE[colorIndex % AVATAR_PALETTE.length] }}
        >
          {initials}
        </div>
        <div>
          <strong className="review-card__name">{review.author_name}</strong>
          <StarRating rating={review.rating} />
        </div>
      </div>
    </article>
  )
}

const REVIEW_PAGE_SIZE = 3
const REVIEW_GROUPS = (() => {
  const groups: GoogleReview[][] = []
  const reviews = STATIC_GOOGLE_REVIEWS.slice(0, 9)
  for (let i = 0; i < reviews.length; i += REVIEW_PAGE_SIZE) {
    groups.push(reviews.slice(i, i + REVIEW_PAGE_SIZE))
  }
  return groups
})()

const GoogleReviewsSection: FC = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrent((c) => (c + 1) % REVIEW_GROUPS.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="section section--forest reviews-section">
      <div className="container">
        <div className="reviews-header">
          <SectionHeader
            label="Guest Reviews"
            title="What guests <em>say about us</em>"
            subtitle="Voices from our restaurant, beer garden &amp; padel community."
            light
          />
        </div>
        <div className="reviews-carousel">
          <div
            className="reviews-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {REVIEW_GROUPS.map((group, gi) => (
              <div className="reviews-slide" key={gi}>
                {group.map((review, ri) => (
                  <GoogleReviewCard
                    key={`${review.author_name}-${gi}-${ri}`}
                    review={review}
                    colorIndex={gi * REVIEW_PAGE_SIZE + ri}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="reviews-dots">
          {REVIEW_GROUPS.map((_, i) => (
            <button
              key={i}
              className={`reviews-dot${i === current ? ' reviews-dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────
export default function Home() {
  const [activeTab, setActiveTab] = useState('Starters')
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', date: '', time: '7:00 PM', guests: '2', type: 'Restaurant Table', notes: '' })
  const [submitted, setSubmitted] = useState(false)

  const [activeEvent, setActiveEvent] = useState<EventDetail | null>(null)

  const [modal, setModal] = useState<{ url: string; title: string } | null>(null)
  const openModal = (url: string, title: string) => setModal({ url, title })
  const closeModal = () => setModal(null)

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
      {/* <InfoStrip /> */}
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
<button onClick={() => openModal('https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi', 'Reserve a Table')} className="btn btn-sm btn-amber">
              Reserve a Table
            </button>                  <button onClick={() => document.getElementById('padel')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-outline btn-lg">Book Padel Court</button>
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
          <div className="dining-layout">
            <div className="dining-text" ref={r3}>
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
                  <button onClick={() => openModal('https://kraftory-biergarten.ubuntu.click/menu.html?menuId=d5e8eae0-cc8c-4bd2-9d0d-12fcad432180&title=Kraftory%20Food%20Menu', 'Kraftory Food Menu')} className="btn btn-outline btn-sm">
                    Full Food Menu ↗
                  </button>
                  {/* <button onClick={() => openModal('https://kraftory-biergarten.ubuntu.click/menu.html?menuId=b0a494f4-7f0f-42dc-8e09-3dcee962fd6d&title=Kraftory%20Drinks%20Menu', 'Kraftory Drinks Menu')} className="btn btn-outline btn-sm">
                    Full Drinks Menu ↗
                  </button> */}
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
                {/* Beer section */}
<button onClick={() => openModal('https://kraftory-biergarten.ubuntu.click/menu.html?menuId=b0a494f4-7f0f-42dc-8e09-3dcee962fd6d&title=Kraftory%20Drinks%20Menu', 'Kraftory Drinks Menu')} className="btn btn-outline-white" style={{ marginTop: '2rem', display: 'inline-flex' }}>
  View Full Drinks Menu ↗
</button>
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
{/* Padel section */}
<button onClick={() => openModal('https://playtomic.com/clubs/kraftory-biergarten-padel', 'Book a Padel Court')} className="btn btn-amber">
  Book a Court →
</button>            </div>
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
            <td style={{ color: 'var(--moss)', fontWeight: 600 }}>KES 1,000  ·  KES 1,500</td>
          </tr>
          <tr>
            <td>Fri – Sun</td>
            <td>All Day</td>
            <td><strong style={{ color: 'var(--amber)' }}>KES 4,000</strong></td>
            <td><strong style={{ color: 'var(--amber)' }}>KES 6,000</strong></td>
            <td style={{ color: 'var(--moss)', fontWeight: 600 }}>KES 1,000  ·  KES 1,500</td>
          </tr>
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
              <button
                key={i}
                className="event-card event-card--clickable"
                onClick={() => setActiveEvent(ev)}
                aria-label={`View details for ${ev.title}`}
                style={{ '--event-accent': ev.color } as React.CSSProperties}
              >
                <div className="event-card__icon">{ev.icon}</div>
                <div className="event-card__body">
                  <span className="event-card__when">{ev.when}</span>
                  <h3 className="event-card__title">{ev.title}</h3>
                  <p className="event-card__desc">{ev.desc}</p>
                  <span className="event-card__more">More info →</span>
                </div>
              </button>
            ))}
          </div>

          <EventModal event={activeEvent} onClose={() => setActiveEvent(null)} />

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

      

      {/* ══════════════════ GALLERY ══════════════════ */}
      <GoogleReviewsSection />
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
          {/* Contact quick-book */}
<button onClick={() => openModal('https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi', 'Reserve a Table')} className="btn btn-amber">
  🍽️ Reserve a Table
</button>
<button onClick={() => openModal('https://playtomic.com/clubs/kraftory-biergarten-padel', 'Book a Padel Court')} className="btn btn-primary">
  🎾 Book a Court
</button>
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

      {/* RIGHT — contact form */}
      <div className="contact-form-wrap reveal reveal-delay-2">
        <div className="contact-form-card">
          <h3 className="contact-form-card__title">Get in Touch</h3>
          <p className="contact-form-card__sub">Inquiries · Feedback · Events · Partnerships</p>

          {submitted ? (
            <div className="form-success">
              <div className="form-success__icon">✅</div>
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out — we'll get back to you within 24 hours.</p>
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

              <label className="res-form__label">Subject *
                <select className="res-form__input" value={formState.type} onChange={e => setFormState({ ...formState, type: e.target.value })} required>
                  <option value="" disabled>Select a topic…</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Events & Catering">Events &amp; Catering</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="res-form__label">Message *
                <textarea className="res-form__input res-form__textarea" rows={5} placeholder="Tell us how we can help…" value={formState.notes} onChange={e => setFormState({ ...formState, notes: e.target.value })} required />
              </label>

              <button type="submit" className="btn btn-amber" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                Send Message
              </button>
              <p className="res-form__note">We respond within 24 hours · <a href="tel:+254113555777">+254 113 555 777</a></p>
            </form>
          )}
        </div>
      </div>
    </div>
  </div>
</section>

      <LinkModal
        url={modal ? modal.url : null}
        title={modal ? modal.title : undefined}
        onClose={closeModal}
      />
    </div>
  )
}
