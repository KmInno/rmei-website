import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Program from "../components/Program";
import SEO from "../components/SEO";

export default function ProgramPage() {
  return (
    <>
      <SEO title="RMEI Programs | Training and Support" description="Explore the RMEI Uganda program model, including entrepreneurship training, mentorship, and startup support for returned missionaries." />
      <Navbar />
      <Program />
      <Footer />
    </>
  );
}