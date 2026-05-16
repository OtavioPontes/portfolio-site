import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Fira_Code } from "next/font/google";

const fira = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-next",
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={`${fira.variable} ${fira.className}`}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </>
  );
}

export default MyApp;
