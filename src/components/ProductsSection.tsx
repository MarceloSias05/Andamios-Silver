import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      ]
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-navy">NUESTROS</span>{" "}
            <span className="text-golden">PRODUCTOS</span>
          </h2>
          <div className="h-1 w-24 bg-golden mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Catálogo completo de productos para andamios con los más altos estándares de calidad y seguridad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-2 hover:border-golden/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 text-golden">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{category.title}</h3>
                </div>

                <div className="space-y-3 mb-8">
                  {category.products.map((product, productIndex) => (
                    <div key={productIndex} className="flex items-start space-x-3">
                      <span className="text-golden mt-1 font-bold">▶</span>
                      <span className="text-sm font-medium text-foreground">{product}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center space-x-4 mb-6">
                  <a href="#" className="text-navy hover:text-golden transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-navy hover:text-golden transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.739.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>

                <Button variant="outline" className="w-full hover:bg-golden hover:text-navy hover:border-golden">
                  VER DETALLES
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy mb-4">Productos Destacados</h3>
            <div className="h-1 w-20 bg-golden mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-3 text-golden">🏗️</div>
                <h4 className="font-bold text-navy mb-2">MARCO ESTÁNDAR</h4>
                <p className="text-sm text-muted-foreground">Base fundamental para cualquier estructura de andamio</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-3 text-golden">🛡️</div>
                <h4 className="font-bold text-navy mb-2">BARANDAL PROTECCIÓN</h4>
                <p className="text-sm text-muted-foreground">Seguridad máxima para trabajos en altura</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="text-4xl mb-3 text-golden">📐</div>
                <h4 className="font-bold text-navy mb-2">TABLÓN ANTIDERRAPANTE</h4>
                <p className="text-sm text-muted-foreground">Superficie segura y antideslizante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;