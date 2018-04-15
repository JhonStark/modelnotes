
window.addEventListener('load', initial, false);

function initial() {

  var icon = document.getElementById('icon');

  icon.addEventListener('mouseover', missile, false);
  icon.addEventListener('mouseout', restore, false);
}

function restore(){
  let icon = document.getElementById('icon').src = "./assets/missile.png";
}



function missile() {
  let icon = document.getElementById('icon').src="./assets/missile-hover.png";
}
