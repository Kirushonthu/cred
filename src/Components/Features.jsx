import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineCreditCard,
  HiOutlineLightningBolt,
  HiOutlineChartBar,
  HiOutlineCurrencyRupee,
} from 'react-icons/hi'

const features = [
  {
    icon: <HiOutlineCreditCard />,
    title: 'Card Bill Payments',
    desc:
      'Manage all your credit cards in one elegant dashboard. Pay bills instantly, never miss due dates, and unlock rewards every month.',
    tag: 'Core Feature',
    glow: 'rgba(201,168,76,0.18)',
  },
  {
    icon: <HiOutlineSparkles />,
    title: 'Exclusive Rewards',
    desc:
      'Access curated premium rewards from luxury brands, travel partners, fine dining experiences, and members-only drops.',
    tag: 'Members Only',
    glow: 'rgba(168,85,247,0.18)',
  },
  {
    icon: <HiOutlineChartBar />,
    title: 'Live Credit Score',
    desc:
      'Track your credit health in real-time with personalized insights, score analytics, and smart financial recommendations.',
    tag: 'AI Powered',
    glow: 'rgba(59,130,246,0.18)',
  },
  {
    icon: <HiOutlineLightningBolt />,
    title: 'CRED UPI',
    desc:
      'Fast, secure UPI payments designed for rewarding everyday spending. Scan, pay, and earn instantly.',
    tag: 'Instant',
    glow: 'rgba(34,197,94,0.18)',
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'CRED Coins',
    desc:
      'Earn coins on every interaction and unlock premium tiers, elite experiences, cashback, and exclusive privileges.',
    tag: 'Exclusive',
    glow: 'rgba(234,179,8,0.18)',
  },
  {
    icon: <HiOutlineCurrencyRupee />,
    title: 'Real Cashback',
    desc:
      'Get actual cashback directly into your account instead of meaningless points. Rewards that feel real.',
    tag: 'Real Money',
    glow: 'rgba(16,185,129,0.18)',
  },
]

export default function Features() {
  return (
    <section
      id="features"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-6
        py-32
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* Main Glow */}
      <div
        className="
          absolute
          left-[-10%]
          top-[-20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-yellow-500/10
          blur-[140px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          bottom-[-10%]
          right-[-10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-purple-500/10
          blur-[140px]
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-4xl text-center"
        >
          {/* Badge */}
          <div
            className="
              mb-8
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-yellow-700/30
              bg-yellow-500/5
              px-6
              py-3
              text-[11px]
              uppercase
              tracking-[0.32em]
              text-yellow-500
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
            Premium Features
          </div>

          {/* Heading */}
          <h2
            className="
              mb-8
              font-syne
              text-[3rem]
              font-black
              leading-[0.9]
              tracking-[-0.07em]
              text-white
              sm:text-[4rem]
              md:text-[5.5rem]
              xl:text-[7rem]
            "
          >
            Everything you need.

            <span
              className="
                mt-2
                block
                bg-gradient-to-b
                from-yellow-300
                to-yellow-600
                bg-clip-text
                text-transparent
              "
            >
              Nothing you don’t.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              max-w-3xl
              text-lg
              font-light
              leading-[2]
              text-zinc-400
              md:text-xl
            "
          >
            CRED combines premium payments, intelligent financial tools,
            elite rewards, and secure banking experiences into one
            beautifully crafted ecosystem designed for the modern generation.
          </p>
        </motion.div>

        {/* ================= FEATURE GRID ================= */}

        <div
          className="
            grid
            gap-7
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-3xl
                transition-all
                duration-500
                hover:border-yellow-500/30
                hover:bg-white/[0.045]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  -right-10
                  -top-10
                  h-[220px]
                  w-[220px]
                  rounded-full
                  blur-[90px]
                  transition-all
                  duration-700
                  group-hover:scale-125
                "
                style={{
                  background: f.glow,
                }}
              />

              {/* Shine */}
              <div
                className="
                  absolute
                  left-[-120%]
                  top-0
                  h-full
                  w-[120px]
                  rotate-12
                  bg-white/5
                  transition-all
                  duration-1000
                  group-hover:left-[120%]
                "
              />

              {/* Top Tag */}
              <div
                className="
                  relative
                  z-10
                  mb-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-yellow-700/20
                  bg-yellow-500/5
                  px-4
                  py-2
                  backdrop-blur-xl
                "
              >
                <div className="h-2 w-2 rounded-full bg-yellow-500" />

                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-yellow-500
                  "
                >
                  {f.tag}
                </span>
              </div>

              {/* Icon */}
              <div
                className="
                  relative
                  z-10
                  mb-8
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-[24px]
                  border
                  border-yellow-700/15
                  bg-gradient-to-br
                  from-yellow-500/15
                  to-yellow-500/5
                  text-4xl
                  text-yellow-500
                  shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                {f.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  relative
                  z-10
                  mb-5
                  font-syne
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                "
              >
                {f.title}
              </h3>

              {/* Description */}
              <p
                className="
                  relative
                  z-10
                  mb-10
                  text-[15px]
                  font-light
                  leading-[2]
                  text-zinc-400
                "
              >
                {f.desc}
              </p>

              {/* Bottom CTA */}
              <div
                className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-3
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.24em]
                  text-yellow-500
                "
              >
                Explore Feature

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  <HiArrowRight size={18} />
                </span>
              </div>

              {/* Bottom Border Glow */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[1px]
                  w-0
                  bg-gradient-to-r
                  from-transparent
                  via-yellow-500
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:w-full
                "
              />
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM STRIP ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="
            mt-24
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-gradient-to-r
            from-white/[0.03]
            to-white/[0.01]
            p-10
            backdrop-blur-3xl
          "
        >
          <div
            className="
              flex
              flex-col
              items-start
              justify-between
              gap-10
              lg:flex-row
              lg:items-center
            "
          >
            {/* Left */}
            <div>
              <p
                className="
                  mb-4
                  text-[11px]
                  uppercase
                  tracking-[0.3em]
                  text-yellow-500
                "
              >
                Trusted by millions
              </p>

              <h3
                className="
                  max-w-3xl
                  font-syne
                  text-3xl
                  font-black
                  leading-tight
                  text-white
                  md:text-5xl
                "
              >
                Built for India’s most
                financially disciplined users.
              </h3>
            </div>

            {/* Right */}
            <button
              className="
                group
                relative
                overflow-hidden
                rounded-full
                bg-yellow-500
                px-10
                py-5
                font-syne
                text-xs
                font-black
                uppercase
                tracking-[0.3em]
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-[0_0_60px_rgba(234,179,8,0.35)]
              "
            >
              <span className="relative z-10">
                Explore All Features
              </span>

              <div
                className="
                  absolute
                  inset-0
                  translate-y-full
                  bg-white/30
                  transition-transform
                  duration-500
                  group-hover:translate-y-0
                "
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}