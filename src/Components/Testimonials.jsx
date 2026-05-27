import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const testimonials = [
  {
    initials: 'AK',
    name: 'Arjun Kapoor',
    role: 'Score: 821 · Gold Member',
    text: 'CRED completely changed how I manage my finances. Bill payments now feel rewarding instead of stressful.',
    glow: 'from-yellow-500/20',
  },
  {
    initials: 'PR',
    name: 'Priya Reddy',
    role: 'Score: 796 · Platinum Member',
    text: 'The rewards actually feel premium. Dining offers, cashback, and airport perks are genuinely useful.',
    glow: 'from-violet-500/20',
  },
  {
    initials: 'SM',
    name: 'Sahil Mehta',
    role: 'Score: 812 · Black Member',
    text: 'Real-time credit score tracking and beautiful UI made CRED part of my everyday payment routine.',
    glow: 'from-blue-500/20',
  },
]

const counters = [
  {
    target: 14,
    suffix: 'M+',
    label: 'Premium Members',
  },
  {
    target: 750,
    suffix: '+',
    label: 'Brand Partners',
  },
  {
    target: 99,
    suffix: '%',
    label: 'Success Rate',
  },
  {
    target: 48,
    suffix: 'B+',
    label: 'Payments Processed',
  },
]

export default function Testimonials() {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return

          const el = entry.target
          const target = Number(el.dataset.target)
          const suffix = el.dataset.suffix

          let current = 0
          const increment = target / 70

          const timer = setInterval(() => {
            current += increment

            if (current >= target) {
              current = target
              clearInterval(timer)
            }

            el.textContent = `${Math.floor(current)}${suffix}`
          }, 20)

          observer.unobserve(el)
        })
      },
      {
        threshold: 0.5,
      }
    )

    refs.current.forEach(el => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-6
        py-32
        text-white
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* Main Glow */}
      <div
        className="
          absolute
          left-1/2
          top-20
          h-[450px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-yellow-500/10
          blur-[160px]
        "
      />

      {/* Secondary Glow */}
      <div
        className="
          absolute
          bottom-0
          right-[-10%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-violet-500/10
          blur-[120px]
        "
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '70px 70px',
        }}
      />

      {/* Floating Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: ['-20%', '120%'],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 1.2,
              ease: 'linear',
            }}
            className="
              absolute
              h-40
              w-px
              bg-gradient-to-b
              from-transparent
              via-yellow-500/40
              to-transparent
            "
            style={{
              left: `${10 + i * 13}%`,
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          {/* Tag */}
          <div
            className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-yellow-500/20
              bg-yellow-500/5
              px-6
              py-3
              text-[11px]
              uppercase
              tracking-[0.32em]
              text-yellow-400
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
            Trusted by premium members
          </div>

          {/* Heading */}
          <h2
            className="
              mx-auto
              max-w-5xl
              font-syne
              text-5xl
              font-extrabold
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              md:text-7xl
              xl:text-[6.5rem]
            "
          >
            India’s most
            <br />

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-b
                from-yellow-300
                to-yellow-600
              "
            >
              trusted rewards club.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-lg
              leading-9
              text-zinc-400
              md:text-xl
            "
          >
            Millions of financially responsible members trust CRED
            for bill payments, cashback, premium rewards, and elite
            financial experiences crafted beautifully.
          </p>
        </motion.div>

        {/* ================= RATING CARDS ================= */}

        <div className="mb-20 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: '🍎',
              title: 'App Store',
              value: '4.9',
              subtitle: 'Top-rated finance app',
            },
            {
              icon: '▶',
              title: 'Play Store',
              value: '4.8',
              subtitle: 'Millions of downloads',
            },
            {
              icon: '🏆',
              title: 'Rewards Platform',
              value: '#1',
              subtitle: 'Trusted premium experience',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-yellow-500/30
                hover:bg-white/[0.05]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-yellow-500/10
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10 flex items-center gap-5">

                {/* Icon */}
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-yellow-500/20
                    bg-yellow-500/10
                    text-3xl
                    shadow-[0_0_40px_rgba(234,179,8,0.15)]
                  "
                >
                  {card.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-5xl font-black text-yellow-400">
                    {card.value}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      uppercase
                      tracking-[0.28em]
                      text-zinc-300
                    "
                  >
                    {card.title}
                  </p>

                  <div className="mt-3 text-yellow-400">
                    ★★★★★
                  </div>

                  <p className="mt-3 text-sm text-zinc-500">
                    {card.subtitle}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= TESTIMONIALS ================= */}

        <div className="mb-24 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-3xl
                transition-all
                duration-500
                hover:-translate-y-4
                hover:border-yellow-500/30
              "
            >
              {/* Glow */}
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${item.glow}
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                `}
              />

              {/* Quote */}
              <div
                className="
                  absolute
                  right-6
                  top-4
                  font-syne
                  text-8xl
                  font-black
                  text-yellow-500/10
                "
              >
                ”
              </div>

              <div className="relative z-10">

                {/* Stars */}
                <div className="mb-6 flex gap-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Text */}
                <p
                  className="
                    mb-10
                    text-[1rem]
                    leading-9
                    text-zinc-300
                  "
                >
                  "{item.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4">

                  {/* Avatar */}
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-yellow-500/25
                      bg-gradient-to-br
                      from-yellow-500/20
                      to-yellow-700/20
                      font-bold
                      text-yellow-400
                    "
                  >
                    {item.initials}
                  </div>

                  {/* Info */}
                  <div>
                    <h4 className="font-semibold text-white">
                      {item.name}
                    </h4>

                    <p
                      className="
                        mt-1
                        text-sm
                        tracking-wide
                        text-zinc-500
                      "
                    >
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= COUNTERS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[40px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-3xl
          "
        >
          <div className="grid gap-[1px] bg-white/10 md:grid-cols-4">

            {counters.map((counter, index) => (
              <div
                key={counter.label}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-[#0f0f0f]
                  p-12
                  text-center
                  transition-all
                  duration-500
                  hover:bg-[#151515]
                "
              >
                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-yellow-500/10
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative z-10">

                  {/* Number */}
                  <div
                    ref={el => (refs.current[index] = el)}
                    data-target={counter.target}
                    data-suffix={counter.suffix}
                    className="
                      mb-4
                      font-syne
                      text-5xl
                      font-extrabold
                      tracking-[-0.05em]
                      text-yellow-400
                      md:text-6xl
                    "
                  >
                    0{counter.suffix}
                  </div>

                  {/* Label */}
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.32em]
                      text-zinc-500
                    "
                  >
                    {counter.label}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  )
}