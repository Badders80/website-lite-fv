"use client"

import { useEffect, useRef, useState } from "react"

export default function IntroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const text =
    "Where tradition meets innovation. Experience a new era of racehorse ownership that's accessible, transparent, and built for tomorrow's owners."
  const words = text.split(" ")

  const highlightWords = ["innovation.", "accessible,", "transparent,"]

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
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && wordIndex < words.length) {
      const timer = setTimeout(() => {
        setWordIndex((prev) => prev + 1)
      }, 150) // 150ms delay between each word

      return () => clearTimeout(timer)
    }
  }, [isVisible, wordIndex, words.length])

  return (
    <section ref={sectionRef} className="relative py-32 lg:py-40 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-light text-white">
              {words.map((word, index) => {
                const isHighlight = highlightWords.includes(word)
                const isVisible = index < wordIndex

                return (
                  <span
                    key={index}
                    className={`inline-block mr-3 lg:mr-4 transition-all duration-500 ease-out ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    } ${isHighlight ? "text-[#d4a964] italic" : ""}`}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {word}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Elegant accent line */}
          <div className="flex justify-center mt-20">
            <div
              className={`h-px bg-gradient-to-r from-transparent via-[#d4a964] to-transparent transition-all duration-1000 ease-out ${
                wordIndex >= words.length ? "w-96 opacity-100" : "w-0 opacity-0"
              }`}
              style={{
                transitionDelay: `${words.length * 150 + 500}ms`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
