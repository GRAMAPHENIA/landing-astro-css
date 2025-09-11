# Documentación Técnica - Landing Page Edge

## Índice
- [Introducción](#introducción)
- [Arquitectura del Proyecto](#arquitectura-del-proyecto)
- [Estructura de Archivos](#estructura-de-archivos)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Sistema de Estilos](#sistema-de-estilos)
- [Componentes](#componentes)
- [Optimizaciones de Rendimiento](#optimizaciones-de-rendimiento)
- [Accesibilidad](#accesibilidad)
- [SEO](#seo)
- [Guía de Desarrollo](#guía-de-desarrollo)

## Introducción

**Landing Page Edge** es una página de aterrizaje optimizada construida con **Astro**, diseñada para obtener puntuaciones perfectas en Google Lighthouse (100/100 en todas las categorías). El proyecto sigue un enfoque **microminimalista** priorizando el rendimiento, la accesibilidad y la experiencia de usuario.

### Objetivos del Proyecto
- ✅ **Performance**: 100/100 en Lighthouse
- ✅ **Accessibility**: 100/100 en Lighthouse
- ✅ **Best Practices**: 100/100 en Lighthouse
- ✅ **SEO**: 100/100 en Lighthouse
- ✅ **Core Web Vitals** optimizados
- ✅ **Responsive Design** completo

## Arquitectura del Proyecto

### Filosofía de Diseño: Microminimalismo

El proyecto adopta un enfoque **microminimalista** que se caracteriza por:

1. **CSS Vanilla**: Sin frameworks, solo estilos esenciales
2. **JavaScript Mínimo**: Solo interactividad necesaria
3. **Fuentes del Sistema**: Sin carga externa de fonts
4. **Colores Limitados**: Paleta en escala de grises principalmente
5. **Componentes Funcionales**: Cada elemento tiene un propósito específico

### Principios de Optimización

- **Critical CSS Inlining**: Estilos críticos directamente en el HTML
- **Lazy Loading**: Carga diferida de imágenes no críticas
- **CSS Code Splitting**: Separación automática de CSS
- **Asset Minification**: Minificación con esbuild
- **Service Worker**: Cache inteligente para recursos

## Estructura de Archivos

```
landing-alone/
├── public/                 # Archivos estáticos
│   ├── favicon.png        # Favicon optimizado
│   ├── robots.txt         # Configuración SEO
│   ├── sw.js             # Service Worker
│   ├── icons/            # Iconos SVG optimizados
│   │   ├── arrow-right-from-line.svg
│   │   ├── shield-check.svg
│   │   ├── square-menu.svg
│   │   ├── thumbs-up.svg
│   │   └── zap.svg
│   └── logos/
│       └── logo.svg      # Logo principal
├── src/
│   ├── components/       # Componentes Astro
│   │   ├── Contact.astro # Formulario de contacto
│   │   ├── CTA.astro     # Call to Action final
│   │   ├── FAQ.astro     # Preguntas frecuentes
│   │   ├── Features.astro # Características del producto
│   │   ├── Footer.astro  # Pie de página
│   │   ├── Header.astro  # Navegación principal
│   │   ├── Hero.astro    # Sección hero
│   │   ├── Products.astro # Productos/servicios
│   │   └── Testimonials.astro # Testimonios
│   ├── layouts/
│   │   └── Layout.astro  # Layout principal
│   ├── pages/
│   │   └── index.astro   # Página principal
│   └── styles/           # Sistema de estilos modular
│       ├── base.css      # Variables y reset
│       ├── components.css # Estilos de componentes
│       ├── layout.css    # Layouts y grids
│       ├── style.css     # Archivo principal
│       └── utilities.css # Utilidades
├── astro.config.mjs      # Configuración de Astro
├── package.json          # Dependencias
└── tsconfig.json         # Configuración TypeScript
```

## Tecnologías Utilizadas

### Framework Principal
- **Astro 5.13.5**: Framework moderno de desarrollo web
  - Static Site Generation (SSG)
  - Componentes server-side
  - Optimizaciones automáticas

### Herramientas de Desarrollo
- **esbuild**: Bundler y minificador ultrarrápido
- **Vite**: Dev server integrado en Astro
- **TypeScript**: Tipado estático (configurado)

### Tecnologías Web Nativas
- **HTML5 Semántico**: Estructura accesible
- **CSS3 Vanilla**: Sin frameworks externos
- **JavaScript ES6+**: Interactividad mínima

## Sistema de Estilos

### Arquitectura CSS Modular

El sistema de estilos está organizado en módulos especializados:

```css
/* style.css - Importa todos los módulos */
@import './base.css';      /* Variables y reset */
@import './layout.css';    /* Layouts y grids */
@import './components.css'; /* Componentes */
@import './utilities.css';  /* Utilidades */
```

### Variables CSS Personalizadas

```css
:root {
  /* Colores principales con OKLCH */
  --color-base: oklch(96% 0.01 80);
  --color-text: oklch(17% 0.00906 42.94);
  --color-text-dark: oklch(12% 0.00906 42.94);
  --color-primary: oklch(54.916% 0.02065 48.211);
  
  /* Sistema de border-radius */
  --radius-none: 0;
  --radius-small: 2px;
  --radius-medium: 4px;
}
```

### Sistema de Tipografía

- **Fuente Principal**: `system-ui, -apple-system, "Segoe UI", sans-serif`
- **Escala Tipográfica**:
  - H1: `2.75rem` (44px) - Títulos principales
  - H2: `2rem` (32px) - Títulos de sección
  - H3: `1.375rem` (22px) - Subtítulos
  - Párrafos: `1.125rem` (18px) - Texto body

### Grid System Responsive

```css
.grid {
  display: grid;
  gap: 4rem;
}

/* Mobile first */
.grid-2, .grid-3 {
  grid-template-columns: 1fr;
}

/* Tablet y desktop */
@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}
```

## Componentes

### 1. Layout.astro - Layout Principal

**Función**: Contenedor base con HTML semántico y optimizaciones críticas.

**Características**:
- CSS crítico inline para evitar FOUC (Flash of Unstyled Content)
- Meta tags optimizados para SEO
- JavaScript minimalista para interactividad
- Service Worker registration

**Código clave**:
```astro
<style>
  /* CSS crítico inline para above-the-fold */
  :root { /* Variables esenciales */ }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  /* Estilos para hero section */
</style>
```

### 2. Header.astro - Navegación Principal

**Función**: Navegación responsive con menú móvil tipo sidebar.

**Características**:
- Navegación desktop horizontal
- Menú móvil tipo sidebar con overlay
- Logo optimizado SVG
- Navegación por anclajes suaves

**Estructura**:
```astro
<header class="header">
  <nav class="nav-desktop">     <!-- Desktop navigation -->
  <button class="mobile-menu-btn"> <!-- Mobile menu trigger -->
  <nav class="mobile-sidebar">  <!-- Mobile sidebar -->
</header>
```

### 3. Hero.astro - Sección Hero

**Función**: Primera impresión con call-to-action principal.

**Características**:
- Título impactante con palabra clave resaltada
- Descripción concisa del valor
- CTA button prominente
- Diseño centrado y limpio

### 4. Features.astro - Características

**Función**: Presenta los beneficios principales del producto.

**Características**:
- Grid responsive de 3 columnas
- Iconos SVG optimizados
- Cards con hover effects sutiles
- Lazy loading en imágenes

### 5. FAQ.astro - Preguntas Frecuentes

**Función**: Acordeón interactivo para preguntas comunes.

**Características**:
- JavaScript vanilla para toggle
- Animaciones CSS suaves
- Iconos de estado (chevron)
- Accesible por teclado

**Interactividad**:
```javascript
// FAQ toggle en Layout.astro
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    // Toggle logic
  });
});
```

### 6. Contact.astro - Formulario de Contacto

**Función**: Captura de leads con formulario simple.

**Características**:
- Formulario HTML5 semántico
- Validación nativa del navegador
- Estilos minimalistas
- Fields requeridos marcados

### 7. Footer.astro - Pie de Página

**Función**: Información legal y enlaces secundarios.

**Características**:
- Links de navegación duplicados
- Información de copyright
- Diseño minimalista

## Optimizaciones de Rendimiento

### 1. Critical CSS Inlining

Los estilos críticos (above-the-fold) están insertados directamente en el HTML:

```astro
<!-- En Layout.astro -->
<style>
  /* Estilos críticos para evitar FOUC */
  :root { /* Variables */ }
  body { /* Estilos base */ }
  .hero { /* Estilos del hero */ }
</style>
```

### 2. Configuración Astro Optimizada

```javascript
// astro.config.mjs
export default defineConfig({
  vite: {
    build: {
      cssCodeSplit: true,    // Separación automática de CSS
      minify: 'esbuild',     // Minificación ultrarrápida
    }
  },
  build: {
    inlineStylesheets: 'auto', // CSS crítico automático
  }
});
```

### 3. Lazy Loading

Todas las imágenes no críticas usan lazy loading:

```astro
<img src="/icons/thumbs-up.svg" alt="..." loading="lazy" />
```

### 4. Service Worker (sw.js)

Cache inteligente para recursos estáticos:

```javascript
// Estrategia cache-first para assets
// Network-first para HTML
```

### 5. Optimización de Assets

- **Imágenes**: SVG para iconos, PNG optimizado para favicon
- **Fonts**: System fonts únicamente
- **JavaScript**: Mínimo y vanilla
- **CSS**: Modular y tree-shaken

## Accesibilidad

### Puntuación Lighthouse: 100/100

#### 1. HTML Semántico

```html
<header>  <!-- Navegación principal -->
<main>    <!-- Contenido principal -->
  <section id="features"> <!-- Secciones identificables -->
<footer>  <!-- Información secundaria -->
```

#### 2. Contraste de Color

Todos los elementos cumplen **WCAG 2.1 AAA**:
- Texto normal: 7:1 minimum
- Texto large: 4.5:1 minimum

#### 3. Navegación por Teclado

```javascript
// Navegación suave con teclado
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // Smooth scroll logic
  });
});
```

#### 4. ARIA Labels

```astro
<button aria-label="Abrir menú">
<button aria-label="Cerrar menú">
```

#### 5. Focus Management

```css
/* Focus visible para navegación por teclado */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

## SEO

### Meta Tags Optimizados

```astro
<title>{title}</title>
<meta name="description" content={description} />
<meta name="robots" content="index, follow" />
<meta name="theme-color" content="#ffffff" />
```

### Robots.txt

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

### Estructura de URLs

- URL limpia: `/`
- Anclajes semánticos: `#features`, `#contact`, etc.
- Navegación interna optimizada

### Core Web Vitals

Métricas objetivo:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Guía de Desarrollo

### Instalación

```bash
# Clonar el proyecto
git clone [repository-url]
cd landing-alone

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Producción
npm run build
npm run preview
```

### Comandos Disponibles

```json
{
  "dev": "astro dev",      // Servidor de desarrollo
  "build": "astro build",  // Build de producción
  "preview": "astro preview", // Preview del build
  "astro": "astro"         // CLI de Astro
}
```

### Estructura de Desarrollo

1. **Componentes**: Cada sección en un archivo `.astro`
2. **Estilos**: Sistema modular en `/styles/`
3. **Assets**: Todo en `/public/`
4. **Configuración**: `astro.config.mjs`

### Mejores Prácticas

#### CSS
- Usar variables CSS personalizadas
- Mobile-first approach
- Evitar frameworks externos
- Mantener especificidad baja

#### JavaScript
- Vanilla JavaScript únicamente
- Event delegation cuando sea posible
- Progressive enhancement
- Minimizar el bundle size

#### HTML
- Semántica correcta
- Atributos ARIA cuando sea necesario
- Lazy loading para imágenes no críticas
- Meta tags completos

#### Performance
- Critical CSS inline
- Lazy loading
- Service Worker
- Asset optimization

### Testing de Performance

```bash
# Lighthouse CI
npx lighthouse http://localhost:4321 --view

# Análisis de bundle
npm run build
# Revisar dist/ folder size
```

### Métricas Objetivo

- **Lighthouse Performance**: 100/100
- **Lighthouse Accessibility**: 100/100
- **Lighthouse Best Practices**: 100/100
- **Lighthouse SEO**: 100/100
- **Bundle Size**: < 100KB total
- **First Load**: < 2s en 3G

---

## Conclusión

Este proyecto demuestra cómo construir una landing page moderna y optimizada sin sacrificar funcionalidad. La combinación de Astro, CSS vanilla, y JavaScript mínimo resulta en una experiencia de usuario excepcional y métricas de rendimiento perfectas.

La arquitectura modular permite fácil mantenimiento y escalabilidad, mientras que las optimizaciones implementadas garantizan tiempos de carga ultrarrápidos en cualquier dispositivo.
