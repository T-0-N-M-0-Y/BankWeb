// step-1: add click event handler with the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {

    // step-2: get the amount inside the deposit input field
    // input field theke text pete hoile .value use korte hoy

    const depositInput = document.getElementById('user-deposit');
    
    // const deposit = depositInput.value;

    const newDeposit = depositInput.value;

    //Input k Number e Convert Korte Hobe
    const newDepositAmount = parseFloat(newDeposit);

    //step-3: get the total Deposit amount
    //Non-Input(Textarea, element) value gula paite .innerText use korte hoy

    const depositTotalElement = document.getElementById('deposit-amount');
    const oldDepositTotal = depositTotalElement.innerText;
    const oldDepositAmount = parseFloat(oldDepositTotal);

    //step 4:Number add kore Total deposit Ber korte hobe
    const currentDepositeTotal = oldDepositAmount + newDepositAmount;
    depositTotalElement.innerText = currentDepositeTotal;

    //step-5: Get Current Balance
    const mainBalance = document.getElementById('account-amount');
    const totalMainAmount = mainBalance.innerText;
    const totalBalance = parseFloat(totalMainAmount)

    //Step-6: Calculate
    const newMainBalance = totalBalance + newDepositAmount;
    mainBalance.innerText = newMainBalance;

    //step 7: Clear The Deposit inputField
    depositInput.value ='';
})
