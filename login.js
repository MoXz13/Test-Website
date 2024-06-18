document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simulate authentication
  if (username === "Moritz" && password === "Altin") {
    // Save login state in localStorage
    localStorage.setItem("authenticated", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Falscher Benutzername oder Passwort. Bitte versuchen Sie es erneut.");
  }
});
