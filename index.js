function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function subscribeClicked(event) {
    event.preventDefault();
    const email = document.querySelector('.input').value;
    console.log(email);
    if (validateEmail(email) == true) {
        document.querySelector('.signup').classList.add("hidden");
        document.querySelector('.success').classList.remove("hidden");
        document.getElementById("success__email").innerHTML = email;
    }
}

function dismissClicked(event) {
    document.querySelector('.signup').classList.remove("hidden");
    document.querySelector('.success').classList.add("hidden");
    document.querySelector('.email__error').classList.remove("error");
    document.querySelector('.input').classList.remove("error");
    document.querySelector('.signup__form').reset();
}

const form = document.getElementById("signup__form");
form.addEventListener("submit", subscribeClicked);

const input = document.getElementById("signup__input");
input.onblur = function () {
    const email = document.querySelector('.input').value;
    console.log(email);
    if (validateEmail(email) == false) {
        document.querySelector('.email__error').classList.add("error");
        document.querySelector('.email__error').classList.remove("hidden");
        document.querySelector('.input').classList.add("error");
    } else {
        document.querySelector('.email__error').classList.remove("error");
        document.querySelector('.email__error').classList.add("hidden");
        document.querySelector('.input').classList.remove("error");
    }
}

// form.addEventListener('invalid', (event) => {
//     event.preventDefault();
// }, true);

const dismiss = document.getElementById("dismiss__button");
dismiss.addEventListener("click", dismissClicked);