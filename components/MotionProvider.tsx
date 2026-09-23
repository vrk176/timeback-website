"use client";

import { MotionConfig } from "framer-motion";

/** Honors the OS "Reduce Motion" setting for every framer-motion animation below it
 *  (transform-based float/slide animations are skipped; opacity fades remain). */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
