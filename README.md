# Landing Page Microminimalista

Landing page optimizada con Astro.

## Inicio Rápido

```bash
npm install
npm run dev       # Desarrollo
npm run build     # Producción
```

## Arquitectura

```
src/
├── components/   # Header, Hero, Features, FAQ, etc.
├── layouts/      # Layout.astro (base)
├── pages/        # index.astro
└── styles/       # CSS modular
    ├── base.css      # Variables + reset
    ├── layout.css    # Grids + containers  
    ├── components.css # Botones + cards
    └── utilities.css  # Utilidades
```

## Stack Técnico

- **Astro 5.13.5**: SSG framework
- **CSS Vanilla**: Sin frameworks
- **System Fonts**: Sin cargas externas
- **JavaScript Vanilla**: ~2KB total

## Características

- ✅ Core Web Vitals optimizados
- ✅ CSS crítico inline
- ✅ Mobile-first responsive
- ✅ Accesibilidad WCAG 2.1 AAA
- ✅ SEO completo

## Personalización

### Colores
```css
/* base.css */
:root {
  --color-base: oklch(96% 0.01 80);
  --color-text: oklch(17% 0.00906 42.94);
  --color-primary: oklch(54.916% 0.02065 48.211);
}
```

### Contenido
```astro
<!-- Hero.astro -->
<h1>Tu <span>Producto</span> Descripción</h1>
<p>Nueva propuesta de valor...</p>
```

## Performance

| Métrica | Valor |
|---------|-------|
| **LCP** | ~1.2s |
| **FID** | ~45ms |
| **CLS** | ~0.02 |
