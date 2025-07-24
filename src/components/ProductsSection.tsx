import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, CheckCircle } from "lucide-react";

const ProductsSection = () => {
  const productCategories = [
    {
      title: "MARCOS",
      icon: "🏗️",
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
              {category.featured && (
                <div className="absolute top-4 right-4 bg-gradient-primary text-navy text-xs font-bold px-3 py-1 rounded-full">
                  MÁS VENDIDO
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-2 group-hover:text-golden transition-colors">
                    {category.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-golden mx-auto rounded-full"></div>
                </div>

                <div className="space-y-3 mb-8">
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
                  className="w-full group-hover:bg-golden group-hover:text-navy group-hover:border-golden group-hover:shadow-glow transition-all duration-300"
                >
                  VER DETALLES
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;