function renderDashboard() {
  document.getElementById("app").innerHTML = "<h1>Dashboard OK</h1>";
}

function renderLogin() {
  document.getElementById("app").innerHTML = "<h1>Login OK</h1>";
}

window.renderDashboard = renderDashboard;
window.renderLogin = renderLogin;