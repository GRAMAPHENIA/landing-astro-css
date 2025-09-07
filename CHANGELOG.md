# Changelog

Todas las modificaciones notables de este proyecto serán documentadas en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
