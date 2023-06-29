function subscribeClicked() {
    const signup = document.querySelector('.signup');
    const success = document.querySelector('.success');
    signup.classList.add("hidden");
    success.classList.remove("hidden");
}

function dismissClicked() {
    const signup = document.querySelector('.signup');
    const success = document.querySelector('.success');
    const form = document.querySelector('.signup__form');
    signup.classList.remove("hidden");
    success.classList.add("hidden");
    form.reset();
}