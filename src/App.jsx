import { useEffect } from 'react'
import Lenis from 'lenis'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import NeoPOP from './components/Neopop'
import Testimonials from './components/Testimonials'
import Security from './components/Security'
import Footer from './components/Footer'

export default function App() {

  /* Smooth Scroll */
  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }

  }, [])

  /* Reveal Animation */
  useEffect(() => {

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            entry.target.classList.add('show-reveal')
          }

        })
      },
      {
        threshold: 0.12,
      }
    )

    const elements = document.querySelectorAll('.reveal')

    elements.forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()

  }, [])

  return (
    <div
      className="
        relative
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >

      {/* GLOBAL BACKGROUND */}

      {/* Grid */}
      <div
        className="
          fixed
          inset-0
          opacity-[0.03]
          pointer-events-none
          z-0
          [background-image:linear-gradient(rgba(234,179,8,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.12)_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      {/* Top Glow */}
      <div
        className="
          fixed
          top-[-10%]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[500px]
          rounded-full
          bg-yellow-500/10
          blur-[140px]
          pointer-events-none
          z-0
        "
      />

      {/* Noise Texture */}
      <div className="noise pointer-events-none fixed inset-0 z-0 opacity-[0.03]" />

      {/* CONTENT */}
      <div className="relative z-10">

        <Navbar />

        <Hero />

        {/* Divider */}
        <SectionDivider />

        <About />

        {/* Divider */}
        <GridDivider />

        <Features />

        {/* Divider */}
        <GlowDivider />

        <NeoPOP />

        {/* Divider */}
        <AnimatedDivider />

        <Testimonials />

        {/* Divider */}
        <GlowDivider />

        <Security />

        <Footer />

      </div>

    </div>
  )
}

/* ---------- DIVIDERS ---------- */

function SectionDivider() {
  return (
    <div className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent" />

      <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />
    </div>
  )
}

function GlowDivider() {
  return (
    <div className="relative h-40 overflow-hidden">

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-32
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-500/10
          blur-[140px]
        "
      />

      <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent" />

    </div>
  )
}

function GridDivider() {
  return (
    <div
      className="
        h-40
        opacity-30
        [background-image:linear-gradient(rgba(234,179,8,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(234,179,8,0.08)_1px,transparent_1px)]
        [background-size:80px_80px]
        [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]
      "
    />
  )
}

function AnimatedDivider() {
  return (
    <div className="relative py-16">

      <div className="mx-auto h-px w-[70%] overflow-hidden bg-zinc-900">

        <div
          className="
            h-full
            w-1/3
            animate-pulse
            bg-gradient-to-r
            from-transparent
            via-yellow-500
            to-transparent
          "
        />

      </div>

    </div>
  )
}