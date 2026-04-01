function renderLogin() {
  document.getElementById("app").innerHTML = `
    <h2>Connexion</h2>
    <button onclick="login()">Se connecter</button>
  `;
}

function renderDashboard() {
  document.getElementById("app").innerHTML = `
    <h2>Dashboard</h2>
    <p>Bienvenue</p>
  `;
}