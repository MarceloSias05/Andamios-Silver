import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Truck } from "lucide-react";
import heroImage from "@/assets/hero-scaffolding.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Andamios profesionales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-navy/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-golden/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-glass backdrop-blur-sm border border-golden/30 rounded-full px-6 py-2 text-sm font-medium text-golden">
              <Award className="w-4 h-4" />
              <span>Líderes en Seguridad Industrial</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">ANDAMIOS</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  SILVER
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-primary rounded-full shadow-glow"></div>
            </div>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-lg">
              <span className="text-golden font-bold">Seguridad y calidad</span> garantizada.
              <br />
              Comprometidos con la excelencia en cada proyecto.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                VER PRODUCTOS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="contact" size="xl">
                COTIZAR PROYECTO
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-glass backdrop-blur-sm border border-golden/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-all duration-300">
                  <Shield className="w-6 h-6 text-golden" />
                </div>
                <p className="text-sm font-semibold text-white">100% Seguro</p>
                <p className="text-xs text-white/70">Certificado</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-glass backdrop-blur-sm border border-golden/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-all duration-300">
                  <Award className="w-6 h-6 text-golden" />
                </div>
                <p className="text-sm font-semibold text-white">Calidad Premium</p>
                <p className="text-xs text-white/70">Garantizada</p>
              </div>
              
              <div className="text-center group">
                <div className="w-12 h-12 bg-gradient-glass backdrop-blur-sm border border-golden/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-all duration-300">
                  <Truck className="w-6 h-6 text-golden" />
                </div>
                <p className="text-sm font-semibold text-white">Entrega Rápida</p>
                <p className="text-xs text-white/70">24-48hrs</p>
              </div>
            </div>
          </div>

          {/* Right content - Stats/Features */}
          <div className="hidden lg:block space-y-6">
            <div className="bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-large hover:shadow-glow transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-2">+500</h3>
              <p className="text-golden font-semibold">Proyectos Completados</p>
              <p className="text-white/70 text-sm mt-2">Con total satisfacción del cliente</p>
            </div>
            
            <div className="bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-large hover:shadow-glow transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
              <p className="text-golden font-semibold">Años de Experiencia</p>
              <p className="text-white/70 text-sm mt-2">Liderando el mercado nacional</p>
            </div>
            
            <div className="bg-gradient-glass backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-large hover:shadow-glow transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-golden font-semibold">Soporte Técnico</p>
              <p className="text-white/70 text-sm mt-2">Asistencia cuando la necesites</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-5"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-golden/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-golden rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;