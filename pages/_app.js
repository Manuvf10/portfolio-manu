import "../styles/globals.css";
import PageTransition from "../components/PageTransition";

export default function MyApp({ Component, pageProps }) {
  return (
    <main>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </main>
  );
}
