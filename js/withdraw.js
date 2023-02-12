/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw total
4. calculate total withdraw amount 
4-5. set total withdraw amount
5. get the previous balance total
6. calculate new balance total
6-5: set the new balance total
7. clear the input field
*/

// How Withdraw Button Works
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('user-withdraw');
    const withdraw = withdrawInput.value;
    const newWithdraw = parseFloat(withdraw);

    withdrawInput.value = '';

    if (isNaN(newWithdrawAmount)) {
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