function openNav() {
  document.getElementById("slideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("slideNav").style.width = "0";
}

// functions om theme te zetten
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}
// functions om tussen themes te switchen
function setThemeNeonDark() {
  setTheme("themeNeonDark");
}
function setThemeNeonLight() {
  setTheme("themeNeonLight");
}
// tijdens laden van pagina moet ik het gekozen thema gebruiken
(function () {
  if (localStorage.getItem("theme") === "themeNeonDark") {
    setTheme("themeNeonDark");
  } else if (localStorage.getItem("theme") === "themeNeonLight") {
    setTheme("themeNeonLight");
  }
})();
