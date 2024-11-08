document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting traditionally

    // Collect data from the form
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = { username, email, password };

    // Store the data in local storage (optional)
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    // Send data to the server using AJAX (POST)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://127.0.0.1:5500/HS.html", true); // Replace with your server URL
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert("Registration successful!");
                window.location.href = "list.html"; // Redirect to data list page
            } else {
                alert("Registration failed. Please try again.");
            }
        }
    };

    xhr.send(JSON.stringify(userData));
});
