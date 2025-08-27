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
   
    
})