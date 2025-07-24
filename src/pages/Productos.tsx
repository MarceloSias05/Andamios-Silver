import { Star, CheckCircle, XCircle, Plus, Minus, Calendar, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Productos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const [carrito, setCarrito] = useState([]);
  const [productosEnCarrito, setProductosEnCarrito] = useState({});

  // Cargar carrito del localStorage al montar el componente
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carritoAndamios');
    if (carritoGuardado) {
      const carritoData = JSON.parse(carritoGuardado);
      setCarrito(carritoData);
      
      // Calcular productos en carrito para el contador
      const contadores = {};
      carritoData.forEach(item => {
        contadores[item.id] = (contadores[item.id] || 0) + item.cantidad;
      });
      setProductosEnCarrito(contadores);
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('carritoAndamios', JSON.stringify(carrito));
  }, [carrito]);

  // Función para agregar al carrito
  const agregarAlCarrito = (producto, cantidad, dias) => {
    const item = {
      ...producto,
      cantidad: cantidad,
      dias: dias,
      subtotal: parseFloat(producto.precio.replace(/[^0-9.]/g, '')) * cantidad * dias
    };
    
    setCarrito(prevCarrito => [...prevCarrito, item]);
    
    // Actualizar contador visual
    setProductosEnCarrito(prev => ({
      ...prev,
      [producto.id]: (prev[producto.id] || 0) + cantidad
    }));
  };

  const productos = [
    // MARCOS
    {
      id: 1,
      nombre: "Marco Estándar",
      categoria: "Marcos",
      precio: "$1.75/día",
      descripcion: "Marco base del sistema de andamiaje, diseñado para soportar cargas estructurales estándar.",
      caracteristicas: ["Alta resistencia", "Galvanizado", "Compatible con sistema multidireccional"],
      aplicaciones: ["Construcción residencial", "Obras comerciales", "Proyectos industriales"],
      imagen: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.9
    },
    {
      id: 2,
      nombre: "Marco de Pasillo",
      categoria: "Marcos",
      precio: "$1.75/día",
      descripcion: "Marco especializado para crear pasillos de acceso seguros en estructuras de andamiaje.",
      caracteristicas: ["Espacio optimizado", "Acceso peatonal", "Sistema de seguridad"],
      aplicaciones: ["Pasillos de acceso", "Zonas peatonales", "Accesos seguros"],
      imagen: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.8
    },
    {
      id: 3,
      nombre: "Marco para Escalera",
      categoria: "Marcos",
      precio: "$1.75/día",
      descripcion: "Marco específicamente diseñado para la instalación de escaleras en el sistema de andamiaje.",
      caracteristicas: ["Soporte para escaleras", "Ángulos seguros", "Fácil instalación"],
      aplicaciones: ["Acceso vertical", "Escaleras internas", "Sistemas de evacuación"],
      imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.7
    },
    {
      id: 4,
      nombre: "Marco Extensión",
      categoria: "Marcos",
      precio: "$1.75/día",
      descripcion: "Marco extensible para adaptar la estructura a diferentes alturas y configuraciones.",
      caracteristicas: ["Altura variable", "Versatilidad", "Sistema extensible"],
      aplicaciones: ["Alturas variables", "Adaptaciones", "Configuraciones especiales"],
      imagen: "https://images.unsplash.com/photo-1571786256017-aee7a0c9cbcf?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.8
    },
    // MARCOS CIMBRA
    {
      id: 5,
      nombre: "Marco Cimbra Estándar",
      categoria: "Cimbra",
      precio: "$1.95/día",
      descripcion: "Marco especializado para trabajos de cimbra y encofrado en construcción.",
      caracteristicas: ["Resistencia a cargas pesadas", "Sistema de cimbra", "Durabilidad"],
      aplicaciones: ["Encofrado", "Cimbra de concreto", "Estructuras temporales"],
      imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.9
    },
    {
      id: 6,
      nombre: "Marco Cimbra Extensión",
      categoria: "Cimbra",
      precio: "$1.95/día",
      descripcion: "Marco extensible para trabajos de cimbra con alturas variables.",
      caracteristicas: ["Extensión variable", "Soporte de cimbra", "Configuración flexible"],
      aplicaciones: ["Cimbra variable", "Encofrados complejos", "Estructuras adaptables"],
      imagen: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.8
    },
    {
      id: 7,
      nombre: "Puntal",
      categoria: "Cimbra",
      precio: "$7.00/día",
      descripcion: "Elemento de soporte vertical para sistemas de cimbra y encofrado.",
      caracteristicas: ["Soporte vertical", "Ajustable", "Alta capacidad de carga"],
      aplicaciones: ["Soporte de losas", "Encofrados", "Cimbra temporal"],
      imagen: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.7
    },
    // CRUCETAS Y TABLONES
    {
      id: 8,
      nombre: "Cruceta Servicio",
      categoria: "Crucetas",
      precio: "$0.75/día",
      descripcion: "Cruceta estándar para servicios generales en sistemas de andamiaje.",
      caracteristicas: ["Uso general", "Resistente", "Fácil instalación"],
      aplicaciones: ["Servicios generales", "Soporte horizontal", "Estructuras básicas"],
      imagen: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.6
    },
    {
      id: 9,
      nombre: "Cruceta Pasillo",
      categoria: "Crucetas",
      precio: "$0.75/día",
      descripcion: "Cruceta diseñada específicamente para la creación de pasillos seguros.",
      caracteristicas: ["Soporte de pasillo", "Seguridad peatonal", "Instalación rápida"],
      aplicaciones: ["Pasillos de acceso", "Zonas de tránsito", "Accesos seguros"],
      imagen: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.7
    },
    {
      id: 10,
      nombre: "Cruceta Cimbra",
      categoria: "Crucetas",
      precio: "$0.75/día",
      descripcion: "Cruceta especializada para trabajos de cimbra y encofrado.",
      caracteristicas: ["Soporte de cimbra", "Alta resistencia", "Sistema especializado"],
      aplicaciones: ["Trabajos de cimbra", "Encofrados", "Soportes temporales"],
      imagen: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.8
    },
    {
      id: 11,
      nombre: "Cruceta Extensión",
      categoria: "Crucetas",
      precio: "$0.75/día",
      descripcion: "Cruceta extensible para configuraciones variables de andamiaje.",
      caracteristicas: ["Longitud variable", "Versatilidad", "Sistema ajustable"],
      aplicaciones: ["Configuraciones especiales", "Extensiones", "Adaptaciones"],
      imagen: "https://images.unsplash.com/photo-1581092335878-3af7afb180c7?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.6
    },
    {
      id: 12,
      nombre: "Tablón Antiderrapante",
      categoria: "Plataformas",
      precio: "$3.00/día",
      descripcion: "Plataforma de trabajo con superficie antiderrapante para máxima seguridad.",
      caracteristicas: ["Superficie antiderrapante", "Alta resistencia", "Seguridad laboral"],
      aplicaciones: ["Plataformas de trabajo", "Superficies seguras", "Áreas de tránsito"],
      imagen: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.9
    },
    // SEGURIDAD Y VIGAS
    {
      id: 13,
      nombre: "Barandal Protección",
      categoria: "Seguridad",
      precio: "$1.50/día",
      descripcion: "Sistema de barandales para protección perimetral en andamiajes.",
      caracteristicas: ["Protección perimetral", "Cumple normas de seguridad", "Fácil instalación"],
      aplicaciones: ["Protección de caídas", "Perímetros seguros", "Seguridad laboral"],
      imagen: "https://images.unsplash.com/photo-1594736797933-d0f06ba80b80?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.8
    },
    {
      id: 14,
      nombre: "Viga",
      categoria: "Estructural",
      precio: "$2.00/día",
      descripcion: "Vigas estructurales para soporte y distribución de cargas en el andamiaje.",
      caracteristicas: ["Soporte estructural", "Distribución de cargas", "Alta resistencia"],
      aplicaciones: ["Soporte principal", "Estructuras complejas", "Distribución de peso"],
      imagen: "https://images.unsplash.com/photo-1565008447742-97f6e5b8a89e?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.7
    },
    {
      id: 15,
      nombre: "Conector",
      categoria: "Conectores",
      precio: "Incluido",
      descripcion: "Elementos de conexión para unir diferentes componentes del sistema.",
      caracteristicas: ["Conexión segura", "Versatilidad", "Sistema modular"],
      aplicaciones: ["Uniones estructurales", "Conexiones modulares", "Ensambles"],
      imagen: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.6
    },
    // ESCALERAS Y ACCESOS
    {
      id: 16,
      nombre: "Escalera",
      categoria: "Accesos",
      precio: "$9.00/día",
      descripcion: "Escaleras profesionales para acceso vertical seguro en andamiajes.",
      caracteristicas: ["Acceso vertical", "Seguridad certificada", "Instalación integrada"],
      aplicaciones: ["Acceso vertical", "Escaleras internas", "Subida segura"],
      imagen: "https://images.unsplash.com/photo-1571786256017-aee7a0c9cbcf?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.8
    },
    {
      id: 17,
      nombre: "Pasamanos",
      categoria: "Seguridad",
      precio: "$0.50/día",
      descripcion: "Sistema de pasamanos para mayor seguridad en escaleras y plataformas.",
      caracteristicas: ["Seguridad adicional", "Apoyo ergonómico", "Instalación fácil"],
      aplicaciones: ["Escaleras", "Plataformas", "Zonas de tránsito"],
      imagen: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.7
    },
    // BASES Y NIVELACIÓN
    {
      id: 18,
      nombre: "Base Regulable",
      categoria: "Bases",
      precio: "$2.00/día",
      descripcion: "Base ajustable para nivelación y estabilidad del sistema de andamiaje.",
      caracteristicas: ["Nivelación precisa", "Estabilidad", "Ajuste variable"],
      aplicaciones: ["Nivelación", "Estabilización", "Bases firmes"],
      imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.9
    },
    // TORNILLERÍA
    {
      id: 19,
      nombre: "Tornillos Base",
      categoria: "Tornillería",
      precio: "$2.00/día",
      descripcion: "Tornillería especializada para fijación de bases en el sistema.",
      caracteristicas: ["Fijación segura", "Material resistente", "Instalación precisa"],
      aplicaciones: ["Fijación de bases", "Anclajes", "Sujeción"],
      imagen: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.6
    },
    {
      id: 20,
      nombre: "Tornillo U",
      categoria: "Tornillería",
      precio: "$2.00/día",
      descripcion: "Tornillo tipo U para conexiones específicas en el sistema de andamiaje.",
      caracteristicas: ["Conexión tipo U", "Versatilidad", "Fijación confiable"],
      aplicaciones: ["Conexiones especiales", "Fijaciones tipo U", "Uniones"],
      imagen: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop&crop=center",
      disponible: true,
      rating: 4.5
    },
    // MOVILIDAD
    {
      id: 21,
      nombre: "Rueda para Andamio",
      categoria: "Movilidad",
      precio: "$3.00/día",
      descripcion: "Ruedas especializadas para hacer móviles las estructuras de andamiaje.",
      caracteristicas: ["Sistema de frenos", "Movilidad controlada", "Carga pesada"],
      aplicaciones: ["Torres móviles", "Estructuras desplazables", "Andamios móviles"],
      imagen: "https://colsoncaster.mx/Imagenes/Ruedas-Rodajas-Especiales/Rodajas-para-Andamios-01-M.jpg",
      disponible: true,
      rating: 4.7
    }
  ];

  const categorias = [
    { nombre: "Todos", color: "bg-gradient-to-r from-navy to-blue-900", icono: "🏗️" },
    { nombre: "Marcos", color: "bg-blue-500", icono: "🔲" },
    { nombre: "Cimbra", color: "bg-green-500", icono: "⚡" },
    { nombre: "Crucetas", color: "bg-red-500", icono: "✚" },
    { nombre: "Plataformas", color: "bg-purple-500", icono: "📋" },
    { nombre: "Seguridad", color: "bg-orange-500", icono: "🛡️" },
    { nombre: "Estructural", color: "bg-teal-500", icono: "🏗️" },
    { nombre: "Conectores", color: "bg-pink-500", icono: "🔗" },
    { nombre: "Accesos", color: "bg-indigo-500", icono: "🪜" },
    { nombre: "Bases", color: "bg-yellow-500", icono: "⚖️" },
    { nombre: "Tornillería", color: "bg-gray-500", icono: "🔧" },
    { nombre: "Movilidad", color: "bg-cyan-500", icono: "🛞" }
  ];

  // Filtrar productos según la categoría seleccionada
  const productosFiltrados = categoriaSeleccionada === "Todos" 
    ? productos 
    : productos.filter(producto => producto.categoria === categoriaSeleccionada);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header carrito={carrito} productosEnCarrito={productosEnCarrito} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy via-navy to-blue-900 text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            NUESTROS <span className="text-golden">PRODUCTOS</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestro catálogo completo de productos especializados en andamiaje. 
            Desde marcos estándar hasta sistemas de seguridad avanzados, tenemos todo lo que necesitas.
          </p>
          <div className="flex items-center justify-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">{productos.length}</div>
              <div className="text-sm text-blue-200">Productos Disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">{categorias.length - 1}</div>
              <div className="text-sm text-blue-200">Categorías</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">24/7</div>
              <div className="text-sm text-blue-200">Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros de Categoría */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Catálogo por <span className="text-golden">Categoría</span>
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Mostrando {productosFiltrados.length} de {productos.length} productos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria.nombre}
                onClick={() => setCategoriaSeleccionada(categoria.nombre)}
                className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center space-x-2 ${
                  categoriaSeleccionada === categoria.nombre 
                    ? `${categoria.color} ring-4 ring-golden/50 scale-105` 
                    : `${categoria.color} hover:shadow-xl`
                }`}
              >
                <span className="text-lg">{categoria.icono}</span>
                <span>{categoria.nombre}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Productos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosFiltrados.map((producto) => (
              <div key={producto.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Imagen del Producto */}
                <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling!.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full bg-gradient-to-br from-blue-100 to-navy/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{categorias.find(c => c.nombre === producto.categoria)?.icono}</div>
                      <p className="text-navy font-semibold text-sm px-4">{producto.nombre}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    {producto.disponible ? (
                      <CheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
                    ) : (
                      <XCircle className="w-6 h-6 text-red-500 bg-white rounded-full" />
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${
                      categorias.find(c => c.nombre === producto.categoria)?.color || 'bg-gray-500'
                    }`}>
                      {producto.categoria}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-2xl mb-2">{categorias.find(c => c.nombre === producto.categoria)?.icono}</div>
                      <p className="text-sm font-semibold">Ver producto</p>
                    </div>
                  </div>
                </div>

                {/* Contenido del Producto */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-navy">{producto.nombre}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-golden fill-current" />
                      <span className="text-sm text-gray-600">{producto.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{producto.descripcion}</p>
                  
                  {/* Precio */}
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-navy">{producto.precio}</span>
                  </div>

                  {/* Características */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy mb-2 text-sm">Características:</h4>
                    <div className="space-y-1">
                      {producto.caracteristicas.slice(0, 2).map((caracteristica, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          <span>{caracteristica}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Estado de Disponibilidad */}
                  <div className="mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      producto.disponible 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {producto.disponible ? 'Disponible' : 'No Disponible'}
                    </span>
                  </div>

                  {/* Botones de Acción */}
                  <ProductSelector 
                    producto={producto} 
                    onAgregarAlCarrito={agregarAlCarrito}
                    cantidadEnCarrito={productosEnCarrito[producto.id] || 0}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">
            Servicios <span className="text-golden">Adicionales</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-navy mb-2">Entrega y Recolección</h3>
              <p className="text-gray-600">Servicio de entrega y recolección en tu obra.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-navy mb-2">Soporte Técnico 24/7</h3>
              <p className="text-gray-600">Asistencia técnica disponible las 24 horas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Componente para selector de producto individual
const ProductSelector = ({ producto, onAgregarAlCarrito, cantidadEnCarrito }) => {
  const [cantidad, setCantidad] = useState(1);
  const [dias, setDias] = useState(7); // Mínimo 7 días
  const [fechaEntrega, setFechaEntrega] = useState('');

  // Calcular fechas importantes
  const calcularFechas = () => {
    if (!fechaEntrega) return null;
    
    const entrega = new Date(fechaEntrega);
    const devolucion = new Date(entrega);
    devolucion.setDate(devolucion.getDate() + dias);
    
    return {
      entrega: entrega.toLocaleDateString('es-MX'),
      devolucion: devolucion.toLocaleDateString('es-MX')
    };
  };

  const fechas = calcularFechas();
  const precio = parseFloat(producto.precio.replace(/[^0-9.]/g, '')) || 0;
  const subtotal = precio * cantidad * dias;

  const handleAgregar = () => {
    if (fechaEntrega && cantidad > 0 && dias >= 7) {
      onAgregarAlCarrito(producto, cantidad, dias);
      // Reset form
      setCantidad(1);
      setDias(7);
      setFechaEntrega('');
    }
  };

  return (
    <div className="space-y-4">
      {/* Selector de Cantidad */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-navy">Cantidad:</span>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCantidad(Math.max(1, cantidad - 1))}
            className="w-8 h-8 p-0"
          >
            <Minus className="w-3 h-3" />
          </Button>
          <span className="w-8 text-center font-medium">{cantidad}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCantidad(cantidad + 1)}
            className="w-8 h-8 p-0"
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Selector de Días */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-navy">Días de renta:</span>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDias(Math.max(7, dias - 7))}
            className="w-8 h-8 p-0"
          >
            <Minus className="w-3 h-3" />
          </Button>
          <span className="w-12 text-center font-medium">{dias}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setDias(dias + 7)}
            className="w-8 h-8 p-0"
          >
            <Plus className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {/* Selector de Fecha de Entrega */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-navy">Fecha de entrega:</label>
        <div className="relative">
          <input
            type="date"
            value={fechaEntrega}
            onChange={(e) => setFechaEntrega(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-golden"
          />
          <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Información de fechas */}
      {fechas && (
        <div className="bg-blue-50 p-3 rounded-lg text-xs space-y-1">
          <div className="flex justify-between">
            <span className="text-gray-600">Entrega:</span>
            <span className="font-medium text-navy">{fechas.entrega}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Devolución:</span>
            <span className="font-medium text-navy">{fechas.devolucion}</span>
          </div>
          <div className="flex justify-between border-t pt-1 mt-2">
            <span className="font-medium text-gray-600">Subtotal:</span>
            <span className="font-bold text-navy">${subtotal.toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* Información de productos en carrito */}
      {cantidadEnCarrito > 0 && (
        <div className="bg-green-50 p-2 rounded-lg text-xs text-center">
          <span className="text-green-700 font-medium">
            {cantidadEnCarrito} en carrito
          </span>
        </div>
      )}

      {/* Botones */}
      <div className="space-y-2">
        <Button 
          onClick={handleAgregar}
          disabled={!fechaEntrega || cantidad < 1 || dias < 7}
          className="w-full shadow-glow"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Añadir al Carrito
        </Button>
        <Button variant="outline" className="w-full text-xs">
          Ver Detalles
        </Button>
      </div>

      {/* Nota sobre renta mínima */}
      <p className="text-xs text-gray-500 text-center">
        * Renta mínima: 7 días
      </p>
    </div>
  );
};

export default Productos;   