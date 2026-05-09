import { motion, AnimatePresence } from "framer-motion";
import { DiscoBall } from "./DiscoBall";
import { Sparkles } from "./Sparkles";

export function IntroScreen({ open, onEnter }: { open: boolean; onEnter: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{ background: "var(--gradient-night)" }}
        >
          <Sparkles count={60} />
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <DiscoBall size={260} />
          </motion.div>

          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="neon-text mt-8 text-center text-3xl md:text-5xl"
          >
            Disco Night
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-2 font-retro text-sm tracking-widest text-[var(--disco-gold)] md:text-base"
          >
            70's BIRTHDAY PARTY
          </motion.p>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={onEnter}
            className="mt-10 rounded-full px-10 py-4 font-retro text-lg uppercase tracking-wider text-white"
            style={{
              background: "var(--gradient-neon)",
              backgroundSize: "200% 200%",
              boxShadow:
                "0 0 30px var(--disco-fuchsia), 0 0 60px var(--disco-purple), inset 0 0 20px rgba(255,255,255,0.2)",
            }}
          >
            ¡Entrar a la fiesta!
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
