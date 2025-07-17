"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)

    // Trigger initial animations
    setTimeout(() => setIsLoaded(true), 50)

    // Show header after logo animation completes
    setTimeout(() => setShowHeader(true), 5000)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Navigation - Fades in after logo */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800/30 transition-all duration-1000 ${
          showHeader ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo - Increased size */}
            <div className="flex items-center">
              <Image
                src={scrollY > 100 ? "/Logo-and-Evolution-Gold.svg" : "/Logo-and-Evolution-Grey.svg"}
                alt="Evolution Stables"
                width={253}
                height={58}
                className="h-12 w-auto transition-all duration-500"
              />
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-[#d4a964] transition-colors duration-300">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d4a964] transition-colors duration-300">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d4a964] transition-colors duration-300">
                Team
              </a>
              <a href="#" className="text-gray-300 hover:text-[#d4a964] transition-colors duration-300">
                Partners
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white transition-colors duration-300">Login</button>
              <button className="relative px-6 py-2 rounded-full font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d4a964]/20">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 transition-all duration-300 group-hover:from-[#d4a964]/20 group-hover:via-[#d4a964]/10 group-hover:to-[#d4a964]/20"></div>

                {/* Border Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 p-[1px] transition-all duration-300 group-hover:from-[#d4a964]/60 group-hover:via-[#d4a964]/80 group-hover:to-[#d4a964]/60">
                  <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 group-hover:from-gray-900/90 group-hover:via-gray-800/90 group-hover:to-gray-900/90"></div>
                </div>

                {/* Button Text */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#d4a964]">Sign Up</span>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-90">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-black overflow-hidden">
        {/* Background Horse Image - Static, no parallax */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Hero-double-horse-head-on-black.svg"
            alt="Horse silhouettes"
            fill
            className={`object-cover transition-all ease-in-out ${
              isLoaded ? "opacity-30 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              transitionDuration: '10000ms',
              transitionDelay: '0ms',
            }}
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        </div>

        {/* Main Content */}
        <div className="relative z-20 container mx-auto px-6 pt-40 pb-20 min-h-screen flex flex-col justify-center">
          <div className="max-w-6xl mx-auto text-center">
            {/* Main Logo Display - Fades in with horse image */}
            <div
              className={`transition-all ease-in-out ${
                isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{
                transitionDuration: '10000ms',
                transitionDelay: '0ms',
              }}
            >
              <Image
                src="/Logo-and-Evolution-Gold.svg"
                alt="Evolution Stables"
                width={450}
                height={113}
                className="w-full max-w-2xl mx-auto h-auto"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
      </section>
    </>
  )
}
