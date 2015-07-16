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
			//growing: true,
			//select: function(e){}
		});

		var otemplate = new sap.m.StandardListItem({
			id: "Plist",
			title: "{data1>ProductName}",
			description:"{data1>CategoryID}"
		});
		var t = "{selected>/CategoryID}";
		var oFilters = [
				          new sap.ui.model.Filter(
				        		  "CategoryID", "EQ", "3"
				        )];

		list.bindAggregation("items", {
			path: "data1>/Products",
			filters: oFilters,
			template: otemplate});
		var tex = new sap.m.Text({text: t});
		var aButton = new sap.m.Button();
		aButton.setText("create new product");
		aButton.attachPress(oController.CreateEntry);
		
		var Dbutton = new sap.m.Button({
			 text: "Delete",
			 press: oController.DeleteEntry
		});
		
		var page1 = new sap.m.Page({
			title: "Products",
			enableScrolling: true,
			showNavButton: true,
			navButtonPress: function(){
				app.back();
			},
			
			content: [
			    tex,
			    aButton,
			    Dbutton,
			      list 
			      
			      
			]

		});
 		return page1;
	}


});