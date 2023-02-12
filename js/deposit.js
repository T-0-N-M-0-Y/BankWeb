// step-1: add click event handler with the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    console.log('Dek Amio Pari ha ha ha ha ha');

    // step-2: get the amount inside the deposit input field
    // input field theke text pete hoile .value use korte hoy
    const depositInput = document.getElementById('user-deposit');
    const deposit = depositInput.value;
    console.log(deposit);

    //step-3: get the total Deposit amount
    //Non-Input(Textarea, element) value gula paite .innerText use korte hoy
    const depositTotalElement = document.getElementById('deposit-amount');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = deposit;
})
