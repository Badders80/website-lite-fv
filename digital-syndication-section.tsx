"use client"

import { useEffect, useRef, useState } from "react"
import { Coins, TrendingUp, Users2 } from "lucide-react"

export default function DigitalSyndicationSection() {
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
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24 items-start mb-32">
            {/* Left side - Section label */}
            <div className="lg:col-span-1">
              <div className="space-y-3">
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-gray-500">Innovation</span>
                <div className="w-8 h-px bg-[#d4a964]" />
              </div>
            </div>

            {/* Right side - Main content */}
            <div className="lg:col-span-4 space-y-12">
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <h2 className="text-5xl lg:text-6xl font-[family-name:var(--font-bw-gradual)] leading-[0.95] text-white tracking-tight mb-8">
                  Digital <span className="text-[#d4a964]">Syndication</span>
                </h2>
                <p className="lg:text-2xl text-gray-400 leading-relaxed font-light max-w-4xl text-4xl">
                  The modern way to experience ownership — for investors and everyday owners.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-5xl mx-auto mb-20">
              <p className="text-2xl lg:text-3xl text-white leading-[1.4] font-light">
                By tokenising ownership into accessible shares, we've created a modern evolution of racing's age-old
                tradition — syndication. Each digital share represents a stake in a real-world racehorse, connecting
                your investment directly to its performance.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <div className="group">
                <div className="relative p-8 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-500 hover:bg-gray-900/20 hover:border-gray-800/30">
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                      <Coins className="w-6 h-6 text-[#d4a964]" />
                    </div>
                    <div className="absolute inset-0 w-12 h-12 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      Fractional Ownership
                    </h3>
                    <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                      Own a percentage of a racehorse without the traditional barriers. Start with as little as you're
                      comfortable with.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group">
                <div className="relative p-8 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-500 hover:bg-gray-900/20 hover:border-gray-800/30">
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                      <TrendingUp className="w-6 h-6 text-[#d4a964]" />
                    </div>
                    <div className="absolute inset-0 w-12 h-12 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      Performance Linked
                    </h3>
                    <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                      Your returns are directly tied to your horse's success on the track. Win, place, or show — you
                      share in the glory.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group">
                <div className="relative p-8 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-500 hover:bg-gray-900/20 hover:border-gray-800/30">
                  <div className="relative mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                      <Users2 className="w-6 h-6 text-[#d4a964]" />
                    </div>
                    <div className="absolute inset-0 w-12 h-12 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      Community Driven
                    </h3>
                    <p className="text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
                      Join a community of passionate owners. Share the excitement, celebrate victories, and build
                      lasting connections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
