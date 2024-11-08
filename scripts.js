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



document.addEventListener('DOMContentLoaded', function () {
  const termsCheckbox = document.getElementById('termsCheckbox');
  const createAccountBtn = document.getElementById('createAccountBtn');
  const signupForm = document.getElementById('signupForm');

  // Enable submit button only when terms checkbox is checked
  termsCheckbox.addEventListener('change', function () {
    createAccountBtn.disabled = !termsCheckbox.checked;
  });

  // Handle form submission
  signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Capture form data
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Log form data to console (Replace with your own logic for handling sign-up)
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear form fields after submission
    signupForm.reset();
    createAccountBtn.disabled = true; // Disable the button again
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('signupForm');
  const loginButton = document.getElementById('createAccountBtn');
  const fullNameInput = document.getElementById('fullName');
  const passwordInput = document.getElementById('password');

  // Enable the login button when both fields have values
  function toggleLoginButton() {
    loginButton.disabled = !(fullNameInput.value && passwordInput.value);
  }

  // Attach event listeners to check input values
  fullNameInput.addEventListener('input', toggleLoginButton);
  passwordInput.addEventListener('input', toggleLoginButton);

  // Handle form submission
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    const fullName = fullNameInput.value;
    const password = passwordInput.value;

    // Example: Log form data to console (Replace with your own logic for handling login)
    console.log('User Name:', fullName);
    console.log('Password:', password);

    // Clear form fields after submission
    loginForm.reset();
    loginButton.disabled = true; // Disable the button again
    window.location.href = "index.html";
  });
});
