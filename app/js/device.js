$(function() {
 $('.device__buy-button_more').on('click', function(e) {
 		e.preventDefault();
   $(".device__buy-value").val(+$(".device__buy-value").val() + 1);
 });
 $('.device__buy-button_less').on('click', function(e) {
 		e.preventDefault();
   $(".device__buy-value").val() > 1 ? $(".device__buy-value").val($(".device__buy-value").val() - 1) : $(".device__buy-value").val();
 });
 $('.device__gallery-img').each(function () {
 	$(this).on('click',function () {
 		$('.device__pics-choosed').attr("src",$(this).attr("src"));
 	});
 });
});