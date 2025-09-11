# 📖 Documentación del Proyecto Landing Page Edge

Bienvenido a la documentación completa de **Landing Page Edge**, una landing page optimizada construida con Astro que alcanza puntuaciones perfectas en Google Lighthouse.

## 📋 Índice de Documentación

### 📖 Documentación Principal
- **[README Principal](README.md)** - Guía técnica completa del proyecto
- **[Guía de Componentes](componentes.md)** - Detalles de cada componente Astro
- **[Sistema de Estilos](estilos.md)** - Arquitectura CSS y metodología  
- **[Optimización y Performance](optimizacion.md)** - Estrategias de rendimiento

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción  
npm run build
npm run preview
```

## 🎯 Características Principales

- ✅ **Lighthouse 100/100** en todas las categorías
- ✅ **Core Web Vitals** optimizados
- ✅ **Microminimalismo** - Solo lo esencial
- ✅ **CSS Vanilla** sin frameworks
- ✅ **Accesibilidad WCAG 2.1 AAA**
- ✅ **Service Worker** implementado

## 🏗️ Arquitectura del Proyecto

```
src/
├── components/     # Componentes Astro reutilizables
├── layouts/        # Layouts base
├── pages/          # Páginas del sitio
└── styles/         # Sistema de estilos modular
    ├── base.css        # Variables y reset
    ├── layout.css      # Layouts y grids  
    ├── components.css  # Componentes
    └── utilities.css   # Utilidades
```

## 📊 Métricas de Performance

| Métrica | Desktop | Mobile | Estado |
|---------|---------|--------|---------|
| **Performance** | 100/100 | 100/100 | ✅ |
| **Accessibility** | 100/100 | 100/100 | ✅ |
| **Best Practices** | 100/100 | 100/100 | ✅ |
| **SEO** | 100/100 | 100/100 | ✅ |

### Core Web Vitals

| Métrica | Valor | Objetivo | Estado |
|---------|-------|----------|---------|
| **LCP** | ~1.2s | < 2.5s | ✅ |
| **FID** | ~45ms | < 100ms | ✅ |
| **CLS** | ~0.02 | < 0.1 | ✅ |

## 🧩 Componentes Incluidos

### Navegación
- **[Header](componentes.md#header)** - Navegación responsive con menú móvil
- **[Footer](componentes.md#footer)** - Pie de página minimalista

### Contenido Principal  
- **[Hero](componentes.md#hero)** - Sección de bienvenida impactante
- **[Features](componentes.md#features)** - Características del producto
- **[Products](componentes.md#products)** - Productos/servicios
- **[Testimonials](componentes.md#testimonials)** - Testimonios de clientes

### Interactivos
- **[FAQ](componentes.md#faq)** - Preguntas frecuentes con acordeón  
- **[Contact](componentes.md#contact)** - Formulario de contacto
- **[CTA](componentes.md#cta)** - Call to action final

## 🎨 Sistema de Diseño

### Colores (OKLCH)
```css
--color-base: oklch(96% 0.01 80);           /* Fondo */
--color-text: oklch(17% 0.00906 42.94);    /* Texto */  
--color-primary: oklch(54.916% 0.02065 48.211); /* Marca */
```

### Tipografía
```css
/* System Font Stack */
font-family: system-ui, -apple-system, "Segoe UI", sans-serif;

/* Escala */
H1: 2.75rem (44px)  /* Títulos principales */
H2: 2rem (32px)     /* Títulos de sección */  
H3: 1.375rem (22px) /* Subtítulos */
P: 1.125rem (18px)  /* Texto body */
```

### Grid System
```css
.grid-2  /* 2 columnas en desktop, 1 en móvil */
.grid-3  /* 3 columnas en desktop, 1 en móvil */
```

## ⚡ Optimizaciones Implementadas

### Critical CSS
- **Inline Critical CSS** en `<head>` para above-the-fold
- **CSS Code Splitting** automático
- **Asset minification** con esbuild

### JavaScript  
- **Vanilla JS only** (~2KB total)
- **Event delegation** eficiente
- **Progressive enhancement**

### Assets
- **System fonts** únicamente (0KB font loading)
- **SVG icons** optimizados  
- **Lazy loading** para imágenes no críticas
- **Service Worker** para caching inteligente

### Accesibilidad
- **Contraste AAA** (8.2:1 ratio)
- **Navegación por teclado** completa
- **Screen reader** optimizado
- **ARIA labels** apropiados

## 🛠️ Herramientas de Desarrollo

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción  
npm run preview  # Preview del build
```

