import initToggler from "../functions/InitToggler"

var pageNavDevices = {}

export default $(function() {
	console.log("hi")
	var container = "devices";
	initToggler(container, pageNavDevices);
});