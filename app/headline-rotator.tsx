"use client";

import { useEffect, useState } from "react";
import { PixelHeading } from "./pixel-heading";

const WORDS = ["Claude Code", "Codex", "OpenClaw", "Hermes", "Cursor"];
const CYCLE_MS = 2800;

export function HeadlineRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="rotator" key={WORDS[index]}>
      <PixelHeading>{WORDS[index]}</PixelHeading>
    </span>
  );
}
