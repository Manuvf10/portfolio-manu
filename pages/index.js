import Head from "next/head";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Manu Vera | Diseño y Desarrollo Web para Negocios</title>
        <meta
          name="description"
          content="Diseño y desarrollo webs de alto impacto para marcas que quieren vender más. Estrategia digital, UX y velocidad para convertir visitas en clientes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="diseño web, desarrollo web freelance, landing pages, ecommerce, seo técnico, barcelona" />
        <meta name="author" content="Manu Vera" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <WhatsappButton />
        <Footer />
      </main>
    </>
  );
}
