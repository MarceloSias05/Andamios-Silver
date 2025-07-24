# Configuración de APIs para Cálculo de Distancia

## Descripción
El sistema de carrito incluye cálculo automático de costos de flete basado en la distancia real entre el almacén y la dirección de entrega. El sistema soporta múltiples proveedores de APIs con fallback automático.

## Proveedores de APIs Soportados

### 1. Google Maps Distance Matrix API (Recomendado)
- **Precisión**: Muy alta
- **Límites**: 25,000 requests gratuitos por día
- **Costo**: $5 USD por 1,000 requests adicionales

#### Configuración:
1. Ir a [Google Cloud Console](https://console.cloud.google.com/)
2. Crear un nuevo proyecto o seleccionar uno existente
3. Habilitar la "Distance Matrix API"
4. Crear credenciales (API Key)
5. Configurar restricciones de la API Key (opcional pero recomendado)
6. Agregar la API key al archivo `.env`:
```
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### 2. OpenRouteService API (Alternativa Gratuita)
- **Precisión**: Alta
- **Límites**: 2,000 requests gratuitos por día
- **Costo**: Completamente gratuito hasta el límite

#### Configuración:
1. Ir a [OpenRouteService](https://openrouteservice.org/)
2. Crear una cuenta gratuita
3. Obtener tu API key desde el dashboard
4. Agregar la API key al archivo `.env`:
```
VITE_OPENROUTESERVICE_API_KEY=your_api_key_here
```

## Configuración del Proyecto

### 1. Variables de Entorno
Crear un archivo `.env` en la raíz del proyecto basado en `.env.example`:

```bash
# Copiar el archivo de ejemplo
cp .env.example .env

# Editar con tus API keys
# VITE_GOOGLE_MAPS_API_KEY=tu_google_maps_api_key
# VITE_OPENROUTESERVICE_API_KEY=tu_openrouteservice_api_key
# VITE_COMPANY_ADDRESS="Monterrey, Nuevo León, México"
```

### 2. Modo de Desarrollo
Si no configuras ninguna API key, el sistema funcionará en modo simulación usando patrones de direcciones conocidas de la zona metropolitana de Monterrey.

## Funcionamiento del Sistema

### Lógica de Fallback
1. **Google Maps API** (si está configurada)
2. **OpenRouteService API** (si Google falla y está configurada)
3. **Modo Simulación** (si todas las APIs fallan)

### Zonas de Flete
- **0-15 km**: $200 MXN
- **16-30 km**: $350 MXN
- **+30 km**: $400 MXN

### Tipos de Entrega
- **Recolección**: Cliente recoge en almacén (sin costo de flete)
- **Entrega a obra**: Se calcula flete según distancia

## Archivos Relacionados

- `src/lib/distanceAPI.js` - Configuración y funciones de APIs
- `src/pages/Carrito.tsx` - Implementación del cálculo en el carrito
- `.env.example` - Plantilla de variables de entorno
- `.env` - Variables de entorno (no incluido en git)

## Monitoreo y Debug

El sistema incluye logs en consola para facilitar el debug:

```javascript
// Ver en la consola del navegador
console.log('Calculando distancia con API...');
console.log('Distancia calculada:', distancia, 'km');
console.error('Error en API:', error);
```

## Costos Estimados

### Google Maps (uso promedio: 100 cálculos/día)
- **Gratis**: Primeros 25,000 requests/mes
- **Pagado**: ~$15 USD/mes para uso comercial moderado

### OpenRouteService
- **Completamente gratis**: Hasta 2,000 requests/día
- **Suficiente**: Para la mayoría de negocios pequeños y medianos

## Recomendaciones

1. **Para sitios en producción**: Usar Google Maps API por su precisión
2. **Para desarrollo/testing**: Usar OpenRouteService o modo simulación
3. **Para presupuestos ajustados**: OpenRouteService es suficiente
4. **Configurar ambas**: Para máxima disponibilidad del servicio

## Seguridad

- Las API keys están en variables de entorno
- No incluir el archivo `.env` en el control de versiones
- Configurar restricciones en las API keys de Google
- Monitorear el uso para evitar cargos inesperados
