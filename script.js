function changeBackground() {
    document.body.style.backgroundColor = '#ffe4e1';
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const apiDataDiv = document.getElementById('apiData');
        data.forEach(user => {
            const p = document.createElement('p');
            p.textContent = `${user.name} - ${user.email}`;
            apiDataDiv.appendChild(p);
        });
    });

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('formMessage');

    if (!name || !email) {
        message.textContent = 'All fields are required!';
        message.style.color = 'red';
    } else {
        message.textContent = 'Form submitted successfully!';
        message.style.color = 'green';

        const p = document.createElement('p');
        p.textContent = `${name} - ${email} (You)`;
        document.getElementById('apiData').prepend(p);
    }
});
