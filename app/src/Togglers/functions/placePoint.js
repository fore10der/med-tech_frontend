import * as d3 from "d3";

export default function (regionName, title, desc) {
	var region = d3.select("#" + regionName);
	var regionParams = region.node().getBBox();
	var pointCoef = 1;
	if ($(window).width() < 768){
		pointCoef = 2;
	}
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
  default:
  		break;
	}
	var point = d3.select(".geography__map svg")
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