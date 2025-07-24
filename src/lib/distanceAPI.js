// Configuración de APIs para cálculo de distancia

// Configuración de Google Maps Distance Matrix API
export const googleMapsConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  baseUrl: 'https://maps.googleapis.com/maps/api/distancematrix/json',
  
  buildUrl: (origen, destino, apiKey) => {
    return `${googleMapsConfig.baseUrl}?origins=${encodeURIComponent(origen)}&destinations=${encodeURIComponent(destino)}&units=metric&key=${apiKey}`;
  },
  
  parseResponse: (response) => {
    if (response.status === 'OK' && response.rows[0]?.elements[0]?.status === 'OK') {
      const distanceText = response.rows[0].elements[0].distance.text;
      const distanceValue = response.rows[0].elements[0].distance.value; // metros
      return Math.round(distanceValue / 1000); // convertir a kilómetros
    }
    return 0;
  }
};

// Configuración de OpenRouteService API (gratuito hasta 2000 requests/día)
export const openRouteServiceConfig = {
  apiKey: import.meta.env.VITE_OPENROUTESERVICE_API_KEY || '',
  baseUrl: 'https://api.openrouteservice.org/v2/matrix/driving-car',
  
  buildRequestBody: (origen, destino) => {
    return {
      locations: [[origen.lng, origen.lat], [destino.lng, destino.lat]],
      metrics: ['distance'],
      units: 'km'
    };
  },
  
  parseResponse: (response) => {
    if (response.distances && response.distances[0] && response.distances[0][1]) {
      return Math.round(response.distances[0][1]);
    }
    return 0;
  }
};

// Función para geocodificar direcciones usando Nominatim (gratuito)
export const geocodeAddress = async (address) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1`
    );
    const data = await response.json();
    
    if (data && data.length > 0) {
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon)
      };
    }
    return null;
  } catch (error) {
    console.error('Error geocodificando:', error);
    return null;
  }
};

// Función principal para calcular distancia usando APIs reales
export const calculateDistanceWithAPI = async (origen, destino, provider = 'google') => {
  try {
    if (provider === 'google' && googleMapsConfig.apiKey) {
      // Usar Google Maps
      const url = googleMapsConfig.buildUrl(origen, destino, googleMapsConfig.apiKey);
      const response = await fetch(url);
      const data = await response.json();
      return googleMapsConfig.parseResponse(data);
      
    } else if (provider === 'openroute' && openRouteServiceConfig.apiKey) {
      // Usar OpenRouteService (requiere geocodificación previa)
      const origenCoords = await geocodeAddress(origen);
      const destinoCoords = await geocodeAddress(destino);
      
      if (!origenCoords || !destinoCoords) {
        throw new Error('No se pudieron geocodificar las direcciones');
      }
      
      const requestBody = openRouteServiceConfig.buildRequestBody(origenCoords, destinoCoords);
      
      const response = await fetch(openRouteServiceConfig.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': openRouteServiceConfig.apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      
      const data = await response.json();
      return openRouteServiceConfig.parseResponse(data);
      
    } else {
      throw new Error('No hay API key configurada o proveedor no válido');
    }
    
  } catch (error) {
    console.error('Error calculando distancia con API:', error);
    throw error;
  }
};

// Configuración para desarrollo/testing
export const mockDistanceCalculation = (direccion) => {
  const direccionLower = direccion.toLowerCase();
  
  // Zonas cercanas (8-15 km)
  const zonasCercanas = [
    'centro', 'monterrey centro', 'barrio antiguo', 'macroplaza',
    'san nicolás', 'san nicolás de los garza', 'guadalupe',
    'santa catarina', 'san pedro', 'san pedro garza garcía',
    'escobedo', 'general escobedo', 'apodaca'
  ];
  
  // Zonas medias (18-28 km)
  const zonasMedias = [
    'garcía', 'juárez', 'cadereyta', 'pesquería',
    'salinas victoria', 'ciénega de flores', 'zuazua',
    'el carmen', 'abasolo', 'hidalgo'
  ];
  
  // Zonas lejanas (35-50 km)
  const zonasLejanas = [
    'linares', 'montemorelos', 'allende', 'santiago',
    'rayones', 'iturbide', 'galeana', 'aramberri'
  ];
  
  for (const zona of zonasCercanas) {
    if (direccionLower.includes(zona)) {
      return Math.floor(Math.random() * 8) + 8; // 8-15 km
    }
  }
  
  for (const zona of zonasMedias) {
    if (direccionLower.includes(zona)) {
      return Math.floor(Math.random() * 11) + 18; // 18-28 km
    }
  }
  
  for (const zona of zonasLejanas) {
    if (direccionLower.includes(zona)) {
      return Math.floor(Math.random() * 16) + 35; // 35-50 km
    }
  }
  
  return 0; // No encontrado
};
