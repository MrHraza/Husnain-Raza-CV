function sendMail(contactForm) {
    var sendButton = contactForm.querySelector('button[type="submit"]');
    sendButton.innerText = 'Sending...';
    sendButton.disabled = true;
    

    emailjs.send('service_dgze89f', 'Enquiry email temp', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.clientMessage.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert('Thank you for your message. Husnain will contact you shortly...');
            sendButton.innerText = 'Sent';
            setTimeout(function() {
                sendButton.innerText = 'Send Message'; // Revert to original text
                sendButton.disabled = false;
            }, 10000); // Change back after 10 seconds
            
            contactForm.reset();
        },
        function(error) {
            console.log("FAILED", error);
            alert(JSON.stringify(error));
        }
    );
    return false;  // To block from loading a new page
}



