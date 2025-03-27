document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("button").addEventListener("click", function() {
        alert("Thank you for your interest in joining Kasi Chess Club! Please visit our contact page for more details.");
    });

    // Handle event registration form submission
    const registrationForm = document.getElementById("registration-form");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way
        const name = this.name.value;
        const email = this.email.value;
        const selectedEvent = this.event.value;

        alert(`Thank you, ${name}! You have successfully registered for the ${selectedEvent} event. A confirmation email will be sent to ${email}.`);
        this.reset(); // Clear the form fields
    });
});
