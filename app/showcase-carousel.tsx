"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const VIEWS = [
  { key: "canvas", alt: "Lani — the canvas view with assets, library, and the agent rail" },
  { key: "shotlist", alt: "Lani — the shotlist view with prompt parts and the agent rail" },
  { key: "screenplay", alt: "Lani — the screenplay view with the .fountain editor and the agent rail" },
] as const;

const CYCLE_MS = 4500;

export function ShowcaseCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % VIEWS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-stage">
        {VIEWS.map((view, idx) => (
          <div
            key={view.key}
            className={`slide${idx === index ? " is-active" : ""}`}
            aria-hidden={idx !== index}
          >
            <Image
              className="shot shot-app-dark"
              src={`/dark-${view.key}.png`}
              alt={view.alt}
              width={3410}
              height={1960}
              priority={idx === 0}
              sizes="(max-width: 1120px) 100vw, 1120px"
              unoptimized
            />
            <Image
              className="shot shot-app-light"
              src={`/light-${view.key}.png`}
              alt={view.alt}
              width={3410}
              height={1960}
              priority={idx === 0}
              sizes="(max-width: 1120px) 100vw, 1120px"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
