"use client"

import HeroSection from "../hero-section"
import IntroSection from "../intro-section"
import MissionSection from "../mission-section"
import TaglineSection from "../tagline-section"
import MouseMoveEffect from "../mouse-move-effect"
import ParallaxHoovesSection from "../parallax-hooves-section"
import DigitalSyndicationSection from "../digital-syndication-section"
import LandscapeParallaxSection from "../landscape-parallax-section"
import HorseFoalParallaxSection from "../horse-foal-parallax-section"

export default function Page() {
  return (
    <>
      <MouseMoveEffect />
      <HeroSection />
      <IntroSection />
      <TaglineSection />
      <MissionSection />
      <ParallaxHoovesSection />
      <DigitalSyndicationSection />
      <LandscapeParallaxSection />
      <HorseFoalParallaxSection />
    </>
  )
}
