function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function displayError() {
    document.querySelector('.email__error').classList.add("error");
    document.querySelector('.email__error').classList.remove("hidden");
    document.querySelector('.input').classList.add("error");
}

function removeError() {
    document.querySelector('.email__error').classList.remove("error");
    document.querySelector('.email__error').classList.add("hidden");
    document.querySelector('.input').classList.remove("error");
}

function showSuccess() {
    document.querySelector('.signup').classList.add("hidden");
    document.querySelector('.success').classList.remove("hidden");
}

function hideSuccess() {
    document.querySelector('.signup').classList.remove("hidden");
    document.querySelector('.success').classList.add("hidden");
}

function subscribeClicked(event) {
    event.preventDefault();
    const email = document.querySelector('.input').value;
    console.log(email);
    if (validateEmail(email) == true) {
        removeError();
        showSuccess();
        document.getElementById("success__email").innerHTML = email;
    } else {
        displayError();
    }
}

function dismissClicked(event) {
    hideSuccess();
    document.querySelector('.signup__form').reset();
}

document.getElementById("signup__form").addEventListener("submit", subscribeClicked);

document.getElementById("signup__input").onblur = function () {
    const email = document.querySelector('.input').value;
    console.log(email);
    if (validateEmail(email) == false) {
        displayError();
    } else {
        removeError();
    }
}

document.getElementById("dismiss__button").addEventListener("click", dismissClicked);