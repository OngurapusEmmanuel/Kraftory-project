import { useEffect, useState, type FC } from 'react'
import SectionHeader from '../../components/SectionHeader'
import { AVATAR_PALETTE, REVIEW_GROUPS, REVIEW_PAGE_SIZE, type GoogleReview } from './data'

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

export default function ReviewsSection() {
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
