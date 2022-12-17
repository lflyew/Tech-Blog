const logout = async function() {
    const response = await fetch('/api/user/logout', {
        method: 'Post',
        headers: { 'Content-Type': 'application/json'},
    });

    if(response.ok) {
        document.location.replace('/');
        alert('Logged Out!')
    } else{
        alert('Please log-out again');
    }
};



document.querySelector('#logout-link').addEventListener('click', logout);