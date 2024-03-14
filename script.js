const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    };

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Successfully registered!');
            window.location.href = '/login';
        } else {
            alert('Error registering user!');
        }
    })
    .catch(error => {
        console.error(error);
    });
});
