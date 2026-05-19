import Image from "next/image";

const REPO_URL = "https://github.com/Michailbul/backlot-app";

export default function Home() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />

      <header className="chrome">
        <a className="wordmark" href="/">
          <span className="dot" aria-hidden="true" />
          BACKLOT
        </a>
        <span className="chrome-meta">macOS desktop · v1</span>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">The writer&apos;s IDE for AI filmmakers</p>

          <h1 className="headline">
            <span className="line line-soft">Where every draft</span>
            <span className="line line-accent">has its own set.</span>
          </h1>

          <p className="sub">
            Backlot is a desktop studio for screenwriters who write with AI but
            refuse to hand over the keyboard. The agent rewrites your screenplay
            in place, you read every change, and each alternate scene runs on
            its own — nothing overwritten, nothing lost.
          </p>

          <div className="actions">
            <a
              className="btn btn-primary"
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="gh"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.31-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.19.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.83.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"
                />
              </svg>
              View on GitHub
            </a>
            <span className="actions-note">
              Open source · Apache 2.0 · Built on Claude
            </span>
          </div>
        </section>

        <section className="showcase">
          <div className="frame">
            <Image
              className="shot"
              src="/backlot-app.png"
              alt="Backlot — the shotlist view with the screenplay, prompt parts, and the agent rail side by side"
              width={3404}
              height={1780}
              priority
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          </div>
          <p className="showcase-cap">
            Shotlist, screenplay, and agent — one window.
          </p>
        </section>
      </main>

      <footer className="chrome chrome-foot">
        <span className="wordmark wordmark-sm">
          <span className="dot" aria-hidden="true" />
          LANIAMEDA
        </span>
        <span className="chrome-meta">
          Forked from 1code · Branch the narrative, not just the code
        </span>
      </footer>
    </>
  );
}
