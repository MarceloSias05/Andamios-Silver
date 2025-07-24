# 🚀 Guía de Deployment para Hostinger

## Preparación del Build de Producción

### 1. **Verificación Pre-Build**
✅ Todas las páginas incluidas en App.tsx:
- `/` - Index (Página principal)
- `/productos` - Catálogo de productos  
- `/proyectos` - Portafolio de proyectos
- `/carrito` - Sistema de carrito y cotizaciones
- `/terminos-condiciones` - Términos y condiciones
- `/aviso-privacidad` - Aviso de privacidad
- `*` - Página 404 (NotFound)

✅ Variables de entorno configuradas:
- `VITE_OPENROUTESERVICE_API_KEY` - Para cálculo de distancia
- `VITE_COMPANY_ADDRESS` - Dirección de la empresa

✅ Archivos de configuración:
- `.htaccess` - Configurado para React Router
- `vite.config.ts` - Optimizado para producción
- `.gitignore` - Protege variables sensibles

### 2. **Comandos de Build**

```bash
# Instalar dependencias (si es necesario)
npm install

# Generar build de producción
npm run build
```

### 3. **Contenido del Directorio `dist/`**

Después del build, el directorio `dist/` contendrá:
- `index.html` - Página principal
- `assets/` - CSS, JS y otros assets optimizados
- `images/` - Imágenes del proyecto
- `.htaccess` - Configuración del servidor
- Archivos estáticos optimizados

### 4. **Deployment en Hostinger**

#### Paso 1: Acceder al cPanel
1. Iniciar sesión en tu cuenta de Hostinger
2. Ir al cPanel de tu dominio
3. Buscar "File Manager" o "Administrador de archivos"

#### Paso 2: Subir archivos
1. Navegar a la carpeta `public_html/` (o la carpeta de tu dominio)
2. **IMPORTANTE**: Eliminar todos los archivos existentes en esa carpeta
3. Subir todo el contenido de la carpeta `dist/` a `public_html/`

#### Paso 3: Verificar estructura
La estructura en Hostinger debe ser:
```
public_html/
├── index.html
├── .htaccess
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [otros archivos]
└── [archivos de imágenes]
```

#### Paso 4: Configurar variables de entorno (Opcional)
Si necesitas cambiar las API keys en producción:
1. En cPanel, buscar "Variables de entorno" o "Environment Variables"
2. Agregar:
   - `VITE_OPENROUTESERVICE_API_KEY`
   - `VITE_COMPANY_ADDRESS`

### 5. **Verificación Post-Deployment**

#### URLs a probar:
- `https://tudominio.com/` - Página principal
- `https://tudominio.com/productos` - Catálogo
- `https://tudominio.com/carrito` - Carrito
- `https://tudominio.com/proyectos` - Proyectos
- `https://tudominio.com/terminos-condiciones` - Términos
- `https://tudominio.com/aviso-privacidad` - Privacidad

#### Funcionalidades a verificar:
- ✅ Navegación entre páginas
- ✅ Carrito de compras (agregar/eliminar productos)
- ✅ Persistencia del carrito (localStorage)
- ✅ Cálculo automático de distancia
- ✅ Generación de cotizaciones
- ✅ Descarga de cotizaciones HTML
- ✅ Formularios de contacto
- ✅ Diseño responsive en móvil

### 6. **Optimizaciones Incluidas**

#### Performance:
- ✅ Imágenes optimizadas
- ✅ CSS y JS minificados
- ✅ Compresión gzip habilitada
- ✅ Cache de assets estáticos

#### SEO:
- ✅ Meta tags configurados
- ✅ URLs amigables
- ✅ Estructura semántica

#### Seguridad:
- ✅ Headers de seguridad
- ✅ Variables sensibles protegidas
- ✅ Validación de formularios

### 7. **Solución de Problemas Comunes**

#### Página en blanco:
- Verificar que `.htaccess` esté en la raíz
- Comprobar que no hay errores en la consola del navegador
- Asegurar que todas las rutas están configuradas

#### Carrito no funciona:
- Verificar que localStorage esté habilitado
- Comprobar que no hay errores de JavaScript

#### Cálculo de distancia no funciona:
- Verificar que la API key esté configurada
- Comprobar conectividad a internet
- El sistema tiene fallback automático

### 8. **Contacto y Soporte**

Si hay problemas con el deployment:
1. Verificar logs de error en cPanel
2. Comprobar permisos de archivos (755 para directorios, 644 para archivos)
3. Asegurar que el dominio esté correctamente configurado

---

## 🎯 **Resumen de Deployment**

1. **Ejecutar**: `npm run build`
2. **Subir**: Todo el contenido de `dist/` a `public_html/`
3. **Verificar**: Todas las URLs funcionan correctamente
4. **Probar**: Funcionalidades del carrito y cotizaciones

**¡Tu sitio estará listo para recibir clientes con todas las funcionalidades completas!** 🚀
