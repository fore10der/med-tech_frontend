import placePoint from "../functions/placePoint"

export default {
	"devices": (results,lang) => results.reduce(function (html,object) {
			return html + '<div class="col-md-3"><a href="#" class="devices__product"><div class="devices__product-preview" style="background-image: url(img/products/1.png)"><button class="devices__product-buy"><div class="devices__product-icon"></div></button></div><div class="devices__product-title">' + object.translations[lang].name + '</div><div class="devices__product-price">' + object.translations[lang].price + '<span class="currency"> ₽</span></div></a></div>'
	}, ''),
	"partners": "../db/devices.json",
	"team": "../db/devices.json",
	"offices": (results,lang) => {
			console.log(results)
			$("circle").remove();
			results.forEach(function (object) {
			placePoint(object.region,object.translations[lang].title,object.translations[lang].description)
	})
}
}