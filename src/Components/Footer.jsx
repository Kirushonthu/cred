import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const links = {
  Company: ["About CRED", "Careers", "Blog", "Press"],
  Legal: ["Privacy Policy", "Terms of Use", "Cookie Policy", "Grievances"],
  Support: ["Help Center", "Contact Us", "Security", "Sitemap"],
};

const socials = [
  { icon: <FaXTwitter />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0a0a0a] px-6 py-20 md:px-12">
      
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Top Grid */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="mb-5 font-[Syne] text-4xl font-extrabold tracking-[0.35em] text-[#c9a84c]">
              CRED
            </h2>

            <p className="max-w-sm text-sm leading-8 text-zinc-400">
              India’s most exclusive members-only club for the
              creditworthy. Experience rewards, trust, security,
              and premium financial experiences.
            </p>

            {/* Members badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/5 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[#c9a84c] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-[#c9a84c] animate-pulse" />
              Members-only club
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="mb-6 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                {title}
              </h4>

              <div className="space-y-4">
                {items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="group flex w-fit items-center text-sm font-light text-zinc-400 transition-all duration-300 hover:text-[#c9a84c]"
                  >
                    <span className="h-px w-0 bg-[#c9a84c] transition-all duration-300 group-hover:mr-2 group-hover:w-5" />
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Middle premium banner */}
        <div className="mt-20 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-[#c9a84c]">
                Premium Experience
              </p>

              <h3 className="max-w-2xl font-[Syne] text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Built for people who value{" "}
                <span className="text-[#c9a84c]">
                  trust, rewards & exclusivity
                </span>
              </h3>
            </div>

            <button className="group relative overflow-hidden rounded-full border border-[#c9a84c]/40 bg-[#c9a84c] px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(201,168,76,0.35)]">
              <span className="relative z-10">Join CRED</span>

              <div className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 group-hover:translate-y-0" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          
          <p className="text-xs tracking-[0.08em] text-zinc-500">
            © 2026 CRED. All rights reserved. Crafted for the creditworthy.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/40 hover:bg-[#c9a84c]/10 hover:text-[#c9a84c] hover:shadow-[0_0_30px_rgba(201,168,76,0.2)]"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}