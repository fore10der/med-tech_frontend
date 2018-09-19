import initToggler from "../functions/InitToggler"

var pageNavDevices = {}

export default $(function() {
	var container = "devices";
	initToggler(container, pageNavDevices);
});