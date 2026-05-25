import type { Metadata } from "next";
import { Darker_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Lani — A writer's IDE for AI filmmakers",
  description:
    "Lani is a desktop studio for screenwriters and AI filmmakers. The agent rewrites your screenplay in place, you read every change, and each alternate scene lives on its own set — nothing overwritten, nothing lost.",
  openGraph: {
    title: "Lani — A writer's IDE for AI filmmakers",
    description: "A desktop studio where every draft has its own set.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} theme-dark`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('lani-theme')==='light'){document.body.classList.remove('theme-dark');document.body.classList.add('theme-light');}}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
