// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });
  }
});

// =============================
// Mobile Dropdown Menu Toggle
// =============================
document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector('.dropbtn');
    const content = dropdown.querySelector('.dropdown-content');

    // Handle clicks on mobile
    button.addEventListener('click', e => {
      // Only toggle on small screens
      if (window.innerWidth <= 768) {
        e.preventDefault(); // prevent navigation on first tap
        content.classList.toggle('show');
      }
    });
  });
});
