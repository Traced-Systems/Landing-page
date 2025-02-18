
import { useState } from "react"

interface TouchPoint {
  x: number
  y: number
}

export const useSheetSwipe = (side: "left" | "right" | "top" | "bottom" = "right", onSwipeRight?: () => void, swipeThreshold = 50) => {
  const [touchStart, setTouchStart] = useState<TouchPoint | null>(null)
  const [touchEnd, setTouchEnd] = useState<TouchPoint | null>(null)
  const [dragging, setDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    })
    setDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return

    const currentTouch = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    }
    setTouchEnd(currentTouch)

    const distanceX = currentTouch.x - touchStart.x
    const distanceY = Math.abs(currentTouch.y - touchStart.y)

    if (distanceY < Math.abs(distanceX)) {
      if (side === "right" && distanceX > 0) {
        setDragOffset(distanceX)
        e.preventDefault() // Prevent scrolling while swiping
      } else if (side === "left" && distanceX < 0) {
        setDragOffset(distanceX)
        e.preventDefault() // Prevent scrolling while swiping
      }
    }
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distanceX = touchEnd.x - touchStart.x
    const distanceY = Math.abs(touchEnd.y - touchStart.y)
    const isHorizontalSwipe = distanceY < Math.abs(distanceX)
    const isRightSwipe = distanceX > swipeThreshold
    const isLeftSwipe = distanceX < -swipeThreshold

    if (isHorizontalSwipe) {
      if (side === "right" && isRightSwipe && onSwipeRight) {
        // First reset the drag state
        setDragOffset(0)
        setDragging(false)
        // Then trigger the close action after a short delay
        setTimeout(() => {
          if (onSwipeRight) {
            onSwipeRight()
          }
        }, 150) // Increased delay to ensure animation completes
      } else if (side === "left" && isLeftSwipe && onSwipeRight) {
        setDragOffset(0)
        setDragging(false)
        setTimeout(() => {
          if (onSwipeRight) {
            onSwipeRight()
          }
        }, 150)
      }
    }

    // Reset the touch states
    setTouchStart(null)
    setTouchEnd(null)
    setDragging(false)
    setDragOffset(0)
  }

  const swipeStyles = {
    transform: dragging ? `translateX(${dragOffset}px)` : '',
    transition: dragging ? 'none' : 'transform 0.3s ease-out'
  }

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    swipeStyles
  }
}
