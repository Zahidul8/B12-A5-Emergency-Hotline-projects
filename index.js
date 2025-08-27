function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

document.getElementById('card-container')
.addEventListener('click', function (event) {
    if(event.target.className.includes('heart-count')){
        let heartCount = parseInt(getElement('counts-heart').innerText);
        heartCount++;
        getElement('counts-heart').innerText = heartCount;

    }
   if (event.target.className.includes('btn-call')) {
    const button = event.target;    
    const serviceSubName = button.parentNode.parentNode.children[2].innerText;
    const serviceNumber = button.parentNode.parentNode.children[3].innerText;
    let availableCoin = parseInt(getElement('available-coin').innerText);
    
    if (availableCoin < 20) {
        alert('❌ “You don’t have enough coins. You need at least 20 coins to make a call.”')
        return;
    }
    alert(`📞Calling ${serviceSubName} ${serviceNumber}...`);
    availableCoin -= 20;
    getElement('available-coin').innerText = availableCoin;
   
    
    
   }
    
})