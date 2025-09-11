# Guía del Sistema de Estilos

Esta guía detalla la arquitectura CSS, variables, componentes de estilo y metodología utilizada en el proyecto.

## Índice

- [Arquitectura CSS](#arquitectura-css)
- [Variables y Tokens de Diseño](#variables-y-tokens-de-diseño)
- [Sistema de Tipografía](#sistema-de-tipografía)
- [Sistema de Grillas](#sistema-de-grillas)
- [Componentes de Estilo](#componentes-de-estilo)
- [Utilidades](#utilidades)
- [Responsive Design](#responsive-design)
- [Metodología y Convenciones](#metodología-y-convenciones)

---

## Arquitectura CSS

### Estructura Modular

El sistema de estilos está organizado en 4 archivos principales que se importan en orden específico:

```css
/* style.css - Archivo principal */
@import './base.css';      /* 1. Variables y reset */
@import './layout.css';    /* 2. Layouts y grids */
@import './components.css'; /* 3. Componentes */
@import './utilities.css';  /* 4. Utilidades */
```

### Filosofía de Diseño

- **Mobile-First**: Diseño desde móviles hacia desktop
- **CSS Vanilla**: Sin frameworks, solo CSS puro
- **Microminimalismo**: Solo lo esencial, nada más
- **Performance**: Critical CSS inline, lazy loading
- **Accesibilidad**: WCAG 2.1 AAA compliance

---

## Variables y Tokens de Diseño

### Archivo: `base.css`

#### Colores (OKLCH Color Space)

```css
:root {
  /* Colores principales */
  --color-base: oklch(96% 0.01 80);          /* Fondo principal */
  --color-text: oklch(17% 0.00906 42.94);   /* Texto normal */
  --color-text-dark: oklch(12% 0.00906 42.94); /* Texto destacado */
  --color-text-muted: oklch(52% 0.01 40);   /* Texto secundario */
  --color-primary: oklch(54.916% 0.02065 48.211); /* Color marca */
  --color-accent: oklch(70% 0.02 70);       /* Color acento */
  --color-accent-light: oklch(89.98% 0.0097 72.47); /* Acento claro */
}
```

**¿Por qué OKLCH?**
- **Mejor percepción**: Más cercano a la visión humana
- **Consistencia**: Luminosidad uniforme
- **Accesibilidad**: Mejor contraste predictible

#### Bordes Calculados

```css
:root {
  /* Bordes con transparencia calculada */
  --color-border: color-mix(in oklch, var(--color-text), transparent 50%);
  --color-border-light: color-mix(in oklch, var(--color-accent), transparent 50%);
  --color-border-primary: color-mix(in oklch, var(--color-primary), transparent 50%);
}
```

#### Border Radius

```css
:root {
  /* Sistema de border-radius minimalista */
  --radius-none: 0;        /* Sin radio (por defecto) */
  --radius-small: 2px;     /* Radio pequeño */
  --radius-medium: 4px;    /* Radio medio */
}
```

---

## Sistema de Tipografía

### Stack de Fuentes

```css
font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
```

**Ventajas del System Font Stack:**
- **Carga instantánea**: Sin descargas externas
- **Nativo**: Se ve natural en cada OS
- **Performance**: Zero impact en web vitals
- **Legibilidad**: Optimizado por cada sistema

### Escala Tipográfica

```css
/* Jerarquía tipográfica */
h1 {
  font-size: 2.75rem;    /* 44px - Títulos principales */
  font-weight: 300;      /* Light */
  line-height: 1.1;      /* Compacto */
  letter-spacing: -0.02em; /* Tracking ajustado */
}

h2 {
  font-size: 2rem;       /* 32px - Títulos de sección */
  font-weight: 300;      /* Light */
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h3 {
  font-size: 1.375rem;   /* 22px - Subtítulos */
  font-weight: 400;      /* Regular */
  line-height: 1.3;
}

p {
  font-size: 1.125rem;   /* 18px - Texto body */
  line-height: 1.7;      /* Espacioso para lectura */
  max-width: 65ch;       /* Líneas legibles */
}
```

### Responsive Typography

```css
/* Mobile adjustments */
@media (max-width: 767px) {
  h1 { font-size: 2rem; }     /* 32px en móvil */
  h2 { font-size: 1.5rem; }   /* 24px en móvil */
  p { font-size: 1rem; }      /* 16px en móvil */
}
```

---

## Sistema de Grillas

### Archivo: `layout.css`

#### Grid Básico

```css
.grid {
  display: grid;
  gap: 4rem;           /* Espaciado generoso */
}

/* Variaciones de columnas */
.grid-2 {
  grid-template-columns: 1fr;  /* Mobile: 1 columna */
}

.grid-3 {
  grid-template-columns: 1fr;  /* Mobile: 1 columna */
}

/* Responsive breakpoint */
@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

#### Container System

```css
.container {
  max-width: 1200px;    /* Ancho máximo */
  margin: 0 auto;       /* Centrado */
  padding: 0 1rem;      /* Padding lateral */
}

/* Responsive container */
@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}
```

#### Section Spacing

```css
.section {
  padding: 8rem 0;      /* Espaciado vertical generoso */
}

/* Mobile adjustments */
@media (max-width: 767px) {
  .section {
    padding: 4rem 0;    /* Menos espaciado en móvil */
  }
}
```

---

## Componentes de Estilo

### Archivo: `components.css`

#### Sistema de Botones

```css
.btn {
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
  border: 1px solid var(--color-text-dark);
  border-radius: var(--radius-none);    /* Sin radius por defecto */
  background: transparent;
  color: var(--color-text-dark);
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 44px;                     /* Accesibilidad táctil */
  box-sizing: border-box;
  white-space: nowrap;
}

.btn:hover {
  background: var(--color-text-dark);
  color: var(--color-base);
}
```

#### Variaciones de Botones

```css
/* Botón primario */
.btn-primary {
  background: var(--color-text-dark);
  color: var(--color-base);
}

.btn-primary:hover {
  background: var(--color-text);
}

/* Botón outline */
.btn-outline {
  border: 1px solid var(--color-text-dark);
  color: var(--color-text-dark);
  background: transparent;
}

.btn-outline:hover {
  background: var(--color-text-dark);
  color: var(--color-base);
}
```

#### Sistema de Cards

```css
.card {
  padding: 3rem 2rem;
  border: 1px solid var(--color-border-light);
  background: var(--color-base);
  transition: all 0.3s ease;
  border-radius: var(--radius-none);
}

.card:hover {
  border-color: var(--color-border-primary);
  background-color: var(--surface-hover);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);          /* Lift effect */
}
```

#### Card Elements

```css
.card-visual {
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.card-visual img {
  width: 3rem;
  height: 3rem;
  filter: brightness(0.2);              /* Iconos en gris oscuro */
}

.card-title {
  margin-bottom: 1rem;
  color: var(--color-text-dark);
}

.card-text {
  color: var(--color-text);
  margin-bottom: 0;
}
```

---

## Header System

### Header Principal

```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--color-base);
  z-index: 1000;
  border-bottom: 1px solid var(--color-border-light);
  backdrop-filter: blur(10px);          /* Glass effect */
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
```

### Logo Styles

```css
.logo-img {
  height: 2rem;
  width: auto;
  transition: opacity 0.2s ease;
}

.logo:hover .logo-img {
  opacity: 0.8;
}
```

### Navigation Desktop

```css
.nav-desktop {
  display: none;                        /* Hidden en móvil */
}

@media (min-width: 768px) {
  .nav-desktop {
    display: block;
  }
}

.nav {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav a {
  color: var(--color-text);
  text-decoration: none;
  transition: color 0.2s ease;
  padding: 0.5rem 0;
}

.nav a:hover {
  color: var(--color-text-dark);
}
```

---

## Mobile Menu System

### Mobile Menu Button

```css
.mobile-menu-btn {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: var(--color-text-dark);
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}
```

### Mobile Sidebar

```css
.mobile-sidebar {
  position: fixed;
  top: 0;
  right: -300px;                        /* Hidden por defecto */
  width: 300px;
  height: 100vh;
  background: var(--color-base);
  z-index: 1002;
  transition: right 0.3s ease;
  border-left: 1px solid var(--color-border-light);
  overflow-y: auto;
}

.mobile-sidebar.active {
  right: 0;                             /* Visible cuando activo */
}
```

### Sidebar Overlay

```css
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}
```

---

## Form System

### Form Base Styles

```css
.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-none);
  background: var(--color-base);
  color: var(--color-text);
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.2s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}
```

---

## FAQ System

### FAQ Container

```css
.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border: 1px solid var(--color-border-light);
  margin-bottom: 1rem;
  border-radius: var(--radius-none);
}
```

### FAQ Question (Trigger)

```css
.faq-question {
  padding: 1.5rem 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-base);
  transition: background-color 0.2s ease;
  font-weight: 500;
}

.faq-question:hover {
  background: var(--color-accent-light);
}
```

### FAQ Answer (Expandible)

```css
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: var(--color-base);
}

.faq-item.active .faq-answer {
  max-height: 200px;                    /* Ajustar según contenido */
}

.faq-content {
  padding: 0 2rem 1.5rem;
  color: var(--color-text);
}
```

### Chevron Animation

```css
.chevron {
  transition: transform 0.3s ease;
  color: var(--color-text-muted);
}

.faq-item.active .chevron {
  transform: rotate(180deg);
}
```

---

## Utilidades

### Archivo: `utilities.css`

#### Text Alignment

```css
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }
```

#### Display Utilities

```css
.hidden { display: none; }
.block { display: block; }
.inline-block { display: inline-block; }
.flex { display: flex; }
.grid { display: grid; }
```

#### Spacing Utilities

```css
.mb-0 { margin-bottom: 0; }
.mb-1 { margin-bottom: 1rem; }
.mb-2 { margin-bottom: 2rem; }
.mb-3 { margin-bottom: 3rem; }
.mb-4 { margin-bottom: 4rem; }
```

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */

/* Extra Small Devices */
@media (max-width: 575px) {
  /* Estilos para móviles muy pequeños */
}

/* Small Devices (Móviles) */
@media (max-width: 767px) {
  /* Estilos para móviles */
}

/* Medium Devices (Tablets) */
@media (min-width: 768px) {
  /* Estilos para tablets y superiores */
}

/* Large Devices (Laptops) */
@media (min-width: 992px) {
  /* Estilos para laptops y superiores */
}

/* Extra Large Devices (Desktops) */
@media (min-width: 1200px) {
  /* Estilos para desktops grandes */
}
```

