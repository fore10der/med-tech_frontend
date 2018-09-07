$(function() {
	var $phone = $("#payment-phonenumber");
	var $email = $("#payment-email");
	var emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	$phone.on("focus",function () {
		  if(!/^\+\d*$/.test($phone.val()))
    $phone.val("+");
	})
	$phone.on("keypress",function (e) {
		  if(!/\d/.test(e.key))
    e.preventDefault();
	});
	$email.on("change",function (e) {
		console.log(e);
		  if(!emailre.test(String(e.target.value).toLowerCase()))
    	$(this).addClass("border-danger");
    else
    	console.log("passed");
	});
});