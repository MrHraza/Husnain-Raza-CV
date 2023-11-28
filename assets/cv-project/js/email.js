const btn = document.getElementById('btn-email');

document.getElementById('contact-form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_dgze89f';
        const templateID = 'Enquiry email temp';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Message';
            alert('Sent!');
            
        }, (err) => {
            btn.value = 'Send Message';
            alert(JSON.stringify(err));
        });
        
        return false;
    });
