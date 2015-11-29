function ContactFormToggle() {
    $('#contact').modal('toggle');
    ResetContactForm();
}

function ResetContactForm() {
    document.getElementById("contactform").reset();
}