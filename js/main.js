// For the Hamburger menu
function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('active');
  document.querySelector('.overlay').classList.toggle('active');
}

// Listen for a submit event on the contact form and validate
document.getElementById("contact-form").addEventListener("submit", async (event) => {
  const contactForm = event.target;
  const submitButton = document.querySelector('#submit-btn'); // Reference to the submit button

  if (!validateContactForm(contactForm)) {
    event.preventDefault();
    displayError(contactForm, 'Invalid input');
    return; // Exit if form is invalid
  }

  event.preventDefault(); // Prevent the default form submission behavior

  const formData = new FormData(contactForm);

  // Send the form data to Netlify
  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      submitButton.value = "Sent"; // Change button text to "Sent"
      contactForm.reset(); // Clear form fields if needed
    } else {
      alert('There was an issue submitting the form. Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
  }
});



