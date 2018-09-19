import api from '../configs/api'
import createTemplate from '../configs/templates.js'

 export default function loadResources(container, page_nav, direction = "default"){
	var request = {};
	switch(direction) {
  case 'prev':
  		request.page = page_nav.prev;
    break;
  case 'next':
  		request.page = page_nav.next;
    break;
  case 'reload':
  		request.page = page_nav.current;
  default:
  		request.page = 1; //Убрать на продакшене
    break;
}
	if ($(window).width() <= 768)
		request.page_size = 2;
	else request.page_size = 8;
	if (request.page == null)
		return;

	page_nav.current = request.page

	$.ajax({
		url: api[container],
	 dataType:"json",
	 data: request,
	 contentType: "application/json",
  cache: false,
	 complete: function(data){
	 								var pageContent = data.responseJSON[request.page-1].results; //правое выражение заменить на data.results
	 								var htmlToPaste = createTemplate[container](pageContent);
										$("." + container + " .row-content").html(htmlToPaste);
										page_nav.next = data.responseJSON[request.page-1].next //правое выражение заменить на data.next
										page_nav.prev = data.responseJSON[request.page-1].previous //правое выражение заменить на data.prev
         }
	})
}