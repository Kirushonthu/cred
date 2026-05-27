import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineMenuAlt4,
  HiOutlineX,
} from 'react-icons/hi'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastScroll = 0

    const handleScroll = () => {
      const current = window.scrollY

      setScrolled(current > 30)

      if (current > lastScroll && current > 120) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScroll = current
    }

    window.addEventListener('scroll', handleScroll)

    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [mobileOpen])

  const navLinks = [
    'About',
    'Features',
    'Rewards',
    'Security',
  ]

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{
          y: hidden ? -140 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          top-0
          left-0
          w-full
          z-50
          transition-all
          duration-500
          ${
            scrolled
              ? 'bg-black/75 backdrop-blur-3xl border-b border-yellow-700/20'
              : 'bg-transparent'
          }
        `}
      >
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />

        <div
          className="
            relative
            mx-auto
            flex
            h-[92px]
            max-w-[1500px]
            items-center
            justify-between
            px-6
            lg:h-[110px]
            lg:px-12
          "
        >
          {/* Blur Glow */}
          <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 bg-yellow-500/10 blur-[120px]" />

          {/* LOGO */}
          <motion.div
            whileHover={{
              scale: 1.04,
            }}
            className="
              relative
              z-10
              cursor-pointer
              font-syne
              text-[2rem]
              lg:text-[2.8rem]
              font-extrabold
              tracking-[0.45em]
              text-yellow-500
            "
          >
            CRED
          </motion.div>

          {/* DESKTOP NAV */}
          <ul
            className="
              hidden
              items-center
              gap-14
              md:flex
            "
          >
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="
                    group
                    relative
                    overflow-hidden
                    font-syne
                    text-[13px]
                    uppercase
                    tracking-[0.35em]
                    text-zinc-400
                    transition-all
                    duration-300
                    hover:text-yellow-500
                  "
                >
                  {/* Glow */}
                  <span className="absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 bg-yellow-500/10" />

                  {link}

                  {/* Underline */}
                  <span
                    className="
                      absolute
                      bottom-[-12px]
                      left-0
                      h-[2px]
                      w-0
                      bg-yellow-500
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              className="
                group
                relative
                overflow-hidden
                rounded-full
                border
                border-yellow-700/20
                bg-white/[0.03]
                px-9
                py-4
                font-syne
                text-[11px]
                font-extrabold
                uppercase
                tracking-[0.35em]
                text-white
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:scale-[1.03]
                hover:border-yellow-500
                hover:text-black
                hover:shadow-[0_0_60px_rgba(234,179,8,0.25)]
              "
            >
              {/* Sliding Fill */}
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-yellow-500
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-x-0
                "
              />

              <span className="relative z-10">
                Get Invite
              </span>
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              relative
              z-[70]
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-yellow-700/20
              bg-white/[0.03]
              text-yellow-500
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-yellow-500/40
              md:hidden
            "
          >
            <motion.div
              animate={{
                rotate: mobileOpen ? 180 : 0,
                scale: mobileOpen ? 1.1 : 1,
              }}
              transition={{
                duration: 0.35,
              }}
              className="text-3xl"
            >
              {mobileOpen ? (
                <HiOutlineX />
              ) : (
                <HiOutlineMenuAlt4 />
              )}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              clipPath:
                'circle(0% at 100% 0%)',
            }}
            animate={{
              opacity: 1,
              clipPath:
                'circle(150% at 100% 0%)',
            }}
            exit={{
              opacity: 0,
              clipPath:
                'circle(0% at 100% 0%)',
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              fixed
              inset-0
              z-40
              bg-[#050505]
            "
          >
            {/* Glow */}
            <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

            {/* Noise Texture */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.03]
                mix-blend-soft-light
              "
              style={{
                backgroundImage:
                  'url("https://grainy-gradients.vercel.app/noise.svg")',
              }}
            />

            {/* Links */}
            <div className="flex h-full flex-col items-center justify-center">
              <ul className="flex flex-col items-center gap-12">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={() =>
                        setMobileOpen(false)
                      }
                      className="
                        group
                        relative
                        font-syne
                        text-5xl
                        md:text-7xl
                        font-extrabold
                        tracking-[-0.05em]
                        text-zinc-300
                        transition-all
                        duration-300
                        hover:text-yellow-500
                      "
                    >
                      {link}

                      <span
                        className="
                          absolute
                          -bottom-3
                          left-0
                          h-[3px]
                          w-0
                          bg-yellow-500
                          transition-all
                          duration-500
                          group-hover:w-full
                        "
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.45,
                }}
                className="
                  mt-20
                  rounded-full
                  bg-yellow-500
                  px-14
                  py-5
                  font-syne
                  text-sm
                  font-extrabold
                  uppercase
                  tracking-[0.35em]
                  text-black
                  shadow-[0_20px_60px_rgba(234,179,8,0.35)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Get Invite
              </motion.button>

              {/* Bottom Text */}
              <p
                className="
                  absolute
                  bottom-10
                  text-[10px]
                  uppercase
                  tracking-[0.35em]
                  text-zinc-600
                "
              >
                Members-only access
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}