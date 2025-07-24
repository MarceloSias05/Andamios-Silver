import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, Download, ShoppingCart, Calendar, Building, Phone, Mail, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { calculateDistanceWithAPI, mockDistanceCalculation } from "../lib/distanceAPI";

const Carrito = () => {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [calculandoDistancia, setCalculandoDistancia] = useState(false);
  const [datosCliente, setDatosCliente] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
    direccion: '',
    proyecto: '',
    distancia: 0,
    tipoEntrega: '', // 'recoleccion' o 'entrega'
    direccionEnvio: '',
    distanciaReal: 0 // Distancia real calculada por API
  });

  // Cargar carrito del localStorage al montar el componente
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carritoAndamios');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('carritoAndamios', JSON.stringify(carrito));
  }, [carrito]);

  // Función para obtener zona de precio basada en kilómetros
  const obtenerZonaPorKilometros = (km) => {
    if (km <= 15) return 10;
    if (km <= 30) return 25;
    return 35;
  };

  // Calcular zona basada en la dirección (método local como fallback)
  // Calcular zona basada en la dirección usando API
  const calcularZonaPorAPI = useCallback(async (direccion) => {
    if (!direccion) return 0;
    
    try {
      setCalculandoDistancia(true);
      
      // Intentar usar API real primero
      const origen = import.meta.env.VITE_COMPANY_ADDRESS || "Monterrey, Nuevo León, México";
      
      // Intentar Google Maps primero, luego OpenRouteService
      let distancia = 0;
      
      try {
        distancia = await calculateDistanceWithAPI(origen, direccion, 'google');
      } catch (error) {
        console.log('Google Maps no disponible, intentando OpenRouteService...');
        try {
          distancia = await calculateDistanceWithAPI(origen, direccion, 'openroute');
        } catch (error2) {
          console.log('APIs no disponibles, usando simulación...');
          distancia = mockDistanceCalculation(direccion);
        }
      }
      
      return distancia;
      
    } catch (error) {
      console.error('Error al calcular distancia:', error);
      // Fallback al método de simulación
      return mockDistanceCalculation(direccion);
    } finally {
      setCalculandoDistancia(false);
    }
  }, []);

  // Calcular zona automáticamente cuando cambia la dirección de envío
  useEffect(() => {
    const calcularDistancia = async () => {
      if (datosCliente.tipoEntrega === 'entrega' && datosCliente.direccionEnvio && datosCliente.direccionEnvio.length > 10) {
        try {
          setCalculandoDistancia(true);
          
          // Usar API para calcular distancia real
          const kmReales = await calcularZonaPorAPI(datosCliente.direccionEnvio);
          
          if (kmReales > 0) {
            const zonaCalculada = obtenerZonaPorKilometros(kmReales);
            
            setDatosCliente(prev => ({
              ...prev,
              distancia: zonaCalculada,
              distanciaReal: kmReales // Guardamos la distancia real
            }));
          } else {
            // Si no se puede calcular automáticamente, usar zona por defecto
            setDatosCliente(prev => ({
              ...prev,
              distancia: 25, // Zona media por defecto
              distanciaReal: 0
            }));
          }
        } catch (error) {
          console.error('Error calculando distancia:', error);
          // En caso de error, usar zona media por defecto
          setDatosCliente(prev => ({
            ...prev,
            distancia: 25,
            distanciaReal: 0
          }));
        } finally {
          setCalculandoDistancia(false);
        }
      }
    };

    // Debounce para evitar muchas llamadas a la API
    const timeoutId = setTimeout(calcularDistancia, 1500);
    
    return () => clearTimeout(timeoutId);
  }, [datosCliente.direccionEnvio, datosCliente.tipoEntrega, calcularZonaPorAPI]);
  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    
    setCarrito(prevCarrito => 
      prevCarrito.map(item => 
        item.id === id 
          ? { 
              ...item, 
              cantidad: nuevaCantidad,
              subtotal: parseFloat(item.precio.replace(/[^0-9.]/g, '')) * nuevaCantidad * item.dias
            }
          : item
      )
    );
  };

  // Función para actualizar días
  const actualizarDias = (id, nuevosDias) => {
    if (nuevosDias < 7) return;
    
    setCarrito(prevCarrito => 
      prevCarrito.map(item => 
        item.id === id 
          ? { 
              ...item, 
              dias: nuevosDias,
              subtotal: parseFloat(item.precio.replace(/[^0-9.]/g, '')) * item.cantidad * nuevosDias
            }
          : item
      )
    );
  };

  // Función para eliminar producto
  const eliminarProducto = (id) => {
    setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
  };

  // Función para limpiar carrito
  const limpiarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem('carritoAndamios');
  };

  // Calcular costo de flete basado en distancia y tipo de entrega
  const calcularFlete = (distancia, tipoEntrega) => {
    if (tipoEntrega === 'recoleccion') return 0; // Sin costo si es recolección
    if (distancia <= 15) return 200;
    if (distancia <= 30) return 350;
    return 400;
  };

  // Calcular totales
  const calcularTotales = () => {
    const subtotal = carrito.reduce((total, item) => total + item.subtotal, 0);
    const flete = calcularFlete(datosCliente.distancia || 0, datosCliente.tipoEntrega);
    const descuento = subtotal > 1000 ? subtotal * 0.05 : 0; // 5% descuento por mayor de $1000
    const total = subtotal - descuento + flete;
    
    return { subtotal, descuento, flete, total };
  };

  const { subtotal, descuento, flete, total } = calcularTotales();

  // Función para generar cotización PDF
  const descargarCotizacion = () => {
    const fecha = new Date().toLocaleDateString('es-MX');
    const numeroCotizacion = `COT-${Date.now()}`;
    
    // Crear contenido HTML para el PDF
    const contenidoHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Cotización - Andamios Silver</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { 
            font-family: 'Arial', sans-serif; 
            line-height: 1.4; 
            color: #333; 
            background: white;
          }
          
          .container { 
            max-width: 210mm; 
            margin: 0 auto; 
            padding: 15mm; 
            background: white;
          }
          
          .header-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;
            border-bottom: 3px solid #1e40af;
            padding-bottom: 20px;
          }
          
          .logo-section {
            flex: 1;
          }
          
          .logo-box {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #1e40af, #3b82f6);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
          
          .logo-text {
            color: white;
            font-weight: bold;
            font-size: 18px;
            text-align: center;
          }
          
          .company-info {
            color: #1e40af;
          }
          
          .company-name {
            font-size: 24px;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 5px;
          }
          
          .company-tagline {
            font-size: 14px;
            color: #f59e0b;
            font-weight: 600;
            margin-bottom: 10px;
          }
          
          .company-details {
            font-size: 11px;
            color: #666;
            line-height: 1.3;
          }
          
          .document-info {
            text-align: right;
            flex: 1;
          }
          
          .document-title {
            font-size: 28px;
            font-weight: bold;
            color: #1e40af;
            margin-bottom: 15px;
          }
          
          .document-details {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 15px;
            text-align: left;
          }
          
          .document-details h4 {
            color: #1e40af;
            font-size: 14px;
            margin-bottom: 8px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 5px;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 25px 0;
          }
          
          .info-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
          }
          
          .info-box h3 {
            color: #1e40af;
            font-size: 16px;
            margin-bottom: 15px;
            border-bottom: 2px solid rgba(245, 158, 11, 1);
            padding-bottom: 8px;
          }
          
          .info-line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 12px;
          }
          
          .info-label {
            font-weight: 600;
            color: #374151;
          }
          
          .info-value {
            color: #1f2937;
          }
          
          .table-container {
            margin: 25px 0;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }
          
          .table { 
            width: 100%; 
            border-collapse: collapse; 
            font-size: 12px;
          }
          
          .table th { 
            background: linear-gradient(135deg, #1e40af, #3b82f6);
            color: white; 
            padding: 12px 8px; 
            text-align: left;
            font-weight: 600;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .table td { 
            border-bottom: 1px solid #e5e7eb; 
            padding: 10px 8px; 
            background: white;
          }
          
          .table tbody tr:nth-child(even) td {
            background: #f9fafb;
          }
          
          .table tbody tr:hover td {
            background: #f3f4f6;
          }
          
          .totals-section {
            margin: 25px 0;
            display: flex;
            justify-content: flex-end;
          }
          
          .totals-box {
            background: #f8fafc;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            padding: 20px;
            min-width: 300px;
          }
          
          .total-line { 
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 13px;
          }
          
          .total-line.subtotal {
            color: #6b7280;
          }
          
          .total-line.discount {
            color: #059669;
            font-weight: 600;
          }
          
          .total-line.final {
            border-top: 2px solid #1e40af;
            padding-top: 10px;
            margin-top: 10px;
            font-size: 18px;
            font-weight: bold;
            color: #1e40af;
          }
          
          .conditions-section {
            margin: 30px 0;
            background: #fffbeb;
            border: 1px solid #fed7aa;
            border-radius: 8px;
            padding: 20px;
          }
          
          .conditions-section h3 {
            color: #92400e;
            margin-bottom: 15px;
            font-size: 16px;
          }
          
          .conditions-section ul {
            list-style-type: none;
            padding: 0;
          }
          
          .conditions-section li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 8px;
            font-size: 12px;
            color: #78350f;
          }
          
          .conditions-section li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #059669;
            font-weight: bold;
          }
          
          .requirements-section {
            margin: 30px 0;
            page-break-inside: avoid;
          }
          
          .requirements-header {
            text-align: center;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #1e40af, #3b82f6);
            color: white;
            padding: 15px;
            border-radius: 8px;
          }
          
          .requirements-subtitle {
            font-style: italic;
            margin-top: 5px;
            opacity: 0.9;
          }
          
          .requirements-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          
          .requirements-box {
            border: 2px solid #f59e0b;
            border-radius: 8px;
            padding: 20px;
            background: #fffbeb;
          }
          
          .requirements-title {
            text-align: center;
            font-weight: bold;
            margin-bottom: 15px;
            color: #92400e;
            text-transform: uppercase;
            font-size: 14px;
            border-bottom: 2px solid #f59e0b;
            padding-bottom: 8px;
          }
          
          .requirements-list {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          
          .requirements-list li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 8px;
            font-size: 11px;
            color: #78350f;
            line-height: 1.4;
          }
          
          .requirements-list li:before {
            content: "•";
            position: absolute;
            left: 0;
            color: #f59e0b;
            font-weight: bold;
            font-size: 14px;
          }
          
          .footer-section {
            margin-top: 40px;
            padding-top: 25px;
            border-top: 2px solid #e5e7eb;
            background: #f9fafb;
            border-radius: 8px;
            padding: 25px;
          }
          
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 25px;
            text-align: center;
          }
          
          .contact-item h4 {
            color: #1e40af;
            margin-bottom: 10px;
            font-size: 14px;
          }
          
          .contact-item p {
            font-size: 12px;
            color: #4b5563;
            margin-bottom: 5px;
          }
          
          .signature-section {
            margin-top: 40px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
          }
          
          .signature-box {
            text-align: center;
            border-top: 1px solid #9ca3af;
            padding-top: 10px;
          }
          
          .signature-label {
            font-size: 11px;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          @media print {
            body { margin: 0; }
            .container { padding: 10mm; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- Header Section -->
          <div class="header-section">
            <div class="logo-section">
              <div class="logo-box">
                <div class="logo-text">AS</div>
              </div>
              <div class="company-name">ANDAMIOS SILVER</div>
              <div class="company-tagline">Seguridad y Calidad</div>
              <div class="company-details">
                📞 81 1280 6115<br>
                📧 administracion@andamiossilver.com<br>
                📍 S. Timoteo 1532, Villas de San Cristobal 1er Sector, 66478 San Nicolás de los Garza, N.L.
              </div>
            </div>
            
            <div class="document-info">
              <div class="document-title">COTIZACIÓN</div>
              <div class="document-details">
                <h4>Información del Documento</h4>
                <div class="info-line">
                  <span class="info-label">No. Cotización:</span>
                  <span class="info-value">${numeroCotizacion}</span>
                </div>
                <div class="info-line">
                  <span class="info-label">Fecha:</span>
                  <span class="info-value">${fecha}</span>
                </div>
                <div class="info-line">
                  <span class="info-label">Vigencia:</span>
                  <span class="info-value">30 días</span>
                </div>
                <div class="info-line">
                  <span class="info-label">Moneda:</span>
                  <span class="info-value">MXN</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Client Information -->
          <div class="info-grid">
            <div class="info-box">
              <h3>Información del Cliente</h3>
              <div class="info-line">
                <span class="info-label">Nombre:</span>
                <span class="info-value">${datosCliente.nombre || 'Por definir'}</span>
              </div>
              <div class="info-line">
                <span class="info-label">Empresa:</span>
                <span class="info-value">${datosCliente.empresa || 'Por definir'}</span>
              </div>
              <div class="info-line">
                <span class="info-label">Teléfono:</span>
                <span class="info-value">${datosCliente.telefono || 'Por definir'}</span>
              </div>
              <div class="info-line">
                <span class="info-label">Email:</span>
                <span class="info-value">${datosCliente.email || 'Por definir'}</span>
              </div>
              <div class="info-line">
                <span class="info-label">Proyecto:</span>
                <span class="info-value">${datosCliente.proyecto || 'Por definir'}</span>
              </div>
              <div class="info-line">
                <span class="info-label">Tipo de Entrega:</span>
                <span class="info-value">${datosCliente.tipoEntrega === 'recoleccion' ? 'Recolección en almacén' : 'Entrega en obra'}</span>
              </div>
              ${datosCliente.tipoEntrega === 'entrega' && datosCliente.direccionEnvio ? `
                <div class="info-line">
                  <span class="info-label">Dirección de Entrega:</span>
                  <span class="info-value">${datosCliente.direccionEnvio}</span>
                </div>
              ` : ''}
            </div>
            
            <div class="info-box">
              <h3>Resumen del Pedido</h3>
              <div class="info-line">
                <span class="info-label">Total de Productos:</span>
                <span class="info-value">${carrito.length} tipos</span>
              </div>
              <div class="info-line">
                <span class="info-label">Unidades Totales:</span>
                <span class="info-value">${carrito.reduce((total, item) => total + item.cantidad, 0)}</span>
              </div>
              <div class="info-line">
                <span class="info-label">Días Promedio:</span>
                <span class="info-value">${Math.round(carrito.reduce((total, item) => total + item.dias, 0) / carrito.length)} días</span>
              </div>
              <div class="info-line">
                <span class="info-label">Tipo de Servicio:</span>
                <span class="info-value">Renta de Andamios</span>
              </div>
            </div>
          </div>
          
          <!-- Products Table -->
          <div class="table-container">
            <table class="table">
              <thead>
                <tr>
                  <th style="width: 40%;">Producto</th>
                  <th style="width: 12%;">Cantidad</th>
                  <th style="width: 12%;">Días</th>
                  <th style="width: 18%;">Precio/Día</th>
                  <th style="width: 18%;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${carrito.map(item => `
                  <tr>
                    <td><strong>${item.nombre}</strong></td>
                    <td style="text-align: center;">${item.cantidad}</td>
                    <td style="text-align: center;">${item.dias}</td>
                    <td style="text-align: right;">${item.precio}</td>
                    <td style="text-align: right; font-weight: 600;">$${item.subtotal.toFixed(2)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          
          <!-- Totals -->
          <div class="totals-section">
            <div class="totals-box">
              <div class="total-line subtotal">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
              </div>
              <div class="total-line">
                <span>${datosCliente.tipoEntrega === 'recoleccion' ? 'Recolección:' : `Flete (${datosCliente.distancia || 0} km):`}</span>
                <span>${datosCliente.tipoEntrega === 'recoleccion' ? 'Sin costo' : `$${flete.toFixed(2)}`}</span>
              </div>
              ${descuento > 0 ? `
                <div class="total-line discount">
                  <span>Descuento (5%):</span>
                  <span>-$${descuento.toFixed(2)}</span>
                </div>
              ` : ''}
              <div class="total-line final">
                <span>TOTAL:</span>
                <span>$${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          <!-- Commercial Conditions -->
          <div class="conditions-section">
            <h3>Condiciones Comerciales</h3>
            <ul>
              <li>Renta mínima de 7 días</li>
              <li>Precios incluyen IVA</li>
              <li>Recolección en almacén sin costo adicional</li>
              <li>Entrega en obra: 0-15km = $200, 16-30km = $350, +30km = $400</li>
              <li>Montaje y desmontaje disponible con costo adicional</li>
              <li>Descuento del 5% en rentas mayores a $1,000.00</li>
              <li>Forma de pago: 50% al confirmar y 50% contra entrega</li>
              <li>Cotización válida por 30 días naturales</li>
            </ul>
          </div>
          
          <!-- Requirements Section -->
          <div class="requirements-section">
            <div class="requirements-header">
              <h3 style="margin: 0; font-size: 18px;">REQUISITOS</h3>
              <div class="requirements-subtitle">Comprometidos a dar un excelente servicio de calidad y confianza</div>
            </div>
            
            <div class="requirements-grid">
              <div class="requirements-box">
                <h4 class="requirements-title">Persona Física</h4>
                <ul class="requirements-list">
                  <li>Copia de INE vigente</li>
                  <li>CURP</li>
                  <li>Comprobante de domicilio</li>
                  <li>Dos referencias personales</li>
                  <li>Pagaré y/o cheque en garantía</li>
                  <li>Contrato comercial</li>
                  <li>Aval solidario y copia de INE</li>
                </ul>
              </div>
              
              <div class="requirements-box">
                <h4 class="requirements-title">Persona Moral</h4>
                <ul class="requirements-list">
                  <li>Copia de INE vigente</li>
                  <li>CURP</li>
                  <li>Comprobante de domicilio</li>
                  <li>Dos referencias personales</li>
                  <li>Pagaré y/o cheque en garantía</li>
                  <li>Contrato comercial</li>
                  <li>Aval solidario y copia de INE</li>
                  <li>Acta constitutiva</li>
                  <li>Constancia de situación fiscal</li>
                </ul>
              </div>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="footer-section">
            <div class="contact-grid">
              <div class="contact-item">
                <h4>📞 Teléfono</h4>
                <p>81 1280 6115</p>
                <p>Lunes a Viernes</p>
                <p>8:00 AM - 5:00 PM</p>
              </div>
              <div class="contact-item">
                <h4>📧 Email</h4>
                <p>administracion@andamiossilver.com</p>
                <p>ventas@andamiossilver.com</p>
              </div>
              <div class="contact-item">
                <h4>📍 Ubicación</h4>
                <p>S. Timoteo 1532, Villas de San Cristobal 1er Sector, 66478</p>
                <p>San Nicolás de los Garza, N.L.</p>
              </div>
            </div>
            
            <!-- Signature Section -->
            <div class="signature-section">
              <div class="signature-box">
                <div class="signature-label">Autorizado por</div>
                <div style="margin-top: 30px;">Andamios Silver</div>
              </div>
              <div class="signature-box">
                <div class="signature-label">Aceptado por</div>
                <div style="margin-top: 30px;">${datosCliente.nombre || '___________________'}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    
    // Crear blob y descargar
    const blob = new Blob([contenidoHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Cotizacion_${numeroCotizacion}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (carrito.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header carrito={[]} productosEnCarrito={{}} />
        
        <section className="py-20 mt-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-md mx-auto">
              <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-navy mb-4">Carrito Vacío</h2>
              <p className="text-gray-600 mb-8">
                No has agregado productos a tu carrito aún. 
                Explora nuestro catálogo y encuentra los andamios que necesitas.
              </p>
              <Button 
                onClick={() => navigate('/productos')}
                className="shadow-glow"
              >
                Ver Productos
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header carrito={carrito} productosEnCarrito={{}} />
      
      <section className="py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-navy mb-4">
              MI <span className="text-golden">CARRITO</span>
            </h1>
            <p className="text-gray-600">
              Revisa tu selección y genera tu cotización personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Lista de Productos */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-navy">Productos Seleccionados</h2>
                <Button 
                  variant="outline" 
                  onClick={limpiarCarrito}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Limpiar Carrito
                </Button>
              </div>

              {carrito.map((producto) => (
                <div key={`${producto.id}-${Date.now()}`} className="bg-white border rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-navy">{producto.nombre}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => eliminarProducto(producto.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-4">{producto.descripcion}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Cantidad */}
                        <div>
                          <label className="text-sm font-medium text-navy">Cantidad:</label>
                          <div className="flex items-center space-x-2 mt-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{producto.cantidad}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                              className="w-8 h-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        
                        {/* Días */}
                        <div>
                          <label className="text-sm font-medium text-navy">Días:</label>
                          <div className="flex items-center space-x-2 mt-1">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => actualizarDias(producto.id, producto.dias - 7)}
                              className="w-8 h-8 p-0"
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-12 text-center font-medium">{producto.dias}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => actualizarDias(producto.id, producto.dias + 7)}
                              className="w-8 h-8 p-0"
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        
                        {/* Subtotal */}
                        <div>
                          <label className="text-sm font-medium text-navy">Subtotal:</label>
                          <div className="text-xl font-bold text-navy mt-1">
                            ${producto.subtotal.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Resumen y Datos del Cliente */}
            <div className="space-y-6">
              {/* Datos del Cliente */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Datos del Cliente
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    value={datosCliente.nombre}
                    onChange={(e) => setDatosCliente({...datosCliente, nombre: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-golden"
                  />
                  <input
                    type="text"
                    placeholder="Empresa"
                    value={datosCliente.empresa}
                    onChange={(e) => setDatosCliente({...datosCliente, empresa: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-golden"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    value={datosCliente.telefono}
                    onChange={(e) => setDatosCliente({...datosCliente, telefono: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-golden"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={datosCliente.email}
                    onChange={(e) => setDatosCliente({...datosCliente, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-golden"
                  />
                  <input
                    type="text"
                    placeholder="Nombre del proyecto"
                    value={datosCliente.proyecto}
                    onChange={(e) => setDatosCliente({...datosCliente, proyecto: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-golden"
                  />
                  
                  {/* Tipo de Entrega */}
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">
                      Tipo de Entrega
                    </label>
                    <select
                      value={datosCliente.tipoEntrega}
                      onChange={(e) => setDatosCliente({...datosCliente, tipoEntrega: e.target.value, distancia: 0})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-golden"
                    >
                      <option value="">Seleccionar tipo de entrega</option>
                      <option value="recoleccion">Recolección en almacén (Sin costo)</option>
                      <option value="entrega">Entrega en obra</option>
                    </select>
                  </div>

                  {/* Dirección de Envío - Solo si es entrega */}
                  {datosCliente.tipoEntrega === 'entrega' && (
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">
                        Dirección de Entrega
                      </label>
                      <textarea
                        placeholder="Ingrese la dirección completa donde se realizará la entrega (ej: Centro de Monterrey, San Nicolás, García, etc.)"
                        value={datosCliente.direccionEnvio}
                        onChange={(e) => setDatosCliente({...datosCliente, direccionEnvio: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-golden"
                        rows={3}
                      />
                      {datosCliente.direccionEnvio && (
                        <>
                          {calculandoDistancia && (
                            <p className="mt-1 text-xs text-blue-600">
                              🔄 Calculando distancia...
                            </p>
                          )}
                          {!calculandoDistancia && datosCliente.distancia > 0 && datosCliente.distanciaReal > 0 && (
                            <p className="mt-1 text-xs text-green-600">
                              ✓ Distancia calculada: {datosCliente.distanciaReal}km - Zona: {
                                datosCliente.distancia <= 15 ? '0-15 km ($200)' :
                                datosCliente.distancia <= 30 ? '16-30 km ($350)' :
                                '+30 km ($400)'
                              }
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  )}

                  {/* Distancia - Solo si es entrega */}
                  {datosCliente.tipoEntrega === 'entrega' && (
                    <div>
                      <label className="block text-sm font-medium text-navy mb-1">
                        Distancia desde nuestro almacén (km)
                        {datosCliente.direccionEnvio && datosCliente.distanciaReal > 0 && (
                          <span className="text-xs text-green-600 ml-2">
                            (Calculado: {datosCliente.distanciaReal}km)
                          </span>
                        )}
                      </label>
                      <select
                        value={datosCliente.distancia}
                        onChange={(e) => setDatosCliente({...datosCliente, distancia: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-golden"
                      >
                        <option value={0}>Seleccionar zona manualmente</option>
                        <option value={10}>0 - 15 km ($200 MXN)</option>
                        <option value={25}>16 - 30 km ($350 MXN)</option>
                        <option value={35}>+30 km ($400 MXN)</option>
                      </select>
                      {calculandoDistancia && (
                        <p className="mt-1 text-xs text-blue-600">
                          🔄 Calculando distancia...
                        </p>
                      )}
                      {!calculandoDistancia && datosCliente.distanciaReal > 0 && (
                        <p className="mt-1 text-xs text-green-600">
                          ✅ Distancia calculada: {datosCliente.distanciaReal} km
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Resumen de Pedido */}
              <div className="bg-white border rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-navy mb-4">Resumen del Pedido</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Productos ({carrito.length}):</span>
                    <span>{carrito.reduce((total, item) => total + item.cantidad, 0)} unidades</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>
                      {datosCliente.tipoEntrega === 'recoleccion' 
                        ? 'Recolección:' 
                        : `Flete (${datosCliente.distancia || 0} km):`
                      }
                    </span>
                    <span>
                      {datosCliente.tipoEntrega === 'recoleccion' 
                        ? 'Sin costo' 
                        : `$${flete.toFixed(2)}`
                      }
                    </span>
                  </div>
                  
                  {descuento > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Descuento (5%):</span>
                      <span>-${descuento.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-xl font-bold text-navy">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button 
                    onClick={descargarCotizacion}
                    className="w-full shadow-glow"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Descargar Cotización
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/productos')}
                  >
                    Seguir Comprando
                  </Button>
                </div>

                {/* Información adicional */}
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-navy mb-2">Información Importante:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Renta mínima: 7 días</li>
                    <li>• Recolección en almacén: Sin costo</li>
                    <li>• Entrega en obra por zona: 0-15km=$200, 16-30km=$350, +30km=$400</li>
                    <li>• Descuento del 5% en rentas mayores a $1,000</li>
                    <li>• Cotización válida por 30 días</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Carrito;
