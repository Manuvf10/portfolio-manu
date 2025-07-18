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
    <main>
     <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Budget />
      <Contact />
      <WhatsappButton />
      <Footer />
    </main>
  );
}
