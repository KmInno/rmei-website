import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Problem from "../components/Problem";
import Program from "../components/Program";
import Impact from "../components/Impact";
import Sustainability from "../components/Sustainability";
import Investment from "../components/Investment";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Problem />
          <Program />
          <Impact />
          <Sustainability />
          <Investment />
          <CTA />
        </main>

        <Footer />
      </div>

    </>
  );
}