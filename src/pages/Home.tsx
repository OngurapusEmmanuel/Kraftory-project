import { useState } from 'react'
import Hero from '../components/Hero'
import LinkModal from '../components/LinkModal'
import OverviewSection from './home/OverviewSection'
import FeaturesStrip from './home/FeaturesStrip'
import DiningSection from './home/DiningSection'
import BeerSection from './home/BeerSection'
import PadelSection from './home/PadelSection'
import EventsSection from './home/EventsSection'
import ReviewsSection from './home/ReviewsSection'
import GallerySection from './home/GallerySection'
import ContactSection from './home/ContactSection'
import './Home.css'

export default function Home() {
  const [modal, setModal] = useState<{ url: string; title: string } | null>(null)
  const openModal = (url: string, title: string) => setModal({ url, title })
  const closeModal = () => setModal(null)

  return (
    <div className="home">
      <Hero />

      <div className="padel-ticker">
        <div className="padel-ticker__track">
          {Array(4).fill('🎾 Kraftory Padel — Play Hard · Dine Well · Come Back ; KES 4,000/hr with complimentary F&B voucher ; Book via Playtomic ; 3 Professional Courts ;').join('')}
        </div>
      </div>

      <OverviewSection openModal={openModal} />
      <FeaturesStrip />
      <DiningSection openModal={openModal} />
      <BeerSection openModal={openModal} />
      <PadelSection openModal={openModal} />
      <EventsSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection openModal={openModal} />

      <LinkModal
        url={modal ? modal.url : null}
        title={modal ? modal.title : undefined}
        onClose={closeModal}
      />
    </div>
  )
}
