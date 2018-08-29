$(function() {
 $('#nav__icon_header').on('click', function(e) {
 	e.preventDefault();
 	 $('#nav-header__services-search-wrap').removeClass('nav__services-search-wrap--opened');
  	$('#nav-header__services-search').removeClass('nav__services-search--opened');
  	$('#nav-header__services-search-block').removeClass('nav__services-search-block--opened');
 		$('#nav__icon_header').toggleClass('nav__icon--opened');
   $('#nav__menu_header').toggleClass('header__nav--opened');
 });
 $('#nav-header__services-search-wrap').on('click', function(e) {
 	e.preventDefault();
 	console.log("dev");
 	$('#nav__icon_header').removeClass('nav__icon--opened');
  $('#nav__menu_header').removeClass('header__nav--opened');
  $('#nav-header__services-search-wrap').toggleClass('nav__services-search-wrap--opened');
  $('#nav-header__services-search').toggleClass('nav__services-search--opened');
  $('#nav-header__services-search-block').toggleClass('nav__services-search-block--opened');
 });
 $('#nav-slide_mob-filter').on('click', function(e) {
 	e.preventDefault();
  $('#nav-slide_mob-filter').toggleClass('nav-slide_mob-filter--opened');
  $('#devices__sort_price-wrapper').toggleClass('devices__sort_price-wrapper_mobile--opened');
 });
 $(".geography__map-point_size_medium").each(function () {
 	$(this).on("click", function () {
 		$(".geography__map-hint").removeClass("geography__map-hint--opened_to-big-point");
 		$(".geography__map-hint").addClass("geography__map-hint--opened geography__map-hint--opened_to-medium-point");
 		$(".geography__map-hint").css({
 		 'top':	$(this).css("top"),
 			'left': $(this).css("left")
 	});
 })
});
 $(".geography__map-point_size_big").each(function () {
 	$(this).on("click", function () {
 		$(".geography__map-hint").removeClass("geography__map-hint--opened_to-medium-point");
 		$(".geography__map-hint").addClass("geography__map-hint--opened geography__map-hint--opened_to-big-point");
 		$(".geography__map-hint").css({
 		 'top':	$(this).css("top"),
 			'left': $(this).css("left")
 	});
 })
});
	$(document).mouseup(function(e) 
	{
	    var container = $(".geography__map-hint");

	    // if the target of the click isn't the container nor a descendant of the container
	    if (!container.is(e.target) && container.has(e.target).length === 0) 
	    {
	        container.removeClass("geography__map-hint--opened");
	    }
	});
});