import { motion } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';
import { weddingConfig } from '@/config/weddingConfig';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Ikkada mee background image path or URL pettandi
const BG_IMAGE = '/thank.jpeg';

/** Scene 12 — a letter to the guest over a cinematic couple frame. */
export function DearGuest() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden"
      aria-label="Thank you note"
    >
      {/* Full-frame background image without heavy mobile zoom */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ scale: 1 }}
        whileInView={{ scale: reduced ? 1 : 1.03 }}
        viewport={{ once: true }}
        transition={{ duration: reduced ? 1 : 16, ease: 'easeOut' }}
      >
        <img
          src={BG_IMAGE}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[50%_20%] sm:object-center"
        />
      </motion.div>

      {/* Warm dark overlay + bokeh glow */}
      <div className="absolute inset-0 bg-royal-darkest/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.14),transparent_65%)]" />
      <div className="film-grain" />

      {/* Top spacer */}
      <div className="hidden sm:block sm:h-4" />

      {/* Main Thank You Card */}
      <div className="relative z-10 mx-auto my-auto w-full max-w-md px-5 pt-16 pb-8 text-center sm:px-6 sm:py-16">
        <Reveal>
          <div className="rounded-[28px] border border-gold-soft/45 bg-royal-darkest/60 p-2 shadow-2xl backdrop-blur-md">
            <div className="rounded-[22px] border border-gold-soft/30 px-6 py-10 sm:px-8 sm:py-12">
              <div className="mb-3 flex justify-center text-sm text-gold-soft">
                ♥
              </div>

              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-cream/85">
                With Grateful Hearts
              </p>

              <h2 className="mt-2 font-display text-4xl font-normal tracking-wide text-cream sm:text-5xl">
                Thank You
              </h2>

              <div className="mx-auto my-6 flex max-w-[140px] items-center justify-center gap-2.5">
                <span className="h-[1px] flex-1 bg-gold-soft/45" />
                <span className="h-1.5 w-1.5 rotate-45 bg-gold-soft" />
                <span className="h-[1px] flex-1 bg-gold-soft/45" />
              </div>

              <p className="font-body text-sm italic leading-[1.85] text-cream/90 sm:text-[15px]">
                Your presence and blessings will make
                <br />
                our celebration complete. We would be
                <br />
                honoured to share this beautiful
                <br />
                beginning with you.
              </p>

              <p className="mt-8 font-display text-base font-medium tracking-wide text-cream sm:text-lg">
                With love,{' '}
                <span className="font-script text-2xl text-gold-soft">
                  {weddingConfig.bride.scriptName}
                </span>{' '}
                &amp;{' '}
                <span className="font-script text-2xl text-gold-soft">
                  {weddingConfig.groom.scriptName}
                </span>
              </p>

              <div className="mt-7 inline-block rounded-full border border-cream/30 bg-white/5 px-5 py-2">
                <p className="font-body text-xs italic tracking-wide text-cream/85">
                  Our families look forward to welcoming you
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ================= PREMIUM FLOATING BLUE FOOTER ================= */}
      <footer className="relative z-20 mx-auto w-full max-w-md px-5 pb-6 sm:pb-8">
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/35 bg-gradient-to-br from-[#0a1d3e]/90 via-[#102e63]/85 to-[#071530]/95 p-[1px] shadow-[0_15px_40px_-10px_rgba(14,75,180,0.45)] backdrop-blur-xl">
          {/* Subtle top blue glow line */}
          <div className="pointer-events-none absolute inset-x-10 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent" />

          <div className="flex flex-col items-center rounded-[23px] px-5 py-4 text-center sm:px-6 sm:py-5">
            <span className="font-body text-[9px] font-medium uppercase tracking-[0.32em] text-blue-200/75">
              Crafted With Excellence By
            </span>

            <a
              href="https://rcmverse.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 bg-gradient-to-r from-white via-sky-200 to-blue-300 bg-clip-text font-display text-base font-bold tracking-[0.16em] text-transparent transition-all duration-300 hover:tracking-[0.2em] sm:text-lg"
            >
              RCM DIGITAL SOLUTIONS
            </a>

            {/* Elegant divider */}
            <div className="my-2.5 h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

            {/* Action Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-medium sm:text-xs">
              <a
                href="https://rcmverse.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-3.5 py-1.5 text-sky-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-blue-500/30 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              >
                <svg
                  className="h-3.5 w-3.5 text-cyan-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
                <span>rcmverse.netlify.app</span>
              </a>

              <a
                href="tel:+918500708626"
                className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-3.5 py-1.5 text-sky-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-blue-500/30 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]"
              >
                <svg
                  className="h-3.5 w-3.5 text-cyan-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 85007 08626</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
