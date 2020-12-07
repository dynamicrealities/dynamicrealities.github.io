	$(".js-height-full").height($(window).height());
        $(".js-height-parent").each(function(){
        $(this).height($(this).parent().first().height());
    });
	function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */
		
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 50);
			}
		}        
		
		$(".stat-timer").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
	});
	$('#header').affix({
		offset: {
			top: 100,
			bottom: function() {
			return (this.bottom = $('.footer').outerHeight(true))
			}
		}
	})

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
	