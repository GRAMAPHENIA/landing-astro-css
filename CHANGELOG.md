# Changelog

Todas las modificaciones notables de este proyecto serán documentadas en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
