import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const navigate = useNavigate();

  const productCategories = [
    {
      title: "MARCOS",
      icon: "🏗️",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&h=300&fit=crop&crop=center",
      products: [
        "MARCO ESTÁNDAR",
        "MARCO DE PASILLO", 
        "MARCO PARA ESCALERA",
        "MARCO EXTENSIÓN",
        "MARCO CIMBRA ESTÁNDAR",
        "MARCO CIMBRA EXTENSIÓN",
        "PUNTAL"
      ],
      featured: true
    },
    {
      title: "CRUCETAS Y TABLONES",
      icon: "✕",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      products: [
        "CRUCETA SERVICIO",
        "CRUCETA PASILLO",
        "CRUCETA CIMBRA", 
        "CRUCETA EXTENSIÓN",
        "TABLÓN ANTIDERRAPANTE"
      ]
    },
    {
      title: "SEGURIDAD",
      icon: "🛡️",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center",
      products: [
        "BARANDAL PROTECCIÓN",
        "VIGA",
        "CONECTOR",
        "ESCALERA",
        "PASAMANOS"
      ]
    },
    {
      title: "ACCESORIOS",
      icon: "⚙️",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop&crop=center",
      products: [
        "BASE REGULABLE",
        "TORNILLOS BASE",
        "TORNILLO U",
        "RUEDA PARA ANDAMIO"
      ]
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary rounded-full px-6 py-2 text-sm font-semibold text-navy mb-6">
            <Star className="w-4 h-4" />
            <span>Productos Premium</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-navy">NUESTROS</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">PRODUCTOS</span>
          </h2>
          
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full shadow-glow"></div>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Catálogo completo de productos para andamios con los más altos estándares de calidad y seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productCategories.map((category, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-2 hover:border-steel/30 transition-all duration-500 hover:shadow-large ${
                category.featured ? 'ring-2 ring-steel/20' : ''
              }`}
            >
              <CardContent className="p-0">
                {/* Imagen del producto */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <div className="text-3xl">{category.icon}</div>
                  </div>
                  {category.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-primary text-navy text-xs font-bold px-3 py-1 rounded-full">
                      MÁS VENDIDO
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {category.title}
                    </h3>
                    <div className="w-12 h-0.5 bg-golden rounded-full"></div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {category.products.map((product, productIndex) => (
                      <div key={productIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-steel flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">
                          {product}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    onClick={() => navigate("/productos")}
                    className="w-full group-hover:bg-golden group-hover:text-navy group-hover:border-golden group-hover:shadow-glow transition-all duration-300"
                  >
                    VER DETALLES
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;