const button = document.querySelector('.button');
button.addEventListener('click', buttonClick);

function buttonClick(event) {
    const signup = document.querySelector('.signup');
    signup.classList.toggle('hidden');
    event.preventDefault();
}