"use client";

import { useEffect, useState } from "react";

const WORDS = ["Claude Code", "Codex", "OpenClaw", "Hermes", "Cursor"];
const CYCLE_MS = 2400;

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
      {WORDS[index]}
    </span>
  );
}
