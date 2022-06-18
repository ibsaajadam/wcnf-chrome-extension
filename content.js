chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        try {
            document.getElementById("checkout_email_or_phone").value = request.email
            document.getElementById("checkout_shipping_address_first_name").value = request.firstname
            document.getElementById("checkout_shipping_address_last_name").value = request.lastname
            document.getElementById("checkout_shipping_address_address1").value = request.address1
            document.getElementById("checkout_shipping_address_address2").value = request.address2
            document.getElementById("checkout_shipping_address_city").value = request.city
            document.getElementById("checkout_shipping_address_country").value = request.country
            document.getElementById("checkout_shipping_address_province").value = request.state
            document.getElementById("checkout_shipping_address_zip").value = request.zip
            document.getElementById("number").value = request.cardnumber
            document.getElementById("name").value = request.cardname
            document.getElementById("expiry").value = request.expiration
            document.getElementById("verification_value").value = request.cvv
            sendRespnse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occured!"})
        }
    }
)