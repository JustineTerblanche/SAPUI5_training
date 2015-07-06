sap.ui.jsview("sapui5.ProductList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf sapui5.ProductList
	*/ 
	getControllerName : function() {
		return "sapui5.ProductList";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf sapui5.ProductList
	*/ 
	createContent : function(oController) {
		
		var list = new sap.m.List({
			id: "Productslist",
			mode: sap.m.ListMode.SingleSelect,
			//select: oController.
		});

		var otemplate = new sap.m.StandardListItem({
			id: "Plist",
			title: "{data2>ProductName}",
			description:"{data2>CategoryID}"
		});
		list.bindAggregation("items", {
			path: "data2>/Products", 
			template: otemplate});


		var page1 = new sap.m.Page({
			title: "Products",
			enableScrolling: true,
			showNavButton: true,
			navButtonPress: function(){
				app.back();
			},
			
			content: [
			      //new sap.m.Label({text: "{item>/CategoryID}"}),
			      list 
			      
			]

		});
 		return page1;
	}


});