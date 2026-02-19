import Head from "next/head";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Head>
        <title> Desarrollo Web Premium </title>
        <meta
          name="description"
          content="Diseño y desarrollo web premium para negocios que quieren vender más. Estrategia digital, UX y rendimiento para convertir tráfico en clientes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="desarrollo web freelance, diseño web premium, saas, landing pages, ecommerce, seo técnico, barcelona" />
        <meta name="author" content="Manu Vera" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <WhatsappButton />
        <Footer />
      </main>
    </>
  );
}
