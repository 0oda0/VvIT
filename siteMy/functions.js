// Кнопка "Наверх"
document.addEventListener('DOMContentLoaded', () => {
    const scrollTop = document.querySelector('.scroll-top');
    const rootElement = document.documentElement;
   
    // Показываем кнопку при прокрутке
    window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
    scrollTop.classList.add('scroll-top--active');
    } else {
    scrollTop.classList.remove('scroll-top--active');
    }
    });
   
    // Плавный скролл вверх
    scrollTop.addEventListener('click', () => {
    const scrollToTop = () => {
    const c = rootElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
    rootElement.scrollTo(0, c - c / 8);
    requestAnimationFrame(scrollToTop);
    }
    };
    scrollToTop();
    });
   });
   
   // Прелоадер
   document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
   
    window.addEventListener('load', () => {
    preloader.classList.add('preloader--hide');
    setTimeout(() => {
    preloader.style.display = 'none';
    }, 1000);
    });
   });
   
   // Анимация при скролле
   const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('animate');
    }
    });
   });
   
   document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
   });

   // Галерея проектов с лайтбоксом
class Lightbox {
    constructor(gallerySelector, lightboxSelector) {
    this.gallery = document.querySelector(gallerySelector);
    this.lightbox = document.querySelector(lightboxSelector);
    this.currentImage = 0;
    this.images = [];
    this.init();
    }
   
    init() {
    this.images = Array.from(this.gallery.querySelectorAll('img'));
    this.lightbox.addEventListener('click', this.closeLightbox.bind(this));
    window.addEventListener('keydown', this.handleKeydown.bind(this));
    }
   
    openLightbox(index) {
    this.currentImage = index;
    this.lightbox.classList.add('lightbox--active');
    this.updateLightbox();
    }
   
    closeLightbox() {
    this.lightbox.classList.remove('lightbox--active');
    }
   
    updateLightbox() {
    const currentImg = this.images[this.currentImage];
    this.lightbox.querySelector('.lightbox__image').src = currentImg.src;
    this.lightbox.querySelector('.lightbox__title').textContent = currentImg.alt;
    }
   
    nextImage() {
    this.currentImage = (this.currentImage + 1) % this.images.length;
    this.updateLightbox();
    }
   
    prevImage() {
    this.currentImage = (this.currentImage - 1 + this.images.length) % this.images.length;
    this.updateLightbox();
    }
   
    handleKeydown(e) {
    if (this.lightbox.classList.contains('lightbox--active')) {
    switch (e.key) {
    case 'ArrowRight':
    this.nextImage();
    break;
    case 'ArrowLeft':
    this.prevImage();
    break;
    case 'Escape':
    this.closeLightbox();
    break;
    }
    }
    }
   }
   
   new Lightbox('.portfolio', '.lightbox');


   // Функция переключения темы
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;

    // Проверяем сохраненную тему
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        document.documentElement.classList.add(storedTheme);
    }

    // Обработчик переключения темы
    themeToggle.addEventListener('click', () => {
        rootElement.classList.toggle('dark-theme');
        const isDark = rootElement.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark-theme' : '');
    });
});