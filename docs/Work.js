document.addEventListener('DOMContentLoaded', function() {
  const smoothScroll = (target) => {
      target.scrollIntoView({ behavior: 'smooth' });
  };

  // Smooth scroll for all anchor links with class 'nav-link'
  document.querySelectorAll('.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          smoothScroll(document.querySelector(this.getAttribute('href')));
      });
  });

  // Smooth scroll for all anchor links with href starting with '#'
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          smoothScroll(document.querySelector(this.getAttribute('href')));
      });
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
      document.body.classList.toggle('dark-mode');
  };

  // Event listener for dark mode toggle
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  if (darkModeToggle) {
      darkModeToggle.addEventListener('change', toggleDarkMode);
  }
});
