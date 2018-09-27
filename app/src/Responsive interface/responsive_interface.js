export default $(function() {
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
 	$('#nav__icon_header').removeClass('nav__icon--opened');
  $('#nav__menu_header').removeClass('header__nav--opened');
  $('#nav-header__services-search-wrap').toggleClass('nav__services-search-wrap--opened');
  $('#nav-header__services-search').toggleClass('nav__services-search--opened');
  $('#nav-header__services-search-block').toggleClass('nav__services-search-block--opened');
 });
})