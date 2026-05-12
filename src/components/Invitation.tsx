import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Sparkle, Music } from "lucide-react";
import dancers from "@/assets/disco-dancers.png";
import { DiscoBall } from "./DiscoBall";
import { Sparkles } from "./Sparkles";
import { DanceFloor } from "./DanceFloor";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.18, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function InfoCard({
  icon: Icon,
  label,
  value,
  i,
  className = "",
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
  i: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      custom={i}
      className={`rounded-2xl border border-white/20 bg-black/50 px-6 py-5 backdrop-blur-md ${className}`}
      style={{ boxShadow: "0 0 28px rgba(255, 0, 170, 0.4), inset 0 0 12px rgba(255,255,255,0.05)" }}
    >
      <div className="flex items-center gap-2 text-[var(--disco-gold)]">
        <Icon className="h-6 w-6 md:h-5 md:w-5" />
        <span className="font-retro text-lg uppercase tracking-wider neon-text-gold md:text-sm">{label}</span>
      </div>
      <p className="mt-2 font-retro text-3xl text-white md:text-3xl neon-text-pink">{value}</p>
    </motion.div>
  );
}

export function Invitation() {
  return (
    <div className="relative min-h-screen overflow-hidden pb-56">
      <Sparkles count={70} />

      {/* corner disco balls */}
      <div className="pointer-events-none absolute -left-10 -top-10 opacity-80 md:left-6 md:top-6">
        <DiscoBall size={120} />
      </div>
      <div className="pointer-events-none absolute -right-10 -top-10 hidden opacity-80 md:block md:right-6 md:top-6">
        <DiscoBall size={120} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-28 md:pt-20">
        {/* Header / Name */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-retro text-xl uppercase tracking-[0.3em] text-[var(--disco-cyan)] md:text-2xl neon-text-pink">
            ✨ Te invito a celebrar el cumpleaños de ✨
          </p>
          <h1 className="mt-6 font-display text-8xl leading-[0.95] neon-text-pink md:text-9xl">
            Almita
          </h1>
          <div
            className="mx-auto mt-6 h-[4px] w-64 rounded-full"
            style={{ background: "var(--gradient-neon)", boxShadow: "0 0 18px var(--disco-fuchsia)" }}
          />
          <p className="mt-5 font-neon text-2xl text-white md:text-3xl neon-text-pink">DISCO NIGHT · 70's PARTY</p>
        </motion.div>

        {/* Dancers + floating data */}
        <div className="relative mt-10 grid grid-cols-1 items-center gap-6 md:mt-14 md:grid-cols-3">
          <div className="space-y-4 md:order-1">
            <InfoCard icon={Calendar} label="Fecha" value="12 de Junio" i={0} />
            <InfoCard icon={Clock} label="Hora" value="19:00 hrs" i={1} />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative order-first flex items-end justify-center md:order-2"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 40%, var(--disco-fuchsia), transparent 60%)",
                opacity: 0.55,
              }}
            />
            <img
              src={dancers}
              alt="Bailarines disco"
              width={1024}
              height={1024}
              className="relative z-10 w-full max-w-sm drop-shadow-[0_10px_40px_rgba(255,0,170,0.5)]"
              style={{
                filter:
                  "drop-shadow(0 0 20px var(--disco-fuchsia)) drop-shadow(0 0 40px var(--disco-purple))",
              }}
            />
          </motion.div>

          <div className="space-y-4 md:order-3">
            <InfoCard icon={MapPin} label="Lugar" value="Salón Vikat" i={2} />
            <InfoCard icon={Music} label="Temática" value="Disco 70's" i={3} />
          </div>
        </div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href="https://maps.app.goo.gl/g3gKEyppiEtnZD4g8"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full px-8 py-4 font-retro text-base uppercase tracking-wider text-white transition-transform hover:scale-105"
            style={{
              background: "var(--gradient-neon)",
              boxShadow: "0 0 30px var(--disco-fuchsia), 0 0 60px var(--disco-purple)",
            }}
          >
            <MapPin className="h-5 w-5" />
            Ver ubicación
          </a>
          <p className="flex items-center gap-2 text-center font-retro text-2xl text-[var(--disco-gold)] neon-text-gold md:text-3xl">
            <Sparkle className="h-7 w-7 md:h-7 md:w-7" />
            ¡Prepara tu mejor outfit setentero!
            <Sparkle className="h-7 w-7 md:h-7 md:w-7" />
          </p>
        </motion.div>
      </div>

      <DanceFloor />
    </div>
  );
}
