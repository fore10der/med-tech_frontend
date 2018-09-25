import placePoint from "../functions/placePoint"

export default {
	"devices": (results) => results.reduce(function (html,object) {
			return html + '<div class="col-md-3"><a href="#" class="devices__product"><div class="devices__product-preview" style="background-image: url(img/products/1.png)"><button class="devices__product-buy"><div class="devices__product-icon"></div></button></div><div class="devices__product-title">' + object.translations.ru.name + '</div><div class="devices__product-price">' + object.translations.ru.price + '<span class="currency"> ₽</span></div></a></div>'
	}, ''),
	"partners": "../db/devices.json",
	"team": "../db/devices.json",
	"offices": (results) => {
			$("circle").remove();
			results.reduce(function (html,object) {
			placePoint(object.region,object.translations.ru.title,object.translations.ru.description)
			return html + '<div class="col-md-6 team__workers-worker"><div class="row team__workers-wrapper"><div class="team__workers-img-wrapper col-md-4"><div style="background-image: url(' + object.image + ')" class="team__workers-img"></div></div><div class="team__workers-text col-md-8"><h3 class="team__workers-title">' + object.translations.ru.title + '</h3><p class="team__workers-desc offices__office-desc">' + object.translations.ru.description + '</p><ul class="footer__contacts-list offices__contacts-list"><li class="footer__contacts-elem footer__contacts-address offices__contacts-elem"><span>Адрес</span> : ' + object.translations.ru.adress + '</li><li class="footer__contacts-elem footer__contacts-phone offices__contacts-elem"><span>Phone</span> : ' + object.phone + '</li><li class="footer__contacts-elem footer__contacts-email offices__contacts-elem"><span>Email</span> : ' + object.email + '</li></ul></div></div></div>'
	}, '')
}
}