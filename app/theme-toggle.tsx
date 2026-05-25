"use client";

export function ThemeToggle() {
  const toggle = () => {
    const isDark = document.body.classList.contains("theme-dark");
    const next = isDark ? "light" : "dark";
    document.body.classList.toggle("theme-dark", next === "dark");
    document.body.classList.toggle("theme-light", next === "light");
    try {
      localStorage.setItem("lani-theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
    >
      <svg
        className="icon-sun"
        viewBox="0 0 24 24"
        width="17"
        height="17"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.1" fill="currentColor" />
        <g
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
        </g>
      </svg>
      <svg
        className="icon-moon"
        viewBox="0 0 24 24"
        width="17"
        height="17"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M20.5 14.3A8.3 8.3 0 0 1 9.7 3.5a8.3 8.3 0 1 0 10.8 10.8Z"
        />
      </svg>
    </button>
  );
}
