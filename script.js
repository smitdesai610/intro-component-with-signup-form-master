// document.addEventListener('DOMContentLoaded', function() {
//   const form = document.querySelector('form');
//   const inputs = form.querySelectorAll('input');
//   const passwordField = document.getElementById("password");
//   const togglePasswordButton = document.querySelector(".show-password-button");
  
//   function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
//   }

//   function showError(input, message) {
//     const formField = input.closest('.input-field');
//     formField.classList.add('has-error');
//     const errorMessage = formField.querySelector('.error-message');
//     errorMessage.textContent = message;
//     togglePasswordButton.style.display = 'none';  // Hide toggle button on error
//   }

//   function clearError(input) {
//     const formField = input.closest('.input-field');
//     formField.classList.remove('has-error');
//   }

//   function validateField(input) {
//     if (input.value.trim() === '') {
//       showError(input, `${input.placeholder} cannot be empty`);
//       return false;
//     }
//     if (input.type === 'email' && !validateEmail(input.value)) {
//       showError(input, 'Looks like this is not an email');
//       return false;
//     }
//     clearError(input);
//     return true;
//   }

//   // Toggle password visibility
//   function togglePasswordVisibility() {
//     if (passwordField.type === "password") {
//       passwordField.type = "text";
//       togglePasswordButton.querySelector('i').classList.remove("fa-eye");
//       togglePasswordButton.querySelector('i').classList.add("fa-eye-slash");
//     } else {
//       passwordField.type = "password";
//       togglePasswordButton.querySelector('i').classList.remove("fa-eye-slash");
//       togglePasswordButton.querySelector('i').classList.add("fa-eye");
//     }
//   }

//   // Display show-password icon only when user types in password field
//   passwordField.addEventListener('input', function() {
//     if (passwordField.value.trim() !== '') {
//       togglePasswordButton.style.display = 'inline';  // Show the toggle button
//     } else {
//       togglePasswordButton.style.display = 'none';   // Hide the toggle button when empty
//     }
//   });

//   form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let isValid = true;
    
//     // Define formData object outside the loop
//     const formData = {};

//     inputs.forEach(input => {
//       if (!validateField(input)) {
//         isValid = false;
//       }
//       // Store input values in formData object
//       formData[input.id] = input.value.trim();
//     });

//     if (isValid) {
//       console.log('Form is valid. Submitting...');
      
//       // Store the form data in localStorage
//       localStorage.setItem('formData', JSON.stringify(formData));

//       // Uncomment the next line to actually submit the form
//       // form.submit();

//       // Retrieve and display the stored data for verification
//       const storedData = JSON.parse(localStorage.getItem('formData'));
//       console.log('Stored data:', storedData);
//     }
//   });

//   window.togglePasswordVisibility = togglePasswordVisibility;  // Expose the function globally
// });


document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input');
  const passwordField = document.getElementById("password");
  const togglePasswordButton = document.querySelector(".show-password-button");
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function showError(input, message) {
    const formField = input.closest('.input-field');
    formField.classList.add('has-error');
    const errorMessage = formField.querySelector('.error-message');
    errorMessage.textContent = message;
    togglePasswordButton.style.display = 'none';  // Hide toggle button on error
  }

  function clearError(input) {
    const formField = input.closest('.input-field');
    formField.classList.remove('has-error');
  }

  function validateField(input) {
    if (input.value.trim() === '') {
      showError(input, `${input.placeholder} cannot be empty`);
      return false;
    }
    if (input.type === 'email' && !validateEmail(input.value)) {
      showError(input, 'Looks like this is not an email');
      return false;
    }
    clearError(input);
    return true;
  }

  // Toggle password visibility
  function togglePasswordVisibility() {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      togglePasswordButton.querySelector('i').classList.remove("fa-eye");
      togglePasswordButton.querySelector('i').classList.add("fa-eye-slash");
    } else {
      passwordField.type = "password";
      togglePasswordButton.querySelector('i').classList.remove("fa-eye-slash");
      togglePasswordButton.querySelector('i').classList.add("fa-eye");
    }
  }

  // Display show-password icon only when user types in password field
  passwordField.addEventListener('input', function() {
    if (passwordField.value.trim() !== '') {
      togglePasswordButton.style.display = 'inline';  // Show the toggle button
    } else {
      togglePasswordButton.style.display = 'none';   // Hide the toggle button when empty
    }
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    // Define formData object outside the loop
    const formData = {};

    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
      // Store input values in formData object
      formData[input.id] = input.value.trim();
    });

    if (isValid) {
      console.log('Form is valid. Submitting...');
      
      // Store the form data in localStorage
      localStorage.setItem('formData', JSON.stringify(formData));

      // Clear all input fields after submission
      inputs.forEach(input => {
        input.value = '';  // Clear input values
      });

      // Hide the password toggle button after clearing the password field
      togglePasswordButton.style.display = 'none';

      // Retrieve and display the stored data for verification
      const storedData = JSON.parse(localStorage.getItem('formData'));
      console.log('Stored data:', storedData);
    }
  });

  window.togglePasswordVisibility = togglePasswordVisibility;  // Expose the function globally
});
