document.getElementById('fetchButton').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(data => {
            displayUsers(data.data);
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

function displayUsers(users) {
    const userContainer = document.getElementById('userContainer');
    userContainer.innerHTML = '';
    
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        const avatar = document.createElement('img');
        avatar.src = user.avatar;
        avatar.alt = `${user.first_name} ${user.last_name}`;

        const name = document.createElement('p');
        name.textContent = `${user.first_name} ${user.last_name}`;

        const email = document.createElement('p');
        email.textContent = user.email;

        userCard.appendChild(avatar);
        userCard.appendChild(name);
        userCard.appendChild(email);

        userContainer.appendChild(userCard);
    });
}
