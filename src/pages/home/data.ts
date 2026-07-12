import salmon from '../../assets/salmon.jpg'
import padelarea from '../../assets/padel area.webp'
import taps from '../../assets/taps.webp'
import entry from '../../assets/entry.webp'
import schnitzel from '../../assets/schnitzel.jpg'
import magarita from '../../assets/magarita.jpg'
import screen from '../../assets/ambience1.webp'
import game from '../../assets/games1.webp'
import outdoor from '../../assets/outdoor.webp'
import maingarden from '../../assets/main garden.webp'
import conference from '../../assets/conference.jpg'
import padelCourts from '../../assets/padel/courts.jpg'
import padelCoach from '../../assets/padel/coach.jpg'
import padelEquip from '../../assets/padel/equipment.jpg'
import padelPremium from '../../assets/padel/premium_court.jpg'
import type { EventDetail } from '../../components/EventModal'

export const PADEL_CARDS = [
  { img: padelPremium, title: '3 Premium Courts', desc: 'Cushioned flooring, pro-grade nets, LED lighting and privacy fencing for uninterrupted play. Floodlit until closing.' },
  { img: padelCoach, title: 'Professional Coaching', desc: 'Certified coaches for one-on-one and group lessons. Perfect from complete beginners to tournament preparation.' },
  { img: padelEquip, title: 'Equipment Hire', desc: 'High-quality rackets and balls supplied. Lockers and changing facilities on site.' },
  { img: padelCourts, title: 'Flexible Booking', desc: 'Book online via Playtomic. Hourly or recurring slots with free cancellation up to 12 hours before play.' },
]

export const EVENTS: EventDetail[] = [
  {
    icon: '🎧',
    title: 'DJ Nights',
    when: 'Every Friday · 6 PM',
    desc: 'Resident DJs spinning the best sets to kick off your weekend.',
    longDesc: 'Every Friday evening, Kraftory turns up the energy with resident and guest DJs spinning from 6 PM until late. Expect a curated mix that carries you from happy hour into the night, filling the biergarten with a great beat that pairs perfectly with a cold craft beer or a Kraftory Love Story cocktail.',
    highlights: [
      'DJ sets from 6 PM until late',
      'Rotating local and guest DJs',
      'Full food and drinks menu available throughout',
      'Starts right as happy hour begins (5–7 PM) — great time to arrive',
      'Both indoor seating and outdoor garden available',
      'No reservation required — walk-ins welcome',
    ],
    price: 'Free Entry',
    dresscode: 'Smart casual',
    location: 'Main Biergarten & Outdoor Garden',
    bookingNote: 'No ticket required — simply show up and find a seat. We recommend arriving by 6 PM on Fridays as it gets busy. Table reservations available via EatApp.',
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
      'Sunday brunch flows straight into our 3 PM Acoustic & Violin Sessions',
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
    icon: '🎻',
    title: 'Sunday Acoustic & Violin Sessions',
    when: 'Every Sunday · 3 PM',
    desc: 'Live violin or acoustic sets to ease into Sunday evening.',
    longDesc: 'As Sunday brunch winds down, Kraftory keeps the mood going with live music from 3 PM — alternating between soulful violin performances and laid-back acoustic sets. It\'s the perfect soundtrack for a relaxed Sunday afternoon in the biergarten, whether you\'re lingering over a late lunch or settling in for sundowners.',
    highlights: [
      'Live music from 3 PM',
      'Alternates weekly between violin and acoustic performers',
      'Follows on naturally from Weekend Brunch',
      'Full food and drinks menu available throughout',
      'Both indoor seating and outdoor garden available',
      'No reservation required — walk-ins welcome',
    ],
    price: 'Free Entry',
    dresscode: 'Smart casual',
    location: 'Main Biergarten & Outdoor Garden',
    bookingNote: 'No ticket required — simply show up and find a seat. Table reservations available via EatApp if you\'d like to guarantee a spot.',
    ctaLabel: 'Reserve a Table for Sunday',
    ctaUrl: 'https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi',
    color: '#2d5a27',
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
    price: 'Entry fee varies per tournament — announced with each edition',
    dresscode: 'Sports attire',
    location: 'All 3 Padel Courts',
    bookingNote: 'Tournament dates and entry fees are announced monthly on our Instagram @kraftorybiergarten. Registration closes 5 days before each tournament. WhatsApp us to get on the notification list.',
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

export const VENUE_SPACES = [
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

export const GALLERY_IMGS = [
  { url: entry, alt: 'Biergarten atmosphere', span: 2 },
  { url: outdoor, alt: 'Craft beer selection' },
  { url: maingarden, alt: 'Artisan food' },
  { url: screen, alt: 'Padel courts' },
  { url: game, alt: 'Restaurant dining', span: 2 }, // reuse for layout balance
  { url: taps, alt: 'Group dining' },
]

export interface GoogleReview {
  author_name: string
  rating: number
  text: string
}

export const STATIC_GOOGLE_REVIEWS: GoogleReview[] = [
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

export const AVATAR_PALETTE = ['#1a472a', '#c8780a', '#3d6b45', '#8b6914', '#2d5a27']

export const REVIEW_PAGE_SIZE = 3
export const REVIEW_GROUPS = (() => {
  const groups: GoogleReview[][] = []
  const reviews = STATIC_GOOGLE_REVIEWS.slice(0, 9)
  for (let i = 0; i < reviews.length; i += REVIEW_PAGE_SIZE) {
    groups.push(reviews.slice(i, i + REVIEW_PAGE_SIZE))
  }
  return groups
})()

export { salmon, taps, entry, schnitzel, magarita, screen, game, outdoor, maingarden, padelarea }
export { default as cappuccino } from '../../assets/cappuccino.webp'
