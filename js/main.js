// For the Hamburger menu
function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('active');
  document.querySelector('.overlay').classList.toggle('active');
}

// listens for a submit for the contact form
document.getElementById("contact-form").addEventListener("submit", (event) =>{
  const contactForm = event.target
  if (!validateContactForm(contactForm)) {
    event.preventDefault();
    displayError(contactForm, 'Invalid input')
  }
});

// 
  document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;
    const formData = new FormData(form);

    // Send the form data to Netlify
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        alert('Your message was sent'); // Success message
        form.reset(); // Clear form fields if needed
      } else {
        alert('There was an issue submitting the form. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  });



