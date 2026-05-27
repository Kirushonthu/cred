import { motion } from "framer-motion";

const floatingCards = [
  {
    title: "CRED Coins",
    value: "48,250",
    label: "Available Balance",
    glow: "from-yellow-400/20 to-yellow-600/5",
  },
  {
    title: "Cashback Earned",
    value: "₹84K",
    label: "This Year",
    glow: "from-emerald-400/20 to-emerald-600/5",
  },
];

const stats = [
  ["1.2M+", "Transactions"],
  ["99.9%", "Success Rate"],
  ["24/7", "Secure"],
];

export default function NeoPOP() {
  return (
    <section
      id="rewards"
      className="relative overflow-hidden bg-[#050505] px-6 py-36 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(234,179,8,0.08),transparent_45%)]" />

      <div className="absolute -left-40 top-0 h-[550px] w-[550px] rounded-full bg-yellow-500/10 blur-[150px]" />

      <div className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-yellow-500/10 blur-[160px]" />

      {/* GRID */}
      <div
        className="
          absolute inset-0 opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mb-28 text-center"
        >
          {/* TAG */}
          <div
            className="
              mb-8 inline-flex items-center gap-3
              rounded-full
              border border-yellow-700/30
              bg-yellow-500/5
              px-6 py-3
              text-[11px]
              uppercase
              tracking-[0.35em]
              text-yellow-500
              backdrop-blur-xl
            "
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
            NeoPOP Experience
          </div>

          {/* TITLE */}
          <h2
            className="
              mx-auto
              max-w-6xl
              font-syne
              text-5xl
              font-extrabold
              leading-[0.88]
              tracking-[-0.06em]
              text-white
              md:text-7xl
              xl:text-[7rem]
            "
          >
            Premium interactions.
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
              Crafted beautifully.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-lg
              leading-[2]
              text-zinc-400
              md:text-xl
            "
          >
            Inspired by CRED’s NeoPOP design system —
            luxurious motion, tactile depth, immersive
            interactions, and premium fintech experiences
            designed for modern creditworthy users.
          </p>
        </motion.div>

        {/* TOP GRID */}
        <div className="mb-10 grid gap-8 lg:grid-cols-2">
          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-yellow-700/20
              bg-gradient-to-b
              from-[#1b1b1b]
              to-[#0d0d0d]
              p-10
              shadow-[0_40px_100px_rgba(0,0,0,0.6)]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-yellow-500/40
            "
          >
            {/* GLOW */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-[100px]" />

            {/* TAG */}
            <div
              className="
                mb-10 inline-flex items-center gap-2
                rounded-full
                border border-yellow-700/20
                bg-yellow-500/5
                px-4 py-2
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-yellow-500
              "
            >
              ✦ CRED Coins
            </div>

            {/* VALUE */}
            <div className="relative z-10 mb-10">
              <div className="mb-3 text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                Available Balance
              </div>

              <div
                className="
                  mb-10
                  font-syne
                  text-7xl
                  font-extrabold
                  tracking-[-0.06em]
                  text-yellow-500
                "
              >
                48,250
              </div>

              {/* COINS */}
              <div className="flex gap-4">
                {["C", "R", "E", "D"].map((letter) => (
                  <motion.div
                    key={letter}
                    whileHover={{
                      y: -8,
                      rotate: 8,
                    }}
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-[#f4d77b]
                      to-[#8b6517]
                      font-syne
                      text-lg
                      font-extrabold
                      text-black
                      shadow-[0_15px_40px_rgba(234,179,8,0.4)]
                    "
                  >
                    {letter}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
                group/button
                relative
                w-full
                overflow-hidden
                rounded-2xl
                border border-yellow-400/40
                bg-yellow-500
                px-8 py-5
                font-syne
                text-sm
                font-bold
                uppercase
                tracking-[0.25em]
                text-black
                shadow-[0_20px_50px_rgba(234,179,8,0.35)]
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              <span className="relative z-10">
                Redeem Rewards
              </span>

              <div
                className="
                  absolute inset-0
                  translate-y-full
                  bg-white/20
                  transition-transform duration-500
                  group-hover/button:translate-y-0
                "
              />
            </button>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            viewport={{ once: true }}
            className="
              group
              relative
              overflow-hidden
              rounded-[40px]
              border
              border-yellow-700/20
              bg-gradient-to-b
              from-[#1b1b1b]
              to-[#0d0d0d]
              p-10
              shadow-[0_40px_100px_rgba(0,0,0,0.6)]
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-yellow-500/40
            "
          >
            <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />

            <div
              className="
                mb-10 inline-flex items-center gap-2
                rounded-full
                border border-yellow-700/20
                bg-yellow-500/5
                px-4 py-2
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-yellow-500
              "
            >
              ✦ Credit Health
            </div>

            {/* SCORE CIRCLE */}
            <div className="relative mx-auto mb-12 h-[240px] w-[240px]">
              <svg
                width="240"
                height="240"
                viewBox="0 0 240 240"
                className="-rotate-90"
              >
                <circle
                  cx="120"
                  cy="120"
                  r="94"
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="16"
                />

                <motion.circle
                  initial={{
                    strokeDashoffset: 590,
                  }}
                  whileInView={{
                    strokeDashoffset: 120,
                  }}
                  transition={{
                    duration: 1.6,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  cx="120"
                  cy="120"
                  r="94"
                  fill="none"
                  stroke="url(#gold)"
                  strokeWidth="16"
                  strokeDasharray="590"
                  strokeLinecap="round"
                />

                <defs>
                  <linearGradient
                    id="gold"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#f4d77b" />
                    <stop offset="100%" stopColor="#d4a938" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="
                    font-syne
                    text-7xl
                    font-extrabold
                    tracking-[-0.06em]
                    text-yellow-500
                  "
                >
                  792
                </div>

                <div
                  className="
                    mt-4
                    rounded-full
                    border border-emerald-500/20
                    bg-emerald-500/10
                    px-4 py-2
                    text-[10px]
                    uppercase
                    tracking-[0.35em]
                    text-emerald-400
                  "
                >
                  Excellent
                </div>
              </div>
            </div>

            <p
              className="
                mx-auto
                max-w-md
                text-center
                text-lg
                leading-[2]
                text-zinc-400
              "
            >
              Your financial discipline places you among
              the top-tier members of the premium CRED
              ecosystem.
            </p>
          </motion.div>
        </div>

        {/* BIG PREMIUM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[44px]
            border
            border-yellow-700/20
            bg-gradient-to-br
            from-yellow-500/10
            via-[#101010]
            to-[#050505]
            p-10
            shadow-[0_45px_120px_rgba(0,0,0,0.65)]
            lg:p-16
          "
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute -right-20 -top-20 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[120px]" />

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div className="relative z-10">
              <div
                className="
                  mb-8 inline-flex items-center gap-2
                  rounded-full
                  border border-yellow-700/20
                  bg-yellow-500/5
                  px-4 py-2
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-yellow-500
                "
              >
                ✦ CRED Pay
              </div>

              <h3
                className="
                  mb-8
                  font-syne
                  text-5xl
                  font-extrabold
                  leading-[0.9]
                  tracking-[-0.06em]
                  text-white
                  md:text-6xl
                  xl:text-7xl
                "
              >
                Pay instantly.
                <br />

                <span className="text-yellow-500">
                  Earn endlessly.
                </span>
              </h3>

              <p
                className="
                  mb-10
                  max-w-2xl
                  text-lg
                  leading-[2]
                  text-zinc-400
                  md:text-xl
                "
              >
                Turn everyday UPI transactions into
                premium reward experiences with instant
                cashback, elite benefits, and intelligent
                financial insights.
              </p>

              <button
                className="
                  rounded-2xl
                  border border-yellow-400/40
                  bg-yellow-500
                  px-10 py-5
                  font-syne
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-black
                  shadow-[0_20px_50px_rgba(234,179,8,0.35)]
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                Activate CRED Pay
              </button>
            </div>

            {/* RIGHT DASHBOARD */}
            <div
              className="
                relative
                rounded-[36px]
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-3xl
              "
            >
              {/* FLOATING MINI CARDS */}
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {floatingCards.map((card) => (
                  <div
                    key={card.title}
                    className={`
                      rounded-3xl
                      border border-white/10
                      bg-gradient-to-br ${card.glow}
                      p-6
                      backdrop-blur-xl
                    `}
                  >
                    <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                      {card.title}
                    </div>

                    <div
                      className="
                        font-syne
                        text-4xl
                        font-extrabold
                        tracking-[-0.05em]
                        text-white
                      "
                    >
                      {card.value}
                    </div>

                    <div className="mt-2 text-sm text-zinc-400">
                      {card.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* PROGRESS */}
              <div className="mb-10">
                <div className="mb-4 flex justify-between">
                  <span className="text-sm text-zinc-500">
                    Elite Tier Progress
                  </span>

                  <span className="text-sm text-yellow-500">
                    72%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "72%" }}
                    transition={{
                      duration: 1.3,
                    }}
                    viewport={{ once: true }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#f4d77b]
                      to-[#d4a938]
                      shadow-[0_0_30px_rgba(234,179,8,0.5)]
                    "
                  />
                </div>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map(([num, label]) => (
                  <motion.div
                    whileHover={{
                      y: -6,
                    }}
                    key={label}
                    className="
                      rounded-2xl
                      border
                      border-yellow-700/10
                      bg-white/[0.03]
                      p-5
                      text-center
                      transition-all
                      duration-300
                    "
                  >
                    <div
                      className="
                        mb-2
                        font-syne
                        text-3xl
                        font-extrabold
                        text-yellow-500
                      "
                    >
                      {num}
                    </div>

                    <div className="text-xs tracking-wide text-zinc-500">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}