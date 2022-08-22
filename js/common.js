function inputFieldValue(inputId){
    const inputFieldPart = document.getElementById(inputId);
    const inputPart = inputFieldPart.value;
    const inputTotalValue = parseInt(inputPart);
    inputFieldPart.value = '';
    return inputTotalValue;
}

function elementValueById(elementId){
    const elementFieldPart = document.getElementById(elementId);
    const elementPart = parseInt(elementFieldPart.innerText);
    return elementPart;
}
function setTextElementValueById(elementId, newValue){
    const newText = document.getElementById(elementId);
    newText.innerText = newValue;
    
}