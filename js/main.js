
// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (menuToggle && navLinksContainer) {
  menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  const links = navLinksContainer.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('active');
    });
  });
}
// Smooth active nav highlighting
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = '';
          link.style.borderColor = 'transparent';
          link.style.background = '';
        });
        const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.style.color = 'var(--gold-light)';
          activeLink.style.borderColor = 'var(--border)';
          activeLink.style.background = 'rgba(201,162,39,0.08)';
        }
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => observer.observe(s));

  // Animate cards on scroll
  const cards = document.querySelectorAll('.service-card, .card, .pricing-card, .timeline-phase');
  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        cardObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s, border-color 0.3s, box-shadow 0.3s`;
    cardObserver.observe(card);
  });