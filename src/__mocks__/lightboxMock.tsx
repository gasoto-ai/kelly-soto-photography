// Mock yet-another-react-lightbox for tests
import React from "react"

interface LightboxProps {
  open: boolean
  index: number
  close: () => void
  slides: Array<{ src: string; alt?: string }>
}

function Lightbox({ open, slides, index }: LightboxProps) {
  if (!open) return null
  return (
    <div data-testid="lightbox" role="dialog" aria-label="Image lightbox">
      {slides[index] && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={slides[index].src} alt={slides[index].alt ?? ""} />
      )}
    </div>
  )
}

export default Lightbox
