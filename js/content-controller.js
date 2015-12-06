function SubmitContactForm() {
    var subject = $('#contactform').find('#formsubject').val();
    var name = $('#contactform').find('#formname').val();
    var email = $('#contactform').find('#formreplyto').val();
    var description = $('#contactform').find('#formdescription').val();

    var message = 'Subject: ' + subject + '\n' +
        '\n' +
        'Name: ' + name +
        '\n' +
        '\n' +
        'Email: ' + email +
        '\n' +
        '\n' +
        'Description: ' + description +
        '\n';
    $.ajax({
        url: "//formspree.io/dynamicrealities@gmail.com",
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch soon!');
    ContactFormToggle();
    return false;
}

function ContactFormToggle() {
    $('#contact').modal('toggle');
    ResetContactForm();
}

function ResetContactForm() {
    document.getElementById("contactform").reset();
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});