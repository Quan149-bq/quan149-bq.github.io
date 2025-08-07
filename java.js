// Xử lý sự kiện chuyển hướng Facebook và Zalo

document.addEventListener('DOMContentLoaded', function() {
  const facebookBtn = document.getElementById('facebookBtn');
  const zaloBtn = document.getElementById('zaloBtn');

  if (facebookBtn) {
    facebookBtn.addEventListener('click', function() {
      window.open('https://www.facebook.com/share/19fZ6EAneo/', '_blank');
    });
  }
  if (zaloBtn) {
    zaloBtn.addEventListener('click', function() {
      window.open('https://zalo.me/0349966727', '_blank');
    });
  }
});
