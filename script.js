function toggleSearchButton() {
  const input = document.getElementById("src");
  const button = document.getElementById("searchButton");


  button.disabled = input.value.trim() === "";
}

function toggleMenu() {
  var menu = document.querySelector('nav');
  menu.classList.toggle('active');  
}

function changeThemes() {
  var body = document.querySelector('body');
  body.classList.toggle('active');
  
  var img = document.querySelector('img'); 
  if (body.classList.contains('active')) {
    img.src = 'Blue_Archive_EN_logo.svg.png';
  } else {
    img.src = 'hoyoverse-logo-42461.png';
  } 
}


document.querySelector('button').addEventListener('click', changeThemes);


