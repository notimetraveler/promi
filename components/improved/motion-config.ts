/**
 * Shared scroll animation config - opacity only for smooth performance.
 * Avoids y-transform during scroll (cheaper for compositor).
 */
export const scrollFade = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.35, ease: "easeOut" as const },
};
export const viewport = {
  once: true,
  amount: 0.08,
  margin: "0px 0px -80px 0px",
} as const;
