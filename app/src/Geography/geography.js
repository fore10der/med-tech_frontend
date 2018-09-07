import * as d3 from "d3";

var hintWindow = d3.select(".geography__wrapper");
var $map = $(".geography__map");
$(function() {
	if ($(".geography__map").get(0)) {
	PlacePoint("Moscow", "lorem", "ipsum");
	PlacePoint("OrenburgOblast");
		d3.select("body")
	.on("click",function () {
		if (d3.selectAll(".geography__map-point").filter(equalToEventTarget).empty()) {
		hintWindow.classed("geography__wrapper--opened", false);
		}
		console.log("close");
	})
}
});

function equalToEventTarget() {
    return this == d3.event.target;
}

function PlacePoint(regionName, title, desc) {
	var region = d3.select("#" + regionName);
	var regionParams = region.node().getBBox();
	var epsilon = 12.825;
	var className = "geography__map-point";
	var marginX = 5;
	var correction = {
		x: 0,
		y: 0
	}
	switch (regionName) {
		case 'Moscow':
				className+=" geography__map-point_size_big";
				epsilon = 22.895;
				marginX = 10;
    break;
  case 'KhabarovskKrai':
    correction = {
					x: 60,
					y: 40
				}
    break;
  case 'YamaloNenetsAutDistrict':
  		correction = {
					x: 60,
					y: 40
				}
    break;
  case 'OrenburgOblast':
  		correction = {
					x: -30,
					y: 0
				}
    break;
  default:
  		break;
	}
	var point = d3.select(".geography__map")
	.append("foreignObject")
	.attr("y", regionParams.y+regionParams.height/2-epsilon + correction.y)
	.attr("x", regionParams.x+regionParams.width/2-epsilon + correction.x)
	.attr("class", className)
	.on("click",function () {
		console.log("open");
		hintWindow.select(".geography__map-title").text(title);
		hintWindow.select(".geography__map-desc").text(desc);
		hintWindow.classed("geography__wrapper--opened", true);
		hintWindow.attr("y", regionParams.y+regionParams.height/2-48 + correction.y)
	.attr("x", regionParams.x+regionParams.width/2+46 + marginX + correction.x)
	});


}