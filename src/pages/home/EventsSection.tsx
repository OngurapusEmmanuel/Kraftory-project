import { useState } from 'react'
import type { CSSProperties } from 'react'
import SectionHeader from '../../components/SectionHeader'
import { useReveal } from '../../components/useReveal'
import EventModal, { type EventDetail } from '../../components/EventModal'
import { EVENTS, VENUE_SPACES } from './data'

function EventCard({ event, index, onSelect }: { event: EventDetail; index: number; onSelect: (event: EventDetail) => void }) {
  const ref = useReveal<HTMLButtonElement>()

  return (
    <button
      ref={ref}
      className="event-card event-card--clickable reveal"
      onClick={() => onSelect(event)}
      aria-label={`View details for ${event.title}`}
      style={{ '--event-accent': event.color, transitionDelay: `${(index % 3) * 110}ms` } as CSSProperties}
    >
      <div className="event-card__banner">
        <span className="event-card__icon">{event.icon}</span>
      </div>
      <div className="event-card__body">
        <span className="event-card__when">{event.when}</span>
        <h3 className="event-card__title">{event.title}</h3>
        <p className="event-card__desc">{event.desc}</p>
        <span className="event-card__more">More info →</span>
      </div>
    </button>
  )
}

function VenueCard({ venue, index }: { venue: typeof VENUE_SPACES[number]; index: number }) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className="venue-card reveal" style={{ transitionDelay: `${index * 110}ms` }}>
      <div className="venue-card__media" style={{ backgroundImage: `url(${venue.image})` }} />
      <div className="venue-card__overlay" />
      <div className="venue-card__content">
        {venue.icon && <div className="venue-card__icon">{venue.icon}</div>}
        <h3 className="venue-card__name">{venue.name}</h3>
        <span className="venue-card__capacity">{venue.capacity}</span>
        <p className="venue-card__vibe">{venue.vibe}</p>
        <p className="venue-card__desc">{venue.desc}</p>
      </div>
    </div>
  )
}

export default function EventsSection() {
  const headerRef = useReveal()
  const [activeEvent, setActiveEvent] = useState<EventDetail | null>(null)

  return (
    <section id="events" className="section section--white">
      <div className="container">
        <div className="section-header-row" ref={headerRef}>
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
            <EventCard key={ev.title} event={ev} index={i} onSelect={setActiveEvent} />
          ))}
        </div>

        <EventModal event={activeEvent} onClose={() => setActiveEvent(null)} />

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
              <VenueCard key={v.name} venue={v} index={i} />
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
  )
}
