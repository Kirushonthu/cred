import { motion } from 'framer-motion'

const cards = [
  {
    icon: '🏆',
    title: 'Excellence in Every Bill',
    desc: 'Earn exclusive rewards every time you pay your credit card bills. Financial discipline finally gets rewarded.',
  },
  {
    icon: '🔐',
    title: 'Bank-Grade Security',
    desc: 'Protected with advanced encryption, fraud monitoring, and enterprise-level security standards.',
  },
  {
    icon: '✨',
    title: 'Members-Only Privileges',
    desc: 'Luxury experiences, premium brand offers, airport perks, dining rewards, and curated elite benefits.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#050505]
        px-6
        py-36
      "
    >
      {/* ================= BACKGROUND ================= */}

      {/* Main Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-0
          h-[650px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-[#c9a84c]/10
          blur-[160px]
        "
      />

      {/* Floating Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-[-120px]
          top-40
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#c9a84c]/10
          blur-[140px]
        "
      />

      {/* Grid Overlay */}
      <div
        className="
          absolute inset-0 opacity-[0.05]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

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
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      {/* ================= CONTENT ================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-28
          lg:grid-cols-[1.05fr_1fr]
        "
      >
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            filter: 'blur(12px)',
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          {/* Tag */}
          <div
            className="
              mb-10
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#c9a84c]/30
              bg-[#c9a84c]/5
              px-6
              py-3
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#c9a84c]
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 rounded-full bg-[#c9a84c] animate-pulse" />
            Members-only ecosystem
          </div>

          {/* Heading */}
          <h2
            className="
              mb-10
              font-[Syne]
              text-[4.7rem]
              font-extrabold
              leading-[0.82]
              tracking-[-0.09em]
              text-white
              md:text-[6.2rem]
              xl:text-[7.8rem]
            "
          >
            Built for the

            <span
              className="
                block
                bg-gradient-to-b
                from-[#f7df9d]
                to-[#c9a84c]
                bg-clip-text
                text-transparent
              "
            >
              creditworthy.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mb-7
              max-w-2xl
              text-lg
              font-light
              leading-[2]
              text-zinc-400
            "
          >
            CRED is more than a payments platform.
            It’s a premium financial membership designed
            for individuals who value trust, discipline,
            rewards, and elevated experiences.
          </p>

          <p
            className="
              mb-14
              max-w-2xl
              text-base
              font-light
              leading-[2]
              text-zinc-500
            "
          >
            Every reward, every transaction, and every
            interaction is carefully crafted to deliver
            a luxury-first financial ecosystem with
            uncompromising privacy and security.
          </p>

          {/* CTA */}
          <button
            className="
              group
              relative
              overflow-hidden
              rounded-full
              border
              border-[#c9a84c]/30
              bg-[#c9a84c]
              px-12
              py-5
              text-xs
              font-bold
              uppercase
              tracking-[0.28em]
              text-black
              transition-all
              duration-500
              hover:scale-105
              hover:shadow-[0_0_60px_rgba(201,168,76,0.45)]
            "
          >
            <span className="relative z-10">
              Check Your Score
            </span>

            <div
              className="
                absolute
                inset-0
                translate-y-full
                bg-white/20
                transition-transform
                duration-500
                group-hover:translate-y-0
              "
            />
          </button>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 80,
            filter: 'blur(12px)',
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Card Glow */}
          <div
            className="
              absolute
              inset-0
              bg-[#c9a84c]/5
              blur-[120px]
            "
          />

          {/* Main Glass Card */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[42px]
              border
              border-white/10
              bg-white/[0.03]
              p-8
              backdrop-blur-3xl
              shadow-[0_0_100px_rgba(201,168,76,0.08)]
            "
          >
            {/* Shine Effect */}
            <div
              className="
                absolute
                left-[-20%]
                top-0
                h-full
                w-[180px]
                rotate-12
                bg-white/5
              "
            />

            {/* ================= TOP CARD ================= */}

            <div
              className="
                mb-8
                rounded-[30px]
                border
                border-white/10
                bg-black/40
                p-8
              "
            >
              <div className="mb-10 flex items-start justify-between">
                <div>
                  <p
                    className="
                      mb-3
                      text-[10px]
                      uppercase
                      tracking-[0.32em]
                      text-zinc-500
                    "
                  >
                    Membership Status
                  </p>

                  <h3
                    className="
                      font-[Syne]
                      text-7xl
                      font-extrabold
                      leading-none
                      tracking-[-0.08em]
                      text-[#c9a84c]
                    "
                  >
                    Elite
                  </h3>
                </div>

                {/* Badge */}
                <div
                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-[#c9a84c]
                    text-3xl
                    text-black
                    shadow-[0_0_40px_rgba(201,168,76,0.5)]
                  "
                >
                  ✦
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-5">
                {[
                  ['Credit Score', '792'],
                  ['Reward Tier', 'Black'],
                  ['Annual Cashback', '₹84,000'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-white/5
                      pb-4
                    "
                  >
                    <span className="text-sm text-zinc-500">
                      {label}
                    </span>

                    <span className="text-lg font-semibold text-white">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= FEATURE CARDS ================= */}

            <div className="space-y-5">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{
                    opacity: 0,
                    y: 50,
                    filter: 'blur(10px)',
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
                    group
                    rounded-[28px]
                    border
                    border-white/10
                    bg-black/30
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[#c9a84c]/30
                    hover:bg-white/[0.04]
                  "
                >
                  <div className="flex gap-5">
                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-16
                        w-16
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-[#c9a84c]/15
                        bg-[#c9a84c]/10
                        text-3xl
                      "
                    >
                      {card.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h3
                        className="
                          mb-3
                          font-[Syne]
                          text-xl
                          font-bold
                          text-white
                        "
                      >
                        {card.title}
                      </h3>

                      <p
                        className="
                          text-sm
                          font-light
                          leading-8
                          text-zinc-400
                        "
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra Decorative Glow */}
            <div
              className="
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                bg-[#c9a84c]/10
                blur-[120px]
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}