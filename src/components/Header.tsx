import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { name: "INICIO", href: "/", type: "route" },
    { name: "PRODUCTOS", href: "#productos", type: "anchor" },
    { name: "PROYECTOS", href: "/proyectos", type: "route" },
    { name: "INSTALACIÓN", href: "#instalacion", type: "anchor" },
    { name: "CONTACTO", href: "#contacto", type: "anchor" },
  ];

  const handleMenuClick = (item: { name: string; href: string; type: string }) => {
    if (item.type === "route") {
      navigate(item.href);
    } else {
      // Para enlaces de ancla, primero navegar a la página principal si no estamos ahí
      if (window.location.pathname !== "/") {
        navigate("/");
        // Esperar un poco para que la página cargue antes de hacer scroll
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-glass backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-golden">
                <span className="text-navy font-bold text-xl">AS</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-primary rounded-xl blur opacity-20 animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-navy">
                ANDAMIOS <span className="text-golden">SILVER</span>
              </h1>
              <p className="text-xs text-muted-foreground font-medium">
                Seguridad y Calidad
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleMenuClick(item)}
                className="text-navy hover:text-golden font-semibold transition-all duration-300 relative group bg-transparent border-none cursor-pointer"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a 
                href="tel:+528112806115" 
                className="flex items-center space-x-2 text-navy hover:text-golden transition-colors duration-300 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('tel:+528112806115', '_self');
                }}
              >
                <Phone className="w-4 h-4 text-golden" />
                <span className="font-medium">81 1280 6115</span>
              </a>
            </div>
            <Button variant="secondary" size="lg" className="shadow-glow">
              COTIZAR AHORA
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gradient-glass border border-white/20 text-navy hover:bg-golden hover:text-navy transition-all duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-glass backdrop-blur-md border-t border-white/10 shadow-large">
          <div className="container mx-auto px-4 py-6">
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleMenuClick(item)}
                  className="block w-full text-left text-navy hover:text-golden font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 bg-transparent border-none cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="space-y-3 text-sm text-navy">
                <a 
                  href="tel:+528112806115" 
                  className="flex items-center space-x-2 hover:text-golden transition-colors duration-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open('tel:+528112806115', '_self');
                  }}
                >
                  <Phone className="w-4 h-4 text-golden" />
                  <span>81 1280 6115</span>
                </a>
              </div>
              <Button variant="secondary" size="lg" className="w-full mt-4 shadow-glow">
                COTIZAR AHORA
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;