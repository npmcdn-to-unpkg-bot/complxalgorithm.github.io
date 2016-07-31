window.onload = function() {
  document.getElementById("philobutton").onsubmit = function() {
    window.location.replace("http://stephensanders.me/philosophy/");
    return false;
  }
}
