sap.ui.controller("sapui5_xml.Category", {

	CatSelect: function(e){
		path1=e.getParameter("listItem").oBindingContexts.data1.sPath;
		var item = sap.ui.getCore().getModel('data1').getProperty(path1);
		sap.ui.getCore().getEventBus().publish("nav", "toD", {
			id: 'Products',
			context: item,
		});
	},

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf sapui5_xml.Category
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf sapui5_xml.Category
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf sapui5_xml.Category
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf sapui5_xml.Category
*/
//	onExit: function() {
//
//	}

});