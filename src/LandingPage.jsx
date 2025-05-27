import AboutSection from "./sections/about";
import CommitmentSection from "./sections/commitment";
import ContactSection from "./sections/contact";
import Footer from "./sections/footer";
import HeroSection from "./sections/hero";
import Navbar from "./sections/navbar";
import ProductsSection from "./sections/products";
import TestimonialSection from "./sections/testimoni";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <ProductsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
