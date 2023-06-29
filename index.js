function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function subscribeClicked(email) {
    if (!validateEmail(email)) {
        document.querySelector('.email__error').classList.add("error");
        document.querySelector('.input').classList.add("error");
    } else {
        document.querySelector('.signup').classList.add("hidden");
        document.querySelector('.success').classList.remove("hidden");
        document.getElementById("success__email").innerHTML = email;
    }
}

function dismissClicked() {
    document.querySelector('.signup').classList.remove("hidden");
    document.querySelector('.success').classList.add("hidden");
    document.querySelector('.email__error').classList.remove("error");
    document.querySelector('.input').classList.remove("error");
    document.querySelector('.signup__form').reset();
}