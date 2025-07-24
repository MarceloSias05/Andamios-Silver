import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-scaffolding.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Andamios profesionales"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              <span className="text-white">ANDAMIOS</span>{" "}
              <span className="text-golden">SILVER</span>
            </h1>
            <div className="h-1 w-32 bg-golden mb-6"></div>
          </div>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            <strong className="text-golden">Seguridad y calidad para ti</strong>
            <br />
            Comprometidos a dar un excelente servicio de calidad y confianza
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              VER PRODUCTOS
            </Button>
            <Button variant="contact" size="lg" className="text-lg px-8 py-6">
              CONTACTANOS
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-5"></div>
    </section>
  );
};

export default Hero;