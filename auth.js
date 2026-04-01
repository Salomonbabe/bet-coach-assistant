async function checkUser() {
  const { data } = await SUPA.auth.getUser();
  
  if (data.user) {
    APP_STATE.user = data.user;
    renderDashboard();
  } else {
    renderLogin();
  }
}