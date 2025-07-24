import { Calendar, MapPin, Building, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import tacopalenque from '../assets/taco_palenque.png';

const Proyectos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

const proyectos = [
    {
      id: 1,
      titulo: "Torre Residencial San Pedro",
      ubicacion: "San Pedro Garza García, N.L.",
      fecha: "2024",
      superficie: "2,500 m²",
      toneladas: "18 toneladas",
      categoria: "Residencial",
      descripcion: "Andamiaje completo para construcción de torre residencial de 25 pisos con sistema multidireccional.",
      imagen: "/api/placeholder/600/400",
      aspectos: ["Sistema Multidireccional", "Protección Perimetral", "Plataformas de Trabajo"]
    },
    {
      id: 2,
      titulo: "Centro Comercial Galerías",
      ubicacion: "Monterrey, N.L.",
      fecha: "2024",
      superficie: "3,200 m²",
      toneladas: "22 toneladas",
      categoria: "Comercial",
      descripcion: "Andamiaje para renovación de fachada de centro comercial con acceso controlado y seguridad reforzada.",
      imagen: "/api/placeholder/600/400",
      aspectos: ["Acceso Controlado", "Andamios Colgantes", "Protección Peatonal"]
    },
    {
      id: 3,
      titulo: "Planta Industrial CEMEX",
      ubicacion: "Apodaca, N.L.",
      fecha: "2023",
      superficie: "4,800 m²",
      toneladas: "35 toneladas",
      categoria: "Industrial",
      descripcion: "Estructura de andamiaje para mantenimiento de silos y equipos industriales de gran altura.",
      imagen: "/api/placeholder/600/400",
      aspectos: ["Estructuras de Gran Altura", "Resistencia Industrial", "Acceso Técnico"]
    },
    {
      id: 4,
      titulo: "Hospital Universitario",
      ubicacion: "San Nicolás de los Garza, N.L.",
      fecha: "2023",
      superficie: "1,800 m²",
      toneladas: "12 toneladas",
      categoria: "Hospitalario",
      descripcion: "Andamiaje especializado para ampliación de hospital con protocolos de seguridad hospitalaria.",
      imagen: "/api/placeholder/600/400",
      aspectos: ["Protocolos Hospitalarios", "Acceso Restringido", "Mínimo Ruido"]
    },
    {
      id: 5,
      titulo: "Estadio de Fútbol Tigres",
      ubicacion: "San Nicolás de los Garza, N.L.",
      fecha: "2024",
      superficie: "5,500 m²",
      toneladas: "42 toneladas",
      categoria: "Deportivo",
      descripcion: "Andamiaje para renovación de tribunas y techado del estadio con sistemas de carga pesada.",
      imagen: "/api/placeholder/600/400",
      aspectos: ["Cargas Pesadas", "Estructuras Complejas", "Acceso Público"]
    },
    {
      id: 6,
      titulo: "Festival Pa'l Norte 2024",
      ubicacion: "Monterrey, N.L.",
      fecha: "2024",
      superficie: "2,000 m²",
      toneladas: "15 toneladas",
      categoria: "Eventos",
      descripcion: "Estructuras temporales para escenarios y gradas del festival musical más grande del norte.",
      imagen: "/api/placeholder/600/400",
      aspectos: ["Montaje Rápido", "Estructuras Temporales", "Soporte Audiovisual"]
    },
    {
      id: 7,
      titulo: "Taco Palenque Country",
      ubicacion: "Monterrey, N.L.",
      fecha: "2024",
      superficie: "800 m²",
      toneladas: "6 toneladas",
      categoria: "Comercial",
      descripcion: "Andamiaje para construcción y remodelación de restaurante con diseño campestre moderno.",
      imagen: "/api/placeholder/600/400",
      aspectos: ["Diseño Comercial", "Acceso Continuo", "Fachada Especializada"]
    }
  ];

  const categorias = [
    { nombre: "Todos", color: "bg-gradient-to-r from-navy to-blue-900" },
    { nombre: "Residencial", color: "bg-blue-500" },
    { nombre: "Comercial", color: "bg-green-500" },
    { nombre: "Industrial", color: "bg-red-500" },
    { nombre: "Hospitalario", color: "bg-purple-500" },
    { nombre: "Deportivo", color: "bg-orange-500" },
    { nombre: "Eventos", color: "bg-pink-500" }
  ];

  // Filtrar proyectos según la categoría seleccionada
  const proyectosFiltrados = categoriaSeleccionada === "Todos" 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === categoriaSeleccionada);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy via-navy to-blue-900 text-white py-20 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            NUESTROS <span className="text-golden">PROYECTOS</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Descubre las obras en las que hemos participado, desde torres residenciales hasta eventos masivos. 
            Cada proyecto refleja nuestro compromiso con la seguridad, calidad y excelencia.
          </p>
          <div className="flex items-center justify-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">155+</div>
              <div className="text-sm text-blue-200">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">26,000+</div>
              <div className="text-sm text-blue-200">m² Instalados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-golden">510+</div>
              <div className="text-sm text-blue-200">Toneladas de Equipo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros de Categoría */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-8">
            Filtrar por <span className="text-golden">Categoría</span>
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Mostrando {proyectosFiltrados.length} de {proyectos.length} proyectos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {categorias.map((categoria) => (
              <button
                key={categoria.nombre}
                onClick={() => setCategoriaSeleccionada(categoria.nombre)}
                className={`px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                  categoriaSeleccionada === categoria.nombre 
                    ? `${categoria.color} ring-4 ring-golden/50 scale-105` 
                    : `${categoria.color} hover:shadow-xl`
                }`}
              >
                {categoria.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {proyectosFiltrados.map((proyecto) => (
              <div key={proyecto.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Imagen del Proyecto */}
                <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  {proyecto.id === 7 ? (
                    <img 
                      src={tacopalenque} 
                      alt={proyecto.titulo}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-navy/20 flex items-center justify-center relative">
                      <Building className="w-16 h-16 text-navy/40" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                          <p className="text-navy font-semibold text-sm">{proyecto.titulo}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
                      proyecto.categoria === 'Residencial' ? 'bg-blue-500' :
                      proyecto.categoria === 'Comercial' ? 'bg-green-500' :
                      proyecto.categoria === 'Industrial' ? 'bg-red-500' :
                      proyecto.categoria === 'Hospitalario' ? 'bg-purple-500' :
                      proyecto.categoria === 'Deportivo' ? 'bg-orange-500' :
                      'bg-pink-500'
                    }`}>
                      {proyecto.categoria}
                    </span>
                  </div>
                </div>

                {/* Contenido del Proyecto */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-navy mb-3">{proyecto.titulo}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{proyecto.descripcion}</p>
                  
                  {/* Detalles del Proyecto */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-golden" />
                      <span>{proyecto.ubicacion}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4 text-golden" />
                      <span>{proyecto.fecha}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Building className="w-4 h-4 text-golden" />
                      <span>{proyecto.superficie}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Wrench className="w-4 h-4 text-golden" />
                      <span>{proyecto.toneladas}</span>
                    </div>
                  </div>

                  {/* Aspectos Técnicos */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-navy mb-2">Aspectos Técnicos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {proyecto.aspectos.map((aspecto, index) => (
                        <span key={index} className="px-3 py-1 bg-golden/10 text-golden text-sm rounded-full font-medium">
                          {aspecto}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Botón de Más Información */}
                  <Button variant="secondary" className="w-full shadow-glow">
                    Ver Detalles del Proyecto
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Proyectos;
