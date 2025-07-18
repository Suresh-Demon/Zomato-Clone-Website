function toggleSection(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector("i");
    if (content.style.display === "block") {
        content.style.display = "none";
        icon.classList.remove("open");
    } else {
        content.style.display = "block";
        icon.classList.add("open");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const users = {};
    let currentUser = null;


    const signupForm = document.querySelector("#exampleModalSign #signupForm");
    const signupNameInput = signupForm.querySelector("#fullName");
    const signupEmailInput = signupForm.querySelector("#email");
    const signupPasswordInput = signupForm.querySelector("#password");
    const termsCheckbox = signupForm.querySelector("#termsCheckbox");


    const loginForm = document.querySelector("#exampleModalLogin #signupForm");
    const loginNameInput = loginForm.querySelector("#fullName");
    const loginPasswordInput = loginForm.querySelector("#password");


    const authButton = document.getElementById("authButton");


    authButton.addEventListener("click", function () {
        if (currentUser) {
            handleLogout();
        } else {
            showLoginModal();
        }
    });


    function validateSignupForm() {
        const isNameFilled = signupNameInput.value.trim() !== "";
        const isEmailFilled = signupEmailInput.value.trim() !== "";
        const isPasswordFilled = signupPasswordInput.value.trim() !== "";
        const isTermsChecked = termsCheckbox.checked;

        return isNameFilled && isEmailFilled && isPasswordFilled && isTermsChecked;
    }

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!validateSignupForm()) {
            alert("Please fill all fields and accept the terms.");
            return;
        }

        const fullName = signupNameInput.value.trim();
        const email = signupEmailInput.value.trim();
        const password = signupPasswordInput.value.trim();

        if (users[email]) {
            alert("This email is already registered.");
        } else {
            users[email] = { fullName, password };
            alert("Account created successfully!");

            const signupModal = bootstrap.Modal.getInstance(document.getElementById("exampleModalSign"));
            signupModal.hide();

            loginNameInput.value = fullName;
            loginPasswordInput.value = password;
        }
    });


    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = loginNameInput.value.trim();
        const password = loginPasswordInput.value.trim();

        const user = Object.values(users).find((user) => user.fullName === fullName && user.password === password);

        if (user) {
            alert(`Welcome back, ${fullName}!`);
            currentUser = user;
            updateAuthButton();

            const loginModal = bootstrap.Modal.getInstance(document.getElementById("exampleModalLogin"));
            loginModal.hide();
        } else {
            alert("Invalid username or password.");
        }
    });


    function handleLogout() {
        if (currentUser) {
            alert(`Goodbye, ${currentUser.fullName}!`);
            currentUser = null;
            updateAuthButton();
        }
    }


    function showLoginModal() {
        const loginModal = new bootstrap.Modal(document.getElementById("#exampleModalLogin"));
        loginModal.show();
    }


    function updateAuthButton() {
        authButton.textContent = currentUser ? "Logout" : "Login";

    }

});


const userIcon = document.getElementById('userIcon');
const dropdown = document.getElementById('dropdown');


let buttonClickCount = 0;

function demo() {
    buttonClickCount++;

    if (buttonClickCount % 2 === 1) {
        document.body.style.background = "#333333";

    } else {
        document.body.style.background = "white";

    }
}

