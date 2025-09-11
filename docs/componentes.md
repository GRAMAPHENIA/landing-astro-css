# Guía de Componentes

Esta guía detalla cada componente de la landing page, su propósito, estructura y cómo personalizarlos.

## Índice de Componentes

- [Header](#header) - Navegación principal
- [Hero](#hero) - Sección de bienvenida
- [Features](#features) - Características del producto
- [Products](#products) - Productos/servicios
- [Testimonials](#testimonials) - Testimonios de usuarios
- [FAQ](#faq) - Preguntas frecuentes
- [Contact](#contact) - Formulario de contacto
- [CTA](#cta) - Call to action final
- [Footer](#footer) - Pie de página

---

## Header

**Archivo**: `src/components/Header.astro`

### Propósito
Navegación principal responsive con logo y menú móvil tipo sidebar.

### Estructura
```astro
<header class="header">
  <div class="header-content">
    <a href="#top" class="logo">              <!-- Logo -->
    <nav class="nav-desktop">                 <!-- Navegación desktop -->
    <button class="mobile-menu-btn">          <!-- Trigger menú móvil -->
  </div>
  <div class="mobile-menu-overlay">           <!-- Overlay para cerrar -->
  <nav class="mobile-sidebar">               <!-- Sidebar móvil -->
</header>
```

### Características Técnicas
- **Navegación Desktop**: Lista horizontal con enlaces
- **Menú Móvil**: Sidebar con overlay y animaciones CSS
- **Logo**: SVG optimizado con lazy loading
- **Interactividad**: JavaScript vanilla para toggle del menú

### JavaScript Asociado
```javascript
// En Layout.astro
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileSidebar = document.getElementById('mobileSidebar');
// Toggle logic...
```

### Personalización
1. **Cambiar logo**: Reemplazar `/logos/logo.svg`
2. **Modificar navegación**: Editar array de links en el componente
3. **Estilos**: Modificar classes `.header`, `.nav-desktop`, `.mobile-sidebar`

### Estilos CSS Principales
```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--color-base);
  z-index: 1000;
  border-bottom: 1px solid var(--color-border-light);
}
```

---

## Hero

**Archivo**: `src/components/Hero.astro`

### Propósito
Sección principal de bienvenida con título impactante y call-to-action.

### Estructura
```astro
<section class="hero">
  <div class="container">
    <div class="hero-content text-center">
      <h1>                                    <!-- Título principal -->
      <p class="hero-description">            <!-- Descripción -->
      <div class="hero-buttons">              <!-- Botones CTA -->
```

### Características Técnicas
- **Above the Fold**: Primera sección visible
- **CSS Crítico**: Estilos inline en Layout.astro
- **Tipografía**: H1 con span destacado
- **CTA Button**: Enlace a sección de contacto

### Elementos Clave
- **Título**: `<h1>` con palabra clave en `<span>`
- **Descripción**: Propuesta de valor concisa
- **CTA**: Botón principal "Empezar ahora"

### Personalización
```astro
<!-- Cambiar título -->
<h1>Tu nuevo <span>Producto</span> Descripción</h1>

<!-- Cambiar descripción -->
<p class="hero-description">Nueva propuesta de valor...</p>

<!-- Cambiar CTA -->
<a href="#contact" class="btn btn-primary">Nuevo CTA</a>
```

### Estilos CSS Principales
```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 8rem 0 4rem;
}
```

---

## Features

**Archivo**: `src/components/Features.astro`

### Propósito
Presenta las tres características principales del producto en grid responsive.

### Estructura
```astro
<section id="features">
  <div class="container section">
    <div class="section-intro text-center">   <!-- Introducción -->
    <div class="grid grid-3">                 <!-- Grid de características -->
      <div class="card text-center">          <!-- Feature card -->
```

### Características Técnicas
- **Grid System**: CSS Grid responsive (1 col móvil, 3 cols desktop)
- **Cards**: Hover effects y transiciones suaves
- **Iconos**: SVG optimizados con lazy loading
- **Layout**: Mobile-first approach

### Estructura de Card
```astro
<div class="card text-center">
  <div class="card-visual">
    <img src="/icons/icon.svg" alt="..." loading="lazy" />
  </div>
  <h3 class="card-title">Título</h3>
  <p class="card-text">Descripción</p>
</div>
```

### Personalización
1. **Cambiar iconos**: Reemplazar archivos en `/public/icons/`
2. **Agregar/quitar features**: Duplicar/eliminar `.card` divs
3. **Modificar grid**: Cambiar `.grid-3` por `.grid-2` o `.grid-4`

### Iconos Incluidos
- `thumbs-up.svg` - Fácil de usar
- `zap.svg` - Resultados rápidos  
- `shield-check.svg` - Completamente seguro

---

## Products

**Archivo**: `src/components/Products.astro`

### Propósito
Muestra los productos o servicios disponibles en formato de cards.

### Estructura
```astro
<section id="products">
  <div class="container section">
    <div class="section-intro text-center">
    <div class="grid grid-2">               <!-- Grid de productos -->
```

### Características Técnicas
- **Grid 2 Columnas**: Responsive layout
- **Product Cards**: Información de precio y características
- **CTA Buttons**: Enlaces a acciones específicas

### Personalización
- Modificar información de productos
- Cambiar precios y características
- Actualizar botones de acción

---

## Testimonials

**Archivo**: `src/components/Testimonials.astro`

### Propósito
Muestra testimonios de clientes para generar confianza social.

### Estructura
```astro
<section id="testimonials">
  <div class="container section">
    <div class="section-intro text-center">
    <div class="grid grid-3">               <!-- Grid de testimonios -->
```

### Características Técnicas
- **Social Proof**: Testimonios reales de usuarios
- **Avatar Images**: Fotos de perfil optimizadas
- **Quote Format**: Formato de cita con comillas

### Personalización
```astro
<div class="testimonial">
  <div class="testimonial-content">
    <p>"Nuevo testimonio aquí..."</p>
  </div>
  <div class="testimonial-author">
    <img src="/avatars/usuario.jpg" alt="Nombre" />
    <div>
      <strong>Nombre Usuario</strong>
      <span>Cargo, Empresa</span>
    </div>
  </div>
</div>
```

---

## FAQ

**Archivo**: `src/components/FAQ.astro`

### Propósito
Sección de preguntas frecuentes con acordeón interactivo.

### Estructura
```astro
<section id="faq">
  <div class="faq-list">
    <div class="faq-item">
      <div class="faq-question">            <!-- Pregunta clickeable -->
      <div class="faq-answer">              <!-- Respuesta expandible -->
```

### Características Técnicas
- **Acordeón JavaScript**: Vanilla JS para toggle
- **Animaciones CSS**: Transiciones suaves
- **Chevron Icons**: Indicadores visuales de estado
- **Accesible**: Navegación por teclado

### JavaScript Asociado
```javascript
// En Layout.astro - FAQ toggle
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    const isActive = item.classList.contains("active");
    
    // Cerrar todos
    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("active");
    });
    
    // Abrir el clickeado si no estaba activo
    if (!isActive) {
      item.classList.add("active");
    }
  });
});
```

### Personalización
```astro
<div class="faq-item">
  <div class="faq-question">
    Nueva pregunta aquí
    <svg class="chevron"><!-- Chevron icon --></svg>
  </div>
  <div class="faq-answer">
    <div class="faq-content">
      Respuesta detallada aquí...
    </div>
  </div>
</div>
```

### Estilos CSS del Acordeón
```css
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.faq-item.active .faq-answer {
  max-height: 200px;
}
```

---

## Contact

**Archivo**: `src/components/Contact.astro`

### Propósito
Formulario de contacto para captura de leads y comunicación.

### Estructura
```astro
<section id="contact">
  <div class="contact-content text-center">
    <h2 class="section-title">               <!-- Título -->
    <form class="contact-form">              <!-- Formulario -->
      <div class="form-group">               <!-- Campos -->
```

### Características Técnicas
- **HTML5 Semántico**: Validación nativa del navegador
- **Campos Requeridos**: Marcados con `required`
- **Responsive Design**: Layout adaptativo
- **Accesibilidad**: Labels y placeholders descriptivos

### Campos del Formulario
```astro
<input type="text" name="nombre" placeholder="Nombre" required />
<input type="email" name="email" placeholder="Email" required />
<textarea name="mensaje" placeholder="Mensaje" required></textarea>
<button type="submit" class="btn btn-primary">Enviar</button>
```

### Personalización
1. **Agregar campos**: Duplicar `.form-group` divs
2. **Validación custom**: Añadir JavaScript de validación
3. **Integrar backend**: Conectar con servicio de emails

### Estilos CSS del Formulario
```css
.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--color-border);
  background: var(--color-base);
}
```

---

## CTA

**Archivo**: `src/components/CTA.astro`

### Propósito
Call-to-action final para conversión antes del footer.

### Estructura
```astro
<section class="cta-section">
  <div class="container">
    <div class="cta-content text-center">
      <h2>                                  <!-- Título final -->
      <p>                                   <!-- Mensaje de urgencia -->
      <a href="#contact" class="btn">       <!-- Botón CTA -->
```

### Características Técnicas
- **Posición Estratégica**: Antes del footer
- **Urgency Message**: Crear sensación de urgencia
- **Single CTA**: Un solo botón de acción
- **High Contrast**: Destaca visualmente

### Personalización
```astro
<div class="cta-content text-center">
  <h2>No pierdas más tiempo</h2>
  <p>Únete a los miles de usuarios que ya mejoraron su productividad</p>
  <a href="#contact" class="btn btn-primary">
    Empezar Ahora
    <img src="/icons/arrow-right-from-line.svg" alt="" />
  </a>
</div>
```

---

## Footer

**Archivo**: `src/components/Footer.astro`

### Propósito
Información legal, links secundarios y cierre de la página.

### Estructura
```astro
<footer class="footer">
  <div class="container">
    <div class="footer-content">            <!-- Contenido principal -->
    <div class="footer-bottom">             <!-- Copyright y legal -->
```

### Características Técnicas
- **Links Duplicados**: Navegación secundaria
- **Copyright**: Información legal
- **Social Links**: Enlaces a redes sociales (opcional)
- **Minimal Design**: Diseño limpio y simple

### Personalización
```astro
<div class="footer-content">
  <div class="footer-section">
    <h4>Navegación</h4>
    <ul>
      <li><a href="#features">Características</a></li>
      <!-- Más links -->
    </ul>
  </div>
</div>
```

---

## Convenciones de Código

### Nomenclatura CSS
- **BEM-like**: `.component`, `.component-element`, `.component-modifier`
- **Descriptivo**: Nombres que indican función, no apariencia
- **Consistente**: Patrones repetibles

### Estructura de Componentes Astro
```astro
---
// JavaScript/TypeScript del componente
// Importaciones
// Lógica
---

<!-- HTML del componente -->
<section class="component-name">
  <div class="container">
    <!-- Contenido -->
  </div>
</section>

<style>
/* Estilos específicos del componente si es necesario */
</style>
```

### Mejores Prácticas
1. **Un propósito por componente**
2. **Semántica HTML correcta**
3. **Mobile-first CSS**
4. **Lazy loading para imágenes**
5. **Accesibilidad desde el diseño**

---

Esta guía te permite entender y modificar cada componente de la landing page de manera eficiente y manteniendo la calidad del código.
