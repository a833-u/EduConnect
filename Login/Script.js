document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        // Add your form submission logic here
    });
});