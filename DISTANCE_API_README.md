# Sistema de Cálculo de Distancia con APIs

## Configuración Actualizada ✅

### APIs Configuradas
1. **OpenRouteService API** (ACTIVA)
   - API Key configurada: `eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImJhMjUxZjFlOGE5ODRiOTc5YWE4YWM3MzFmMWUzZDM4IiwiaCI6Im11cm11cjY0In0=`
   - Límite: 2000 requests/día (gratuito)

2. **Google Maps Distance Matrix API** (DISPONIBLE)
   - Para activar: Obtener API key en [Google Cloud Console](https://console.cloud.google.com/)
   - Descomentar la línea `VITE_GOOGLE_MAPS_API_KEY` en `.env`

### Dirección de la Empresa Configurada
```
S. Timoteo 1532, Villas de San Cristobal 1er Sector, 66478 San Nicolás de los Garza, N.L.
```

## Cómo Funciona el Sistema

### 1. Flujo de Cálculo de Distancia
1. **Google Maps (prioritario)**: Si hay API key configurada
2. **OpenRouteService (alternativo)**: Si Google Maps falla
3. **Simulación local (fallback)**: Si ambas APIs fallan

### 2. Funcionalidades Implementadas
- ✅ Cálculo automático de distancia real
- ✅ Geocodificación de direcciones
- ✅ Cálculo de zonas de flete automático
- ✅ Estados de carga durante el cálculo
- ✅ Fallback inteligente en caso de error
- ✅ Debouncing para evitar llamadas excesivas

### 3. Zonas de Flete Automáticas
- **0-15 km**: $200 MXN
- **16-30 km**: $350 MXN
- **+30 km**: $400 MXN

## Archivos Clave

### `/src/lib/distanceAPI.js`
Configuración centralizada de todas las APIs:
- Configuración de Google Maps
- Configuración de OpenRouteService
- Geocodificación con Nominatim
- Función principal `calculateDistanceWithAPI()`
- Simulación para desarrollo `mockDistanceCalculation()`

### `/src/pages/Carrito.tsx`
Implementación del carrito con cálculo de distancia:
- Hook `calcularZonaPorAPI()` optimizado con `useCallback`
- Estado de carga `calculandoDistancia`
- Integración automática con formulario de envío

### `/.env`
Variables de entorno configuradas:
```env
VITE_OPENROUTESERVICE_API_KEY=eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImJhMjUxZjFlOGE5ODRiOTc5YWE4YWM3MzFmMWUzZDM4IiwiaCI6Im11cm11cjY0In0=
VITE_COMPANY_ADDRESS=S. Timoteo 1532, Villas de San Cristobal 1er Sector, 66478 San Nicolás de los Garza, N.L.
```

## Uso en Producción

### Para Activar Google Maps
1. Ir a [Google Cloud Console](https://console.cloud.google.com/)
2. Crear/seleccionar proyecto
3. Activar "Distance Matrix API"
4. Crear API key
5. Agregar al `.env`: `VITE_GOOGLE_MAPS_API_KEY=tu_api_key_aqui`

### Para Usar Solo OpenRouteService
El sistema ya está configurado y funcionando con OpenRouteService.

## Pruebas del Sistema

### Direcciones de Prueba
- **Zona Cercana (8-15 km)**: "Centro de Monterrey"
- **Zona Media (16-30 km)**: "García, Nuevo León"  
- **Zona Lejana (+30 km)**: "Linares, Nuevo León"

### Verificar Funcionamiento
1. Ir a la página del carrito
2. Agregar productos
3. Seleccionar "Entrega a domicilio"
4. Ingresar dirección de prueba
5. Verificar que se calcule la distancia automáticamente
6. Confirmar que se aplique el flete correcto

## Estado del Proyecto

✅ **COMPLETADO**: Sistema de cálculo de distancia con APIs reales
✅ **CONFIGURADO**: OpenRouteService API activa
✅ **PROBADO**: Fallback inteligente funcional
✅ **OPTIMIZADO**: Estados de carga y debouncing
✅ **DOCUMENTADO**: Instrucciones completas

El sistema está **listo para producción** con cálculo automático de distancias reales.
