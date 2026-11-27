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
      <div className="relative z-10 mx-auto my-auto w-full max-w-md px-5 py-16 text-center sm:px-6 sm:py-20">
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

      {/* ================= FULL-WIDTH ROYAL BLUE FOOTER ================= */}
      <footer className="relative z-20 w-full border-t border-sky-400/25 bg-gradient-to-r from-[#061326]/95 via-[#0b2347]/95 to-[#061326]/95 px-4 py-5 shadow-[0_-10px_30px_rgba(2,10,25,0.65)] backdrop-blur-md sm:py-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* Top hairline divider with center star */}
          <div className="mb-2.5 flex items-center gap-2.5">
            <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-sky-400/50" />
            <span className="text-[9px] text-sky-300/80">✦</span>
            <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-sky-400/50" />
          </div>

          <p className="font-body text-[9px] font-medium uppercase tracking-[0.32em] text-sky-200/75 sm:text-[10px]">
            Digital Invitation Crafted By
          </p>

          <a
            href="https://rcmverse.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 font-display text-sm font-semibold tracking-[0.22em] text-sky-300 transition-colors duration-300 hover:text-white sm:text-base"
          >
            RCM DIGITAL SOLUTIONS
          </a>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-2.5 text-[11px] text-sky-100/85 sm:gap-3 sm:text-xs">
            <a
              href="https://rcmverse.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-950/70 px-3.5 py-1 transition-all duration-200 hover:border-cyan-300/60 hover:bg-sky-800/50 hover:text-white"
            >
              <span className="text-[11px] text-cyan-300">🌐</span>
              <span>rcmverse.netlify.app</span>
            </a>

            <a
              href="tel:+918500708626"
              className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-950/70 px-3.5 py-1 transition-all duration-200 hover:border-cyan-300/60 hover:bg-sky-800/50 hover:text-white"
            >
              <span className="text-[11px] text-sky-300">📞</span>
              <span>+91 85007 08626</span>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
