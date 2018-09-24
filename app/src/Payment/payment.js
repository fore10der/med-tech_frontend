$(function() {
	var $email = $("#payment-email");
	var emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	$email.on("change",function (e) {
		console.log(e);
		  if(!emailre.test(String(e.target.value).toLowerCase()))
    	$(this).addClass("border-danger");
    else
    	console.log("passed");
	});
});