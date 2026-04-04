import { useEffect, useCallback } from 'react'
import './EventModal.css'

export interface EventDetail {
  icon: string
  title: string
  when: string
  desc: string
  // Extended fields shown in modal
  longDesc: string
  highlights: string[]
  price: string
  dresscode?: string
  location: string
  bookingNote?: string
  ctaLabel: string
  ctaUrl: string
  color: string // accent colour per event
}

interface Props {
  event: EventDetail | null
  onClose: () => void
}

export default function EventModal({ event, onClose }: Props) {
  // Close on Escape key
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() },
    [onClose]
  )

  useEffect(() => {
    if (!event) return
    document.addEventListener('keydown', handleKey)
    // Prevent body scroll while modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [event, handleKey])

  if (!event) return null

  return (
    <div
      className="emodal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={event.title}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="emodal" style={{ '--event-color': event.color } as React.CSSProperties}>

        {/* Close button */}
        <button className="emodal__close" onClick={onClose} aria-label="Close">✕</button>

        {/* Header band */}
        <div className="emodal__header">
          <div className="emodal__icon-wrap">
            <span className="emodal__icon">{event.icon}</span>
          </div>
          <div className="emodal__header-text">
            <span className="emodal__when">{event.when}</span>
            <h2 className="emodal__title">{event.title}</h2>
            <div className="emodal__meta-row">
              <span className="emodal__meta-item">
                <span className="emodal__meta-icon">📍</span>{event.location}
              </span>
              <span className="emodal__meta-item">
                <span className="emodal__meta-icon">🎟️</span>{event.price}
              </span>
              {event.dresscode && (
                <span className="emodal__meta-item">
                  <span className="emodal__meta-icon">👗</span>{event.dresscode}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="emodal__body">
          <div className="emodal__desc-col">
            <p className="emodal__long-desc">{event.longDesc}</p>

            {event.bookingNote && (
              <div className="emodal__booking-note">
                <span className="emodal__booking-note__icon">ℹ️</span>
                <p>{event.bookingNote}</p>
              </div>
            )}
          </div>

          <div className="emodal__highlights-col">
            <h4 className="emodal__highlights-title">What to Expect</h4>
            <ul className="emodal__highlights">
              {event.highlights.map((h, i) => (
                <li key={i} className="emodal__highlight-item">
                  <span className="emodal__highlight-dot" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="emodal__footer">
          <a
            href={event.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-amber btn-lg emodal__cta"
          >
            {event.ctaLabel}
          </a>
          <button
            className="btn btn-outline emodal__enquire"
            onClick={() => {
              onClose()
              setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 200)
            }}
          >
            General Enquiry
          </button>
        </div>
      </div>
    </div>
  )
}
