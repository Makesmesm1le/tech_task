
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const burger = document.getElementById("burger");

    if (header && burger) {
      burger.addEventListener("click", () => {
        header.classList.toggle("open");

        // для доступности
        const expanded = burger.getAttribute("aria-expanded") === "true";
        burger.setAttribute("aria-expanded", !expanded);
      });
    }
  });


const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-image');
const closeBtn = lightbox.querySelector('.close');
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');
const counter = document.getElementById('counter');

let currentIndex = 0;

// Открыть лайтбокс
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(index);
    lightbox.style.display = 'flex';
  });
});

function showImage(index) {
  lightboxImage.src = galleryImages[index].src;
  counter.textContent = `${index + 1} / ${galleryImages.length}`;
}

// Закрыть
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Переключение
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

// Закрыть по клику вне картинки
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

  document.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.style.display = "flex"; // теперь появляется
      } else {
        scrollBtn.style.display = "none";
      }
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });

  document.querySelectorAll('.lang-toggle').forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = this.closest('.lang-dropdown');
    const menu = dropdown.querySelector('.lang-menu');

    // закрываем все открытые, кроме текущего
    document.querySelectorAll('.lang-menu').forEach(m => {
      if (m !== menu) m.style.display = 'none';
    });

    // переключаем текущее
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });
});

// закрытие при клике вне меню
document.addEventListener('click', function(e) {
  if (!e.target.closest('.lang-dropdown')) {
    document.querySelectorAll('.lang-menu').forEach(m => m.style.display = 'none');
  }
});
