
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

}