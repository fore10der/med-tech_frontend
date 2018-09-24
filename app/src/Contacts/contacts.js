import IMask from 'imask';

export default $(function() {
	if (document.getElementById('phone') != null){
	var phoneMask = new IMask(
  document.getElementById('phone'), {
    mask: '+0 (000) 000-00-00'
  });
}
});