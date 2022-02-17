async function signupFormHandler(e) {
    e.preventDefault();

    console.log('sign-up button was clicked');
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(email && password) {
        const response = await fetch('api/user', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // adding error handling - checking response
        if (response.ok) {
            console.log('success');
            document.location.replace('/homepage');
        } else {
            alert(response.statusText)
        }
    }
};

async function loginFormHandler(e) {
    e.preventDefault();

    console.log('login button was clicked');

    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    if(email && password) {
        const response = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#signUp').addEventListener('click', signupFormHandler);
document.querySelector('#logIn').addEventListener('click', loginFormHandler);