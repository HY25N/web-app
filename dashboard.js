const user = {
    username: 'admin',
    email: 'admin@example.com',
    lastLogin: '2024-12-01'
};

document.getElementById('username').textContent = user.username;
document.getElementById('user-info').innerHTML += `
    <p>Email: ${user.email}</p>
    <p>Last login: ${user.lastLogin}</p>
`;