### Testing
```bash
# Lighthouse testing
npx lighthouse http://localhost:4321 --view

# Bundle analysis
npm run build && ls -la dist/
```

## 📚 Guías Detalladas

### [📖 README Principal](README.md)
Documentación técnica completa con:
- Arquitectura del proyecto
- Tecnologías utilizadas  
- Estructura de archivos
- Configuraciones de Astro
- Mejores prácticas de desarrollo

### [🧩 Guía de Componentes](componentes.md)  
Detalles de implementación:
- Propósito de cada componente
- Estructura HTML/Astro
- JavaScript asociado
- Guías de personalización
- Ejemplos de código

### [🎨 Sistema de Estilos](estilos.md)
Arquitectura CSS completa:
- Variables y tokens de diseño
- Sistema de tipografía  
- Grid system responsive
- Metodología BEM-like
- Convenciones de nomenclatura

### [⚡ Optimización y Performance](optimizacion.md)
Estrategias de rendimiento:
- Core Web Vitals optimization
- Critical CSS strategy
- Asset optimization
- Caching strategies  
- Performance monitoring

## 🔧 Personalización

### Cambiar Colores
```css
/* En base.css */
:root {
  --color-primary: oklch(60% 0.15 180); /* Nuevo color marca */
}
```

### Agregar Componente
```bash
# 1. Crear archivo
touch src/components/NuevoComponente.astro

# 2. Implementar
# Ver guía de componentes para estructura

# 3. Importar en index.astro
import NuevoComponente from "../components/NuevoComponente.astro";
```

### Modificar Contenido
```astro
<!-- En Hero.astro -->
<h1>Tu nuevo <span>Producto</span> Descripción</h1>
<p>Nueva propuesta de valor...</p>
```

## 🚀 Deployment

### Build para Producción
```bash
# Generar build optimizado
npm run build

# Resultado en dist/
dist/
├── index.html      # ~8KB gzipped
├── assets/
│   ├── style.css   # ~4KB gzipped  
│   └── script.js   # ~2KB gzipped
└── icons/          # SVGs optimizados
```

### Configuración del Servidor
```
# Cache headers recomendados
Cache-Control: public, max-age=31536000  # Assets (1 año)
Cache-Control: public, max-age=3600      # HTML (1 hora)
```

## 📈 Monitoreo

### Métricas a Vigilar
- **Lighthouse scores** (mantener 100/100)
- **Core Web Vitals** en producción
- **Bundle size** (mantener < 100KB)
- **First Load** time

### Tools Recomendadas
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Web.dev Measure](https://web.dev/measure/)
- [GTmetrix](https://gtmetrix.com/)

## 🤝 Contribución

### Workflow de Desarrollo
1. **Fork** el proyecto
2. **Crear** feature branch  
3. **Implementar** cambios siguiendo las guías
4. **Testing** con Lighthouse
5. **Pull Request** con descripción detallada

### Estándares de Calidad
- ✅ Lighthouse 100/100 mantenido
- ✅ Accesibilidad WCAG 2.1 AAA
- ✅ CSS válido y semántico  
- ✅ JavaScript vanilla únicamente
- ✅ Documentación actualizada

## 📞 Soporte

### Recursos Útiles
- [Documentación de Astro](https://docs.astro.build/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev Performance](https://web.dev/performance/)

### Issues Comunes
- **Build errors**: Verificar versión de Node.js
- **Lighthouse drops**: Revisar optimizaciones implementadas  
- **CSS conflicts**: Seguir metodología BEM-like
- **JS errors**: Mantener vanilla JavaScript

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

---

**¿Necesitas ayuda?** Consulta las guías detalladas o abre un issue en el repositorio.

**Landing Page Edge** - Optimizada para el rendimiento, construida para el futuro. 🚀
