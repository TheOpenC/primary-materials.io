// For the Hamburger menu
document.getElementById("contact-form").addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = event.target;
  const checkmark = document.getElementById("check");

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      checkmark.classList.remove("hidden"); // Make the checkmark visible
      form.reset(); // Clear form fields
    } else {
      alert('There was an issue submitting the form. Please try again.');
    }
  } catch (error) {
    alert('An error occurred. Please try again.');
  }
});
