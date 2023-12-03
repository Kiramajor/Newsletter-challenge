let button = document.querySelector('#btn');
let btn = document.querySelector('.btn');
let email = document.querySelector('#email');
let sucText = document.querySelector('.suc-text');
let body = document.querySelector('.main');
let success = document.querySelector('.success');

button.addEventListener('click', () => {
    success.style.display = 'block';
    body.style.display = 'none';
    sucText.innerHTML = `A confirmation email has been sent to ${email.value}. Please open it and click the button inside to confirm your subscription.`
});

btn.addEventListener('click', () => {
    success.style.display = 'none';
    body.style.display = 'block';
})