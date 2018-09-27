import * as d3 from "d3";

var hintWindow = d3.select(".geography__wrapper");
var $map = $(".geography__map");

export default function InitGeographyFeatures(){
	if (!$(".geography_type_separate").get(0) && $(".geography").get(0))
		if ($(window).width() <= 480)
			d3.select(".geography__map svg").attr("viewBox","-55 0 1900 1000");
		else
			d3.select(".geography__map svg").attr("viewBox","-55 0 1700 1000");
		$('[data-toggle="popover"]').popover({
		offset: 75,
		container: 'body',
		template: '<div class="popover geography__popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
		placement: function (context, source) {
			var position = $(source).position();
			var windowWidth = $(window).width();
				if (windowWidth > 480){
					if (position.left<windowWidth-400) {
						return "right";
					}
					else
						return "left";
				}
				else
					return "bottom";
		}
	});

	$('[data-toggle=popover]').on('click', function (e) {
   $('[data-toggle=popover]').not(this).popover('hide');
	});

	$map.on('click', function(e) {
		$('[data-toggle=popover]').popover('hide');
	}).on('click', '[data-toggle=popover]', function(e) {
    e.stopPropagation();
	});
}