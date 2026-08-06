import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FounderBio from "@/components/FounderBio";
import ServicesGrid from "@/components/ServicesGrid";
import Work from "@/components/Work";
import Gallery from "@/components/Gallery";
import SocialLinks from "@/components/SocialLinks";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FounderBio />
        <ServicesGrid />
        <Work />
        <Gallery />
        <SocialLinks />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
