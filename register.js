function registerUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User registered
        const user = userCredential.user;
        console.log("Registration successful:", user);
        alert("Registration successful!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during registration:", errorCode, errorMessage);
        alert("Registration failed: " + errorMessage);
      });
  }
  
  // Attach event listener to the registration form
  document.getElementById("registerForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    registerUser(email, password);
  });
  
