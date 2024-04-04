let clicksCounter = Number(document.querySelector('#Clicks').innerHTML);
function btnPressed(e){
    clicksCounter = clicksCounter + 1;
    clicksCounter.innerText = clicksCounter;
    document.getElementById('Clicks').textContent = `${clicksCounter}`;
}