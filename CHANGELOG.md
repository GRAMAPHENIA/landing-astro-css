# Changelog

Todas las modificaciones notables de este proyecto serán documentadas en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.0] - 2025-09-10

### Añadido
- CSS crítico inline para optimización de Core Web Vitals
- Configuración Astro con CSS inlining y build optimizations
- Clase `.btn-outline` para botones con mejor contraste
- Sistema de spans con font-weight mejorado para mayor peso visual
- Optimizaciones de performance para Lighthouse

### Cambiado
- Colores de texto optimizados para mejor contraste WCAG AA
- `--color-text`: De 20.104% a 17% de luminosidad
- `--color-text-dark`: De opacity 0.834 a 12% de luminosidad sólida  
- `--color-text-muted`: De 60% a 52% de luminosidad
- Layout.astro con CSS crítico inline para render no bloqueante

### Mejorado
- Contraste de todos los elementos problemáticos identificados por Lighthouse
- Performance de Core Web Vitals (LCP, FCP) con CSS crítico
- Accesibilidad con contraste WCAG AA compliant en botones, cards y textos
- Legibilidad general manteniendo la estética del diseño

### Corregido
- Elementos con contraste insuficiente: botones outline, títulos de cards, precios, versión del footer
- Render blocking CSS con implementación de preload no bloqueante
- Colores de elementos featured que usaban color primario con bajo contraste

### Técnico
- CSS crítico extraído e inline en Layout.astro
- Configuración Astro optimizada con experimental.optimizeHoistedScript
- Todos los elementos pasan las pruebas de contraste de Lighthouse
- Mejoras significativas esperadas en puntuaciones de Performance y Accessibility

## [1.4.0] - 2025-09-09

### Añadido
- Sistema CSS modular con separación clara de responsabilidades
- Documentación completa del refactoring CSS en `/docs/refactoring-css-completado.md`
- Estructura de archivos CSS organizados por función (base, layout, components, utilities)
- Variables CSS optimizadas con eliminación de código no utilizado

### Cambiado
- Reestructuración completa del sistema de estilos en 4 archivos modulares
- Migración de estilos inline a CSS externo en todos los componentes
- Simplificación del sistema de variables de color (de 15+ a 8 esenciales)
- Organización mejorada de breakpoints responsive

### Mejorado
- Reducción del 50% en líneas de código CSS (de 800+ a ~400 líneas)
- Eliminación completa de duplicaciones de código CSS
- Mantenibilidad drasticamente mejorada con separación de responsabilidades
- Performance optimizada con menor tamaño de archivos CSS

### Corregido
- Link del CTA principal corregido para apuntar correctamente a `#contact`
- Estilos responsive caóticos reorganizados por breakpoints lógicos
- Variables CSS no utilizadas eliminadas del sistema

### Técnico
- Sistema de imports CSS modular: `style.css` → `base.css`, `layout.css`, `components.css`, `utilities.css`
- Mantenimiento exacto de la apariencia visual durante la refactorización
- Componentes Astro limpiados de estilos inline: Hero, Features, Products, Testimonials, FAQ, Contact, CTA, Footer
- Documentación técnica completa del proceso de refactoring

## [1.3.0] - 2025-09-07

### Añadido
- Sección Products con integración completa al sistema de navegación
- Link "Productos" en la navegación principal del header
- Scroll positioning mejorado para navegación entre secciones
- Sistema de alineación perfecta en cards de productos con flexbox
- Hover effects restaurados con sombras y elevación en cards

### Cambiado
- Hero call-to-action actualizado a "Empezar ahora" (más amigable y universal)
- Trust signals simplificados: "Fácil de usar" y "Soporte incluido"
- Textos optimizados para ser más universales y menos comerciales
- Layout de productos mejorado con precios y botones alineados horizontalmente
- Reducido espaciado entre cards de productos (gap: 1.5rem)

### Mejorado
- Cards de productos con altura uniforme y elementos alineados al fondo
- Mejor espaciado visual en trust signals del hero
- Lenguaje más neutral y profesional en call-to-actions
- UX optimizada para cualquier modelo de negocio
- Navegación más intuitiva con scroll-margin-top en todas las secciones

### Corregido
- Eliminados bordes externos innecesarios que rompían el diseño minimalista
- Formulario de contacto simplificado sin fondos ni paddings extra
- CSS limpieza de estilos obsoletos de productos
- Posicionamiento correcto al hacer clic en enlaces de navegación
- Restauración de bordes internos en cards y CTA para mantener la consistencia

### Técnico
- Optimización de CSS con eliminación de código obsoleto
- Sistema de flexbox implementado para alineación perfecta de elementos
- Variables CSS mantenidas para consistencia del sistema de colores OKLCH
- Responsive design mejorado para productos en mobile y desktop

## [1.2.0] - 2025-01-07

### Añadido
- Sistema de colores OKLCH con paleta tierra desaturada y bajo croma
- Variables CSS avanzadas para bordes con opacidad del 50% usando color-mix
- Sistema de border-radius cuadrado con variables --radius-none, --radius-small, --radius-medium
- Diseño responsive completo para dispositivos móviles, tabletas y desktop
- Breakpoints específicos: 576px, 768px, 1024px, 1200px
- Efectos hover en tarjetas con sombra sutil y elevación
- Color de texto oscuro mejorado para títulos (oklch(20% 0.01 40))
- Transiciones suaves en todos los elementos interactivos

### Cambiado
- Actualizado año de copyright a 2025
- Migración completa a sistema de colores OKLCH
- Diseño cuadrado coherente en botones, tarjetas, inputs y elementos UI
- Reducido padding del header para mejor aprovechamiento del espacio
- Optimización del sistema de grid responsive
- Mejoras en la tipografía con mejor contraste y legibilidad

### Mejorado
- Coherencia visual completa con estética geométrica/cuadrada
- Mejor experiencia de usuario en dispositivos móviles
- Contraste de colores mejorado para accesibilidad
- Animaciones más fluidas y naturales
- Sistema de variables CSS más estructurado y mantenible

### Técnico
- Implementación de variables CSS custom properties
- Sistema modular de componentes Astro
- Optimización de rendimiento en transiciones CSS
- Estructura responsive mobile-first

## [1.0.0] - 2024-12-01

### Añadido
- Versión inicial del landing page
- Componentes base: Header, Hero, Features, Products, Testimonials, FAQ, Contact, Footer
- Estilo base con sistema de colores inicial
- Estructura de proyecto Astro
- Configuración TypeScript
