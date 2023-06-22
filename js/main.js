const profitBtnCalculator = document.querySelector(".btn-profit");


// 
// 


profitBtnCalculator.addEventListener('click', function(){
    const planInput = document.querySelector('.select-plan').value;
    let amountInput = document.querySelector('.amount-input').value;
    const duration = document.querySelector('.duration').value;
    const profitInput = document.querySelector('.profits');

    const percentage = planInput === 'basic'? 2 : 3;
    const dailyProfit = (percentage * amountInput) / 100;
    const monthlyProfit = planInput==='basic'? dailyProfit * 10 : dailyProfit * 20;

    if(duration === 'daily'){
        profitInput.value = '$' + dailyProfit + ' USD';
    } else {
        profitInput.value = '$' + monthlyProfit + ' USD';
    }
});
