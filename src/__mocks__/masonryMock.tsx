// Mock react-masonry-css for tests — renders children directly
import React from "react"

interface MasonryProps {
  children: React.ReactNode
  breakpointCols?: number | Record<string, number>
  className?: string
  columnClassName?: string
}

function Masonry({ children }: MasonryProps) {
  return <div data-testid="masonry-grid">{children}</div>
}

export default Masonry
