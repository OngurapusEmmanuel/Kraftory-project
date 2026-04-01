import { useEffect } from 'react'

interface LinkModalProps {
  url: string | null
  title?: string
  onClose: () => void
}

export default function LinkModal({ url, title = 'External Link', onClose }: LinkModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll while open
  useEffect(() => {
    if (url) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [url])

  if (!url) return null

  return (
    <div className="lmodal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={title}>
      <div className="lmodal" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="lmodal__header">
          <div className="lmodal__header-left">
            <span className="lmodal__dot lmodal__dot--red" />
            <span className="lmodal__dot lmodal__dot--yellow" />
            <span className="lmodal__dot lmodal__dot--green" />
          </div>
          <span className="lmodal__title">{title}</span>
          <div className="lmodal__header-right">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="lmodal__external-btn"
              title="Open in new tab"
            >
              ↗
            </a>
            <button className="lmodal__close" onClick={onClose} aria-label="Close modal">✕</button>
          </div>
        </div>

        {/* iframe */}
        <div className="lmodal__body">
          <iframe
            src={url}
            title={title}
            className="lmodal__iframe"
            allowFullScreen
            loading="eager"
          />
        </div>

      </div>
    </div>
  )
}