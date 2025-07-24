const InstallationSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-navy">INSTRUCCIÓN DE</span>{" "}
              <span className="text-golden">MONTAJE</span>
            </h2>
            <div className="h-1 w-24 bg-golden mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground leading-relaxed text-lg">
                El andamio estándar lleva una altura de{" "}
                <strong className="text-navy">2.00 metros</strong> se colocan las bases con las medidas de 
                seguridad que se requieren por parte de la persona capacitada para realizar este montaje, 
                posteriormente se instalan las crucetas para darle la forma de acabado al andamio y 
                finalmente el tablón para andamio, verificando todos los puntos que se necesitan 
                para el armado seguro.
              </p>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="bg-muted/30 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-golden mb-4">🏗️</div>
                <p className="text-muted-foreground">Imagen de instrucciones de montaje</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-golden/20 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy/10 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;