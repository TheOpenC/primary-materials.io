// For the Hamburger menu
function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('active');
  document.querySelector('.overlay').classList.toggle('active');
}

// Main form submission handler
document.getElementById("contact-form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  
  const contactForm = event.target;
  const submitButton = document.getElementById("submit-btn");
  const checkmark = document.getElementById("check");

  // Form validation check
  if (!validateContactForm(contactForm)) {
    displayError(contactForm, 'Invalid input'); // Show error if validation fails
    return; // Exit if form is invalid
  }

  // Create FormData and submit to Netlify
  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      submitButton.value = "Sent"; // Update button text to "Sent"
      checkmark.style.display = "inline"; // Show the checkmark
      contactForm.reset(); // Clear form fields
    } else {
      alert('There was an issue submitting the form. Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
  }
});
