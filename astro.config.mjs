import { defineConfig } from 'astro/config';

export default defineConfig({
  // Optimizaciones para mejorar Core Web Vitals
  vite: {
    build: {
      // Optimización de CSS para reducir render blocking
      cssCodeSplit: true,
      // Minimizar CSS
      minify: 'esbuild',
    }
  },
  
  build: {
    // Inline CSS crítico automáticamente
    inlineStylesheets: 'auto',
  }
});