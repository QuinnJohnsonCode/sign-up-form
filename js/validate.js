const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");

const checkPassword = function() {
    if (password.value != confirmPassword.value) {
        password.setCustomValidity("Passwords do not match");
        confirmPassword.setCustomValidity("Passwords do not match");
    } else {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
}

password.addEventListener("input", (event) => {
    checkPassword();
});

confirmPassword.addEventListener("input", (event) => {
    checkPassword();
});