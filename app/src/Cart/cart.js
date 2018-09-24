export default $(function() {
$(".cart__order").each(function (i,item) {
	updateValues($(item));
})
updateSum();
	$(".cart-button_less").each(bindLess);
	$(".cart-button_more").each(bindMore);
	$(".cart__params-count-value").each(bindInput);

	function bindLess() {
		var $order = $(this).parent().parent().parent().parent().parent().parent();
		var $input = $order.find(".cart__params-count-value");
		$(this).on("click",function (e) {
			e.preventDefault();
			$input.val() > 1 ? $input.val($input.val() - 1) : $input.val();
			updateValues($order);
			updateSum();
		});
	}

	function bindMore() {
		var $order = $(this).parent().parent().parent().parent().parent().parent();
		var $input = $order.find(".cart__params-count-value");
		$(this).on("click",function (e) {
			e.preventDefault();
			$input.val(+$input.val() + 1);
			updateValues($order);
			updateSum();
		});
	}

	function bindInput() {
		var $order = $(this).parent().parent().parent().parent().parent().parent();
		$(this).on('input', function () {
			updateValues($order);
			updateSum();
			$(this).on('change', function () {
			$(this).val() == '' ? $(this).val(1) : $(this).val();
			updateValues($order);
			updateSum();
		})
});
}

	function updateValues($order) {
		var $count = +$order.find(".cart__params-count-value").val();
		var $price = +$order.find(".cart__params-price_per_item").find(".value").text().replace(/\s+/g, '');
		var $total = $count*$price;
		var $totalNode = $order.find(".cart__params-price_total").find(".value");
		$totalNode.text(new Intl.NumberFormat('ru-RU').format($total));
	}

	function updateSum() {
		var sum = 0;
		$(".cart__order").each(function (i,item) {
			sum+= +$(item).find(".cart__params-price_total").find(".value").text().replace(/\s+/g, '');
		});
		$(".cart__ordering-orders-value").find(".value").text(new Intl.NumberFormat('ru-RU').format(sum));
		$(".cart__ordering-total-value").find(".value").text(new Intl.NumberFormat('ru-RU').format(sum));
	}
});