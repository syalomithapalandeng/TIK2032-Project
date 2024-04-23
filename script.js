
function toggleContent(element) {
  const content = element.nextElementSibling;
  content.style.display === 'none' ? content.style.display = 'block' : content.style.display = 'none';
}

function toggleDescription(image) {
  const description = image.nextElementSibling;
  description.style.display === 'none' ? description.style.display = 'block' : description.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle input');
  const navContent = document.querySelector('.nav-content');

  menuToggle.addEventListener('click', function() {
      navContent.classList.toggle('active');
  });


  const navLinks = document.querySelectorAll('.nav-content a');
  navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          navContent.classList.remove('active');
      });
  });

  const scrollLinks = document.querySelectorAll('.nav-content a[href^="#"]');
  scrollLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const target = document.getElementById(targetId);

          window.scrollTo({
              top: target.offsetTop,
              behavior: 'smooth'
          });
      });
  });
});