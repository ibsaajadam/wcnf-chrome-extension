document.getElementById("autofill").addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {
            email: document.getElementById('email').value,
            firstname: document.getElementById('first-name').value,
            lastname: document.getElementById('last-name').value,
            address1: document.getElementById('address-1').value,
            address2: document.getElementById('address-2').value,
            city: document.getElementById('city').value,
            country: document.getElementById('country').value,
            state: document.getElementById('state').value,
            zip: document.getElementById('zip').value,
            cardnumber: document.getElementById('card-number').value,
            cardname: document.getElementById('card-name').value,
            expiration: document.getElementById('expiration').value,
            cvv: document.getElementById('cvv').value,
            
        }, function (response){
            console.log(response.status)
        })
    })
})