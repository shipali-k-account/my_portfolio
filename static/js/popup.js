document.addEventListener("DOMContentLoaded", function () {
  
  document.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const imgUrl = this.getAttribute('href');
      document.getElementById('popup-img').src = imgUrl;
      document.getElementById('popup').style.display = 'flex';
    });
  });


  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.querySelector(".sidebar");
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  const toggleBtn = document.querySelector('.toggle-btn');
  const toggleText = toggleBtn.querySelector('.toggle-text');
  const collapse = document.getElementById('projectDetails');

  collapse.addEventListener('show.bs.collapse', () => {
    toggleText.textContent = "Hide Details";
  });

  collapse.addEventListener('hide.bs.collapse', () => {
    toggleText.textContent = "Show Details";
  });

  
  enableSliderDrag('certificatesSlider');
  enableSliderDrag('badgesSlider');


  autoSlideSlider('certificatesSlider', 1.5);
  autoSlideSlider('badgesSlider', 1.5);
});

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popup-img').src = '';
}


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
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
  });
}


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

  setInterval(slide, 50); 
}




