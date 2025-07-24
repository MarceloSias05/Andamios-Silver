import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-glass backdrop-blur-md border-b border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
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
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-8 text-center">
            Términos y Condiciones
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div>
              <p className="text-lg text-navy mb-6">
                <strong>Fecha de última actualización:</strong> Enero 2025
              </p>
              <p className="mb-6">
                Bienvenido a Andamios Silver. Al acceder y utilizar nuestros servicios, usted acepta cumplir con los siguientes términos y condiciones. Le recomendamos leer detenidamente este documento.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">1. Definiciones</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>"Empresa":</strong> Se refiere a Andamios Silver, sus empleados, representantes y afiliados.</li>
                <li><strong>"Cliente":</strong> Persona física o moral que contrata nuestros servicios.</li>
                <li><strong>"Servicios":</strong> Renta, venta e instalación de andamios y servicios relacionados.</li>
                <li><strong>"Equipo":</strong> Andamios, accesorios y herramientas proporcionados por la empresa.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">2. Servicios Ofrecidos</h2>
              <p className="mb-4">Andamios Silver proporciona los siguientes servicios:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Renta de andamios tubulares y sistemas de andamiaje</li>
                <li>Venta de equipos de andamiaje</li>
                <li>Instalación y montaje profesional</li>
                <li>Asesoría técnica en seguridad industrial</li>
                <li>Mantenimiento y revisión de equipos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">3. Responsabilidades del Cliente</h2>
              <p className="mb-4">El cliente se compromete a:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Proporcionar información veraz y completa sobre el proyecto</li>
                <li>Permitir el acceso al sitio de trabajo en las fechas acordadas</li>
                <li>Mantener el equipo en buen estado durante el período de renta</li>
                <li>Notificar inmediatamente cualquier daño o problema con el equipo</li>
                <li>Cumplir con todas las normas de seguridad aplicables</li>
                <li>Realizar los pagos según los términos acordados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">4. Responsabilidades de la Empresa</h2>
              <p className="mb-4">Andamios Silver se compromete a:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Proporcionar equipos en óptimas condiciones de funcionamiento</li>
                <li>Realizar instalaciones según las normas de seguridad vigentes</li>
                <li>Brindar asesoría técnica especializada</li>
                <li>Mantener seguros de responsabilidad civil vigentes</li>
                <li>Cumplir con los tiempos de entrega acordados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">5. Seguridad y Normas</h2>
              <p className="mb-4">
                Todos nuestros servicios se realizan cumpliendo con las normas mexicanas (NOM) y estándares internacionales de seguridad. El cliente debe asegurar que todo el personal que utilice los equipos esté debidamente capacitado y cuente con el equipo de protección personal requerido.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">6. Pagos y Facturación</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Los precios están sujetos a cambios sin previo aviso</li>
                <li>Los pagos deben realizarse según los términos acordados en el contrato</li>
                <li>Los retrasos en el pago pueden generar intereses moratorios</li>
                <li>Se requiere depósito de garantía para servicios de renta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">7. Limitación de Responsabilidad</h2>
              <p className="mb-4">
                La empresa no será responsable por daños indirectos, consecuenciales o incidentales que puedan resultar del uso de nuestros servicios, excepto en casos de negligencia grave comprobada. La responsabilidad máxima de la empresa estará limitada al valor del contrato.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">8. Fuerza Mayor</h2>
              <p className="mb-4">
                La empresa no será responsable por el incumplimiento de sus obligaciones debido a circunstancias de fuerza mayor, incluyendo pero no limitándose a: desastres naturales, actos de gobierno, huelgas, o cualquier otra circunstancia fuera de nuestro control razonable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">9. Modificaciones</h2>
              <p className="mb-4">
                Andamios Silver se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en nuestro sitio web o notificación al cliente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">10. Jurisdicción</h2>
              <p className="mb-4">
                Estos términos y condiciones se rigen por las leyes mexicanas. Cualquier controversia será resuelta en los tribunales competentes de Nuevo León, México.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">11. Contacto</h2>
              <p className="mb-4">
                Para cualquier consulta sobre estos términos y condiciones, puede contactarnos:
              </p>
              <div className="bg-golden/10 p-6 rounded-lg">
                <p><strong>Andamios Silver</strong></p>
                <p>Dirección: San Timoteo #1532, Villas de San Cristóbal, Nuevo León</p>
                <p>WhatsApp: 8112806115</p>
                <p>Email: ventas@andamiossilver.com</p>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Al contratar nuestros servicios, usted confirma haber leído, entendido y aceptado estos términos y condiciones.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer simple */}
      <footer className="bg-golden py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-navy font-semibold">
            © 2025 Andamios Silver. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TerminosCondiciones;
