export default {
	"devices": (results) => results.reduce(function (html,object) {
			return html + '<div class="col-md-3"><a href="#" class="devices__product"><div class="devices__product-preview" style="background-image: url(img\/products\/1.png")"><button class="devices__product-buy"><div class="devices__product-icon"></div></button></div><div class="devices__product-title">' + object.translations.ru.name + '</div><div class="devices__product-price">' + object.translations.ru.price + '<span class="currency"> ₽</span></div></a></div>'
	}, ''),
	"partners": "../db/devices.json",
	"team": "../db/devices.json",
	"geography": "../db/devices.json"
}