// Vérifie si un utilisateur est déjà connecté
async function checkUser() {
  const { data, error } = await SUPA.auth.getUser();

  if (data && data.user) {
    APP_STATE.user = data.user;
    renderDashboard();
  } else {
    renderLogin();
  }
}

// Connexion
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await SUPA.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    APP_STATE.user = data.user;
    renderDashboard();
  }
}

// Inscription
async function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await SUPA.auth.signUp({
    email,
    password
  });

  if (error) {
    alert(error.message);
  } else {
    alert("Compte créé !");
  }
}

// Déconnexion
async function logout() {
  await SUPA.auth.signOut();
  APP_STATE.user = null;
  renderLogin();
}

// Lancer l'app au chargement
checkUser();