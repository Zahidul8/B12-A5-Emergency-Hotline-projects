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
    const serviceName = button.parentNode.parentNode.children[1].innerText;
    const serviceSubName = button.parentNode.parentNode.children[2].innerText;
    const serviceNumber = button.parentNode.parentNode.children[3].innerText;
    let availableCoin = parseInt(getElement('available-coin').innerText);
    
    if (availableCoin < 20) {
        alert('❌ You don’t have enough coins. You need at least 20 coins to make a call.')
        return;
    }
    alert(`📞Calling ${serviceSubName} ${serviceNumber}...`);
    availableCoin -= 20;
    getElement('available-coin').innerText = availableCoin;

    const callHistoryContainer = getElement('call-history-container');
    const element = document.createElement('div');
    const time = new Date().toLocaleTimeString();
    element.innerHTML = `<div class="bg-[#FAFAFA] rounded-lg p-4 flex items-center justify-between mt-2">
                <div>
                    <h1 class=" font-semibold font-inter text-[#111111]">${serviceName}</h1>
                    <p class="text-[#5C5C5C]">${serviceNumber}</p>
                </div>
               <p class="text-[#111111]">${time}</p>

            </div>`
   
    callHistoryContainer.appendChild(element);
    
   }

   if(event.target.className.includes('btn-copy')) {
         const button = event.target;
         const serviceNumber = button.parentNode.parentNode.children[3].innerText;
         console.log(serviceNumber);
         
         alert(`Number is copied: ${serviceNumber}`);
        let copyCount = parseInt(getElement('copy-count').innerText);
        copyCount++;
        getElement('copy-count').innerText = copyCount;

        navigator.clipboard.writeText(serviceNumber);


   }
    
})

document.getElementById('btn-clear')
.addEventListener('click', function() {
    getElement('call-history-container').innerHTML = '';
})