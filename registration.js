document.getElementById('registration-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!username || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    alert('Registration successful!');
    window.location.href = 'login.html';
});
