"use client";

import { useEffect, useState } from "react";

const PIXEL_FONTS = ["square", "grid", "circle", "triangle", "line"] as const;
const TICK_MS = 50;

interface PixelHeadingProps {
  children: string;
  cycleInterval?: number;
  staggerDelay?: number;
}

export function PixelHeading({
  children,
  cycleInterval = 180,
  staggerDelay = 80,
}: PixelHeadingProps) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), TICK_MS);
    return () => clearInterval(id);
  }, []);

  const ticksPerStep = Math.max(1, Math.round(cycleInterval / TICK_MS));
  const ticksPerCharOffset = Math.max(1, Math.round(staggerDelay / TICK_MS));
  const chars = Array.from(children);

  return (
    <span className="pixel-heading" aria-label={children}>
      {chars.map((ch, i) => {
        if (ch === " ") {
          return (
            <span key={i} className="pixel-space" aria-hidden="true">
              {" "}
            </span>
          );
        }
        const wave = Math.floor((tick - i * ticksPerCharOffset) / ticksPerStep);
        const fontIdx =
          ((wave % PIXEL_FONTS.length) + PIXEL_FONTS.length) %
          PIXEL_FONTS.length;
        return (
          <span
            key={i}
            className={`pixel-char pixel-${PIXEL_FONTS[fontIdx]}`}
            aria-hidden="true"
          >
            {ch}
          </span>
        );
      })}
    </span>
  );
}
