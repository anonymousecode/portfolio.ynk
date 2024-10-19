function Validate(event) {
    event.preventDefault(); // Prevent form submission to server

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = document.getElementById('feedback').value.trim();

    // Simple email validation regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validate the form
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (feedback === '') {
        alert('Please provide your feedback.');
        return;
    }

    alert("Thank you for your message! 🧡");

    document.getElementById('feedbackForm').reset();
}
