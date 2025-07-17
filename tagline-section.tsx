"use client"

import { useEffect, useRef, useState } from "react"

export default function TaglineSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-100px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay - Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-60"
          style={{
            backgroundImage: "url('/background-hooves.jpg')",
          }}
        />
        {/* Geometric overlay pattern */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6"></div>

      {/* Subtle geometric elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4a964]/20 rotate-45 transform"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-[#d4a964]/10 rotate-45 transform"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#d4a964]/30 rotate-45 transform"></div>
      </div>
    </section>
  )
}
