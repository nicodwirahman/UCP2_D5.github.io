document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
        alert(alertMessage);

        // Optionally, you can reset the form after showing the alert
        form.reset();
    });
});
