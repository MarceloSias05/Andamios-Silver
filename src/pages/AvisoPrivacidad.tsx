import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AvisoPrivacidad = () => {
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
            Aviso de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            <div className="bg-golden/10 p-6 rounded-lg">
              <p className="text-lg text-navy mb-2">
                <strong>AVISO DE PRIVACIDAD</strong>
              </p>
              <p className="text-sm">
                De conformidad con lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de Particulares, se pone a disposición el presente AVISO DE PRIVACIDAD en los siguientes términos.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Definiciones</h2>
              <p className="mb-4">Para los efectos de este aviso se entenderá por:</p>
              <p className="mb-4">
                <strong>I.- Ley de datos</strong> a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). De acuerdo a lo dispuesto por el artículo 16 de la Ley Federal de Datos Personales en Posesión de los Particulares, tiene entre sus objetivos la protección de la información personal proporcionada por cada usuario y ha establecido los siguientes lineamientos para proteger dicha información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Responsable del Tratamiento</h2>
              <p className="mb-4">
                <strong>Andamios Silver</strong> con domicilio convencional para oír y recibir notificaciones en la Calle San Timoteo 1532 Villas de San Cristóbal, San Nicolas de los Garza N.L., Código Postal 66478. y con la página de Internet administracion@comerdigital.com como responsable de recabar sus Datos Personales, del uso, así como de su protección.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Finalidad de Tratamiento de Datos</h2>
              <p className="mb-4">
                Conforme a las políticas internas Comercializadora Digital S.A de C.V./ Andamios Silver con motivo a la Contratación de sus Productos y Servicios, requerirá datos personales a sus Clientes que podrá ser utilizada, entre otras:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Crear Registro del Cliente.</li>
                <li>Complementar con los Contratos y Documentación que amparen la Relación Comercial.</li>
                <li>Actualizar el Registro de Clientes.</li>
                <li>Solicitar y proporcionar referencias comerciales.</li>
                <li>Atención de Requerimientos de cualquier Autoridad Competente.</li>
                <li>Atención al Cliente respecto a soluciones de la industria de la construcción.</li>
                <li>Liquidación de Deudas por Cuentas morosas.</li>
                <li>Verificar y confirmar la identidad del titular como cliente o prospecto de usuario del servicio.</li>
                <li>La realización de consultas, investigaciones y revisiones en relación a cualquier queja o reclamación por los servicios y/o productos de la empresa.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Consentimiento del Titular</h2>
              <p className="mb-4">
                El titular de los datos al registrarse otorga su pleno consentimiento libre y voluntariamente de proporcionar los datos personales que le sean requeridos, en el entendido de que, si el usuario decidiera no proporcionar información obligatoria, este no podrá acceder a los servicios que efectivamente requiere dicha información, sin embargo, podrá tener acceso a todos los demás servicios que no requieran dicha Información.
              </p>
              <p className="mb-4">
                Andamios Silver en ningún caso y bajo ninguna circunstancia almacena información de datos personales sensibles como origen racial o étnico, estado de salud actual, información genética, creencias religiosas, filosóficas y morales, afiliación sindical, opiniones políticas, preferencia sexual, etc.
              </p>
              <p className="mb-4">
                La recolección de datos que realiza Andamios Silver es de buena fe y por tal motivo presume que los mismos son verídicos, correctos, completos e identifican al titular que los suministra y/o provee, por lo que es responsabilidad del titular que los datos que éste le proporcione a Andamios Silver cumplan con tales características y se actualicen en la medida que se requiera. De igual forma, Andamios Silver. se reserva el derecho de ejercer las acciones que considere pertinentes en caso de falsedad de datos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Información Personal Solicitada</h2>
              <p className="mb-4">
                Para llevar a cabo las finalidades descritas en el presente aviso de privacidad Andamios Silver. solicitará información de carácter personal al Titular con el objeto de poder brindar los servicios que Andamios Silver proporciona. El tipo de información que se solicita a los usuarios de los servicios incluye:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Nombre completo.</li>
                <li>Dirección de correo electrónico (e-mail).</li>
                <li>Domicilio y código postal.</li>
                <li>Teléfonos de contacto.</li>
                <li>Referencias Personales.</li>
                <li>Registro Federal de Contribuyentes (RFC) con homoclave.</li>
                <li>Identificación Oficial.</li>
                <li>En Caso de ser Persona Moral, los puntos anteriores, así como Acta Constitutiva de la Sociedad y de los accionistas nombre completo, RFC con homoclave y porcentaje de acciones, así como su dirección.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Privacidad y Protección de Datos Personales</h2>
              <p className="mb-4">
                Andamios Silver podrá revelar información cuando por mandato de ley y/o de autoridad competente le fuere requerido o por considerar de buena fe que dicha revelación es necesaria para:
              </p>
              <div className="ml-4">
                <p className="mb-2"><strong>I)</strong> cumplir con procesos legales;</p>
                <p className="mb-2"><strong>II)</strong> cumplir con el Convenio del Usuario;</p>
                <p className="mb-2"><strong>III)</strong> responder reclamaciones que involucren cualquier contenido que menoscabe derechos de terceros o;</p>
                <p className="mb-4"><strong>IV)</strong> proteger los derechos, la propiedad, o la seguridad Andamios Silver., sus Usuarios y el público en general.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Departamento encargado de Protección de Datos Personales</h2>
              <p className="mb-4">
                Para cualquier aclaración, comentario, duda, e información acerca del Aviso de Privacidad, es necesario enviar correo electrónico a administracion@comerdigital.com, quien otorgará respuesta a su petición en un plazo máximo de 15 días hábiles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Mecanismos para el ejercicio de sus derechos ARCO y Revocación del Consentimiento</h2>
              <p className="mb-4">
                Con apego a lo previsto por el artículo 22 de la Ley Federal de Datos Personales en Posesión de los Particulares, el titular tiene derecho:
              </p>
              <div className="space-y-4 ml-4">
                <div>
                  <p><strong>1.- Acceso.</strong> - Implica que el Titular conozca en todo momento los datos personales en posesión de Andamios Silver., así como conocer el Aviso de privacidad correspondiente.</p>
                </div>
                <div>
                  <p><strong>2.- Rectificación.</strong> - Si alguno de los datos del Titular es inexacto o incompleto, podrá solicitar su modificación, adjuntando la documentación que acredite dicha corrección.</p>
                </div>
                <div>
                  <p><strong>3.- Cancelación.</strong> - El Titular podrá requerir cuando así lo considere la cancelación de sus datos y, en caso de ser procedente, la información personal entrará en un periodo de bloqueo para proceder posteriormente a su eliminación.</p>
                </div>
                <div>
                  <p><strong>5.- Oposición.</strong> - El Titular podrá en todo momento y por causa legítima objetar el tratamiento de tus datos personales. Si la solicitud resulta procedente, Andamios Silver ya no podrá hacer uso de los mismos.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Requisitos para el ejercicio de derechos ARCO</h2>
              <p className="mb-4">
                El titular para ejercer los derechos de acceso, rectificación, cancelación, oposición, limitación de uso, y divulgación o revocación del consentimiento, deberá presentar una solicitud, misma que debe contener la información y documentación siguiente:
              </p>
              <div className="space-y-3 ml-4">
                <p><strong>I.-</strong> Nombre completo del titular de los datos personales y/o quien le represente legalmente en su caso, teléfono, correo electrónico y domicilio para comunicar la respuesta a la solicitud.</p>
                <p><strong>II.-</strong> Identificación(es) Oficial (es) y en su caso los documentos que acrediten la Representación Legal del titular de la cuenta.</p>
                <p><strong>III.-</strong> La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados.</p>
                <p><strong>IV.-</strong> Cualquier otro elemento o documento que facilite la localización de los datos personales.</p>
                <p><strong>V.-</strong> Tratándose de solicitudes de rectificación, el titular y/o quien lo represente legalmente deberá indicar las modificaciones a realizarse y aportar la documentación que sustente su petición.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Tiempos de Respuesta</h2>
              <p className="mb-4">
                Andamios Silver., cuenta en términos de la LFPDPPP, con un plazo máximo de 20 días hábiles, contados desde la fecha en que se recibió la solicitud de acceso, rectificación, cancelación u oposición, para informar al Titular la determinación adoptada, a efecto de que, si resulta procedente, se haga efectiva la misma dentro de los quince días siguientes a la fecha en que se le comunica la respuesta al Titular.
              </p>
              <p className="mb-4">
                En el caso de las solicitudes de rectificación de datos personales, el Titular deberá también indicar las modificaciones a realizarse y aportar la documentación que sustente su petición.
              </p>
              <p className="mb-4">
                Para dar cumplimiento a la obligación de acceso a sus datos personales, se hará previa acreditación de la identidad del titular o personalidad del representante; poniendo la información a disposición en sitio en el domicilio del responsable.
              </p>
              <p className="mb-4">
                En caso de que la información proporcionada en su solicitud sea errónea o insuficiente, o bien, no se acompañen los documentos de acreditación correspondientes Andamios Silver. le solicitará que aporte los elementos o documentos necesarios para dar trámite a la misma. El Titular contará con diez días hábiles para atender el requerimiento, contados a partir del día siguiente en que lo haya recibido. De no dar respuesta en dicho plazo, se tendrá por no presentada la solicitud correspondiente.
              </p>
              <p className="mb-4">
                Andamios Silver responderá al Titular si resulta procedente, haga efectiva la misma. En todos los casos, la respuesta se dará por la misma vía por la que haya presentado su solicitud o en su caso por cualquier otro medio acordado con el Titular.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Cambios al Aviso de privacidad</h2>
              <p className="mb-4">
                Andamios Silver podrá modificar el presente Aviso de privacidad y sus prácticas en torno al manejo de la información personal; sin embargo, cualquier modificación sustancial que le sea afectado al titular, este último deberá de solicitar su modificación notificación Andamios Silver por escrito presentado en su domicilio, o a través del medio de comunicación que nos haya proporcionado el Andamios Silver informa que el Departamento de Jurídico es la autoridad competente para resolver en definitiva un conflicto o un recurso de revisión en materia de protección de datos personales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Declaración Final</h2>
              <p className="mb-4">
                Al leer este documento usted declara bajo protesta de decir la verdad el Titular acepta que ha leído en su totalidad el Aviso de Privacidad y entiendo plenamente su alcance y contenido. Al proporcionar sus datos, otorga su consentimiento para que se traten sus datos personales, incluso los datos sensibles, de acuerdo a este aviso de privacidad. En caso de lo contrario, por favor comunicarse al correo administracion@comerdigital.com, con copia de su identificación oficial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mb-4">Términos y Condiciones Aplicables</h2>
              <p className="mb-4">
                Además de este Aviso de Privacidad, el uso de nuestros servicios está sujeto a nuestros Términos y Condiciones, los cuales establecen las bases legales para la contratación de servicios de andamiaje, responsabilidades de las partes, condiciones de pago, seguridad, limitaciones de responsabilidad y demás aspectos contractuales.
              </p>
              <p className="mb-4">
                Los Términos y Condiciones forman parte integral de la relación contractual con Andamios Silver y complementan las disposiciones de protección de datos personales contenidas en este aviso. Ambos documentos deben ser leídos y aceptados para el uso de nuestros servicios.
              </p>
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="text-blue-800">
                  <strong>Consulte nuestros Términos y Condiciones completos</strong> donde encontrará información detallada sobre:
                </p>
                <ul className="list-disc list-inside mt-2 text-blue-700 space-y-1">
                  <li>Servicios ofrecidos y responsabilidades</li>
                  <li>Condiciones de renta y venta de equipos</li>
                  <li>Normas de seguridad aplicables</li>
                  <li>Condiciones de pago y facturación</li>
                  <li>Limitaciones de responsabilidad</li>
                  <li>Jurisdicción aplicable</li>
                </ul>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-gray-200">
              <div className="bg-golden/10 p-6 rounded-lg">
                <p><strong>Andamios Silver</strong></p>
                <p>Dirección: San Timoteo #1532, Villas de San Cristóbal, Nuevo León</p>
                <p>WhatsApp: 8112806115</p>
                <p>Email: administracion@comerdigital.com</p>
              </div>
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

export default AvisoPrivacidad;