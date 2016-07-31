window.onload = function() {
  document.getElementById("philo").onsubmit = function() {
    window.location.replace("http://stephensanders.me/philosophy/");
    return false;
  }
}
