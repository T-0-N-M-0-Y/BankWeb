// step-1: add click event handler with the submit button

document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('Click Hoise Bro he he he he');

    // step-2: get the email address inside the email input field
    // input field theke text pete hoile .value use korte hoy
    const emailInput = document.getElementById('user-email');
    const email = emailInput.value;
    console.log(email);

    // step-3: get the Password inside the password input field
    const passwordInput = document.getElementById('user-password');
    const password = passwordInput.value;
    console.log(password);

    // DANGER: DO NOT VERIFY email password on the client side 
    // step-4: verify email and password and check whether valid user or not
    if(email === 'sontan@baap.com' && password === 'secret'){
        // window.location.href = 'bank.html';
        window.location.href = '109.bankWeb2.html'
    }
    else{
        // alert('Tui password vule gesos!! Toke ami teijjo sontan gosona korlam.')
        console.log('Invalid User');
    }
})