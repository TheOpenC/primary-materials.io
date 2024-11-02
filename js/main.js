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



