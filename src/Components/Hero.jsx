import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const numRefs = useRef([])
  const cardRef = useRef(null)

  const stats = [
    { val: 14, suffix: 'M+', label: 'Members' },
    { val: 4.9, suffix: '★', label: 'App Rating', isFloat: true },
    { val: 750, suffix: '+', label: 'Brand Partners' },
    { val: 8, suffix: 'Cr+', label: 'Rewards Given' },
  ]

  /* ================= COUNTER ================= */

  useEffect(() => {
    numRefs.current.forEach((el, i) => {
      if (!el) return

      const { val, suffix, isFloat } = stats[i]

      let cur = 0
      const step = val / 80

      const timer = setInterval(() => {
        cur = Math.min(cur + step, val)

        el.textContent =
          (isFloat
            ? cur.toFixed(1)
            : Math.floor(cur)) + suffix

        if (cur >= val) clearInterval(timer)
      }, 18)
    })
  }, [])

  /* ================= CARD PARALLAX ================= */

  useEffect(() => {
    const card = cardRef.current

    if (!card) return

    const handleMove = e => {
      const rect = card.getBoundingClientRect()

      const x =
        (e.clientX -
          rect.left -
          rect.width / 2) /
        22

      const y =
        (e.clientY -
          rect.top -
          rect.height / 2) /
        22

      card.style.transform = `
        rotateY(${x}deg)
        rotateX(${-y}deg)
      `
    }

    const reset = () => {
      card.style.transform =
        'rotateY(0deg) rotateX(0deg)'
    }

    card.addEventListener(
      'mousemove',
      handleMove
    )

    card.addEventListener(
      'mouseleave',
      reset
    )

    return () => {
      card.removeEventListener(
        'mousemove',
        handleMove
      )

      card.removeEventListener(
        'mouseleave',
        reset
      )
    }
  }, [])

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        flex
        items-center
        px-6
        pt-36
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* BIG TYPO */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          text-[20vw]
          font-black
          tracking-[-0.09em]
          text-white/[0.02]
          whitespace-nowrap
          pointer-events-none
          select-none
          uppercase
        "
      >
        CRED
      </div>

      {/* RADIAL LIGHT */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.12),transparent_45%)]
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '90px 90px',
        }}
      />

      {/* MAIN GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-[16%]
          left-1/2
          -translate-x-1/2
          w-[1000px]
          h-[450px]
          rounded-full
          bg-yellow-500/10
          blur-[160px]
        "
      />

      {/* ORB 1 */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          top-20
          left-[-100px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-yellow-500/10
          blur-[120px]
        "
      />

      {/* ORB 2 */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          bottom-0
          right-[-100px]
          w-[380px]
          h-[380px]
          rounded-full
          bg-orange-500/10
          blur-[140px]
        "
      />

      {/* LIGHT LINES */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: -200,
            }}
            animate={{
              opacity: [0, 0.4, 0],
              y: ['0%', '120%'],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 1.2,
              ease: 'linear',
            }}
            className="
              absolute
              w-px
              h-40
              bg-gradient-to-b
              from-yellow-500/0
              via-yellow-500/40
              to-yellow-500/0
            "
            style={{
              left: `${10 + i * 12}%`,
            }}
          />
        ))}
      </div>

      {/* NOISE */}
      <div className="noise" />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto w-full">

        {/* BADGE */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-yellow-700/30
            bg-yellow-500/5
            backdrop-blur-2xl
            px-6
            py-3
            uppercase
            tracking-[0.35em]
            text-[10px]
            text-yellow-500
            mb-12
          "
        >
          <span
            className="
              w-2
              h-2
              rounded-full
              bg-yellow-500
              animate-pulse
            "
          />

          Members-only club
        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            lg:grid-cols-2
            gap-24
            items-center
          "
        >
          {/* ================= LEFT ================= */}

          <div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                font-syne
                font-black
                leading-[0.78]
                tracking-[-0.09em]
                text-[82px]
                sm:text-[110px]
                md:text-[140px]
                xl:text-[170px]
                text-white
                mb-8
              "
            >
              <span className="block">
                Rewards
              </span>

              <span className="block">
                for the
              </span>

              <span
                className="
                  block
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-b
                  from-yellow-300
                  to-yellow-600
                "
              >
                worthy.
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.8,
              }}
              className="
                max-w-2xl
                text-zinc-400
                text-xl
                md:text-2xl
                leading-[2]
                font-light
                mb-12
              "
            >
              India's most premium financial
              experience. Pay bills, earn rewards,
              unlock elite benefits, and access a
              members-only ecosystem built
              exclusively for the creditworthy.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
              className="flex flex-wrap gap-5"
            >
              <button
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  px-10
                  py-5
                  bg-yellow-500
                  text-black
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-xs
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_50px_rgba(234,179,8,0.5)]
                "
              >
                <span className="relative z-10">
                  Get CRED Invite
                </span>

                <div
                  className="
                    absolute
                    inset-0
                    bg-white/20
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform
                    duration-500
                  "
                />
              </button>

              <button
                className="
                  rounded-full
                  px-10
                  py-5
                  border
                  border-yellow-700/30
                  bg-white/[0.03]
                  backdrop-blur-2xl
                  text-white
                  uppercase
                  tracking-[0.22em]
                  text-xs
                  transition-all
                  duration-300
                  hover:border-yellow-500
                  hover:text-yellow-500
                  hover:bg-yellow-500/5
                "
              >
                Explore Benefits
              </button>
            </motion.div>

          </div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -4,
              y: [0, -18, 0],
            }}
            transition={{
              duration: 1,
              y: {
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
              },
            }}
            className="
              relative
              hidden
              lg:flex
              justify-center
            "
          >
            <div
              className="
                absolute
                inset-0
                bg-yellow-500/10
                blur-[100px]
              "
            />

            <div
              ref={cardRef}
              className="
                relative
                w-[500px]
                rounded-[42px]
                border
                border-yellow-700/20
                bg-white/[0.04]
                backdrop-blur-3xl
                p-10
                overflow-hidden
                shadow-[0_40px_100px_rgba(0,0,0,0.6)]
                transition-transform
                duration-200
              "
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* TOP REFLECTION */}
              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-[1px]
                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent
                "
              />

              {/* CORNER LIGHT */}
              <div
                className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  bg-white/10
                  blur-3xl
                "
              />

              {/* SHINE */}
              <div
                className="
                  absolute
                  top-0
                  left-[-40%]
                  w-[200px]
                  h-full
                  rotate-12
                  bg-white/5
                "
              />

              <div
                className="
                  flex
                  justify-between
                  items-center
                  mb-12
                "
              >
                <div>
                  <p
                    className="
                      text-zinc-500
                      text-xs
                      uppercase
                      tracking-[0.25em]
                    "
                  >
                    Total Rewards
                  </p>

                  <h3
                    className="
                      text-6xl
                      font-black
                      text-yellow-500
                      mt-4
                      font-syne
                    "
                  >
                    ₹84K
                  </h3>
                </div>

                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    bg-yellow-500
                    flex
                    items-center
                    justify-center
                    text-black
                    text-3xl
                    shadow-[0_0_40px_rgba(234,179,8,0.5)]
                  "
                >
                  ✦
                </div>
              </div>

              <div className="space-y-5">
                {[
                  [
                    'Travel Cashback',
                    '+₹12,000',
                  ],
                  [
                    'Dining Rewards',
                    '+₹8,400',
                  ],
                  [
                    'UPI Cashback',
                    '+₹4,800',
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      flex
                      justify-between
                      items-center
                      border
                      border-yellow-700/10
                      bg-black/30
                      backdrop-blur-xl
                      p-5
                      rounded-2xl
                    "
                  >
                    <span
                      className="
                        text-zinc-400
                        text-sm
                      "
                    >
                      {label}
                    </span>

                    <span
                      className="
                        text-yellow-500
                        font-semibold
                        text-lg
                      "
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================= STATS ================= */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-10
            mt-28
            border-t
            border-yellow-700/10
            pt-14
          "
        >
          {stats.map((s, i) => (
            <div key={s.label}>
              <span
                ref={el =>
                  (numRefs.current[i] = el)
                }
                className="
                  block
                  text-5xl
                  md:text-6xl
                  font-black
                  text-yellow-500
                  font-syne
                  tracking-[-0.05em]
                "
              >
                0{s.suffix}
              </span>

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.28em]
                  text-zinc-500
                  mt-3
                  block
                "
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* ================= SCROLL INDICATOR ================= */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            bottom-10
            left-1/2
            -translate-x-1/2
            flex
            flex-col
            items-center
            gap-3
          "
        >
          <span
            className="
              text-[10px]
              tracking-[0.3em]
              uppercase
              text-zinc-600
            "
          >
            Scroll
          </span>

          <div
            className="
              w-[1px]
              h-12
              bg-gradient-to-b
              from-yellow-500
              to-transparent
            "
          />
        </motion.div>
      </div>

      {/* ================= SECTION DIVIDER ================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          overflow-hidden
          leading-none
        "
      >
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#0d0d0d"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}