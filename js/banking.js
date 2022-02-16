document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // get current deposit
    const dipositTotal = document.getElementById('deposit-total');
    const dipositTotalText = dipositTotal.innerText;
    const preriousDepositTotal = parseFloat(dipositTotalText);
    dipositTotal.innerText = preriousDepositTotal + depositAmount;
    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // clear input field
    depositInput.value = '';
})
// withdraw balance

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('wihdraw-input');
    const withdrawInputText = withdrawInput.value;
    // console.log(withdrawInputText);
    const withdrawAmount = parseFloat(withdrawInputText);
    // withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    // clear input field
    withdrawInput.value = '';

})