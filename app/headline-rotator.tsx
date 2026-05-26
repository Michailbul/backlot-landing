"use client";

import { useEffect, useState } from "react";
import { PixelHeading } from "./pixel-heading";

const WORDS = [
  { text: "Claude Code", color: "#D97757" },
  { text: "Codex", color: "#3B82F6" },
  { text: "OpenClaw", color: "#E53935" },
  { text: "Hermes", color: "#FF6900" },
  { text: "Cursor", color: "#8B5CF6" },
] as const;

const CYCLE_MS = 2800;

export function HeadlineRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const word = WORDS[index];

  return (
    <span className="rotator" key={word.text} style={{ color: word.color }}>
      <PixelHeading>{word.text}</PixelHeading>
    </span>
  );
}
