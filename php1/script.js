document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Display data
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayMessage').textContent = message;
});
