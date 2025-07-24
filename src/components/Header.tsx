import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "INICIO", href: "#inicio" },
    { name: "PRODUCTOS", href: "#productos" },
    { name: "INSTALACIÓN", href: "#instalacion" },
    { name: "CONTACTO", href: "#contacto" },
  ];

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
              <a
                key={item.name}
                href={item.href}
                className="text-navy hover:text-golden font-semibold transition-all duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-navy">
                <Phone className="w-4 h-4 text-golden" />
                <span className="font-medium">442-123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-navy">
                <Mail className="w-4 h-4 text-golden" />
                <span className="font-medium">info@andamiossilver.com</span>
              </div>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-navy hover:text-golden font-semibold py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="space-y-3 text-sm text-navy">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-golden" />
                  <span>442-123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-golden" />
                  <span>info@andamiossilver.com</span>
                </div>
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