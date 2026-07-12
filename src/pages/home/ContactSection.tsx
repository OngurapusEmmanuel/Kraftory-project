import { useState } from 'react'
import type { FormEvent } from 'react'
import SectionHeader from '../../components/SectionHeader'
import { useReveal } from '../../components/useReveal'
import { CONTACT, BOOKING_LINKS } from '../../constants'

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

const INITIAL_FORM = { name: '', email: '', phone: '', type: '', notes: '' }

export default function ContactSection({ openModal }: { openModal: (url: string, title: string) => void }) {
  const contactRef = useReveal()
  const [formState, setFormState] = useState(INITIAL_FORM)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!FORMSPREE_ENDPOINT) {
      console.error('VITE_FORMSPREE_ENDPOINT is not set — form cannot be submitted. See .env.example.')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      })

      if (!res.ok) throw new Error(`Formspree responded with ${res.status}`)

      setStatus('sent')
      setFormState(INITIAL_FORM)
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section section--light">
      <div className="container">
        <div className="contact-grid" ref={contactRef}>
          <div className="contact-info reveal">
            <SectionHeader label="Find Us" title="Contact &amp; <em>Reservations</em>" />

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail__icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>{CONTACT.address}</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p><a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p><a href={CONTACT.emailHref}>{CONTACT.email}</a></p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon">🕐</span>
                <div>
                  <strong>Opening Hours</strong>
                  <p>{CONTACT.hours}</p>
                  <p style={{ color: 'var(--amber)', fontWeight: 500 }}>Happy Hour · {CONTACT.happyHour}</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail__icon">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p><a href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">Message us on WhatsApp →</a></p>
                </div>
              </div>
            </div>

            <div className="contact-quick-book">
              <button onClick={() => openModal(BOOKING_LINKS.reserveTable, 'Reserve a Table')} className="btn btn-amber">
                🍽️ Reserve a Table
              </button>
              <button onClick={() => openModal(BOOKING_LINKS.bookPadel, 'Book a Padel Court')} className="btn btn-primary">
                🎾 Book a Court
              </button>
            </div>

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

          <div className="contact-form-wrap reveal reveal-delay-2">
            <div className="contact-form-card">
              <h3 className="contact-form-card__title">Get in Touch</h3>
              <p className="contact-form-card__sub">Inquiries · Feedback · Events · Partnerships</p>

              {status === 'sent' ? (
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

                  {status === 'error' && (
                    <p className="res-form__note" style={{ color: 'var(--amber)' }}>
                      Something went wrong sending your message. Please try again, or contact us directly at{' '}
                      <a href={CONTACT.emailHref}>{CONTACT.email}</a> or <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>.
                    </p>
                  )}

                  <button type="submit" className="btn btn-amber" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }} disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>
                  <p className="res-form__note">We respond within 24 hours · <a href={CONTACT.phoneHref}>{CONTACT.phone}</a></p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
