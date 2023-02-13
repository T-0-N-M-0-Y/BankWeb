/* 
1. add event handler with the withdraw button
2. get the withdraw amount
3. clear the withdraw input field
4. get previous withdraw total
5. calculate total Withdraw amount and set it to the withdraw total element
6. get previous balance
7. calculate new balance and set it to the balance total element
*/

// How Withdraw Button Works
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('user-withdraw');
    const withdraw = withdrawInput.value;
    const newWithdraw = parseFloat(withdraw);

    withdrawInput.value = '';

    if (isNaN(newWithdraw)) {
        alert('Please provide a valid number');
        return;
    }

    //How Withdraw Window Works
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountTotal = withdrawAmount.innerText;
    const withdrawAmountSaved = parseFloat(withdrawAmountTotal);

    //How Main Balance Works
    const mainBalance = document.getElementById('account-amount');
    const totalMainAmount = mainBalance.innerText;
    const totalBalance = parseFloat(totalMainAmount)

    if (newWithdraw > totalBalance) {
        alert('Baap er bank e eto taka nai');
        return;
    }

    //Calculate Withdraw
    const totalAmountWithdraw = withdrawAmountSaved + newWithdraw;
    withdrawAmount.innerText = totalAmountWithdraw;

    //Calculate Balance
    const newMainBalance = totalBalance - newWithdraw;
    mainBalance.innerText = newMainBalance;
})