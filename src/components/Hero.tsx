import { useState, useEffect } from 'react'
import './Hero.css'

const SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1800&q=85',
    alt: 'Kraftory Biergarten outdoor dining',
    label: 'Nairobi\'s Premier Biergarten',
  },
  {
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1800&q=85',
    alt: 'Craft beer selection at Kraftory',
    label: 'Curated Craft Beer & Cocktails',
  },
  {
    url: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?w=1800&q=85',
    alt: 'Padel courts at Kraftory',
    label: '3 Professional Padel Courts',
  },
  {
    url: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1800&q=85',
    alt: 'Artisan food at Kraftory restaurant',
    label: 'Artisan Kitchen & Bakery',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % SLIDES.length)
        setTransitioning(false)
      }, 600)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx: number) => {
    if (idx === current) return
    setTransitioning(true)
    setTimeout(() => { setCurrent(idx); setTransitioning(false) }, 600)
  }

  return (
    <section className="hero" aria-label="Hero">
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero__slide ${i === current ? 'hero__slide--active' : ''} ${transitioning && i === current ? 'hero__slide--out' : ''}`}
          style={{ backgroundImage: `url(${slide.url})` }}
          role="img"
          aria-label={slide.alt}
        />
      ))}

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__eyebrow">Est. 2025 · Off Red Hill Road, Nairobi</span>
          <h1 className="hero__title">
            A green escape for<br />great food &amp; good times
          </h1>
          <p className="hero__subtitle">{SLIDES[current].label}</p>
          <div className="hero__actions">
            <a
              href="https://eatapp.co/reserve/kraftory-biergarten-red-hill-rd-nairobi"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-lg btn-amber"
            >
              Reserve a Table
            </a>
            <a
              href="https://playtomic.com/clubs/kraftory-biergarten-padel"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-lg btn-outline-white"
            >
              Book a Padel Court
            </a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className="hero__arrow hero__arrow--prev" onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)} aria-label="Previous slide">‹</button>
      <button className="hero__arrow hero__arrow--next" onClick={() => goTo((current + 1) % SLIDES.length)} aria-label="Next slide">›</button>
    </section>
  )
}