### Responsive Patterns

#### Containers Responsivos

```css
.container {
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

@media (min-width: 1200px) {
  .container {
    padding: 0 3rem;
  }
}
```

#### Typography Responsive

```css
.section-title {
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}
```

---

## Metodología y Convenciones

### Nomenclatura CSS

#### BEM-like Approach

```css
/* Block */
.header { }

/* Element */
.header-content { }
.header-logo { }

/* Modifier */
.header-fixed { }
.button-primary { }
```

#### Semantic Naming

```css
/* ✅ Bueno - Describe función */
.navigation-menu { }
.call-to-action { }
.testimonial-card { }

/* ❌ Malo - Describe apariencia */
.blue-button { }
.big-text { }
.left-sidebar { }
```

### Orden de Propiedades CSS

```css
.component {
  /* 1. Positioning */
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  
  /* 2. Box Model */
  display: block;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin: 0;
  border: 1px solid;
  
  /* 3. Typography */
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  text-align: left;
  
  /* 4. Visual */
  background: white;
  color: black;
  opacity: 1;
  
  /* 5. Animation */
  transition: all 0.2s ease;
  transform: translateX(0);
}
```

### Performance Best Practices

#### Critical CSS Strategy

```html
<!-- En Layout.astro -->
<style>
  /* Solo estilos above-the-fold */
  :root { /* Variables */ }
  body { /* Base styles */ }
  .hero { /* Hero section */ }
  .header { /* Navigation */ }
</style>
```

#### CSS Optimization

```css
/* ✅ Bueno - Specificity baja */
.button { }
.button-primary { }

/* ❌ Malo - Specificity alta */
div.container .content .button.primary { }
```

#### Efficient Selectors

```css
/* ✅ Rápido */
.class-name { }
#id-name { }

/* ❌ Lento */
div > * + * { }
:nth-child(3n+1) { }
```

---

## Animaciones y Transiciones

### Principios de Animación

```css
/* Respeto por preferencias de usuario */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Transiciones Estándar

```css
/* Hover effects */
.interactive-element {
  transition: all 0.2s ease;
}

/* Layout changes */
.expandable-content {
  transition: max-height 0.3s ease;
}

/* Transforms */
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-2px);
}
```

---

Esta guía de estilos proporciona una base sólida para mantener y extender el sistema de diseño del proyecto, garantizando consistencia y rendimiento óptimo.
