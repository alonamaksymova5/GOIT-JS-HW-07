const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const emailValue = elements.email.value.trim();
    const passValue = elements.password.value.trim();

    if (emailValue === '' || passValue === '') {
        alert('All form fields must be filled in');
    }
    else {
        const message = {
            email: emailValue,
            password: passValue,
        };

        console.log(message);
    }

    event.currentTarget.reset();
}
