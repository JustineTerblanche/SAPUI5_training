sap.ui.jsview("sapui5.welcome", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5.welcome
	*/ 
	getControllerName : function() {
		return "sapui5.welcome";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5.welcome
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Welcome Page",
			content: [
			new sap.m.Label({text: "welcome"})
			]
		});
	}

});