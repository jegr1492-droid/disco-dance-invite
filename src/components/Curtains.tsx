import { motion, AnimatePresence } from "framer-motion";

const curtainBg =
  "repeating-linear-gradient(90deg, oklch(0.30 0.18 25) 0px, oklch(0.45 0.22 25) 18px, oklch(0.22 0.15 25) 36px, oklch(0.40 0.20 25) 54px)";

export function Curtains({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-y-0 left-0 z-40 w-1/2"
            style={{ background: curtainBg, boxShadow: "inset -30px 0 60px rgba(0,0,0,0.8)" }}
          />
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-y-0 right-0 z-40 w-1/2"
            style={{ background: curtainBg, boxShadow: "inset 30px 0 60px rgba(0,0,0,0.8)" }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
