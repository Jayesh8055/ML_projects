document.addEventListener('DOMContentLoaded', function () {
    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userList = document.getElementById('userList');

    // Display each user's data in a list item
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Username: ${user.username}, Email: ${user.email}`;
        userList.appendChild(li);
    });
});
