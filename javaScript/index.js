document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const terms = document.getElementById("terms");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    clearErrors(); 

    let hasError = false;

   // Name Validation
    if (fullName.value.trim() === "") {
      showError(fullName, "Full Name Required");
      hasError = true;
    }

  // Email Validation
    if (email.value.trim() === "") {
      showError(email, " Email Required");
      hasError = true;
    } else if (!isValidEmail(email.value.trim())) {
      showError(email, "Enter a valid email address");
      hasError = true;
    }

   // Password validation
    if (password.value.trim() === "") {
      showError(password, "Password required");
      hasError = true;
    } else if (password.value.length < 8) {
      showError(password, "Password must be at least 8 characters");
      hasError = true;
    }

    if (confirmPassword.value.trim() === "") {
      showError(confirmPassword, "Please confirm your password");
      hasError = true;
    } else if (confirmPassword.value !== password.value) {
      showError(confirmPassword, "Passwords do not match");
      hasError = true;
    }

   
    if (!terms.checked) {
      showError(terms, "You must agree to the terms and conditions");
      hasError = true;
    }

    if (!hasError) {
      alert(" Submitted Successfully");
      form.submit();
    }
  });

 
  function showError(input, message) {
    const parent = input.closest("div");
    input.classList.add("is-invalid");

  
    if (!parent.querySelector(".error-msg")) {
      const error = document.createElement("div");
      error.className = "error-msg text-danger mt-1";
      error.style.fontSize = "0.9em";
      error.innerText = message;
      parent.appendChild(error);
    }
  }


  function clearErrors() {
    document.querySelectorAll(".error-msg").forEach((msg) => msg.remove());
    document.querySelectorAll(".is-invalid").forEach((el) => {
      el.classList.remove("is-invalid");
    });
  }

 
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});