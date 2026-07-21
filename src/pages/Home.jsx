import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import SEO from "../components/SEO";
import Problem from "../components/Problem";
import Program from "../components/Program";
import Impact from "../components/Impact";
import Sustainability from "../components/Sustainability";
import Investment from "../components/Investment";
import CTA from "../components/CTA";
import Team from "../components/Team";
import Footer from "../components/Footer";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RMEI Uganda",
  url: "https://www.rmeiug.org",
  logo: "https://www.rmeiug.org/rmei_logo.png",
  description:
    "RMEI Uganda empowers returned missionaries through entrepreneurship training, mentorship, and startup funding to create sustainable businesses and jobs in Uganda.",
  sameAs: [
    "https://www.facebook.com/",
    "https://www.linkedin.com/"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "general inquiry",
    email: "kennethlubuulwa1820@gmail.com",
    telephone: "+256772113151"
  }
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <SEO title="RMEI Uganda | Empowering Returned Missionary Entrepreneurs" description="RMEI Uganda supports returned missionaries with entrepreneurship training, mentorship, and funding to build sustainable businesses and create jobs in Uganda." structuredData={structuredData} />
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Problem />
          <Program />
          <Impact />
          <Sustainability />
          <Investment />
          <Team />
          <CTA />
        </main>

        <Footer />
      </div>

    </>
  );
}