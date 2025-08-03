document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const imgUrl = this.getAttribute('href');
      document.getElementById('popup-img').src = imgUrl;
      document.getElementById('popup').style.display = 'flex';
    });
  });
});


function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popup-img').src = '';
}
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
