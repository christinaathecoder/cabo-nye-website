(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $(".title").toggleClass("open");
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

document.addEventListener("DOMContentLoaded", () => {
  const fadeElement = document.querySelector(".fade");

  if (fadeElement) {
      // Trigger animation after a delay
      setTimeout(() => {
        fadeElement.style.opacity = "1"; // Ensure it's visible
      }, 500); // Adjust delay as needed
  }
});

document.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.day-section');
  const navLinks = document.querySelectorAll('.floating-nav a');
  let activeSection = null;

  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 150 && rect.bottom >= 150) {
          activeSection = section;
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (activeSection && link.getAttribute('href').substring(1) === activeSection.id) {
          link.classList.add('active');
      }
  });
});
