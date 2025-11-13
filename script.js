// Smooth scroll for anchor links
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  e.preventDefault();
  const id = a.getAttribute('href');
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// IntersectionObserver to toggle animations on scroll
const obsOptions = { root: null, rootMargin: '0px', threshold: 0.12 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, obsOptions);

document.querySelectorAll('.animate-up, .animate-left, .animate-right').forEach(el => {
  observer.observe(el);
});

// set current year
document.getElementById('year').textContent = new Date().getFullYear();

