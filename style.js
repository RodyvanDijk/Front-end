function openNav() {
  document.getElementById("slideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("slideNav").style.width = "0";
}

function dark() {
  document.cookie = theme + "=" + dark;
}

function light() {
  document.cookie = theme + "=" + light;
}
