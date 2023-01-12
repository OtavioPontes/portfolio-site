import styles from "../public/App.css";
import { Analytics } from "@vercel/analytics/react";

import { Fira_Code } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const fira = Fira_Code({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className={fira.className}>
        <Component {...pageProps} />
      </main>

      <Analytics />
    </>
  );
}

export default MyApp;
