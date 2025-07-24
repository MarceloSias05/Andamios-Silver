import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import InstallationSection from "@/components/InstallationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <InstallationSection />
      <Footer />
    </div>
  );
};

export default Index;
