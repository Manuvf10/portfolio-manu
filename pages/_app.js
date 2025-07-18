import "../styles/globals.css";
import { Poppins } from "next/font/google";
import PageTransition from "../components/PageTransition";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </main>
  );
}
