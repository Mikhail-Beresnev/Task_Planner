var loginForm = document.getElementById('login');
var signupForm = document.getElementById('signup');

// When the user clicks anywhere outside of the login or signup form, close it
window.onclick = function (event) {
    if (event.target == loginForm) {
        loginForm.style.display = "none";
    }
    if (event.target == signupForm) {
        signupForm.style.display = "none";
    }
}