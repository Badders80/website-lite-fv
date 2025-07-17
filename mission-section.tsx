"use client"

import { ArrowRight, Shield, Zap, Users } from "lucide-react"

export default function MissionSection() {
  return (
    <section className="relative min-h-screen bg-black">
      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          {/* Header Section - Clean and minimal like x.ai */}
          <div className="max-w-6xl mx-auto mb-32">
            {/* Mission Label */}
            <div className="mb-16">
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500">Our Mission</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-bw-gradual)] leading-[0.9] text-white tracking-tight mb-20">
              Ownership
              <br />
              Re-imagined
            </h1>

            {/* Problem Statement */}
            <div className="mb-16">
              <p className="text-3xl lg:text-4xl text-white leading-[1.3] font-medium mb-12">
                Traditional racehorse ownership — known for being expensive, restrictive, and illiquid — has historically excluded those who dream of experiencing the thrill firsthand.
              </p>
            </div>

            {/* Solution Statement */}
            <div className="space-y-8 mb-12">
              <p className="text-2xl lg:text-3xl leading-[1.4] max-w-5xl text-white font-normal">
                Evolution Stables removes these barriers, delivering ownership that's genuinely accessible, fully transparent, and uniquely liquid.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-8">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 rounded-full text-white font-medium tracking-wide hover:bg-white/5 transition-all duration-300 group">
                <span>Join the Revolution</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Features Grid - Dynamic cards with equal heights */}
          <div className="grid grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Feature 1 - Accessible Ownership */}
            <div className="group cursor-pointer">
              <div className="relative h-full min-h-[320px] flex flex-col p-8 lg:p-10 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-700 hover:bg-gray-900/20 hover:border-gray-800/30">
                {/* Animated icon container */}
                <div className="relative mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                    <Shield className="w-4 h-4 text-[#d4a964] transition-all duration-500 group-hover:scale-110" />
                  </div>
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                </div>

                <div className="flex-1 flex flex-col justify-between transition-transform duration-500 group-hover:translate-y-[-2px]">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      Accessible Ownership
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-300">
                      Racehorse ownership used to be complex and out of reach. We've removed the traditional barriers
                      and simplified the journey, giving you a straightforward path to experience the thrill of the
                      winner's circle.
                    </p>
                  </div>
                </div>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-10 right-10 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-[#d4a964]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Feature 2 - Transparency in Our DNA */}
            <div className="group cursor-pointer">
              <div className="relative h-full min-h-[320px] flex flex-col p-8 lg:p-10 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-700 hover:bg-gray-900/20 hover:border-gray-800/30">
                {/* Animated icon container */}
                <div className="relative mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                    <Zap className="w-4 h-4 text-[#d4a964] transition-all duration-500 group-hover:scale-110" />
                  </div>
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                </div>

                <div className="flex-1 flex flex-col justify-between transition-transform duration-500 group-hover:translate-y-[-2px]">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      Transparency in Our DNA
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-300">
                      Our model is built to minimise hassle and maximise excitement. Every detail, from costs to
                      potential returns, is clear before you commit—no guesswork, no hidden surprises, just the pure
                      exhilaration of ownership.
                    </p>
                  </div>
                </div>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-10 right-10 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-[#d4a964]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Feature 3 - Your Racing World, Centralised */}
            <div className="group cursor-pointer">
              <div className="relative h-full min-h-[320px] flex flex-col p-8 lg:p-10 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-700 hover:bg-gray-900/20 hover:border-gray-800/30">
                {/* Animated icon container */}
                <div className="relative mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                    <Users className="w-4 h-4 text-[#d4a964] transition-all duration-500 group-hover:scale-110" />
                  </div>
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                </div>

                <div className="flex-1 flex flex-col justify-between transition-transform duration-500 group-hover:translate-y-[-2px]">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      Your Racing World, Centralised
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-300">
                      Manage your entire experience from one simple, secure digital hub. Track your horse's training,
                      communicate with your syndicate, and monitor financials—everything at your fingertips.
                    </p>
                  </div>
                </div>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-10 right-10 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-[#d4a964]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            {/* Feature 4 - From International Fan to Local Owner */}
            <div className="group cursor-pointer">
              <div className="relative h-full min-h-[320px] flex flex-col p-8 lg:p-10 rounded-2xl border border-gray-900/20 bg-gray-950/10 transition-all duration-700 hover:bg-gray-900/20 hover:border-gray-800/30">
                {/* Animated icon container */}
                <div className="relative mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#d4a964]/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#d4a964]/20 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 text-[#d4a964] transition-all duration-500 group-hover:scale-110" />
                  </div>
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-[#d4a964]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                </div>

                <div className="flex-1 flex flex-col justify-between transition-transform duration-500 group-hover:translate-y-[-2px]">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-[family-name:var(--font-bw-gradual)] text-white transition-colors duration-300 group-hover:text-[#d4a964]/90">
                      From International Fan to Local Owner
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-300">
                      We're closing the distance between the world's racing fans and New Zealand's elite stables. Our
                      platform lets you become a local owner, unlocking the potential of world-class bloodstock and the
                      liquidity of a modern, borderless offering.
                    </p>
                  </div>
                </div>

                {/* Subtle bottom accent line */}
                <div className="absolute bottom-0 left-10 right-10 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-[#d4a964]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
