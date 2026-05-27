import { motion } from "framer-motion";

const secCards = [
  {
    icon: "🔒",
    title: "256-bit AES Encryption",
    desc: "Every byte encrypted at rest and in transit using bank-grade infrastructure trusted by modern financial systems.",
    glow: "from-yellow-500/20 to-yellow-500/5",
  },
  {
    icon: "🛡️",
    title: "Zero Data Selling",
    desc: "Your personal financial data is never sold or shared. Privacy and trust are engineered into the core experience.",
    glow: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    icon: "✅",
    title: "RBI & PCI DSS Compliant",
    desc: "Built with enterprise-level compliance standards aligned with Indian banking regulations and global payment security.",
    glow: "from-blue-500/20 to-blue-500/5",
  },
  {
    icon: "👁️",
    title: "AI Fraud Detection",
    desc: "Intelligent real-time monitoring systems identify suspicious activities before threats can impact your account.",
    glow: "from-purple-500/20 to-purple-500/5",
  },
];

const liveStats = [
  {
    value: "99.99%",
    label: "Transaction Security",
  },
  {
    value: "24/7",
    label: "Fraud Monitoring",
  },
  {
    value: "0",
    label: "Data Selling",
  },
];

export default function Security() {
  return (
    <section
      id="security"
      className="
        relative
        overflow-hidden
        bg-[#070707]
        px-6
        py-36
        text-white
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.08),transparent_45%)]" />

      <div className="absolute left-1/2 top-20 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full bg-yellow-500/5 blur-[120px]" />

      {/* GRID PATTERN */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-7xl
          items-center
          gap-24
          lg:grid-cols-[1.05fr_1fr]
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* TAG */}
          <div
            className="
              mb-8 inline-flex items-center gap-3
              rounded-full
              border border-yellow-500/20
              bg-yellow-500/5
              px-6 py-3
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-yellow-400
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
            Your safety first
          </div>

          {/* HEADING */}
          <h2
            className="
              max-w-3xl
              font-syne
              text-5xl
              font-extrabold
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              md:text-7xl
              xl:text-[7rem]
            "
          >
            Built like a
            <br />

            <span
              className="
                bg-gradient-to-b
                from-yellow-300
                to-yellow-600
                bg-clip-text
                text-transparent
              "
            >
              digital vault.
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-10
              max-w-2xl
              text-lg
              leading-[2]
              text-zinc-400
              md:text-xl
            "
          >
            Military-grade encryption meets elegant
            fintech experiences. Every payment,
            transaction, and interaction is protected
            with enterprise-level banking security.
          </p>

          {/* SECURITY CARDS */}
          <div className="mt-14 space-y-5">
            {secCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-3xl
                  transition-all
                  duration-500
                  hover:border-yellow-500/30
                  hover:bg-white/[0.05]
                "
              >
                {/* GLOW */}
                <div
                  className={`
                    absolute
                    -right-10
                    -top-10
                    h-40
                    w-40
                    rounded-full
                    bg-gradient-to-br
                    ${card.glow}
                    blur-[70px]
                  `}
                />

                <div className="relative z-10 flex gap-5">
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      border border-yellow-500/20
                      bg-yellow-500/10
                      text-3xl
                      shadow-[0_0_40px_rgba(234,179,8,0.15)]
                    "
                  >
                    {card.icon}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3
                      className="
                        mb-3
                        font-syne
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
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            flex
            min-h-[720px]
            items-center
            justify-center
          "
        >
          {/* OUTER RING */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[480px]
              w-[480px]
              rounded-full
              border
              border-yellow-500/10
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-0
                h-5
                w-5
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-yellow-400
                shadow-[0_0_30px_rgba(250,204,21,0.9)]
              "
            />
          </motion.div>

          {/* INNER RING */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              h-[360px]
              w-[360px]
              rounded-full
              border
              border-dashed
              border-yellow-500/20
            "
          >
            <div
              className="
                absolute
                left-1/2
                top-0
                h-4
                w-4
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-yellow-300
              "
            />
          </motion.div>

          {/* MAIN SHIELD */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              z-20
              flex
              h-[320px]
              w-[260px]
              items-center
              justify-center
              overflow-hidden
              rounded-[48px]
              border
              border-yellow-500/30
              bg-gradient-to-b
              from-yellow-500/10
              to-transparent
              shadow-[0_0_120px_rgba(234,179,8,0.15)]
              backdrop-blur-3xl
            "
          >
            {/* INNER BORDER */}
            <div className="absolute inset-0 rounded-[48px] border border-white/5" />

            {/* SHIELD GLOW */}
            <div className="absolute h-52 w-52 rounded-full bg-yellow-500/10 blur-[70px]" />

            {/* ICON */}
            <span className="relative z-10 text-[9rem] drop-shadow-[0_0_40px_rgba(250,204,21,0.7)]">
              🛡️
            </span>
          </motion.div>

          {/* TOP BADGE */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              absolute
              right-0
              top-16
              rounded-2xl
              border
              border-yellow-500/20
              bg-black/60
              px-6
              py-4
              backdrop-blur-3xl
            "
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400">
              256-bit encrypted
            </p>
          </motion.div>

          {/* BOTTOM BADGE */}
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-24
              left-0
              rounded-2xl
              border
              border-emerald-500/20
              bg-black/60
              px-6
              py-4
              backdrop-blur-3xl
            "
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-emerald-400">
              ✓ RBI compliant
            </p>
          </motion.div>

          {/* FLOATING STATS CARD */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="
              absolute
              bottom-0
              right-6
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              p-6
              backdrop-blur-3xl
            "
          >
            {/* GLOW */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-500/10 blur-[70px]" />

            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
                Fraud Protection
              </p>

              <h3
                className="
                  mt-3
                  font-syne
                  text-5xl
                  font-extrabold
                  tracking-[-0.05em]
                  text-yellow-400
                "
              >
                24/7
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-400">
                AI-powered transaction monitoring and
                intelligent threat prevention systems.
              </p>

              {/* STATS */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {liveStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="
                      rounded-2xl
                      border
                      border-white/5
                      bg-black/30
                      p-3
                      text-center
                    "
                  >
                    <div
                      className="
                        font-syne
                        text-lg
                        font-extrabold
                        text-yellow-400
                      "
                    >
                      {stat.value}
                    </div>

                    <div className="mt-1 text-[10px] leading-4 text-zinc-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}