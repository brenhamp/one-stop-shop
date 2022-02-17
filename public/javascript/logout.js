async function logout() {

    console.log('Logout button was clicked');
    const response = await fetch('/api/user/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/login');
    } else {
        document.location.replace('/login');
    }
}

document.querySelector('#logout').addEventListener('click', logout);