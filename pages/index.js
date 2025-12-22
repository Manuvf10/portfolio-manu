import Head from "next/head";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Budget from "../components/Budget";
import WhatsappButton from "../components/WhatsappButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Desarrollo Web Freelance | Manu Vera</title>
        <meta
          name="description"
          content="Desarrollador web freelance especializado en landing pages, tiendas online y apps modernas. Diseño profesional con Next.js, Shopify y más."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="desarrollo web, landing pages, tiendas online, Next.js, freelance, ecommerce, diseño web, Barcelona" />
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

