import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import InstallationSection from "@/components/InstallationSection";
import Footer from "@/components/Footer";
import { useCarrito } from "@/hooks/useCarrito";

const Index = () => {
  const { carrito, productosEnCarrito } = useCarrito();

  return (
    <div className="min-h-screen">
      <Header carrito={carrito} productosEnCarrito={productosEnCarrito} />
      <Hero />
      <ProductsSection />
      <InstallationSection />
      <Footer />
    </div>
  );
};

export default Index;
