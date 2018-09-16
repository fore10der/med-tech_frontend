import IMask from 'imask';

export default $(function() {
	var phoneMask = new IMask(
  document.getElementById('phone'), {
    mask: '+0(000)000-00-00'
  });
});