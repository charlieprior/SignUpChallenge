// function validateEmail(email) {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }
//
// function subscribeClicked(event) {
//     // event.preventDefault();
//     const email = document.querySelector('.input').value;
//     if (!validateEmail(email)) {
//         document.querySelector('.email__error').classList.add("error");
//         document.querySelector('.input').classList.add("error");
//     } else {
//         document.querySelector('.signup').classList.add("hidden");
//         document.querySelector('.success').classList.remove("hidden");
//         document.getElementById("success__email").innerHTML = email;
//     }
// }
//
const form = document.getElementById("signup__form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("submitted");
});
//
// // const button = document.querySelector('.button');
// // button.addEventListener('click', subscribeClicked);
//
// function dismissClicked() {
//     document.querySelector('.signup').classList.remove("hidden");
//     document.querySelector('.success').classList.add("hidden");
//     document.querySelector('.email__error').classList.remove("error");
//     document.querySelector('.input').classList.remove("error");
//     document.querySelector('.signup__form').reset();
// }
