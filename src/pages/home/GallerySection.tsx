import SectionHeader from '../../components/SectionHeader'
import { GALLERY_IMGS } from './data'

export default function GallerySection() {
  return (
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
  )
}
