import * as d3 from "d3";

var hintWindow = d3.select(".geography__wrapper");
var $map = $(".geography__map");
var pointCoef = 1;
	if ($(window).width() < 480){
		pointCoef = 2;
	}
$(function() {
	if ($(".geography__map").get(0)) {

	/* Place ajax here with PlacePoint function*/
	PlacePoint("Moscow", "lorem", "ipsum");
	PlacePoint("PrimorskyKrai","Здарова","test");
	PlacePoint("Yakutia","Крутой филиал ашана","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non ligula quisorcidaus efficitur. Sed ex elit, ultrices et maximus consequat, porttitor a mauris. Interdum et malesuada");
	/* end of placing for ajax here*/

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
});

function PlacePoint(regionName, title, desc) {
	var region = d3.select("#" + regionName);
	var regionParams = region.node().getBBox();

	var radius = 15
	var marginX = 5;
	var correction = {
		x: 0,
		y: 0
	}
	switch (regionName) {
		case 'Moscow':
				radius=23;
	   break;
 //  case 'KhabarovskKrai':
 //    correction = {
	// 				x: 60,
	// 				y: 40
	// 			}
 //    break;
 //  case 'YamaloNenetsAutDistrict':
 //  		correction = {
	// 				x: 60,
	// 				y: 40
	// 			}
 //    break;
 //  case 'OrenburgOblast':
 //  		correction = {
	// 				x: -30,
	// 				y: 0
	// 			}
 //    break;
  default:
  		break;
	}
	var point = d3.select(".geography__map")
	.append("circle")
	.attr("r",pointCoef*radius)
	.attr("data-toggle","popover")
	.attr("title",title)
	.attr("data-content",desc)
	.attr("stroke","#666666")
	.attr("stroke-width","3")
	.attr("fill","#5da29c")
	.attr("cy", regionParams.y+regionParams.height/2)
	.attr("cx", regionParams.x+regionParams.width/2)


}