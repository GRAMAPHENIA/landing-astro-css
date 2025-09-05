// Optimizaciones adicionales para Lighthouse 100
document.addEventListener('DOMContentLoaded', () => {
  // Lazy loading mejorado para imágenes
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    });
  }

  // Preload links importantes al hacer hover
  const importantLinks = document.querySelectorAll('a[href^="#"]');
  importantLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          // Preparar la sección para una transición suave
          target.style.willChange = 'transform';
          setTimeout(() => {
            target.style.willChange = 'auto';
          }, 1000);
        }
      }
    });
  });

  // Optimizar animaciones para dispositivos de bajo rendimiento
  if (navigator.hardwareConcurrency <= 2) {
    document.documentElement.style.setProperty('--animation-duration', '0.1s');
  }
});

// Service Worker registration para PWA (opcional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('SW registered'))
      .catch(() => console.log('SW registration failed'));
  });
}
