function subscribeClicked() {
    const signup = document.querySelector('.signup');
    const success = document.querySelector('.success');
    signup.style.display = "none";
    success.style.display = "block";
}

function dismissClicked() {
    location.reload();
}