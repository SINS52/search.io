function toggleSearchButton() {
  const input = document.getElementById("src");
  const button = document.getElementById("searchButton");

  // Aktifkan tombol jika input tidak kosong
  button.disabled = input.value.trim() === "";
}

function toggleMenu() {
  var menu = document.querySelector('nav');
  menu.classList.toggle('active');
}