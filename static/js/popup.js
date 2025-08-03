document.addEventListener("DOMContentLoaded", function () {
  // View button popup logic
  document.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const imgUrl = this.getAttribute('href');
      document.getElementById('popup-img').src = imgUrl;
      document.getElementById('popup').style.display = 'flex';
    });
  });

  // Sidebar toggle
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Toggle "Show/Hide Details" text
  const toggleBtn = document.querySelector('.toggle-btn');
  const toggleText = toggleBtn.querySelector('.toggle-text');
  const collapse = document.getElementById('projectDetails');

  collapse.addEventListener('show.bs.collapse', () => {
    toggleText.textContent = "Hide Details";
  });

  collapse.addEventListener('hide.bs.collapse', () => {
    toggleText.textContent = "Show Details";
  });

  // Enable drag for sliders
  enableSliderDrag('certificatesSlider');
  enableSliderDrag('badgesSlider');

  // Enable auto-slide for sliders
  autoSlideSlider('certificatesSlider', 1.5);
  autoSlideSlider('badgesSlider', 1.5);
});

// Close popup function
function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popup-img').src = '';
}

// Slider drag scroll logic
function enableSliderDrag(sliderId) {
  const slider = document.getElementById(sliderId);
  let isDown = false;
  let startX, scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener('mouseleave', () => isDown = false);
  slider.addEventListener('mouseup', () => isDown = false);
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });
}

// Auto-slide logic
function autoSlideSlider(sliderId, speed = 2) {
  const slider = document.getElementById(sliderId);
  let scrollAmount = 0;

  function slide() {
    scrollAmount += speed;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }

  setInterval(slide, 50); // adjust interval speed here
}




