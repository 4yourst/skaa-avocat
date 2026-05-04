import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Support from "@/components/Support";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-transparent">
      <Footer />

      <div className="relative z-10 bg-background rounded-b-[2rem] md:rounded-b-[2.5rem] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)] mb-[300px] md:mb-[360px]">
        <Navbar />
        <Hero />
        <About />
        <Expertise />
        <Support />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
};

export default Index;
