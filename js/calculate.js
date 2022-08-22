document.getElementById('Total-btn').addEventListener('click',function(){
    
    const mangerInput = inputFieldValue('manager-amount');
    const coachInput = inputFieldValue('coach-amount');
    const bothTotal = mangerInput+coachInput;
   setTextElementValueById('both-expense',bothTotal);

   
   const newExpenseAmount = elementValueById('player-expense');
   const amountTotal = newExpenseAmount+bothTotal;
   setTextElementValueById('total-expense',amountTotal);
})