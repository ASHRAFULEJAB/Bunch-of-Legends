
const playerNameArr = [];

function playerDisplay(playerInfo){

    const updatePlyerName = document.getElementById('player-details')
    updatePlyerName.innerHTML ="";
     
    for(let i=0;i<playerInfo.length;i++){
        const name = playerNameArr[i].newPlayerName;
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <th>${i+1}</th>
            <td>${name}</td>
        `;
        updatePlyerName.appendChild(tr);
        
    }
    
}


function addToPlayerName(element){
  
    const newPlayerName = element.parentNode.parentNode.children[0].innerText;
    // console.log(newPlayerName);

    const playerrObj = {
        newPlayerName : newPlayerName,
    }
    playerNameArr.push(playerrObj);

    document.getElementById('new-player-added').innerText=playerNameArr.length;
    playerDisplay(playerNameArr);
    document.getElementById("myBtn").disabled = true;
}

// disbaling button

var buttons = document.getElementsByTagName('button');
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', function(event){
        event.target.disabled = true;
    });
}
document.getElementById('calculate-btn').addEventListener('click',function(){
  
    const valueInput = inputFieldValue('Amount-input');
    const playerExpenseAmount = playerNameArr.length*valueInput;


    const previousPlayerExpense  = elementValueById('player-expense');

    const newPlayerExpense = previousPlayerExpense+playerExpenseAmount;
    setTextElementValueById('player-expense',newPlayerExpense);
    
    
})
// const buttons = document.querySelectorAll('button'):
// for(const button of buttons){
//     button.disabled=true;
// }
