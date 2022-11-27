const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg"); //definicja zmiennych przez id

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value; 

    if (username === "student" && password === "tester") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
        loginErrorMsg.innerHTML = "Wrong login!"
    } //sprawdzanie danych logowania i wyswietlenie odpowiedniego komunikatu
})