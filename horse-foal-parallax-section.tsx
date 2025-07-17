"use client"

export default function HorseFoalParallaxSection() {
  return (
    <section className="relative min-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-8">
              Building the <span className="text-[#d4a964]">future</span> of racing
            </h2>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed font-light">
              Every champion begins with a dream. Every legacy starts with a single step forward.
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
