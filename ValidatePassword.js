let updatePasswordFormEl = document.getElementById("updatePasswordForm");

let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");

let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");

let updateBtnEl = document.getElementById("updateBtn");

let ErrorMsg = "Required*";

let validateNewPassword = function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = ErrorMsg;
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
};

let validateConfirmPass = function() {
    let newPass = newPasswordEl.value;
    let confirmPass = confirmPasswordEl.value;
    if (newPass === confirmPass) {
        confirmPasswordErrMsgEl.textContent = "";
    } else {
        confirmPasswordErrMsgEl.textContent = "Passwords must be same";
    }
};

function toggle() {
    let newPasswordEl = document.getElementById("newPassword");
    if (newPasswordEl.type === "password") {
        newPasswordEl.type = "text";
    } else {
        newPasswordEl.type = "password";
    }
}

function toggleTwo() {
    let confirmPasswordEl = document.getElementById("confirmPassword");
    if (confirmPasswordEl.type === "password") {
        confirmPasswordEl.type = "text";
    } else {
        confirmPasswordEl.type = "password";
    }
}

newPasswordEl.addEventListener("blur", validateNewPassword);
confirmPasswordEl.addEventListener("blur", validateConfirmPass);

updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateNewPassword();
    validateConfirmPass();
});