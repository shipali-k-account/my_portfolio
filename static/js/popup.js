// Show image in popup when "View" is clicked
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

// Close the popup
function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('popup-img').src = '';
}

document.getElementById('menuToggle').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('active');
});
