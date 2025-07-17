"use client"

import { useEffect, useRef, useState } from "react"

export default function ParallaxHoovesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
      className="relative min-h-[60vh] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay - Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-100"
          style={{
            backgroundImage: "url('/hooves-on-grass.png')",
          }}
        />
        {/* Geometric overlay pattern */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-bw-gradual)] leading-tight text-white mb-8">
              Every stride tells a <span className="text-[#d4a964]">story</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed font-light">
              From the first gallop to the winner's circle, experience the journey of champions.
            </p>
          </div>
        </div>
      </div>

      {/* Subtle geometric elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4a964]/20 rotate-45 transform"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-[#d4a964]/10 rotate-45 transform"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-[#d4a964]/30 rotate-45 transform"></div>
      </div>
    </section>
  )
}
