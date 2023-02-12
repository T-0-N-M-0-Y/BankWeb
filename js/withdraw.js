// Withdraw Button Works
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('user-withdraw');
    const withdraw = withdrawInput.value;
    const newWithdraw = parseFloat(withdraw);

    //Withdraw Window Works
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountTotal = withdrawAmount.innerText;
    const withdrawAmountSaved = parseFloat(withdrawAmountTotal);
    const totalAmountWithdraw = withdrawAmountSaved + newWithdraw;

    withdrawAmount.innerText = totalAmountWithdraw;

    //Main Balance Works
    const mainBalance = document.getElementById('account-amount');
    const totalMainAmount = mainBalance.innerText;
    const totalBalance = parseFloat(totalMainAmount)

    //Calculate
    const newMainBalance = totalBalance - newWithdraw;
    mainBalance.innerText = newMainBalance;


    withdrawInput.value = '';
})